"use client";

import Image from "next/image";
import main from "@/public/assets/courses/bachelors/main-pic.png";
import React from "react";
import { useTranslations } from "next-intl";

const MainSection = () => {
  const t = useTranslations("courses.bachelors.sectionOne");

  return (
    <section className="w-full flex items-center justify-between">
      {/* LEFT SIDE */}
      <div className="flex flex-col gap-[36px] max-w-[500px] flex-1">
        <div className="flex flex-col gap-[16px]">
          <h3 className="text-[20px] text-[#666666] font-normal leading-[115%]">
            {t("programTitle")}
          </h3>
          <div className="flex gap-[16px]">
            <p className="text-[14px] font-semibold py-[10px] px-[15px] bg-white rounded-[10px] self-start">
              {t("studyMode")}
            </p>
            <p className="text-[14px] font-semibold py-[10px] px-[15px] bg-primary text-white rounded-[10px] self-start">
              {t("duration")}
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-[24px]">
          <h1 className="text-primary text-[72px] leading-[120%] font-medium">
            {t("title")}
          </h1>
          <p className="max-w-[589px] text-[#666666] text-[24px] leading-[125%] font-normal">
            {t("description")}
          </p>
        </div>
      </div>
      {/* RIGHT SIDE */}
      <div className="max-w-[500px] flex-1">
        <Image src={main} alt="main" />
      </div>
    </section>
  );
};

export default MainSection;
