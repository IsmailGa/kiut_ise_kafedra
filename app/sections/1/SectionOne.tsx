import React from "react";

const SectionOne = () => {
  return (
    <section className="h-screen pt-[25px] flex flex-col w-full justify-end xl:pb-[65px] pb-[48px]">
      <div className="flex w-full justify-between items-end">
        <h1 className="text-white 2xl:text-[72px] xl:text-[56px] lg:text-[42px] 2xl:max-w-[636px] xl:max-w-[500px] lg:max-w-[380px] leading-[120%]">
          Инженерия информационных систем
        </h1>
        <h2 className="xl:max-w-[400px] max-w-[320px] xl:text-[24px] text-[20px]  leading-[135%] text-white">
          Мы готовим ИТ-специалистов и помогаем людям осваивать технологии и
          цифровые навыки.
        </h2>
      </div>
    </section>
  );
};

export default SectionOne;
