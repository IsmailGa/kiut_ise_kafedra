/** @type {import('next').NextConfig} */
import CreateNextPlugin from "next-intl/plugin";

const withNextIntl = CreateNextPlugin();

const nextConfig = {
  env: {
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
  },
  images: {
    domains: ["ai.kiut.uz"],
  },
};

export default withNextIntl(nextConfig);
