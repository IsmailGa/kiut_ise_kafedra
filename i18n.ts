import { getRequestConfig } from "next-intl/server";
import { redirect } from "next/navigation";
import { locales, defaultLocale } from "./config";

export default getRequestConfig(async ({ requestLocale }) => {
  const locale = await requestLocale;

  if (!locale || !locales.includes(locale as any)) {
    redirect(`/${defaultLocale}`);
  }

  return {
    messages: (await import(`@/locales/${locale}.json`)).default,
  };
});