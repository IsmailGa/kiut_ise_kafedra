import React from "react";
import { useTranslations } from "next-intl";

const Banner = () => {
  const t = useTranslations("teachers.banner");

  return (
    <section className="h-[520px] pt-[25px] flex flex-col w-full justify-end pb-[65px]">
      <div className="flex lg:flex-row max-lg:flex-col w-full justify-between items-end gap-[36px]">
        <h1 className="text-white xl:text-[56px] text-[33px] max-w-[430px] leading-[120%] self-start flex-shrink-0">
          {t("title")}
        </h1>
        <h2 className="max-w-[545px] xl:text-[18px] text-[16px] leading-[135%] text-white self-start">
          {t("description")}
        </h2>
      </div>
    </section>
  );
};

export default Banner;