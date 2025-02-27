import React from "react";
import data from "@/public/assets/courses/masters/data.png";
import Image from "next/image";

const SecondSection = () => {
  return (
    <section className=" w-full mt-[80px] py-[35px] px-[40px] flex justify-between bg-[#F7F7F7] rounded-[30px] items-stretch">
      {/* LEFT SIDE */}
      <div className="flex flex-col gap-[25px] max-w-[690px]">
        <h1 className="text-[56px] leading-[78px] font-semibold">
          О направлении
        </h1>
        <p className="text-[#666666] text-[18px] leading-[25px] font-normal">
          Инженерия искусственного интеллекта – это междисциплинарная область,
          объединяющая математику, информатику, анализ данных и разработку
          программного обеспечения. Специалисты в этой сфере занимаются
          проектированием, разработкой, оптимизацией и внедрением
          интеллектуальных систем. В рамках программы изучаются передовые
          технологии, такие как машинное обучение, обработка естественного
          языка, компьютерное зрение, робототехника и обучение с подкреплением.
          Инженеры по искусственному интеллекту работают в различных отраслях
          государственного и частного сектора, включая здравоохранение, финансы,
          промышленную автоматизацию и кибербезопасность.
        </p>
      </div>
      {/* RIGHT SIDE */}
      <Image src={data} alt="code" />
    </section>
  );
};

export default SecondSection;
