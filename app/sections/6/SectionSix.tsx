"use client"
import React, { useState } from "react";
import japan_bg from "@/public/assets/section_six/japan_bg.jpg"
import Image from 'next/image';
import { ArrowRight, ArrowLeft } from "@/public/icons"

const SectionSix = () => {
    const [count, setCount] = useState(1);
    const maxCount = 5;
    const minCount = 1;
    return (
        <section className="w-full flex flex-col mt-[120px] gap-[65px]">
            <div className="flex justify-between items-center w-full">
                <h1 className="text-[56px] font-semibold">Новости</h1>
                <div className="flex items-center gap-[10px] mt-[70px]">
                    <button className="flex w-[45px] h-[45px] items-center justify-center bg-white rounded-[10px]"
                        onClick={() => setCount(Math.max(count - 1, minCount))}><ArrowLeft color="#666666" /></button>
                    <span className="block">{count}/5</span>
                    <button className="bg-primary rounded-[10px] relative border-0 w-[45px] h-[45px] flex flex-col items-center justify-center"
                        onClick={() => setCount(Math.min(count + 1, maxCount))}
                    >
                        <ArrowRight color="#FFFFFF" />
                    </button>
                </div>
            </div>
            {/* CARDS */}
            <div className="flex items-stretch gap-[30px]">
                {/* CARD 1 */}
                <div className="rounded-[25px] overflow-hidden flex flex-col w-full max-w-[416px] h-[432px]">
                    <div className="relative w-full h-[200px]">
                        <Image
                            src={japan_bg}
                            alt="news img"
                            fill
                            className="object-cover rounded-t-[25px]"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                    </div>
                    <div className="flex flex-col border-[1px] border-[#CEDAE0] p-[25px] rounded-b-[25px] gap-[20px]">
                        <div className="self-start border-[1px] border-[#CEDAE0] rounded-[10px] py-[7px] px-[15px]">11 сен 2024</div>
                        <div className="flex flex-col gap-[15px]">
                            <h1 className="font-semibold text-[25px] max-w-[366px] leading-[135%]">KIUT и Япония: новые горизонты сотрудничества   </h1>
                            <p className="font-normal text-[16px] leading-[135%] ">Укрепляется сотрудничество Ташкентского международного университета Кимё с японскими компаниями</p>
                        </div>
                    </div>
                </div>
                {/* CARD 2 */}
                <div className="rounded-[25px] overflow-hidden flex flex-col w-full max-w-[416px] h-[432px]">
                    <div className="relative w-full h-[200px]">
                        <Image
                            src={japan_bg}
                            alt="news img"
                            fill
                            className="object-cover rounded-t-[25px]"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                    </div>
                    <div className="flex flex-col border-[1px] border-[#CEDAE0] p-[25px] rounded-b-[25px] gap-[20px]">
                        <div className="self-start border-[1px] border-[#CEDAE0] rounded-[10px] py-[7px] px-[15px]">11 сен 2024</div>
                        <div className="flex flex-col gap-[15px]">
                            <h1 className="font-semibold text-[25px] max-w-[366px] leading-[135%]">KIUT и Япония: новые горизонты сотрудничества   </h1>
                            <p className="font-normal text-[16px] leading-[135%] ">Укрепляется сотрудничество Ташкентского международного университета Кимё с японскими компаниями</p>
                        </div>
                    </div>
                </div>
                {/* CARD 3 */}
                <div className="rounded-[25px] overflow-hidden flex flex-col w-full max-w-[416px] h-[432px]">
                    <div className="relative w-full h-[200px]">
                        <Image
                            src={japan_bg}
                            alt="news img"
                            fill
                            className="object-cover rounded-t-[25px]"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                    </div>
                    <div className="flex flex-col border-[1px] border-[#CEDAE0] p-[25px] rounded-b-[25px] gap-[20px]">
                        <div className="self-start border-[1px] border-[#CEDAE0] rounded-[10px] py-[7px] px-[15px]">11 сен 2024</div>
                        <div className="flex flex-col gap-[15px]">
                            <h1 className="font-semibold text-[25px] max-w-[366px] leading-[135%]">KIUT и Япония: новые горизонты сотрудничества   </h1>
                            <p className="font-normal text-[16px] leading-[135%] ">Укрепляется сотрудничество Ташкентского международного университета Кимё с японскими компаниями</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SectionSix