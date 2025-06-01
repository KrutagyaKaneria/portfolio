import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'raw.githubusercontent.com',
        pathname: '/Himaanshuuuu04/**',
      },
      // Add other patterns if needed
    ],
  },
};

export default nextConfig;
