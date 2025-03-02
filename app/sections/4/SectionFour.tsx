import Image from 'next/image';
import icon_one from "@/public/assets/section_four/icon_one.png";
import icon_two from "@/public/assets/section_four/icon_two.png";
import icon_three from "@/public/assets/section_four/icon_three.png";
import icon_four from "@/public/assets/section_four/icon_four.png";
import React from 'react';

const SectionFour = () => {
    return (
        <section className="w-full flex flex-col 2xl:gap-[65px] gap-[45px] 2xl:mt-[120px] mt-[95px]">
            <h1 className="2xl:text-[56px] text-[40px] font-semibold">Мы предлагаем студентам</h1>
            <div className="flex items-stretch gap-[30px] ">
                {[
                    { icon: icon_one, text: "Учебные программы обновляются с учётом результатов опроса студентов" },
                    { icon: icon_two, text: "Куратор и наставник сопровождают студента на всех этапах обучения" },
                    { icon: icon_three, text: "Мы предоставляем все условия для реализации собственного стартап-проекта" },
                    { icon: icon_four, text: "Студенты могут стажироваться в различных IT-компаниях по всему миру" },
                ].map((item, index) => (
                    <div
                        key={index}
                        className="flex flex-col gap-[25px] p-[25px] border-[1px] border-[#CEDAE0] rounded-[25px] flex-grow cursor-pointer hover:scale-[1.015] transition-transform duration-300"
                    >
                        <Image src={item.icon} alt={`icon ${index + 1}`} className="aspect-square 2xl:w-[65px] w-[50px]" />
                        <p className="font-normal text-[18px] max-w-[255px] leading-[135%] flex-grow flex items-center justify-center ">
                            {item.text}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default SectionFour;
