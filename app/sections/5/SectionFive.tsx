import React from "react";
import bg_two from "@/public/assets/section_five/bg_two.png";
import bg_three from "@/public/assets/section_five/bg_three.png";
import Image from "next/image";
import Link from "next/link";

const SectionFive = () => {
  return (
    <section className="w-full flex flex-col mt-[120px]">
      <div className="w-full flex flex-col gap-[25px] mb-[65px]">
        <h1 className="text-[56px] font-semibold leading-[100%]">
          Наши направления
        </h1>
        <p className="max-w-[667px] text-[18px] font-normal leading-[120%]">
          Универсальная программа обучения охватывает множество отраслей
          информационных технологий, что позволяет студентам выбрать свою нишу
        </p>
      </div>
      {/* CARDS */}
      <div className="grid grid-cols-2 items-center flex-col gap-[30px] mb-[45px]">
        {/* CARD ONE */}
        <Link href="/courses/bachelors">
        <div className=" h-[310px] flex flex-col justify-between p-[25px] rounded-[25px] bg-[#F4F4F4]/65 overflow-hidden relative group">
          <div className="flex items-start justify-between w-full">
            <h1 className="text-[36px] font-semibold leading-[135%]">
              ISE (Бакалавр)
            </h1>
          </div>
          <div className="flex gap-[10px] items-center ">
            <p className="text-[14px] font-semibold py-[10px] px-[15px] bg-white rounded-[10px] self-start">
              Бакалавр
            </p>
            <p className="text-[14px] font-semibold py-[10px] px-[15px] bg-primary text-white rounded-[10px] self-start">
              4 года
            </p>
          </div>
          <div className="absolute w-fit h-full aspect-square right-0 translate-y-[10%] translate-x-[10%] bg-gradient-to-br from-[#70C9D5] to-[#D4C48B] rounded-full">
            <Image src={bg_two} alt="section_five_bg 1" />
          </div>
        </div>
        </Link>
        {/* CARD TWO */}
        <Link href="/courses/masters">
          <div className=" h-[310px] flex flex-col justify-between p-[25px] rounded-[25px] bg-[#F4F4F4]/65 overflow-hidden relative group">
            <div className="flex items-start justify-between w-full ">
              <h1 className="text-[36px] font-semibold leading-[135%]">
                AI (Магистраттура )
              </h1>
            </div>
            <div className="flex gap-[10px] items-center ">
              <p className="text-[14px] font-semibold py-[10px] px-[15px] bg-white rounded-[10px] self-start">
                Магистратура
              </p>
              <p className="text-[14px] font-semibold py-[10px] px-[15px] bg-primary text-white rounded-[10px] self-start">
                2 года
              </p>
            </div>
            <div className="absolute w-fit h-full aspect-square right-0 translate-y-[10%]  translate-x-[10%] bg-gradient-to-br from-[#85C8ED] to-[#CBA2E4] rounded-full">
              <Image src={bg_three} alt="section_five_bg 2" />
            </div>
          </div>
        </Link>
      </div>
      {/* <button className="bg-primary text-center rounded-[15px] text-white py-[16px] px-[24px] self-center">
        Все направления
      </button> */}
    </section>
  );
};

export default SectionFive;
