import React from "react";
import bg_two from "@/public/assets/section_five/bg_two.png";
import bg_three from "@/public/assets/section_five/bg_three.png";
import Image from "next/image";
import { Link } from "@/navigation";
import { ArrowRotated } from "@/public/icons";
import { useTranslations } from 'next-intl';

const SectionFive = () => {
  const t = useTranslations('main.sectionFive');

  return (
    <section
      className="w-full flex flex-col 2xl:mt-[120px] mt-[95px]"
      id="courses"
    >
      <div className="w-full flex flex-col gap-[25px] 2xl:mb-[65px] mb-[45px]">
        <h1 className="2xl:text-[56px] xl:text-[40px] lg:text-[32px] text-[22px] font-semibold leading-[100%]">
          {t('title')}
        </h1>
        <p className="2xl:max-w-[667px] max-w-[580px] xl:text-[18px] text-[16px] text-[#666666] font-normal leading-[120%]">
          {t('description')}
        </p>
      </div>
      {/* CARDS */}
      <div className="grid md:grid-cols-2 grid-cols-1 items-center flex-col gap-[30px] mb-[45px]">
        {/* CARD ONE */}
        <Link href="/courses/bachelors">
          <div className="xl:h-[310px] h-[280px] flex flex-col justify-between p-[25px] rounded-[25px] bg-[#F4F4F4]/65 overflow-hidden relative group">
            <div className="flex items-start justify-between w-full ">
              <h1 className="xl:text-[32px] text-[24px] font-semibold leading-[135%]">
                {t('cards.one.title')}
              </h1>
            </div>
            <div className="flex gap-[10px] items-center max-xl:flex-col">
              <p className="text-[14px] font-semibold py-[10px] z-[1] px-[15px] bg-white rounded-[10px] self-start">
                {t('cards.one.descriptionOne')}
              </p>
              <p className="text-[14px] font-semibold py-[10px] z-[1] px-[15px] bg-primary text-white rounded-[10px] self-start">
                {t('cards.one.descriptionTwo')}
              </p>
            </div>
            <div className="absolute right-[25px] top-[25px] fill-[#666666] group-hover:fill-primary duration-300 ease">
              <ArrowRotated style="fill-inherit max-xl:w-[22px] max-xl:h-[22px]" />
            </div>
            <div className="absolute xl:w-[310px] z-[0] w-[250px] h-auto aspect-square right-0 bottom-0 translate-y-[20%] translate-x-[7%]">
              <Image
                src={bg_two}
                alt="section_five_bg 1"
                className="group-hover:translate-x-[-5px] group-hover:translate-y-[-5px] duration-300 ease"
              />
              <div className="absolute top-0 left-0 w-full h-auto aspect-square bg-gradient-to-br from-[#85C8ED] to-[#CBA2E4] rounded-full z-[-1] group-hover:rotate-[45deg] duration-300 ease"></div>
            </div>
          </div>
        </Link>
        {/* CARD TWO */}
        <Link href="/courses/masters">
          <div className="xl:h-[310px] h-[280px] flex flex-col justify-between p-[25px] rounded-[25px] bg-[#F4F4F4]/65 overflow-hidden relative group">
            <div className="flex items-start justify-between w-full ">
              <h1 className="xl:text-[32px] text-[24px] font-semibold leading-[135%]">
                {t('cards.two.title')}
              </h1>
            </div>
            <div className="flex gap-[10px] items-center max-xl:flex-col">
              <p className="text-[14px] font-semibold z-[1] py-[10px] px-[15px] bg-white rounded-[10px] self-start">
                {t('cards.two.descriptionOne')}
              </p>
              <p className="text-[14px] font-semibold z-[1] py-[10px] px-[15px] bg-primary text-white rounded-[10px] self-start">
                {t('cards.two.descriptionTwo')}
              </p>
            </div>
            <div className="absolute right-[25px] top-[25px] fill-[#666666] group-hover:fill-primary duration-300 ease">
              <ArrowRotated style="fill-inherit max-xl:w-[22px] max-xl:h-[22px]" />
            </div>
            <div className="absolute xl:w-[310px] z-[0] w-[250px] h-auto aspect-square right-0 bottom-0 translate-y-[20%] translate-x-[7%]">
              <Image
                src={bg_three}
                alt="section_five_bg 2"
                className="group-hover:translate-x-[-5px] group-hover:translate-y-[-5px] duration-300 ease"
              />
              <div className="absolute top-0 left-0 w-full h-auto aspect-square bg-gradient-to-br from-[#8EA9EC] via-[#E5CA6A] to-[#F5F5F4] rounded-full z-[-1] group-hover:rotate-[45deg] duration-300 ease"></div>
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default SectionFive;