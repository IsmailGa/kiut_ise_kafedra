import { getRequestConfig } from "next-intl/server";
import { notFound } from "next/navigation";
import { locales } from "./config";

export default getRequestConfig(async ({ requestLocale }) => {
  const locale = await requestLocale;
  if (!locales.includes(locale as any)) return notFound();

  return {
    messages: (await import(`@/locales/${locale}.json`)).default,
  };
});
