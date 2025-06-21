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
  // For Vercel deployment, you don't need these export settings
  // They're only needed for GitHub Pages
  // output: 'export',
  // distDir: 'out',
  // Use trailing slash for consistency
  trailingSlash: true,
}

export default nextConfig