/** @type {import('next').NextConfig} */ const nextConfig = { // Configuración Base reactStrictMode: true, trailingSlash: false, productionBrowserSourceMaps: false, output: 'standalone', // Para Docker

// Optimización de Imágenes images: { remotePatterns: [ { protocol: 'https', hostname: '.famestream.news', }, { protocol: 'https', hostname: '.unsplash.com', } ], formats: ['image/webp'], minimumCacheTTL: 3600, deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840], },

// Rendimiento y Caching experimental: { webpackWatchOptions: { ignored: ['/.git', '/node_modules', '**/.next'], poll: 1000 }, isrMemoryCacheSize: 0, // Usar caché de disco optimizePackageImports: [ '@heroicons/react', 'lodash-es', '@splidejs/react-splide' ], turbo: { resolveAlias: { '@/components': './components', '@/lib': './lib' } } },

// Seguridad y Headers headers: async () => [ { source: '/(.*)', headers: [ { key: 'X-Content-Type-Options', value: 'nosniff' }, { key: 'X-Frame-Options', value: 'SAMEORIGIN' }, { key: 'X-XSS-Protection', value: '1; mode=block' } ] } ],

// Internacionalización i18n: { locales: ['es-AR', 'en-US'], defaultLocale: 'es-AR', },

// Redirecciones y Rewrites async redirects() { return [ { source: '/noticias', destination: '/', permanent: true } ] },

// Webpack Customizado webpack: (config, { isServer }) => { // Optimización para paquetes grandes config.optimization.splitChunks = { ...config.optimization.splitChunks, chunks: 'all', maxSize: 256000, cacheGroups: { vendors: { test: /[\/]node_modules[\/]/, priority: -10 }, default: { minChunks: 2, priority: -20, reuseExistingChunk: true } } }

if (!isServer) {
  config.resolve.fallback = {
    ...config.resolve.fallback,
    fs: false
  }
}

return config

} }

// Análisis de Bundle (solo en desarrollo) if (process.env.ANALYZE === 'true') { const withBundleAnalyzer = require('@next/bundle-analyzer')({ enabled: true }) module.exports = withBundleAnalyzer(nextConfig) }

// Integración con Sentry (solo en producción) if (process.env.SENTRY_DSN) { const { withSentryConfig } = require('@sentry/nextjs') module.exports = withSentryConfig( nextConfig, { silent: true, org: "famestream", project: "news-platform" }, { widenClientFileUpload: true, transpileClientSDK: true, tunnelRoute: "/monitoring", hideSourceMaps: true, disableLogger: true } ) } else { module.exports = nextConfig }

