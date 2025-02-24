import React from "react";

const FourthSection = () => {
  const cards = [
    {
      title: "Основам программирования и математики",
      descr:
        "На старте вы освоите ключевые языки программирования, основы алгоритмов, вычислительную математику и физику. Это создаст прочную базу для дальнейшего обучения.",
    },
    {
      title: "Разработка и администрирование систем",
      descr:
        "Вы изучите базы данных, компьютерные сети, объектно-ориентированное программирование и работу с веб-технологиями. Освоите проектирование и поддержку информационных систем.",
    },
    {
      title: "Анализ данных и машинное обучение",
      descr:
        "Вы научитесь работать с Data Science, моделированием систем, кибербезопасностью и искусственным интеллектом. Это поможет создавать интеллектуальные и защищенные решения.",
    },
    {
      title: "Управление проектами и практическая разработка",
      descr:
        "Вы получите навыки управления ИТ-проектами, тестирования ПО и правового регулирования в ИТ. В рамках стажировок и финального проекта закрепите знания на практике.",
    },
  ];
  return (
    <section className="w-full flex flex-col gap-[65px] mt-[120px]">
      <h1 className="text-[56px] font-semibold leading-[76px%]">
        Чему вы научитесь?
      </h1>
      {/* CARDS */}
      <div className="grid grid-cols-2 gap-[30px]">
        {/* CARD */}
        {cards.map((card, index) => (
          <div
            key={index}
            className="flex flex-col gap-[24px] p-[30px] border-[#CEDAE0] border-[1px] rounded-[25px]"
          >
            <span className="bg-primary text-white py-[2px] px-[10px] self-start rounded-[15px]">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M19.6585 6.24744C20.0741 6.61112 20.1163 7.24288 19.7526 7.65852L11.0026 17.6585C10.6402 18.0726 10.0114 18.1162 9.59544 17.756L4.34544 13.2106C3.92791 12.8491 3.88249 12.2175 4.24399 11.8C4.60549 11.3825 5.23702 11.337 5.65456 11.6985L10.1525 15.5929L18.2474 6.34151C18.6111 5.92587 19.2429 5.88375 19.6585 6.24744Z"
                  fill="white"
                />
              </svg>
            </span>
            <div className="flex flex-col gap-[12px]">
              <h3 className="text-[24px] leading-[125%] font-semibold">
                {card.title}
              </h3>
              <p className="text-[18px] leading-[125%] font-normal text-[#666666]">
                {card.descr}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FourthSection;
