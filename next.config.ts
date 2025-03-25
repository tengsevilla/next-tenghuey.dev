import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here @TODO Change this*/
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'tenghuey.dev',
        port: '',
        pathname: '/**',
        search: '',
      },
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '3000',
        pathname: '/**',
        search: '',
      },
    ],
  },
};

export default nextConfig;
