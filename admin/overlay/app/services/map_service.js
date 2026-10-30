import { doResumableDownloadWithRetry } from '../utils/downloads.js';
import { extract } from 'tar';
import env from '#start/env';
import { listDirectoryContentsRecursive, getFileStatsIfExists, deleteFileIfExists, getFile, ensureDirectoryExists, } from '../utils/fs.js';
import { join, resolve, sep } from 'path';
import urlJoin from 'url-join';
import { prefixIngressUrl } from '../utils/ingress.js';
import { RunDownloadJob } from '#jobs/run_download_job';
import { RunExtractPmtilesJob } from '#jobs/run_extract_pmtiles_job';
import logger from '@adonisjs/core/services/logger';
import { assertNotPrivateUrl } from '#validators/common';
import InstalledResource from '#models/installed_resource';
import { CollectionManifestService } from './collection_manifest_service.js';
import { decideSupersededDeletion } from '../utils/superseded_resource.js';
import { EXTRACT_DEFAULT_MAX_ZOOM, EXTRACT_MAX_ZOOM, EXTRACT_MIN_ZOOM, PMTILES_BINARY_PATH, WORLD_BASEMAP_FILENAME, WORLD_BASEMAP_MAX_ZOOM, WORLD_BASEMAP_SOURCE_NAME, buildPmtilesExtractArgs, } from '../../constants/map_regions.js';
import { CountriesService } from './countries_service.js';
import { execFile } from 'child_process';
import { createHash, randomBytes } from 'crypto';
import { tmpdir } from 'os';
import { promisify } from 'util';
const execFileAsync = promisify(execFile);
const DRY_RUN_TIMEOUT_MS = 60_000;
const DRY_RUN_MAX_BUFFER = 256 * 1024;
const WORLD_BASEMAP_EXTRACT_TIMEOUT_MS = 5 * 60_000;
const PROTOMAPS_BUILDS_METADATA_URL = 'https://build-metadata.protomaps.dev/builds.json';
const PROTOMAPS_BUILD_BASE_URL = 'https://build.protomaps.com';
const BASE_ASSETS_MIME_TYPES = [
    'application/gzip',
    'application/x-gzip',
    'application/octet-stream',
];
const PMTILES_ATTRIBUTION = '<a href="https://github.com/protomaps/basemaps">Protomaps</a> © <a href="https://openstreetmap.org">OpenStreetMap</a>';
const PMTILES_MIME_TYPES = ['application/vnd.pmtiles', 'application/octet-stream'];
export class MapService {
    mapStoragePath = '/storage/maps';
    baseStylesFile = 'nomad-base-styles.json';
    basemapsAssetsDir = 'basemaps-assets';
    baseAssetsTarFile = 'base-assets.tar.gz';
    baseDirPath = join(process.cwd(), this.mapStoragePath);
    baseAssetsExistCache = null;
    worldBasemapReady = false;
    worldBasemapInFlight = null;
    async listRegions() {
        const files = (await this.listAllMapStorageItems()).filter((item) => item.type === 'file' &&
            item.name.endsWith('.pmtiles') &&
            item.name !== WORLD_BASEMAP_FILENAME);
        return {
            files,
        };
    }
    async downloadBaseAssets(url) {
        const tempTarPath = join(this.baseDirPath, this.baseAssetsTarFile);
        const defaultTarFileURL = new URL(this.baseAssetsTarFile, 'https://github.com/Crosstalk-Solutions/project-nomad-maps/raw/refs/heads/master/');
        const resolvedURL = url ? new URL(url) : defaultTarFileURL;
        await doResumableDownloadWithRetry({
            url: resolvedURL.toString(),
            filepath: tempTarPath,
            timeout: 30000,
            max_retries: 2,
            allowedMimeTypes: BASE_ASSETS_MIME_TYPES,
            onAttemptError(error, attempt) {
                console.error(`Attempt ${attempt} to download tar file failed: ${error.message}`);
            },
        });
        const tarFileBuffer = await getFileStatsIfExists(tempTarPath);
        if (!tarFileBuffer) {
            throw new Error(`Failed to download tar file`);
        }
        await extract({
            cwd: join(process.cwd(), this.mapStoragePath),
            file: tempTarPath,
            strip: 1,
        });
        await deleteFileIfExists(tempTarPath);
        this.baseAssetsExistCache = true;
        return true;
    }
    async downloadCollection(slug) {
        const manifestService = new CollectionManifestService();
        const spec = await manifestService.getSpecWithFallback('maps');
        if (!spec)
            return null;
        const collection = spec.collections.find((c) => c.slug === slug);
        if (!collection)
            return null;
        const installed = await InstalledResource.query().where('resource_type', 'map');
        const installedIds = new Set(installed.map((r) => r.resource_id));
        const toDownload = collection.resources.filter((r) => !installedIds.has(r.id));
        if (toDownload.length === 0)
            return null;
        const downloadFilenames = [];
        for (const resource of toDownload) {
            try {
                assertNotPrivateUrl(resource.url);
            }
            catch {
                logger.warn(`[MapService] Blocked download from private/loopback URL: ${resource.url}`);
                continue;
            }
            const existing = await RunDownloadJob.getActiveByUrl(resource.url);
            if (existing) {
                logger.warn(`[MapService] Download already in progress for URL ${resource.url}, skipping.`);
                continue;
            }
            const filename = resource.url.split('/').pop();
            if (!filename) {
                logger.warn(`[MapService] Could not determine filename from URL ${resource.url}, skipping.`);
                continue;
            }
            downloadFilenames.push(filename);
            const filepath = join(process.cwd(), this.mapStoragePath, 'pmtiles', filename);
            await RunDownloadJob.dispatch({
                url: resource.url,
                filepath,
                timeout: 30000,
                allowedMimeTypes: PMTILES_MIME_TYPES,
                forceNew: true,
                filetype: 'map',
                title: resource.title || undefined,
                resourceMetadata: {
                    resource_id: resource.id,
                    version: resource.version,
                    collection_ref: slug,
                },
            });
        }
        return downloadFilenames.length > 0 ? downloadFilenames : null;
    }
    async downloadRemoteSuccessCallback(urls, _) {
        for (const url of urls) {
            const filename = url.split('/').pop();
            if (!filename)
                continue;
            const parsed = CollectionManifestService.parseMapFilename(filename);
            if (!parsed)
                continue;
            const pmtilesDir = join(process.cwd(), this.mapStoragePath, 'pmtiles');
            const filepath = join(pmtilesDir, filename);
            const stats = await getFileStatsIfExists(filepath);
            try {
                const prior = await InstalledResource.query()
                    .where('resource_id', parsed.resource_id)
                    .where('resource_type', 'map')
                    .first();
                const { DateTime } = await import('luxon');
                await InstalledResource.updateOrCreate({ resource_id: parsed.resource_id, resource_type: 'map' }, {
                    version: parsed.version,
                    url: url,
                    file_path: filepath,
                    file_size_bytes: stats ? Number(stats.size) : null,
                    installed_at: DateTime.now(),
                });
                logger.info(`[MapService] Created InstalledResource entry for: ${parsed.resource_id}`);
                const decision = decideSupersededDeletion({
                    existing: prior ? { file_path: prior.file_path, version: prior.version } : null,
                    newFilePath: filepath,
                    newVersion: parsed.version,
                    newFileExists: !!stats,
                    storageBaseDir: pmtilesDir,
                });
                if (decision.delete && decision.path) {
                    try {
                        await deleteFileIfExists(decision.path);
                        logger.info(`[MapService] Removed superseded ${parsed.resource_id} file: ${decision.path}`);
                    }
                    catch (err) {
                        logger.warn(`[MapService] Failed to remove superseded file ${decision.path}:`, err);
                    }
                }
                else if (decision.reason !== 'first_install' && decision.reason !== 'same_file') {
                    logger.info(`[MapService] Kept prior ${parsed.resource_id} file (reason: ${decision.reason})`);
                }
            }
            catch (error) {
                logger.error(`[MapService] Failed to create InstalledResource for ${filename}:`, error);
            }
        }
    }
    async downloadRemote(url) {
        const parsed = new URL(url);
        if (!parsed.pathname.endsWith('.pmtiles')) {
            throw new Error(`Invalid PMTiles file URL: ${url}. URL must end with .pmtiles`);
        }
        const existing = await RunDownloadJob.getActiveByUrl(url);
        if (existing) {
            throw new Error(`Download already in progress for URL ${url}`);
        }
        const filename = url.split('/').pop();
        if (!filename) {
            throw new Error('Could not determine filename from URL');
        }
        const filepath = join(process.cwd(), this.mapStoragePath, 'pmtiles', filename);
        const baseAssetsExist = await this.ensureBaseAssets();
        if (!baseAssetsExist) {
            throw new Error('Base map assets are missing and could not be downloaded. Please check your connection and try again.');
        }
        const parsedFilename = CollectionManifestService.parseMapFilename(filename);
        const resourceMetadata = parsedFilename
            ? { resource_id: parsedFilename.resource_id, version: parsedFilename.version, collection_ref: null }
            : undefined;
        const result = await RunDownloadJob.dispatch({
            url,
            filepath,
            timeout: 30000,
            allowedMimeTypes: PMTILES_MIME_TYPES,
            forceNew: true,
            filetype: 'map',
            resourceMetadata,
        });
        if (!result.job) {
            throw new Error('Failed to dispatch download job');
        }
        logger.info(`[MapService] Dispatched download job ${result.job.id} for URL ${url}`);
        return {
            filename,
            jobId: result.job?.id,
        };
    }
    async downloadRemotePreflight(url) {
        try {
            assertNotPrivateUrl(url);
            const parsed = new URL(url);
            if (!parsed.pathname.endsWith('.pmtiles')) {
                throw new Error(`Invalid PMTiles file URL: ${url}. URL must end with .pmtiles`);
            }
            const filename = url.split('/').pop();
            if (!filename) {
                throw new Error('Could not determine filename from URL');
            }
            const { default: axios } = await import('axios');
            const response = await axios.head(url);
            if (response.status !== 200) {
                throw new Error(`Failed to fetch file info: ${response.status} ${response.statusText}`);
            }
            const contentLength = response.headers['content-length'];
            const size = contentLength ? parseInt(contentLength.toString(), 10) : 0;
            return { filename, size };
        }
        catch (error) {
            logger.error({ err: error }, '[MapService] Preflight check failed for URL');
            return { message: 'Preflight check failed. Please verify the URL is valid and accessible.' };
        }
    }
    async generateStylesJSON(host = null, protocol = 'http', ingressPath = '') {
        if (!(await this.checkBaseAssetsExist())) {
            throw new Error('Base map assets are missing from storage/maps');
        }
        const baseStylePath = join(this.baseDirPath, this.baseStylesFile);
        const baseStyle = await getFile(baseStylePath, 'string');
        if (!baseStyle) {
            throw new Error('Base styles file not found in storage/maps');
        }
        const rawStyles = JSON.parse(baseStyle.toString());
        const regions = (await this.listRegions()).files;
        const sources = this.generateSourcesArray(host, regions, protocol, ingressPath);
        const baseUrl = this.getPublicFileBaseUrl(host, this.basemapsAssetsDir, protocol, ingressPath);
        const styles = await this.generateStylesFile(rawStyles, sources, urlJoin(baseUrl, 'sprites/v4/light'), urlJoin(baseUrl, 'fonts/{fontstack}/{range}.pbf'));
        return styles;
    }
    async listCuratedCollections() {
        const manifestService = new CollectionManifestService();
        return manifestService.getMapCollectionsWithStatus();
    }
    async fetchLatestCollections() {
        const manifestService = new CollectionManifestService();
        return manifestService.fetchAndCacheSpec('maps');
    }
    async ensureBaseAssets() {
        if (!(await this.ensureBaseAssetFiles()))
            return false;
        try {
            await this.ensureWorldBasemap();
        }
        catch (err) {
            logger.warn(`[MapService] World basemap setup failed, continuing without it: ${err}`);
        }
        return true;
    }
    async checkWorldBasemapExists() {
        const basePath = resolve(join(this.baseDirPath, 'pmtiles'));
        const filepath = resolve(join(basePath, WORLD_BASEMAP_FILENAME));
        if (!filepath.startsWith(basePath + sep))
            return false;
        const stats = await getFileStatsIfExists(filepath);
        const exists = !!stats && Number(stats.size) > 0;
        if (exists)
            this.worldBasemapReady = true;
        return exists;
    }
    async provisionWorldBasemap() {
        if (!(await this.ensureBaseAssetFiles()))
            return false;
        await this.ensureWorldBasemap();
        return this.checkWorldBasemapExists();
    }
    async ensureWorldBasemap() {
        if (this.worldBasemapReady)
            return;
        if (this.worldBasemapInFlight)
            return this.worldBasemapInFlight;
        this.worldBasemapInFlight = this._setupWorldBasemap().finally(() => {
            this.worldBasemapInFlight = null;
        });
        return this.worldBasemapInFlight;
    }
    async ensureBaseAssetFiles() {
        const exists = await this.checkBaseAssetsExist();
        if (exists)
            return true;
        return this.downloadBaseAssets();
    }
    async _setupWorldBasemap() {
        const basePath = resolve(join(this.baseDirPath, 'pmtiles'));
        const filepath = resolve(join(basePath, WORLD_BASEMAP_FILENAME));
        if (!filepath.startsWith(basePath + sep)) {
            throw new Error('Invalid world basemap path');
        }
        await ensureDirectoryExists(basePath);
        const existing = await getFileStatsIfExists(filepath);
        if (existing && Number(existing.size) > 0) {
            this.worldBasemapReady = true;
            return;
        }
        const info = await this.getGlobalMapInfo();
        const args = buildPmtilesExtractArgs({
            sourceUrl: info.url,
            outputFilepath: filepath,
            maxzoom: WORLD_BASEMAP_MAX_ZOOM,
            downloadThreads: 4,
        });
        logger.info(`[MapService] Extracting world basemap (z0-${WORLD_BASEMAP_MAX_ZOOM}) from ${info.url}`);
        try {
            await execFileAsync(PMTILES_BINARY_PATH, args, {
                timeout: WORLD_BASEMAP_EXTRACT_TIMEOUT_MS,
                maxBuffer: DRY_RUN_MAX_BUFFER,
            });
            this.worldBasemapReady = true;
        }
        catch (err) {
            await deleteFileIfExists(filepath);
            throw new Error(`pmtiles extract for world basemap failed: ${err.message}. stderr: ${err.stderr ?? ''}`);
        }
    }
    async checkBaseAssetsExist(useCache = true) {
        if (useCache && this.baseAssetsExistCache !== null) {
            return this.baseAssetsExistCache;
        }
        await ensureDirectoryExists(this.baseDirPath);
        const baseStylePath = join(this.baseDirPath, this.baseStylesFile);
        const basemapsAssetsPath = join(this.baseDirPath, this.basemapsAssetsDir);
        const [baseStyleExists, basemapsAssetsExists] = await Promise.all([
            getFileStatsIfExists(baseStylePath),
            getFileStatsIfExists(basemapsAssetsPath),
        ]);
        const exists = !!baseStyleExists && !!basemapsAssetsExists;
        this.baseAssetsExistCache = exists;
        return exists;
    }
    async listAllMapStorageItems() {
        await ensureDirectoryExists(this.baseDirPath);
        return await listDirectoryContentsRecursive(this.baseDirPath);
    }
    static compareMapVersions(a, b) {
        if (a === b)
            return 0;
        if (a === null)
            return -1;
        if (b === null)
            return 1;
        return a < b ? -1 : 1;
    }
    generateSourcesArray(host, regions, protocol = 'http', ingressPath = '') {
        const sources = [];
        const baseUrl = this.getPublicFileBaseUrl(host, 'pmtiles', protocol, ingressPath);
        if (this.worldBasemapReady) {
            const worldSource = {};
            worldSource[WORLD_BASEMAP_SOURCE_NAME] = {
                type: 'vector',
                attribution: PMTILES_ATTRIBUTION,
                url: `pmtiles://${urlJoin(baseUrl, WORLD_BASEMAP_FILENAME)}`,
            };
            sources.push(worldSource);
        }
        const bestByRegion = new Map();
        for (const region of regions) {
            if (region.type === 'file' && region.name.endsWith('.pmtiles')) {
                const parsed = CollectionManifestService.parseMapFilename(region.name);
                const regionName = parsed ? parsed.resource_id : region.name.replace('.pmtiles', '');
                const version = parsed?.version ?? null;
                const existing = bestByRegion.get(regionName);
                if (!existing || MapService.compareMapVersions(version, existing.version) > 0) {
                    if (existing) {
                        logger.warn(`[MapService] Duplicate map region "${regionName}": using "${region.name}" over "${existing.region.name}" (keeping newest)`);
                    }
                    bestByRegion.set(regionName, { region, version });
                }
                else {
                    logger.warn(`[MapService] Duplicate map region "${regionName}": skipping "${region.name}" in favor of "${existing.region.name}" (keeping newest)`);
                }
            }
        }
        for (const [regionName, { region }] of bestByRegion) {
            const source = {};
            const sourceUrl = urlJoin(baseUrl, region.name);
            source[regionName] = {
                type: 'vector',
                attribution: PMTILES_ATTRIBUTION,
                url: `pmtiles://${sourceUrl}`,
            };
            sources.push(source);
        }
        return sources;
    }
    async generateStylesFile(template, sources, sprites, glyphs) {
        const layersTemplates = template.layers.filter((layer) => layer.source);
        const withoutSources = template.layers.filter((layer) => !layer.source);
        template.sources = {};
        template.layers = [...withoutSources];
        for (const source of sources) {
            for (const layerTemplate of layersTemplates) {
                const layer = {
                    ...layerTemplate,
                    id: `${layerTemplate.id}-${Object.keys(source)[0]}`,
                    type: layerTemplate.type,
                    source: Object.keys(source)[0],
                };
                template.layers.push(layer);
            }
            template.sources = Object.assign(template.sources, source);
        }
        template.sprite = sprites;
        template.glyphs = glyphs;
        return template;
    }
    async getGlobalMapInfo() {
        const { default: axios } = await import('axios');
        const response = await axios.get(PROTOMAPS_BUILDS_METADATA_URL, { timeout: 15000 });
        const builds = response.data;
        if (!builds || builds.length === 0) {
            throw new Error('No protomaps builds found');
        }
        const sorted = builds.sort((a, b) => b.key.localeCompare(a.key));
        const latest = sorted[0];
        const dateStr = latest.key.replace('.pmtiles', '');
        const date = `${dateStr.slice(0, 4)}-${dateStr.slice(4, 6)}-${dateStr.slice(6, 8)}`;
        return {
            url: `${PROTOMAPS_BUILD_BASE_URL}/${latest.key}`,
            date,
            size: latest.size,
            key: latest.key,
        };
    }
    async downloadGlobalMap() {
        const info = await this.getGlobalMapInfo();
        const existing = await RunDownloadJob.getByUrl(info.url);
        if (existing) {
            throw new Error(`Download already in progress for URL ${info.url}`);
        }
        const basePath = resolve(join(this.baseDirPath, 'pmtiles'));
        const filepath = resolve(join(basePath, info.key));
        if (!filepath.startsWith(basePath + sep)) {
            throw new Error('Invalid filename');
        }
        const baseAssetsExist = await this.ensureBaseAssets();
        if (!baseAssetsExist) {
            throw new Error('Base map assets are missing and could not be downloaded. Please check your connection and try again.');
        }
        const result = await RunDownloadJob.dispatch({
            url: info.url,
            filepath,
            timeout: 30000,
            allowedMimeTypes: PMTILES_MIME_TYPES,
            forceNew: false,
            filetype: 'map',
        });
        if (!result.job) {
            throw new Error('Failed to dispatch download job');
        }
        logger.info(`[MapService] Dispatched global map download job ${result.job.id}`);
        return {
            filename: info.key,
            jobId: result.job?.id,
        };
    }
    async listCountries() {
        return CountriesService.getInstance().list();
    }
    async listCountryGroups() {
        return CountriesService.getInstance().listGroups();
    }
    async extractPreflight(params) {
        this.validateMaxzoom(params.maxzoom);
        const countries = await CountriesService.getInstance().resolveCodes(params.countries);
        const regionFilepath = await CountriesService.getInstance().writeRegionFile(countries);
        const info = await this.getGlobalMapInfo();
        return this.runDryRun(info, regionFilepath, params.maxzoom);
    }
    async runDryRun(info, regionFilepath, maxzoom) {
        const dryRunOutput = join(tmpdir(), `pmtiles-dry-run-${randomBytes(6).toString('hex')}.pmtiles`);
        const args = buildPmtilesExtractArgs({
            sourceUrl: info.url,
            outputFilepath: dryRunOutput,
            regionFilepath,
            maxzoom,
            dryRun: true,
        });
        let stdout = '';
        let stderr = '';
        try {
            const result = await execFileAsync(PMTILES_BINARY_PATH, args, {
                timeout: DRY_RUN_TIMEOUT_MS,
                maxBuffer: DRY_RUN_MAX_BUFFER,
            });
            stdout = result.stdout;
            stderr = result.stderr;
        }
        catch (err) {
            throw new Error(`pmtiles extract --dry-run failed: ${err.message}. stderr: ${err.stderr ?? ''}`);
        }
        const parsed = this.parseDryRunOutput(stdout + '\n' + stderr);
        return {
            tiles: parsed.tiles,
            bytes: parsed.bytes,
            source: { url: info.url, date: info.date, key: info.key },
        };
    }
    async extractRegion(params) {
        this.validateMaxzoom(params.maxzoom);
        const countriesService = CountriesService.getInstance();
        const countries = await countriesService.resolveCodes(params.countries);
        const regionFilepath = await countriesService.writeRegionFile(countries);
        const maxzoom = params.maxzoom ?? EXTRACT_DEFAULT_MAX_ZOOM;
        const [baseAssetsExist, info, groups] = await Promise.all([
            this.ensureBaseAssets(),
            this.getGlobalMapInfo(),
            countriesService.listGroups(),
        ]);
        if (!baseAssetsExist) {
            throw new Error('Base map assets are missing and could not be downloaded. Please check your connection and try again.');
        }
        const groupMatch = findExactGroupMatch(countries, groups);
        const slug = this.buildRegionSlug(countries, groupMatch);
        const dateSlug = info.key.replace('.pmtiles', '');
        const filename = `${slug}_${dateSlug}_z${maxzoom}.pmtiles`;
        const basePath = resolve(join(this.baseDirPath, 'pmtiles'));
        const filepath = resolve(join(basePath, filename));
        if (!filepath.startsWith(basePath + sep)) {
            throw new Error('Invalid filename');
        }
        let estimatedBytes = params.estimatedBytes ?? 0;
        if (estimatedBytes === 0) {
            try {
                const preflight = await this.runDryRun(info, regionFilepath, maxzoom);
                estimatedBytes = preflight.bytes;
            }
            catch (err) {
                logger.warn(`[MapService] extractRegion preflight failed, proceeding without estimate: ${err}`);
            }
        }
        const title = params.label ?? this.buildRegionTitle(countries, groupMatch);
        const result = await RunExtractPmtilesJob.dispatch({
            sourceUrl: info.url,
            outputFilepath: filepath,
            regionFilepath,
            maxzoom,
            estimatedBytes,
            filetype: 'map',
            title,
            resourceMetadata: {
                resource_id: slug,
                version: dateSlug,
                collection_ref: null,
            },
        });
        if (!result.job) {
            throw new Error('Failed to dispatch extract job');
        }
        logger.info(`[MapService] Dispatched extract job ${result.job.id} for ${filename} ` +
            `(countries=[${countries.join(',')}] maxzoom=${maxzoom} est=${estimatedBytes} bytes)`);
        return {
            filename,
            jobId: result.job.id,
        };
    }
    buildRegionSlug(countries, groupMatch) {
        if (groupMatch)
            return groupMatch.id;
        if (countries.length === 1)
            return countries[0].toLowerCase();
        const hash = createHash('sha1').update(countries.join(',')).digest('hex').slice(0, 8);
        return `custom-${hash}`;
    }
    buildRegionTitle(countries, groupMatch) {
        if (groupMatch)
            return groupMatch.name;
        if (countries.length === 1)
            return countries[0];
        if (countries.length <= 3)
            return countries.join(', ');
        return `${countries.slice(0, 2).join(', ')} +${countries.length - 2} more`;
    }
    validateMaxzoom(maxzoom) {
        if (typeof maxzoom !== 'number')
            return;
        if (!Number.isInteger(maxzoom) ||
            maxzoom < EXTRACT_MIN_ZOOM ||
            maxzoom > EXTRACT_MAX_ZOOM) {
            throw new Error(`maxzoom must be an integer in [${EXTRACT_MIN_ZOOM}, ${EXTRACT_MAX_ZOOM}]`);
        }
    }
    parseDryRunOutput(output) {
        let bytes = 0;
        let tiles = 0;
        const byteLine = output.match(/archive\s+size\s+of\s+([\d,.]+)\s*(B|KB|MB|GB|TB|bytes?)?/i);
        if (byteLine) {
            const raw = parseFloat(byteLine[1].replace(/,/g, ''));
            const unit = (byteLine[2] ?? 'B').toUpperCase();
            const multipliers = {
                B: 1,
                BYTE: 1,
                BYTES: 1,
                KB: 1_000,
                MB: 1_000_000,
                GB: 1_000_000_000,
                TB: 1_000_000_000_000,
            };
            bytes = Math.round(raw * (multipliers[unit] ?? 1));
        }
        const tileLine = output.match(/(?:tiles\s+to\s+extract|tiles)[^\d]*([\d,]+)/i);
        if (tileLine) {
            tiles = parseInt(tileLine[1].replace(/,/g, ''), 10) || 0;
        }
        return { tiles, bytes };
    }
    async delete(file) {
        let fileName = file;
        if (!fileName.endsWith('.pmtiles')) {
            fileName += '.pmtiles';
        }
        if (fileName === WORLD_BASEMAP_FILENAME) {
            throw new Error('The world basemap cannot be deleted');
        }
        const basePath = resolve(join(this.baseDirPath, 'pmtiles'));
        const fullPath = resolve(join(basePath, fileName));
        if (!fullPath.startsWith(basePath + sep)) {
            throw new Error('Invalid filename');
        }
        const exists = await getFileStatsIfExists(fullPath);
        if (!exists) {
            throw new Error('not_found');
        }
        await deleteFileIfExists(fullPath);
        const parsed = CollectionManifestService.parseMapFilename(fileName);
        if (parsed) {
            await InstalledResource.query()
                .where('resource_id', parsed.resource_id)
                .where('resource_type', 'map')
                .delete();
            logger.info(`[MapService] Deleted InstalledResource entry for: ${parsed.resource_id}`);
        }
    }
    getPublicFileBaseUrl(specifiedHost, childPath, protocol = 'http', ingressPath = '') {
        function getHost() {
            try {
                const localUrlRaw = env.get('URL');
                if (!localUrlRaw)
                    return 'localhost';
                const localUrl = new URL(localUrlRaw);
                return localUrl.host;
            }
            catch (error) {
                return 'localhost';
            }
        }
        function specifiedHostOrDefault() {
            if (specifiedHost === null) {
                return getHost();
            }
            try {
                const specifiedUrl = new URL(specifiedHost);
                if (specifiedUrl.host)
                    return specifiedUrl.host;
            }
            catch { }
            try {
                const specifiedUrl = new URL(`http://${specifiedHost}`);
                if (specifiedUrl.host)
                    return specifiedUrl.host;
            }
            catch { }
            return getHost();
        }
        const host = specifiedHostOrDefault();
        const withProtocol = `${protocol}://${host}`;
        const unprefixedPath = process.env.NODE_ENV === 'production' ? childPath : urlJoin(this.mapStoragePath, childPath);
        const baseUrlPath = prefixIngressUrl(`/${unprefixedPath.replace(/^\/+/, '')}`, ingressPath);
        const baseUrl = new URL(baseUrlPath, withProtocol).toString();
        return baseUrl;
    }
}
function findExactGroupMatch(countries, groups) {
    return (groups.find((g) => g.countries.length === countries.length &&
        g.countries.every((c, i) => c === countries[i])) ?? null);
}
//# sourceMappingURL=map_service.js.map