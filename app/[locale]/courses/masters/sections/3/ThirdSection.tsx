"use client";

import React from "react";
import { useTranslations } from "next-intl";

const ThirdSection = () => {
  const t = useTranslations("courses.masters.sectionThree");

  const cards = [
    {
      title: t("cards.one.title"),
      descr: t("cards.one.description"),
    },
    {
      title: t("cards.two.title"),
      descr: t("cards.two.description"),
    },
    {
      title: t("cards.three.title"),
      descr: t("cards.three.description"),
    },
  ];

  return (
    <section className="w-full mt-[120px] flex flex-col md:gap-[65px] gap-[30px]">
      <h1 className="lg:text-[56px] md:text-[40px] sm:text-[30px] text-[26px] font-semibold md:leading-[76px]">
        {t("title")}
      </h1>
      <div className="w-full flex max-lg:flex-col gap-[48px]">
        {cards.map((card, index) => (
          <div className="flex flex-col gap-[16px]" key={index}>
            <span className="bg-primary text-white py-[2px] px-[20px] self-start rounded-[15px] font-semibold text-[18px] leading-[125%]">
              {index + 1}
            </span>
            <h3 className="md:text-[24px] text-[20px] leading-[125%] font-semibold">
              {card.title}
            </h3>
            <p className="md:text-[18px] text-[16px] font-normal leading-[125%] text-[#666666]">
              {card.descr}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ThirdSection;