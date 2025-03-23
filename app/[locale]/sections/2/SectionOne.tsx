import React from "react";
import { Inter } from "next/font/google";
import { useTranslations } from "next-intl";

const inter = Inter({ subsets: ["latin"] });

const SectionTwo = () => {
  const t = useTranslations("main.sectionTwo");
  const subSecOne = useTranslations("main.sectionTwo.subSectionOne");
  const subSecTwo = useTranslations("main.sectionTwo.subSectionTwo");
  const subSecThree = useTranslations("main.sectionTwo.subSectionThree");

  return (
    <section className="mt-[65px] flex flex-col w-full gap-[25px]" id="2">
      <h1 className="2xl:text-[56px] xl:text-[40px] lg:text-[32px] text-[32px] font-semibold">
        {t("title")}
      </h1>
      <div className="flex flex-col w-full 2xl:gap-[60px] gap-[52px]">
        {/* SECTION 1 */}
        <div className="flex justify-between md:flex-row flex-col items-start gap-[48px]">
          <p className="text-[#666666] xl:text-[18px] md:text-[16px] text-[17px] leading-[145%] 2xl:max-w-[640px] xl:max-w-[520px] lg:max-w-[420px] font-normal">
            {subSecOne("descriptionOne")}
          </p>
          <p className="p-[25px] rounded-[25px] bg-[#F7F7F7] text-[16px] leading-[145%] 2xl:max-w-[500px] xl:max-w-[450px] lg:max-w-[360px] font-semibold">
            {subSecOne("descriptionTwo")}
          </p>
        </div>
        {/* SECTION 2 */}
        <div className="flex md:items-center md:flex-row flex-col justify-start gap-[64px]">
          {/* CARD 1*/}
          <div className="flex xl:items-center max-xl:flex-col gap-[30px] flex-1">
            <div className="shrink-0 h-[150px] w-[150px] flex flex-col justify-center items-center text-primary border-[#CEDAE0] border-[1px] rounded-[75px]">
              <span className="text-[56px] font-semibold leading-[50px] block">
                6
              </span>
              <p className="text-[20px] font-semibold block">
                {subSecTwo("cardOne.title")}
              </p>
            </div>
            <p className="text-[18px] font-medium max-w-[330px]">
              {subSecTwo("cardOne.description")}
            </p>
          </div>
          {/* CARD 2 */}
          <div className="flex xl:items-center max-xl:flex-col gap-[30px] flex-1">
            {/* CIRCLES */}
            <div className="flex relative">
              <div className="2xl:mr-[-110px] xl:mr-[-125px] mr-[-110px] h-[150px] w-[150px] flex flex-col justify-center items-center text-primary bg-white border-[#CEDAE0] border-[1px] rounded-[75px]"></div>
              <div className="2xl:mr-[-110px] xl:mr-[-125px] mr-[-110px] h-[150px] w-[150px] flex flex-col justify-center items-center text-primary bg-white border-[#CEDAE0] border-[1px] rounded-[75px]"></div>
              <div className="2xl:mr-[-110px] xl:mr-[-125px] mr-[-110px] h-[150px] w-[150px] flex flex-col justify-center items-center text-primary bg-white border-[#CEDAE0] border-[1px] rounded-[75px]"></div>
              <div className="h-[150px] w-[150px] flex flex-col justify-center items-center text-primary bg-white z-[1] border-[#CEDAE0] border-[1px] rounded-[75px]">
                <span className="text-[56px] font-semibold leading-[50px] block">
                  4
                </span>
                <p className="text-[20px] font-semibold block">
                  {subSecTwo("cardTwo.title")}
                </p>
              </div>
            </div>
            <p className="text-[18px] font-medium max-w-[330px]">
              {subSecTwo("cardTwo.description")}
            </p>
          </div>
        </div>
      </div>
      {/* SECTION 3 */}
      <div className="bg-laptop relative after:right-0 overflow-hidden bg-primary rounded-[40px] lg:p-[40px] md:p-[30px] p-[20px] w-full flex flex-col 2xl:gap-[40px] gap-[36px] 2xl:mt-[100px] mt-[80px]">
        <div className="[text-shadow:_50px_50px_#ff0000;]flex flex-col 2xl:gap-[40px] xl:gap-[36px] gap-[18px] 2xl:max-w-[750px] xl:max-w-[580px] max-w-[450px]">
          <h1
            className={`2xl:text-[56px] xl:text-[42px] sm:text-[32px] text-[25px] font-medium ${inter.className} text-white sm:leading-[120%] leading-[100%]`}
          >
            {subSecThree("title")}
          </h1>
          <p
            className={`xl:text-[18px] sm:text-[16px] text-[17px] font-normal ${inter.className} text-white sm:leading-[120%] leading-[110%]`}
          >
            {subSecThree("description")}
          </p>
        </div>
      </div>
    </section>
  );
};

export default SectionTwo;
