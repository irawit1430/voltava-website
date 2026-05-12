/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // GitHub Pages serves from /<repo-name>/ — we set this after repo creation
  // basePath: '/voltava-website',
  // assetPrefix: '/voltava-website/',
};

export default nextConfig;
