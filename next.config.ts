import type { NextConfig } from "next";

const REPO = 'landing-page'

const nextConfig: NextConfig = {
  output: 'export',
  basePath: `/${REPO}`,
  assetPrefix: `/${REPO}/`,
  trailingSlash: true,
  images: {
    unoptimized: true
  }
};

export default nextConfig;
