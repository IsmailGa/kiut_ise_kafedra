"use client";

import Image from "next/image";
import main from "@/public/assets/courses/bachelors/main-pic.png";
import React from "react";
import { useTranslations } from "next-intl";

const MainSection = () => {
  const t = useTranslations("courses.bachelors.sectionOne");

  return (
    <section className="w-full flex items-center max-md:flex-col justify-between max-md:gap-[20px]">
      {/* LEFT SIDE */}
      <div className="flex flex-col md:gap-[36px] gap-[26px] max-w-[500px] flex-1 z-[2]">
        <div className="flex flex-col gap-[16px]">
          <h3 className="text-[20px] text-[#666666] font-normal leading-[115%]">
            {t("programTitle")}
          </h3>
          <div className="flex gap-[16px] max-sm:flex-col">
            <p className="text-[14px] font-semibold py-[10px] px-[15px] bg-white rounded-[10px] self-start">
              {t("studyMode")}
            </p>
            <p className="text-[14px] font-semibold py-[10px] px-[15px] bg-primary text-white rounded-[10px] self-start">
              {t("duration")}
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:gap-[24px] gap-[12px]">
          <h1 className="text-primary lg:text-[72px] md:text-[50px] sm:text-[30px] text-[20px] leading-[120%] font-medium">
            {t("title")}
          </h1>
          <p className="max-w-[589px] text-[#666666] md:text-[24px] text-[16px] leading-[125%] font-normal">
            {t("description")}
          </p>
        </div>
      </div>
      {/* RIGHT SIDE */}
      <div className="md:max-w-[500px] sm:max-w-[450px] max-w-[400px] flex-1 z-[1]">
        <Image src={main} alt="main" />
      </div>
    </section>
  );
};

export default MainSection;
