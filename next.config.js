/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.unsplash.com', 'tailwindui.com', 'placehold.co'],
  },
  experimental: {
    serverActions: true,
  },
}

module.exports = nextConfig
