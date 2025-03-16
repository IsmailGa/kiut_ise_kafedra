import { useLocale, useTranslations } from "next-intl";
import React from "react";
import LocaleSwitcherSelect from "./localeSwitcherSelect";
import { locales } from "@/config";

const LocaleSwitcher = () => {
  const t = useTranslations("LocaleSwitcher");
  const locale = useLocale();
  return (
    <div>
      <LocaleSwitcherSelect defaultValue={locale} label={t("label")}>
        {locales.map((cur) => (
          <option key={cur} value={cur} className="text-black">
            {t("locale", { locale: cur })}
          </option>
        ))}
      </LocaleSwitcherSelect>
    </div>
  );
};

export default LocaleSwitcher;
