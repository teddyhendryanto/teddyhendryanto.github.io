import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export', // Required for static export
  images: {
    unoptimized: true, // GitHub Pages does not support Image Optimization
  },
};

export default nextConfig;
