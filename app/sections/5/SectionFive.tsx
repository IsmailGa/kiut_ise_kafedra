import React from "react";
import bg_two from "@/public/assets/section_five/bg_two.png";
import bg_three from "@/public/assets/section_five/bg_three.png";
import Image from "next/image";
import Link from "next/link";
import { ArrowRotated } from "@/public/icons";

const SectionFive = () => {
  return (
    <section className="w-full flex flex-col 2xl:mt-[120px] mt-[95px]">
      <div className="w-full flex flex-col gap-[25px] 2xl:mb-[65px] mb-[45px]">
        <h1 className="2xl:text-[56px] text-[40px] font-semibold leading-[100%]">
          Наши направления
        </h1>
        <p className="2xl:max-w-[667px] max-w-[580px] text-[18px] font-normal leading-[120%]">
          Универсальная программа обучения охватывает множество отраслей
          информационных технологий, что позволяет студентам выбрать свою нишу
        </p>
      </div>
      {/* CARDS */}
      <div className="grid grid-cols-2 items-center flex-col gap-[30px] mb-[45px]">
        {/* CARD ONE */}
        <Link href="/courses/bachelors">
        <div className=" h-[310px] flex flex-col justify-between p-[25px] rounded-[25px] bg-[#F4F4F4]/65 overflow-hidden relative group">
            <div className="flex items-start justify-between w-full ">
              <h1 className="text-[32px] font-semibold leading-[135%]">
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
            <div className="absolute right-[25px] top-[25px] fill-[#666666] group-hover:fill-primary duration-300 ease">
              <ArrowRotated style="fill-inherit"/>
            </div>
            <div className="absolute w-[310px] h-auto aspect-square right-0 bottom-0 translate-y-[20%] translate-x-[7%]">
              <Image src={bg_two} alt="section_five_bg 1" className="group-hover:translate-x-[-5px] group-hover:translate-y-[-5px] duration-300 ease"/>
              <div className="absolute top-0 left-0 w-full h-auto aspect-square bg-gradient-to-br from-[#85C8ED] to-[#CBA2E4] rounded-full z-[-1] group-hover:rotate-[45deg] duration-300 ease"></div>
            </div>
          </div>
        </Link>
        {/* CARD TWO */}
        <Link href="/courses/masters">
          <div className=" h-[310px] flex flex-col justify-between p-[25px] rounded-[25px] bg-[#F4F4F4]/65 overflow-hidden relative group">
            <div className="flex items-start justify-between w-full ">
              <h1 className="text-[32px] font-semibold leading-[135%]">
                AI (Магистраттура)
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
            <div className="absolute right-[25px] top-[25px] fill-[#666666] group-hover:fill-primary duration-300 ease">
              <ArrowRotated style="fill-inherit"/>
            </div>
            <div className="absolute w-[310px] h-auto aspect-square right-0 bottom-0 translate-y-[20%] translate-x-[7%]">
              <Image src={bg_three} alt="section_five_bg 2" className="group-hover:translate-x-[-5px] group-hover:translate-y-[-5px] duration-300 ease"/>
              <div className="absolute top-0 left-0 w-full h-auto aspect-square bg-gradient-to-br from-[#8EA9EC] via-[#E5CA6A] to-[#F5F5F4] rounded-full z-[-1] group-hover:rotate-[45deg] duration-300 ease"></div>
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default SectionFive;
