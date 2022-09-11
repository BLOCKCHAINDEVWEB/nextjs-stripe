/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['images.unsplash.com'],
  },
  eslint: {
    dirs: ['pages', 'utils'],
  },
}

module.exports = nextConfig
