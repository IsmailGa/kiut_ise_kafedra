"use client";

import React from "react";
import code from "@/public/assets/courses/bachelors/code.png";
import Image from "next/image";
import { useTranslations } from "next-intl";

const SecondSection = () => {
  const t = useTranslations("courses.bachelors.sectionTwo");

  return (
    <section className="overflow-hidden w-full mt-[80px] lg:py-[35px] lg:px-[40px] md:py-[25px] md:px-[30px] py-[15px] px-[20px] flex max-lg:flex-col justify-between bg-[#F7F7F7] rounded-[30px] items-stretch">
      {/* LEFT SIDE */}
      <div className="flex flex-col gap-[25px] max-w-[690px] flex-1">
        <h1 className="lg:text-[56px] md:text-[40px] sm:text-[30px] text-[26px] md:leading-[78px] font-semibold">
          {t("title")}
        </h1>
        <p className="text-[#666666] md:text-[18px] text-[16px] md:leading-[25px] font-normal">
          {t("description")}
        </p>
      </div>
      {/* RIGHT SIDE */}
      <Image src={code} alt="code" className="flex-1"/>
    </section>
  );
};

export default SecondSection;