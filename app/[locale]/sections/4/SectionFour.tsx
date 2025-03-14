import Image from 'next/image';
import icon_one from "@/public/assets/section_four/icon_one.png";
import icon_two from "@/public/assets/section_four/icon_two.png";
import icon_three from "@/public/assets/section_four/icon_three.png";
import icon_four from "@/public/assets/section_four/icon_four.png";
import React from 'react';
import { useTranslations } from 'next-intl';

const SectionFour = () => {
    const t  = useTranslations("main.sectionFour")

    return (
        <section className="w-full flex flex-col 2xl:gap-[65px] gap-[45px] 2xl:mt-[120px] mt-[95px]">
            <h1 className="2xl:text-[56px] xl:text-[40px] lg:text-[32px] text-[22px] font-semibold">{t("title")}</h1>
            <div className="flex items-stretch gap-[30px] max-xl:flex-wrap">
                {[
                    { icon: icon_one, text: t("descriptionOne") },
                    { icon: icon_two, text: t("descriptionTwo") },
                    { icon: icon_three, text: t("descriptionThree") },
                    { icon: icon_four, text: t("descriptionFour") },
                ].map((item, index) => (
                    <div
                        key={index}
                        className="flex flex-col gap-[25px] p-[25px] border-[1px] border-[#CEDAE0] rounded-[25px] flex-grow cursor-pointer hover:scale-[1.015] transition-transform duration-300"
                    >
                        <Image src={item.icon} alt={`icon ${index + 1}`} className="aspect-square 2xl:w-[65px] w-[50px]" />
                        <p className="font-normal xl:text-[18px] text-[16px] max-w-[255px] leading-[135%] flex-grow flex items-center justify-center ">
                            {item.text}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default SectionFour;
