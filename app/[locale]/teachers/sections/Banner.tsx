import React from "react";
import { useTranslations } from "next-intl";

const Banner = () => {
  const t = useTranslations("teachers.banner");

  return (
    <section className="h-[520px] pt-[25px] flex flex-col w-full justify-end pb-[65px]">
      <div className="flex w-full justify-between items-end gap-[36px]">
        <h1 className="text-white text-[56px] max-w-[430px] leading-[120%] flex-shrink-0">
          {t("title")}
        </h1>
        <h2 className="max-w-[545px] text-[18px] leading-[135%] text-white">
          {t("description")}
        </h2>
      </div>
    </section>
  );
};

export default Banner;