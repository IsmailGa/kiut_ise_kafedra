import { createLocalizedPathnamesNavigation } from "next-intl/navigation";
import { localePrefix, locales, pathnames } from "./config";

const navigation = createLocalizedPathnamesNavigation({
    locales,
    pathnames,
    localePrefix,
});

export const { Link, getPathname, redirect, usePathname, useRouter } = navigation;