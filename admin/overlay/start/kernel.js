import router from '@adonisjs/core/services/router';
import server from '@adonisjs/core/services/server';
server.errorHandler(() => import('#exceptions/handler'));
server.use([
    () => import('#middleware/ingress_middleware'),
    () => import('#middleware/container_bindings_middleware'),
    () => import('@adonisjs/cors/cors_middleware'),
    () => import('@adonisjs/vite/vite_middleware'),
    () => import('@adonisjs/inertia/inertia_middleware'),
    () => import('@adonisjs/static/static_middleware'),
    () => import('#middleware/maps_static_middleware')
]);
router.use([
    () => import('@adonisjs/core/bodyparser_middleware'),
    () => import('@adonisjs/shield/shield_middleware'),
    () => import('#middleware/compression_middleware'),
]);
export const middleware = router.named({});
//# sourceMappingURL=kernel.js.map