import React from "react";
import Image from "next/image";
import img from "@/public/assets/courses/structure_of_program.png";
import Link from "next/link";

const SeventhSection = () => {
  return (
    <section className="flex flex-col w-full mt-[120px] gap-[32px]">
      <h1 className="text-[56px] leading-[140%] font-semibold">
        Структура программы:
      </h1>
      <Link href="masters/structure-program" className="relative cursor-pointer ">
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
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M4.5 22.5V31.5H13.5"
              stroke="white"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M31.5 4.5L20.25 15.75"
              stroke="white"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M15.75 20.25L4.5 31.5"
              stroke="white"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <Image src={img} alt="" className="rounded-[30px] blur-[2px]" />
      </Link>
    </section>
  );
};

export default SeventhSection;
