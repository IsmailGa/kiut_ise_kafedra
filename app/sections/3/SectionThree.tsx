import React from "react";
import teacher from "@/public/assets/teacher.png";
import Image from "next/image";

const SectionThree = () => {
  return (
    <section className="flex flex-col w-full mt-[120px]" id="3">
      {/* WRAPPER */}
      <div className="flex justify-between">
        {/* FIRST COL */}
        <div className="w-full flex flex-col justify-between">
          {/* FIRST ROW */}
          <div className="flex flex-col gap-[25px]">
            <h1 className="text-[56px] font-semibold leading-[120%]">
              Учительский состав
            </h1>
            <p className="max-w-[640px] font-normal text-[18px] text-[#666666] leading-[120%]">
              Научный совет и преподаватели курса — выдающиеся российские
              ученые, доктора и кандидаты наук известные во всем
              мире. Практикующие специалисты превентивной, интегральной и
              антивозрастной медицины.
            </p>
          </div>
          {/* SECOND ROW */}
          <div className="flex flex-col">
            <div className="">
              <div className="flex items-center justify-center shrink-0 aspect-square w-[80px] h-[80px] rounded-[80px]">
                <Image src={teacher} alt="teacher" />
              </div>
            </div>
            <p></p>
            <button className="bg-primary text-center rounded-[15px] text-white py-[16px] px-[24px] self-start">
              Подробнее
            </button>
          </div>
        </div>
        {/* SECOND COL */}
        {/* CARD */}
        <div className="p-[30px] max-w-[480px] w-full rounded-[30px] flex flex-col bg-[#F7F7F7]">
          <div className="flex flex-col gap-[28px]">
            <div className="rounded-[20px]">
              <Image src={teacher} alt="teacher" />
            </div>
            <h1 className="text-[30px] font-semibold leading-[120%]">
              Имя Учителя
            </h1>
            <span className="block w-full bg-[#CEDAE0] h-[1px]"></span>
            <div className="flex flex-col text-[#666666] text-[18px] font-normal leading-[120%]">
              <h2>Head of the department</h2>
              <h3>Professor of applied Informatics</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionThree;
