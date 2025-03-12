"use client";
import React from "react";
import teacher_profile from "@/public/assets/teacher_profile.png";
import Image from "next/image";
import { Link } from "@/navigation";
import { useTranslations } from "next-intl";

const SectionThree = () => {
  const t = useTranslations("main.sectionThree");

  return (
    <section className="flex flex-col w-full 2xl:mt-[120px] mt-[95px]" id="3">
      {/* WRAPPER */}
      <div className="flex">
        {/* FIRST COL */}
        <div className="w-full flex flex-col md:flex-row justify-between gap-[36px]">
          {/* FIRST ROW */}
          <div className="flex flex-col gap-[25px] flex-1">
            <h1 className="2xl:text-[56px] xl:text-[40px] lg:text-[32px] font-semibold leading-[120%]">
              {t("title")}
            </h1>
            <p className="2xl:max-w-[640px] xl:max-w-[580px] max-w-[480px] font-normal xl:text-[18px] text-[16px] text-[#666666] leading-[120%]">
              {t("description")}
            </p>
            <Link
              href="/teachers"
              className="bg-primary text-center rounded-[15px] text-white py-[16px] px-[24px] self-start"
            >
              {t("button")}
            </Link>
          </div>
          {/* SECOND ROW */}
          <div className="flex flex-col gap-[25px] flex-1">
            <div className="relative flex items-center gap-[25px]">
              <div className="flex items-center">
                <Image
                  src={teacher_profile}
                  alt="teacher"
                  className="shrink-0 aspect-square w-[80px] rounded-full ml-[0] border-[5px] border-white"
                />
                <Image
                  src={teacher_profile}
                  alt="teacher"
                  className="object-cover shrink-0 aspect-square w-[80px] rounded-full ml-[-25px] border-[5px] border-white"
                />
                <Image
                  src={teacher_profile}
                  alt="teacher"
                  className="object-cover shrink-0 aspect-square w-[80px] rounded-full ml-[-25px] border-[5px] border-white"
                />
                <Image
                  src={teacher_profile}
                  alt="teacher"
                  className="object-cover shrink-0 aspect-square w-[80px] rounded-full ml-[-25px] border-[5px] border-white"
                />
              </div>
              <span className="2xl:text-[36px] xl:text-[32px] text-[28px] font-medium leading-[140%]">
                25+
              </span>
            </div>

            <p className="2xl:text-[32px] xl:text-[26px] text-[24px] font-semibold leading-[135%] ">
              {t("descriptionTwo")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionThree;
