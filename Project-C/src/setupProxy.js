import { createProxyMiddleware } from 'http-proxy-middleware';

export default function setupProxy() {
  return {
    // Configuración del proxy
    // Por ejemplo, redirige todas las solicitudes que comiencen con '/api' al backend
    // en http://localhost:8000
    middleware: function (app) {
      app.use(
        '/api',
        createProxyMiddleware({
          target: 'http://localhost:8000/api/registro',
          changeOrigin: true,
        })
      );
    },
  };
}
