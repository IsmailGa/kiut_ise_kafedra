"use client";

import React from "react";
import { useTranslations } from "next-intl";

const FourthSection = () => {
  const t = useTranslations("courses.bachelors.sectionFour");

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
    {
      title: t("cards.four.title"),
      descr: t("cards.four.description"),
    },
  ];

  return (
    <section className="w-full flex flex-col gap-[65px] mt-[120px]">
      <h1 className="text-[56px] font-semibold leading-[76px]">
        {t("title")}
      </h1>
      {/* CARDS */}
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-[30px]">
        {/* CARD */}
        {cards.map((card, index) => (
          <div
            key={index}
            className="flex flex-col gap-[24px] p-[30px] border-[#CEDAE0] border-[1px] rounded-[25px]"
          >
            <span className="bg-primary text-white py-[2px] px-[10px] self-start rounded-[15px]">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M19.6585 6.24744C20.0741 6.61112 20.1163 7.24288 19.7526 7.65852L11.0026 17.6585C10.6402 18.0726 10.0114 18.1162 9.59544 17.756L4.34544 13.2106C3.92791 12.8491 3.88249 12.2175 4.24399 11.8C4.60549 11.3825 5.23702 11.337 5.65456 11.6985L10.1525 15.5929L18.2474 6.34151C18.6111 5.92587 19.2429 5.88375 19.6585 6.24744Z"
                  fill="white"
                />
              </svg>
            </span>
            <div className="flex flex-col gap-[12px]">
              <h3 className="text-[24px] leading-[125%] font-semibold">
                {card.title}
              </h3>
              <p className="text-[18px] leading-[125%] font-normal text-[#666666]">
                {card.descr}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FourthSection;