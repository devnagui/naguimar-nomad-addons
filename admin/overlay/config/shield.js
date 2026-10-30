import { defineConfig } from '@adonisjs/shield';
import env from '#start/env';
const shieldConfig = defineConfig({
    csp: {
        enabled: false,
        directives: {},
        reportOnly: false,
    },
    csrf: {
        enabled: false,
        exceptRoutes: [],
        enableXsrfCookie: true,
        methods: ['POST', 'PUT', 'PATCH', 'DELETE'],
    },
    xFrame: {
        enabled: !env.get('NOMAD_ALLOW_IFRAME'),
        action: 'DENY',
    },
    hsts: {
        enabled: false,
        maxAge: '180 days',
    },
    contentTypeSniffing: {
        enabled: true,
    },
});
export default shieldConfig;
//# sourceMappingURL=shield.js.map