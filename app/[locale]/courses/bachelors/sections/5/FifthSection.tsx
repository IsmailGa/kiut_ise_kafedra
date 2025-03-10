import Image from "next/image";
import Link from "next/link";
import React from "react";
import teacher_icon from "@/public/assets/teacher_icon.jpeg";

const FifthSection = () => {
  return (
    <section className="w-full flex items-center justify-between mt-[120px] bg-primary rounded-[30px] py-[35px] px-[40px]">
      {/* LEFT SIDE */}
      <div className="flex flex-col gap-[32px] max-w-[674px]">
        <h1 className="text-white text-[56px] leading-[125%] font-semibold ">
          Состав опытных лекторов
        </h1>
        <Link
          href="/teachers"
          className="bg-white text-primary text-[16px] leading-[140%] font-semibold rounded-[15px] px-[24px] py-[16px] self-start"
        >
          Подробнее
        </Link>
      </div>
      <div className="max-w-[500px] w-full flex">
        <Image
          src={teacher_icon}
          alt="teacher"
          className="flex items-center justify-center shrink-0 aspect-square max-w-[134px] max-h-[134px] rounded-full border-[5px] border-white"
        />
        <Image
          src={teacher_icon}
          alt="teacher"
          className="-translate-x-[30%] flex items-center justify-center shrink-0 aspect-square max-w-[134px] max-h-[134px] rounded-full  border-[5px] border-white"
        />
        <Image
          src={teacher_icon}
          alt="teacher"
          className="-translate-x-[60%] flex items-center justify-center shrink-0 aspect-square max-w-[134px] max-h-[134px] rounded-full  border-[5px] border-white"
        />
        <Image
          src={teacher_icon}
          alt="teacher"
          className="-translate-x-[90%] flex items-center justify-center shrink-0 aspect-square max-w-[134px] max-h-[134px] rounded-full  border-[5px] border-white"
        />
        <span className="-translate-x-[120%] text-[40px] text-primary font-medium leading-[140%] rounded-full py-[38px] px-[30px] bg-[#F7F7F7] border-white">
          25+
        </span>
      </div>
    </section>
  );
};

export default FifthSection;
