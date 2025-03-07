/** @type {import('next').NextConfig} */
import path from "path";

const nextConfig = {
  env: {
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
  },

  images: {
    domains: ["ai.kiut.uz"],
  },

  i18n: {
    locales: ["en", "ru", "uz"],
    defaultLocale: "en",
  },
  localePath: path.resolve("./locales/"),
};

export default nextConfig;
