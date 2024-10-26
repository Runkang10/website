/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    staleTimes: {
      static: 30,
      dynamic: 180,
    },
  },
  images: {
    unoptimized: false
  },
  reactStrictMode: true,
};

export default nextConfig;
