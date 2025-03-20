"use client";

import Image from "next/image";
import main from "@/public/assets/courses/bachelors/main-pic.png";
import React, { useEffect, useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import api from "@/api/axios";
import { AcademicPrograms } from "@/types/academic";

const MainSection = () => {
  const [data, setData] = useState<AcademicPrograms | null>(null);
  const [error, setError] = useState("");
  const t = useTranslations("courses.bachelors.sectionOne");
  const locale = useLocale();

  useEffect(() => {
    api
      .get("/academic_programs")
      .then((info) => setData(info.data[0]))
      .catch((err) => setError(err.message));
    console.log(error);
  }, []);

  return (
    <section className="w-full flex items-center max-md:flex-col justify-between max-md:gap-[20px]">
      {/* LEFT SIDE */}
      <div className="flex flex-col md:gap-[36px] sm:gap-[26px] gap-[12px] max-w-[500px] flex-1 z-[2]">
        <div className="flex flex-col md:gap-[16px] gap-[14px]">
          <h3 className="md:text-[20px] text-[18px] text-[#666666] font-normal leading-[115%]">
            {data?.translations[locale].program}
          </h3>
          <div className="flex gap-[16px] max-sm:flex-col">
            <div className="flex flex-col gap-[10px]">
              {data?.translations[locale].study_format.map((format) => (
                <p className="text-[14px] font-semibold md:py-[10px] py-[5px] md:px-[15px] px-[10px] bg-white rounded-[10px] self-start">
                  {format}
                </p>
              ))}
            </div>
            <p className="text-[14px] font-semibold py-[10px] px-[15px] bg-primary text-white rounded-[10px] self-start">
              {t("duration")}
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:gap-[24px] gap-[12px]">
          <h1 className="text-primary lg:text-[72px] md:text-[50px] sm:text-[30px] text-[20px] leading-[120%] font-medium">
            {data?.translations[locale].title}
          </h1>
          <p className="max-w-[589px] text-[#666666] md:text-[24px] text-[16px] leading-[125%] font-normal">
            {t("description")}
          </p>
        </div>
      </div>
      {/* RIGHT SIDE */}
      <div className="md:max-w-[350px] sm:max-w-[300px] max-w-[250px] flex-1 z-[1]">
        <Image src={main} alt="main" />
      </div>
    </section>
  );
};

export default MainSection;
