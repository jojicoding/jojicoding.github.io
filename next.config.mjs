/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  output: 'export',
  distDir: 'dist',
  basePath: process.env.NODE_ENV === 'production' ? '/jojigames.github.io' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/jojigames.github.io/' : '',
  trailingSlash: true,
}

export default nextConfig
