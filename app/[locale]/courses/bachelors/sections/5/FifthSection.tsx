"use client";

import Image from "next/image";
import { Link } from "@/navigation";
import React from "react";
import teacher_icon from "@/public/assets/teacher_icon.jpeg";
import { useTranslations } from "next-intl";

const FifthSection = () => {
  const t = useTranslations("teachers.banner");

  return (
    <section className="w-full flex md:items-center max-md:flex-col max-md:gap-[30px] justify-between mt-[120px] bg-primary rounded-[30px] md:py-[35px] py-[25px] md:px-[40px] px-[30px] overflow-hidden">
      {/* LEFT SIDE */}
      <div className="flex flex-col gap-[32px] max-w-[674px]">
        <h1 className="text-white lg:text-[56px] md:text-[40px] sm:text-[30px] text-[26px] leading-[125%] font-semibold">
          {t("title")}
        </h1>
        <Link
          href="/teachers"
          className="bg-white text-primary text-[16px] leading-[140%] font-semibold rounded-[15px] px-[24px] py-[16px] self-start"
        >
          {t("button")}
        </Link>
      </div>
      <div className="max-w-[500px] w-full flex">
        <Image
          src={teacher_icon}
          alt="teacher"
          className="flex items-center justify-center shrink-0 aspect-square lg:w-[134px] w-[80px] lg:h-[134px] h-[80px] rounded-full border-[5px] border-white"
        />
        <Image
          src={teacher_icon}
          alt="teacher"
          className="-translate-x-[30%] flex items-center justify-center shrink-0 aspect-square lg:w-[134px] w-[80px] lg:h-[134px] h-[80px] rounded-full  border-[5px] border-white"
        />
        <Image
          src={teacher_icon}
          alt="teacher"
          className="-translate-x-[60%] flex items-center justify-center shrink-0 aspect-square lg:w-[134px] w-[80px] lg:h-[134px] h-[80px] rounded-full  border-[5px] border-white"
        />
        <Image
          src={teacher_icon}
          alt="teacher"
          className="-translate-x-[90%] flex items-center justify-center shrink-0 aspect-square lg:w-[134px] w-[80px] lg:h-[134px] h-[80px] rounded-full  border-[5px] border-white"
        />
        <span className="-translate-x-[120%] text-[40px] text-primary font-medium leading-[140%] rounded-full lg:py-[38px] lg:px-[30px] py-[18px] px-[10px] bg-[#F7F7F7] border-white">
          25+
        </span>
      </div>
    </section>
  );
};

export default FifthSection;
