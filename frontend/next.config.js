/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,    
  swcMinify: true,           


  webpack: (config, { isServer }) => {
    if (!isServer) {
     
      config.resolve.fallback = {
        fs: false,
        stream: false,
        zlib: false,
      };
    }

    return config;
  },

 
  env: {
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000",
  },

 
  images: {
    domains: ["localhost"], 
  },
};

module.exports = nextConfig;
