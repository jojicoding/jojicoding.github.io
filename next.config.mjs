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
  // For GitHub Pages deployment with a user/organization site (username.github.io)
  // Use empty string for basePath since the site will be at the root domain
  basePath: '',
  trailingSlash: true,
  // Use empty string for assetPrefix for user/organization sites
  assetPrefix: '',
}

export default nextConfig