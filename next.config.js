/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  reactStrictMode: true,
  images: { unoptimized: true },

  async redirects() {
    return [
      {
        source: "/",
        destination: "/ar",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
