/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['upload.wikimedia.org','placehold.co'],
  }
};

module.exports = nextConfig;
