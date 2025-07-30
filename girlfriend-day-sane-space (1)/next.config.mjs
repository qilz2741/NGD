/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true
  },
  distDir: 'out',
  assetPrefix: process.env.NODE_ENV === 'production' ? '' : '',
  basePath: '',
  env: {
    SITE_URL: 'http://luv-u-more.duckdns.org'
  }
}

export default nextConfig
