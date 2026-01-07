/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';
const nextConfig = {
  output: 'export',
  basePath: isProd ? '/tenohira_v2' : '',
  assetPrefix: isProd ? '/tenohira_v2' : '',
  images: {
    unoptimized: true,
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: isProd ? '/tenohira_v2' : '',
  },
};

export default nextConfig;
