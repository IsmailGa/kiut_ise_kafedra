import Image from "next/image";
import main from "@/public/assets/courses/masters/ai.png";
import React from "react";

const MainSection = () => {
  return (
    <section className="w-full flex items-stretch justify-between">
      {/* RIGHT SIDE */}
      <div className="flex flex-col gap-[36px] max-w-[650px]">
        <div className="flex flex-col gap-[16px]">
          <h3 className="text-[20px] text-[#666666] font-normal leading-[115%]">
            Программа магистратуры
          </h3>
          <div className="flex gap-[16px]">
            <p className="text-[14px] font-semibold py-[10px] px-[15px] bg-white rounded-[10px] self-start">
              Очно | Заочное
            </p>
            <p className="text-[14px] font-semibold py-[10px] px-[15px] bg-primary text-white rounded-[10px] self-start">
              2 года
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-[24px]">
          <h1 className="text-primary text-[72px] leading-[120%] font-medium">
            Искусственный Интеллект
          </h1>
          <p className="max-w-[589px] text-[#666666] text-[24px] leading-[125%] font-normal">
            Программа, открывающая мир искусственного интеллекта
          </p>
        </div>
      </div>
      <Image src={main} alt="main" />
    </section>
  );
};

export default MainSection;
