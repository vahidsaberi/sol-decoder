/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['imagedelivery.net', 'res.cloudinary.com'],
  },
}

module.exports = nextConfig