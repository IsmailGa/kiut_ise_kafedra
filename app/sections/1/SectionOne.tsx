import React from "react";

const SectionOne = () => {
  return (
    <section className="h-screen pt-[25px] flex flex-col w-full justify-end xl:pb-[65px] lg:pb-[48px] pb-[36px]">
      <div className="flex w-full justify-between items-end">
        <h1 className="text-white 2xl:text-[72px] xl:text-[56px] lg:text-[42px] text-[32px] 2xl:max-w-[636px] xl:max-w-[500px] lg:max-w-[380px] max-w-[300px] leading-[120%]">
          Инженерия информационных систем
        </h1>
        <h2 className="xl:max-w-[400px] lg:max-w-[320px] max-w-[250px] xl:text-[24px] lg:text-[20px] text-[16px] leading-[135%] text-white">
          Мы готовим ИТ-специалистов и помогаем людям осваивать технологии и
          цифровые навыки.
        </h2>
      </div>
    </section>
  );
};

export default SectionOne;
