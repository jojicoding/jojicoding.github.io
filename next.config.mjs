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
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  output: 'export',
  distDir: 'out',
  // Default basePath is fine for GitHub Pages
  trailingSlash: true,
  // Disable assetPrefix for username.github.io sites
  assetPrefix: '',
}

export default nextConfig