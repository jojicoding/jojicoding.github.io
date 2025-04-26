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
  basePath: process.env.NODE_ENV === 'production' ? '/jojigames.github.io' : '',
  trailingSlash: true,
  assetPrefix: process.env.NODE_ENV === 'production' ? '/jojigames.github.io' : '',
}

export default nextConfig