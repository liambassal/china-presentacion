import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/china-presentacion',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
