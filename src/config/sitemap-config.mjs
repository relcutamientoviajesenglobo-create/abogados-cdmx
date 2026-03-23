/**
 * sitemap-config.mjs
 * Configuración para @astrojs/sitemap
 * Incluye todas las páginas conocidas con prioridades y changefreq
 *
 * Uso: Importar esta configuración en astro.config.mjs
 */

export const sitemapConfig = {
  // Dominio base
  site: 'https://abogadosencdmx.com',

  // Configuración global de sitemap
  i18n: {
    defaultLocale: 'es',
    locales: {
      es: 'es-MX'
    }
  },

  // Rutas con configuración específica
  routes: [
    // Páginas principales
    {
      url: '/',
      changefreq: 'weekly',
      priority: 1.0,
      lastmod: new Date().toISOString()
    },
    {
      url: '/sobre-nosotros/',
      changefreq: 'monthly',
      priority: 0.9,
      lastmod: new Date().toISOString()
    },
    {
      url: '/servicios/',
      changefreq: 'monthly',
      priority: 0.9,
      lastmod: new Date().toISOString()
    },
    {
      url: '/blog/',
      changefreq: 'weekly',
      priority: 0.8,
      lastmod: new Date().toISOString()
    },
    {
      url: '/contacto/',
      changefreq: 'monthly',
      priority: 0.8,
      lastmod: new Date().toISOString()
    },

    // Servicios por especialidad
    {
      url: '/servicios/derecho-familiar/',
      changefreq: 'monthly',
      priority: 0.85,
      lastmod: new Date().toISOString()
    },
    {
      url: '/servicios/derecho-penal/',
      changefreq: 'monthly',
      priority: 0.85,
      lastmod: new Date().toISOString()
    },
    {
      url: '/servicios/derecho-corporativo/',
      changefreq: 'monthly',
      priority: 0.85,
      lastmod: new Date().toISOString()
    },
    {
      url: '/servicios/derecho-inmobiliario/',
      changefreq: 'monthly',
      priority: 0.85,
      lastmod: new Date().toISOString()
    },
    {
      url: '/servicios/derecho-migratorio/',
      changefreq: 'monthly',
      priority: 0.85,
      lastmod: new Date().toISOString()
    },
    {
      url: '/servicios/derecho-laboral/',
      changefreq: 'monthly',
      priority: 0.85,
      lastmod: new Date().toISOString()
    },
    {
      url: '/servicios/derecho-civil/',
      changefreq: 'monthly',
      priority: 0.85,
      lastmod: new Date().toISOString()
    },

    // Páginas legales
    {
      url: '/politica-privacidad/',
      changefreq: 'yearly',
      priority: 0.5,
      lastmod: new Date().toISOString()
    },
    {
      url: '/terminos-condiciones/',
      changefreq: 'yearly',
      priority: 0.5,
      lastmod: new Date().toISOString()
    },
    {
      url: '/aviso-legal/',
      changefreq: 'yearly',
      priority: 0.5,
      lastmod: new Date().toISOString()
    },

    // Páginas de recursos
    {
      url: '/recursos/',
      changefreq: 'monthly',
      priority: 0.7,
      lastmod: new Date().toISOString()
    },
    {
      url: '/preguntas-frecuentes/',
      changefreq: 'monthly',
      priority: 0.7,
      lastmod: new Date().toISOString()
    }
  ]
};

/**
 * Configuración para astro.config.mjs:
 *
 * import { sitemapConfig } from './src/config/sitemap-config.mjs';
 *
 * export default defineConfig({
 *   integrations: [
 *     sitemap({
 *       site: sitemapConfig.site,
 *       i18n: sitemapConfig.i18n,
 *       // Las rutas específicas se generan automáticamente
 *       // desde el contenido dinámico (collections, pages)
 *     })
 *   ]
 * });
 */

/**
 * Prioridades SEO recomendadas:
 * 1.0   - Página de inicio
 * 0.9   - Páginas principales (sobre nosotros, servicios)
 * 0.85  - Páginas de servicios específicos
 * 0.8   - Blog y páginas dinámicas
 * 0.7   - Recursos y páginas de referencia
 * 0.5   - Páginas legales y políticas
 *
 * Frecuencia de cambio (changefreq):
 * always   - Cambia en cada visita (uso raro)
 * hourly   - Cambia cada hora
 * daily    - Cambia diariamente
 * weekly   - Cambia semanalmente (ideal para blog/noticias)
 * monthly  - Cambia mensualmente (ideal para servicios)
 * yearly   - Cambia anualmente (para páginas estáticas)
 * never    - No cambia (para archivos depreciados)
 */
