import { LocalePrefix, Pathnames } from "next-intl/routing";

export const locales = ["ru", "uz", "en"] as const;
export const defaultLocale = "en";
export type Locales = typeof locales;

export const pathnames: Pathnames<Locales> = {
  "/": "/",
  "/teachers": "/teachers",
  "/news": "/news",
};

export const localePrefix: LocalePrefix<Locales> = "always";
