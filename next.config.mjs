/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/voltava-website',
  assetPrefix: '/voltava-website/',
};

export default nextConfig;
