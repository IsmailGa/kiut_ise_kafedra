import "./index.css";
import React from "react";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const SectionTwo = () => {
  return (
    <section className="mt-[65px] flex flex-col w-full gap-[25px]">
      <h1 className="2xl:text-[56px] xl:text-[40px] lg:text-[32px] font-semibold">О факультете</h1>
      <div className="flex flex-col w-full 2xl:gap-[60px] gap-[52px]">
        {/* SECTION 1 */}
        <div className="flex justify-between items-start gap-[48px]">
          <p className="text-[#666666] xl:text-[18px] text-[16px] leading-[145%] 2xl:max-w-[640px] xl:max-w-[520px] lg:max-w-[420px] font-normal">
            Инженерия информационных систем - это междисциплинарная область,
            которая объединяет такие дисциплины, как математика, бизнес и
            информатика. Инженеры по информационным системам проектируют,
            разрабатывают, тестируют и обслуживают системы, используемые в
            основном для данных. Информационные системы могут быть в различных
            формах, включая географические информационные системы, обработку
            метеорологических изображений или сети связи.
          </p>
          <p className="p-[25px] rounded-[25px] bg-[#F7F7F7] text-[16px] leading-[145%] 2xl:max-w-[500px] xl:max-w-[450px] lg:max-w-[360px] font-semibold">
            Инженеры по информационным системам работают в государственном и
            частном секторах, включая оборонные агентства, медицинские
            предприятия или финансовые корпорации.
          </p>
        </div>
        {/* SECTION 2 */}
        <div className="flex items-center justify-start gap-[64px]">
          {/* CARD 1*/}
          <div className="flex xl:items-center max-xl:flex-col gap-[30px] flex-1">
            <div className="shrink-0 h-[150px] w-[150px] flex flex-col justify-center items-center text-primary border-[#CEDAE0] border-[1px] rounded-[75px]">
              <span className="text-[56px] font-semibold leading-[50px] block">
                6
              </span>
              <p className="text-[20px] font-semibold block">отраслей</p>
            </div>
            <p className="text-[18px] font-medium max-w-[330px]">
              Факультет инженерии информационных систем объединяет в себе 6
              отраслей информационых технологий
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
                <p className="text-[20px] font-semibold block">года</p>
              </div>
            </div>
            <p className="text-[18px] font-medium max-w-[330px]">
              Факультет инженерии информационных систем объединяет в себе 8
              отраслей информационых технологий
            </p>
          </div>
        </div>
      </div>
      {/* SECTION 3 */}
      <div className="bg-laptop relative after:right-0 overflow-hidden bg-primary 2xl:rounded-[40px] xl:rounded-[32px] rounded-[30px] xl:p-[40px] p-[32px] w-full flex 2xl:mt-[100px] xl:mt-[80px] mt-[65px]">
        <div className="flex flex-col 2xl:gap-[40px] xl:gap-[36px] gap-[18px] 2xl:max-w-[750px] xl:max-w-[580px] max-w-[450px]">
          <h1 className={`2xl:text-[56px] xl:text-[42px] text-[32px] font-medium ${inter.className} text-white leading-[120%]`}>
            Креативный подход к изучению IT-инноваций
          </h1>
          <p className="xl:text-[18px] text-[16px] font-normal ${inter.className} text-white leading-[120%]">
            Современная программа и методика обучения информационных технологий
            фокусирует внимание на эффективное осваивание материалов студентами
          </p>
        </div>
      </div>
    </section>
  );
};

export default SectionTwo;
