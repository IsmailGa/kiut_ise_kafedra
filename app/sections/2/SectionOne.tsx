import React from "react";

const SectionTwo = () => {
  return (
    <section className="mt-[65px] flex flex-col w-full gap-[25px]">
      <h1 className="text-[56px] font-semibold">О факультете</h1>
      <div className="flex flex-col w-full gap-[60px]">
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
          <p className="text-[16px] max-w-[500px] font-semibold">
            Инженеры по информационным системам работают в государственном и
            частном секторах, включая оборонные агентства, медицинские
            предприятия или финансовые корпорации.
          </p>
        </div>
        <div className="flex items-center justify-between ">
          {/* CARD 1*/}
          <div className="flex items-center gap-[30px]">
            <div className="flex flex-col items-center justify-center text-primary border-[#CEDAE0] border-[1px] rounded-full">
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
        </div>
      </div>
    </section>
  );
};

export default SectionTwo;
