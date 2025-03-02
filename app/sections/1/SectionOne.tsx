import React from "react";

const SectionOne = () => {
  return (
    <section className="h-screen pt-[25px] flex flex-col w-full justify-end pb-[65px]">
      <div className="flex w-full justify-between items-end">
        <h1 className="text-white 2xl:text-[72px] xl:text-[56px] 2xl:max-w-[636px] xl:max-w-[500px] leading-[120%]">
          Инженерия информационных систем
        </h1>
        <h2 className="max-w-[400px] text-[24px] leading-[125%] text-white">
          Мы готовим ИТ-специалистов и помогаем людям осваивать технологии и
          цифровые навыки.
        </h2>
      </div>
    </section>
  );
};

export default SectionOne;
