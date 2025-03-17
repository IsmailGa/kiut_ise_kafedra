"use client";

import React from "react";
import Image from "next/image";
import img from "@/public/assets/courses/structure_of_program.png";
import Link from "next/link";
import { useTranslations } from "next-intl";

const SeventhSection = () => {
  const t = useTranslations("courses.masters.sectionSeven");

  return (
    <section className="flex flex-col w-full mt-[120px] gap-[32px]">
      <h1 className="lg:text-[56px] md:text-[40px] sm:text-[30px] text-[26px] leading-[140%] font-semibold">
        {t("title")}
      </h1>
      <Link
        href="masters/structure-program"
        className="relative cursor-pointer w-full flex flex-col gap-[10px]"
      >
        <div className="absolute top-[30px] right-[30px] bg-[#66666645] backdrop-blur-lg p-[15px] rounded-[18px] z-[1]">
          <svg
            width="36"
            height="36"
            viewBox="0 0 36 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M31.5 13.5V4.5H22.5"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M4.5 22.5V31.5H13.5"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M31.5 4.5L20.25 15.75"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M15.75 20.25L4.5 31.5"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <Image
          src={img}
          alt={t("imageAlt")}
          className="md:rounded-[30px] rounded-[10px] blur-[2px] w-full max-sm:h-[50vh]"
        />
      </Link>
    </section>
  );
};

export default SeventhSection;


