/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  async redirects() {
    return [
      {
        source: '/eng',
        destination: '/eng/films',
        permanent: true,
      },
      {
        source: '/spa',
        destination: '/spa/films',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
