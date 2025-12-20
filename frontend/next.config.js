/** @type {import('next').NextConfig} */
const nextConfig = {
  // Use the standard 'webpack' key for the --webpack engine
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        stream: false,
        zlib: false,
        path: false,
      };
    }
    return config;
  },
};

module.exports = nextConfig;
