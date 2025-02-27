/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
  },
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "ai.kiut.uz",
      },
    ],
  },
};

export default nextConfig;
