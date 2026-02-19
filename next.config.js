/** @type {import('next').NextConfig} */
const nextConfig = {
  output: process.env.STANDALONE === "true" ? "standalone" : undefined,
  reactStrictMode: true,
  images: {
    minimumCacheTTL: 2592000,
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ovasavedev8fe4a1851a.blob.core.windows.net',
      },
      {
        protocol: 'https',
        hostname: 'bnoonsa.blob.core.windows.net',
      },
      {
        protocol: 'https',
        hostname: 'bnoonsa-bjftd5h4a7bae0ce.z02.azurefd.net',
      },
    ],
  },

  async headers() {
    return [
      {
        source: '/images/:path*',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=2592000, immutable' },
        ],
      },
      {
        source: '/_next/static/:path*',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
      {
        source: '/api/health',
        headers: [
          { key: 'Cache-Control', value: 'no-cache, no-store, must-revalidate' },
        ],
      },
    ];
  },

  async redirects() {
    return [
      {
        source: "/",
        destination: "/ar",
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;
