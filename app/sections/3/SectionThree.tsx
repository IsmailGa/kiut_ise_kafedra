"use client";
import React from "react";
import teacher_profile from "@/public/assets/teacher_profile.png";
import Image from "next/image";
import Link from "next/link";

const SectionThree = () => {
  return (
    <section className="flex flex-col w-full 2xl:mt-[120px] mt-[95px]" id="3">
      {/* WRAPPER */}
      <div className="flex justify-between">
        {/* FIRST COL */}
        <div className="w-full flex justify-between gap-[36px]">
          {/* FIRST ROW */}
          <div className="flex flex-col gap-[25px]">
            <h1 className="2xl:text-[56px] text-[40px] font-semibold leading-[120%]">
              Учительский состав
            </h1>
            <p className="2xl:max-w-[640px] max-w-[580px] font-normal text-[18px] text-[#666666] leading-[120%]">
              Научный совет и преподаватели курса — выдающиеся российские
              ученые, доктора и кандидаты наук известные во всем мире.
              Практикующие специалисты превентивной, интегральной и
              антивозрастной медицины.
            </p>
            <Link
              href="/teachers"
              className="bg-primary text-center rounded-[15px] text-white py-[16px] px-[24px] self-start"
            >
              Подробнее
            </Link>
          </div>
          {/* SECOND ROW */}
          <div className="flex flex-col gap-[25px] w-min">
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
              <span className="2xl:text-[36px] text-[32px] font-medium leading-[140%]">
                25+
              </span>
            </div>

            <p className="2xl:text-[32px] text-[26px] font-semibold leading-[135%] max-w-[565px]">
              высококвалифицированных менторы в сфере IT
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionThree;
