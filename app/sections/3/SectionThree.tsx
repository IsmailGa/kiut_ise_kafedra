"use client";
import React from "react";
import teacher_icon from "@/public/assets/teacher_icon.jpeg";
import Image from "next/image";
import Link from "next/link";

const SectionThree = () => {
  return (
    <section className="flex flex-col w-full mt-[120px]" id="3">
      {/* WRAPPER */}
      <div className="flex justify-between">
        {/* FIRST COL */}
        <div className="w-full flex justify-between">
          {/* FIRST ROW */}
          <div className="flex flex-col gap-[25px]">
            <h1 className="text-[56px] font-semibold leading-[120%]">
              Учительский состав
            </h1>
            <p className="max-w-[640px] font-normal text-[18px] text-[#666666] leading-[120%]">
              Научный совет и преподаватели курса — выдающиеся российские
              ученые, доктора и кандидаты наук известные во всем мире.
              Практикующие специалисты превентивной, интегральной и
              антивозрастной медицины.
            </p>
          </div>
          {/* SECOND ROW */}
          <div className="flex flex-col gap-[25px]">
            <div className="relative">
              <Image
                src={teacher_icon}
                alt="teacher"
                className="flex items-center justify-center shrink-0 aspect-square max-w-[80px] max-h-[80px] rounded-full absolute bottom-0 left-0 border-[5px] border-white"
              />
              <Image
                src={teacher_icon}
                alt="teacher"
                className="flex items-center justify-center shrink-0 aspect-square max-w-[80px] max-h-[80px] rounded-full absolute bottom-0 left-[55px] border-[5px] border-white"
              />
              <Image
                src={teacher_icon}
                alt="teacher"
                className="flex items-center justify-center shrink-0 aspect-square max-w-[80px] max-h-[80px] rounded-full absolute bottom-0 left-[110px] border-[5px] border-white"
              />
              <Image
                src={teacher_icon}
                alt="teacher"
                className="flex items-center justify-center shrink-0 aspect-square max-w-[80px] max-h-[80px] rounded-full absolute bottom-0 left-[165px] border-[5px] border-white"
              />
              <span className="absolute left-[265px] bottom-0 translate-y-[-20%] text-[40px] font-medium leading-[140%]">
                25+
              </span>
            </div>

            <p className="text-[40px] font-semibold leading-[140%] max-w-[565px]">
              высококвалифицированных менторы в сфере IT
            </p>
            <Link
              href="/teachers"
              className="bg-primary text-center rounded-[15px] text-white py-[16px] px-[24px] self-start"
            >
              Подробнее
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionThree;
