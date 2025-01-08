import React from 'react'
import bg_one from "@/public/assets/section_five/bg_one.png";
import bg_two from "@/public/assets/section_five/bg_two.png";
import bg_three from "@/public/assets/section_five/bg_three.png";
import bg_four from "@/public/assets/section_five/bg_four.png";
import Image from 'next/image';
import { ArrowDiagonal } from '@/public/icons';

const SectionFive = () => {
    return (
        <section className="w-full flex flex-col mt-[120px]">
            <div className="w-full flex flex-col gap-[25px] mb-[65px]">
                <h1 className="text-[56px] font-semibold leading-[100%]">Наши направления</h1>
                <p className="max-w-[667px] text-[18px] font-normal leading-[120%]">Универсальная программа обучения охватывает множество отраслей информационных технологий, что позволяет студентам выбрать свою нишу</p>
            </div>
            {/* CARDS */}
            <div className="grid grid-cols-2 items-center flex-col gap-[30px] mb-[45px]">
                {/* CARD ONE */}
                <div className="cursor-pointer h-[310px] flex flex-col justify-between p-[25px] rounded-[25px] bg-[#F4F4F4]/65 overflow-hidden relative group">
                    <div className="flex items-start justify-between w-full">
                        <h1 className="text-[36px] font-semibold leading-[135%]">Кибербезопасность</h1>
                        <div className="group-hover:translate-x-[5%] group-hover:translate-y-[-15%] transition-transform duration-300">
                            <ArrowDiagonal style="group-hover:fill-primary  fill-[#666666]" />
                        </div>
                    </div>
                    <p className="text-[14px] font-semibold py-[10px] px-[15px] bg-white rounded-[10px] self-start">2 курс</p>
                    <div className="absolute w-fit h-full aspect-square right-0 translate-y-[10%] translate-x-[10%] bg-gradient-to-br from-[#70C9D5] to-[#D4C48B] rounded-full">
                        <Image src={bg_one} alt="section_five_bg 1" />
                    </div>
                </div>
                {/* CARD TWO */}
                <div className="cursor-pointer h-[310px] flex flex-col justify-between p-[25px] rounded-[25px] bg-[#F4F4F4]/65 overflow-hidden relative group">
                    <div className="flex items-start justify-between w-full ">
                        <h1 className="text-[36px] font-semibold leading-[135%]">Веб-разработка</h1>
                        <div className="group-hover:translate-x-[5%] group-hover:translate-y-[-15%] transition-transform duration-300">
                            <ArrowDiagonal style="group-hover:fill-primary  fill-[#666666]" />
                        </div>
                    </div>
                    <p className="text-[14px] font-semibold py-[10px] px-[15px] bg-white rounded-[10px] self-start">2 курс</p>
                    <div className="absolute w-fit h-full aspect-square right-0 translate-y-[10%]  translate-x-[10%] bg-gradient-to-br from-[#85C8ED] to-[#CBA2E4] rounded-full">
                        <Image src={bg_two} alt="section_five_bg 2" />
                    </div>
                </div>
                {/* CARD THREE */}
                <div className="cursor-pointer h-[310px] flex flex-col justify-between p-[25px] rounded-[25px] bg-[#F4F4F4]/65 overflow-hidden relative group">
                    <div className="flex items-start justify-between w-full">
                        <h1 className="text-[36px] font-semibold leading-[135%] max-w-[283px]">Искусственный Интеллект</h1>
                        <div className="group-hover:translate-x-[5%] group-hover:translate-y-[-15%] transition-transform duration-300">
                            <ArrowDiagonal style="group-hover:fill-primary  fill-[#666666]" />
                        </div>                    </div>
                    <div className="flex gap-[10px] items-center">
                        <p className="text-[14px] font-semibold py-[10px] px-[15px] bg-white rounded-[10px]">2 курс</p>
                        <span className='block bg-primary text-white py-[10px] px-[15px] rounded-[10px]'>Новинка</span>
                    </div>
                    <div className="absolute w-fit h-full aspect-square right-0 translate-y-[10%] translate-x-[10%] bg-gradient-to-br from-[#8EA9EC] via-[#E5CA6A] to-[#F5F5F4] rounded-full">
                        <Image src={bg_three} alt="section_five_bg 2" />
                    </div>
                </div>
                {/* CARD FOUR */}
                <div className="cursor-pointer h-[310px] flex flex-col justify-between p-[25px] rounded-[25px] bg-[#F4F4F4]/65 overflow-hidden relative group">
                    <div className="flex items-start justify-between w-full">
                        <h1 className="text-[36px] font-semibold leading-[135%] max-w-[283px]">Дата Сайнс</h1>
                        <div className="group-hover:translate-x-[5%] group-hover:translate-y-[-15%] transition-transform duration-300">
                            <ArrowDiagonal style="group-hover:fill-primary fill-[#666666]" />
                        </div>                    </div>
                    <p className="text-[14px] font-semibold py-[10px] px-[15px] bg-white rounded-[10px] self-start">2 курс</p>
                    <div className="absolute w-fit h-full aspect-square right-0 translate-y-[10%] translate-x-[10%] bg-gradient-to-br from-[#7D9DE0] to-[#2FCCD410] rounded-full">
                        <Image src={bg_four} alt="section_five_bg 2" />
                    </div>
                </div>
            </div>
            <button className="bg-primary text-center rounded-[15px] text-white py-[16px] px-[24px] self-center">
                Все направления
            </button>
        </section>
    )
}

export default SectionFive