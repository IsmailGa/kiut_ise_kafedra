"use client";
import React from "react";

const History = () => {
  const [content, setContent] = React.useState({ title: "", description: "" });
  const [isActive, setIsActive] = React.useState(0);
  const links = [
    "Образование",
    "Опыт работы",
    "Достижения",
    "Научные статьи",
    "Проекты",
  ];

  const contentData = [
    {
      title: "National University of Uzbekistan",
      description:
        "В 2009 году в Национальном университете Узбекистана была получена степень доктора наук",
    },
    {
      title: "Turin Polytechnic University In Tashkent",
      description:
        "Окончил докторантуру в Политехническом университете Турина, получив степень PhD в области производственных систем и промышленного дизайна.",
    },
    {
      title: "Награда за кандидатскую диссертацию",
      description:
        "Награжден за лучшую кандидатскую диссертацию, присуждаемой Департаментом управления и производственного инжиниринга Политехнического университета Турина.",
    },
    {
      title: "Научные статьи",
      description:
        "Опубликовал более 50 научных статей в международных журналах и конференциях.",
    },
    {
      title: "Проекты",
      description:
        "Участвовал в более чем 20 проектах, связанных с производственными системами и промышленным дизайном.",
    },
  ];

  const handleClick = (index: number) => {
    setIsActive(index);
    setContent(contentData[index]);
  };

  return (
    <div className="flex flex-col mt-[53px]">
      <h1 className="text-black font-semibold text-[56px] leading-[76px]">
        История
      </h1>
      {/* LINKS */}
      <div className="flex gap-[16px] mt-[42px]">
        {links.map((link, index) => (
          <button
            key={index}
            className={`text-center text-black h-[50px] px-[25px] outline-0 rounded-[15px] border-[#CEDAE0] border-[1px] ${
              isActive === index ? "bg-primary text-white" : ""
            }`}
            onClick={() => handleClick(index)}
          >
            {link}
          </button>
        ))}
      </div>
      {/* CONTENT */}
      <div className="mt-[42px]">
        <div className="flex items-center justify-between py-[24px] border-b-[1px] border-[#CEDAE0]">
          <h1 className="text-[32px] leading-[44px] font-semibold text-black max-w-[334px]">
            {content.title}
          </h1>
          <p className="text-[18px] font-normal leading-[165%] text-black max-w-[520px]">
            {content.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default History;
