/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.alias['gzip-size'] = false;
      config.resolve.alias['fs'] = false;
      config.resolve.alias['stream'] = false;
      config.resolve.alias['zlib'] = false;
    }
    return config;
  },
};

module.exports = nextConfig;
