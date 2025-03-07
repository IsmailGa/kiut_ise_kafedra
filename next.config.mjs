/** @type {import('next').NextConfig} */
import path from "path";

const nextConfig = {
  env: {
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
  },

  images: {
    domains: ["ai.kiut.uz"],
  },
};

export default nextConfig;
