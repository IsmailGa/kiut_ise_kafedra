import "./index.css";
import React from "react";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const SectionTwo = () => {
  return (
    <section className="mt-[65px] flex flex-col w-full gap-[25px]">
      <h1 className="text-[56px] font-semibold">О факультете</h1>
      <div className="flex flex-col w-full gap-[60px]">
        {/* SECTION 1 */}
        <div className="flex justify-between items-center">
          <p className="text-[#666666] text-[18px] max-w-[640px] font-normal">
            Инженерия информационных систем - это междисциплинарная область,
            которая объединяет такие дисциплины, как математика, бизнес и
            информатика. Инженеры по информационным системам проектируют,
            разрабатывают, тестируют и обслуживают системы, используемые в
            основном для данных. Информационные системы могут быть в различных
            формах, включая географические информационные системы, обработку
            метеорологических изображений или сети связи.
          </p>
          <p className="p-[25px] rounded-[25px] bg-[#F7F7F7] text-[16px] max-w-[500px] font-semibold">
            Инженеры по информационным системам работают в государственном и
            частном секторах, включая оборонные агентства, медицинские
            предприятия или финансовые корпорации.
          </p>
        </div>
        {/* SECTION 2 */}
        <div className="flex items-center justify-between ">
          {/* CARD 1*/}
          <div className="flex items-center gap-[30px]">
            <div className="h-[150px] w-[150px] flex flex-col justify-center items-center text-primary border-[#CEDAE0] border-[1px] rounded-[75px]">
              <span className="text-[56px] font-semibold leading-[50px] block">
                6
              </span>
              <p className="text-[20px] font-semibold block">отраслей</p>
            </div>
            <p className="text-[18px] max-w-[330px]">
              Факультет инженерии информационных систем объединяет в себе 6
              отраслей информационых технологий
            </p>
          </div>
          {/* CARD 2 */}
          <div className="flex items-center gap-[30px]">
            {/* CIRCLES */}
            <div className="relative w-full ">
              <div className="absolute top-0 translate-y-[-50%] right-0 h-[150px] w-[150px] flex flex-col justify-center items-center text-primary bg-white z-[3] border-[#CEDAE0] border-[1px] rounded-[75px]">
                <span className="text-[56px] font-semibold leading-[50px] block">
                  4
                </span>
                <p className="text-[20px] font-semibold block">года</p>
              </div>
              <div className="absolute top-0 translate-y-[-50%] right-[40px] h-[150px] w-[150px] flex flex-col justify-center items-center text-primary bg-white z-[2] border-[#CEDAE0] border-[1px] rounded-[75px]"></div>
              <div className="absolute top-0 translate-y-[-50%] right-[80px] h-[150px] w-[150px] flex flex-col justify-center items-center text-primary bg-white z-[1] border-[#CEDAE0] border-[1px] rounded-[75px]"></div>
              <div className="absolute top-0 translate-y-[-50%] right-[120px] h-[150px] w-[150px] flex flex-col justify-center items-center text-primary border-[#CEDAE0] border-[1px] rounded-[75px]"></div>
            </div>
            <p className="text-[16px] max-w-[500px] font-semibold">
              Факультет инженерии информационных систем объединяет в себе 8
              отраслей информационых технологий
            </p>
          </div>
        </div>
      </div>
      {/* SECTION 3 */}
      <div className="bg-laptop relative after:right-0 overflow-hidden bg-primary rounded-[40px] p-[40px] w-full flex flex-col gap-[40px] mt-[100px]">
        <h1
          className={`text-[56px] font-semibold ${inter.className} text-white max-w-[750px] leading-[120%]`}
        >
          Креативный подход к изучению IT-инноваций
        </h1>
        <p className="text-[18px] font-normal ${inter.className} text-white max-w-[750px] leading-[120%]">
          Современная программа и методика обучения информационных технологий
          фокусирует внимание на эффективное осваивание материалов студентами
        </p>
      </div>
    </section>
  );
};

export default SectionTwo;
