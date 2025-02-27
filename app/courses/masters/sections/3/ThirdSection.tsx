import React from "react";

const ThirdSection = () => {
  const cards = [
    {
      title: "Тем, кто хочет понимать, как устроены сложные ИТ-системы",
      descr:
        "Вы освоите принципы проектирования, анализа и оптимизации архитектуры. Это поможет разрабатывать надежные системы, разбираться в их устройстве и понимать взаимодействие различных компонентов.",
    },
    {
      title: "Тем, кто хочет создавать надежные решения",
      descr:
        "Научитесь разрабатывать системы, которые обрабатывают большие объемы данных, выдерживают нагрузки и адаптируются к изменениям. Это пригодится при создании сложных и устойчивых ИТ-инфраструктур.",
    },
    {
      title: "Тем, кто хочет повысить конкурентоспособность",
      descr:
        "Знания в проектировании информационных систем востребованы в разных сферах. Они откроют больше карьерных возможностей, позволят претендовать на высокие должности и расширят выбор направлений для развития.",
    },
  ];
  return (
    <section className="w-full mt-[120px] flex flex-col gap-[65px]">
      <h1 className="text-[56px] font-semibold leading-[76px]">
        Кому подойдет?
      </h1>
      {/* CARDS */}
      <div className="w-full flex gap-[48px]">
        {/* CARD */}
        {cards.map((card, index) => (
          <div className="flex flex-col gap-[16px]" key={index}>
            <span className="bg-primary text-white py-[2px] px-[20px] self-start rounded-[15px] font-semibold text-[18px] leading-[125%]">
              {index + 1}
            </span>
            <h3 className="text-[24px] leading-[125%] font-semibold">
              {card.title}
            </h3>
            <p className="text-[18px] font-normal leading-[125%] text-[#666666]">{card.descr}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ThirdSection;
