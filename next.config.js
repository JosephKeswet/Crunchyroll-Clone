/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['fra1.digitaloceanspaces.com'],
    unoptimized: true,
  },
}

module.exports = nextConfig
