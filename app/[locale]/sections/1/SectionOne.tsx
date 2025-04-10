import { useTranslations } from "next-intl";
import React from "react";

const SectionOne = () => {
  const t = useTranslations("main.sectionOne");
  return (
    <section className="h-screen max-h-[1080px] pt-[25px] flex flex-col w-full md:justify-end justify-center md:items-start items-center xl:pb-[65px] lg:pb-[48px] pb-[36px]">
      <div className="flex w-full justify-between gap-2 md:items-end md:flex-row flex-col">
        <h1 className="text-white 2xl:text-[72px] xl:text-[70px] lg:text-[60px] md:text-[65px] sm:text-[60px] max-sm:text-[34px] 2xl:max-w-[636px] xl:max-w-[500px] lg:max-w-[380px] max-w-[400px] leading-[120%] max-sm:hyphens-auto">
          {t("title")}
        </h1>
        <h2 className="xl:max-w-[400px] lg:max-w-[320px] max-w-[250px] xl:text-[24px] lg:text-[20px] text-[14px] leading-[135%] text-white">
          {t("description")}
        </h2>
      </div>
    </section>
  );
};

export default SectionOne;
