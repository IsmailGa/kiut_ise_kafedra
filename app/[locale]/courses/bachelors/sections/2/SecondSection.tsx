import React from "react";
import code from "@/public/assets/courses/bachelors/code.png";
import Image from "next/image";

const SecondSection = () => {
  return (
    <section className="overflow-hidden w-full mt-[80px] py-[35px] px-[40px] flex justify-between bg-[#F7F7F7] rounded-[30px] items-stretch">
      {/* LEFT SIDE */}
      <div className="flex flex-col gap-[25px] max-w-[690px]">
        <h1 className="text-[56px] leading-[78px] font-semibold">
          О направлении
        </h1>
        <p className="text-[#666666] text-[18px] leading-[25px] font-normal">
          Инженерия информационных систем - это междисциплинарная область,
          которая объединяет такие дисциплины, как математика, бизнес и
          информатика. Инженеры по информационным системам проектируют,
          разрабатывают, тестируют и обслуживают системы, используемые в
          основном для данных. Информационные системы могут быть в различных
          формах, включая географические информационные системы, обработку
          метеорологических изображений или сети связи. Инженеры по
          информационным системам работают в государственном и частном секторах,
          включая оборонные агентства, медицинские предприятия или финансовые
          корпорации.
        </p>
      </div>
      {/* RIGHT SIDE */}
      <Image src={code} alt="code" />
    </section>
  );
};

export default SecondSection;
