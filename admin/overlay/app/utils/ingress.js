const INGRESS_PATH = /^\/api\/hassio_ingress\/[A-Za-z0-9_-]+$/;
export function parseIngressPath(value) {
    if (!value || !INGRESS_PATH.test(value))
        return null;
    return value;
}
export function prefixIngressUrl(url, ingressPath) {
    if (!url.startsWith('/') || url.startsWith('//') || url.startsWith(ingressPath))
        return url;
    return `${ingressPath}${url}`;
}
export function rewriteIngressHtml(html, ingressPath) {
    return html
        .replace(/(\b(?:action|href|src)=["'])(\/(?!\/)[^"']*)/gi, (_match, attribute, url) => `${attribute}${prefixIngressUrl(url, ingressPath)}`)
        .replace(/(&quot;url&quot;:&quot;)(\/(?!\/)[^&]*)/, (_match, property, url) => `${property}${prefixIngressUrl(url, ingressPath)}`);
}
//# sourceMappingURL=ingress.js.map