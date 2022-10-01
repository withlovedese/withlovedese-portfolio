/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["cdn.sanity.io"],
  },
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = nextConfig;
