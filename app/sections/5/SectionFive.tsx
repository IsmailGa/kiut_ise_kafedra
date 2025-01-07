import React from 'react'
import "./index.css"

const SectionFive = () => {
    return (
        <section className="w-full flex flex-col mt-[120px]">
            <div className="w-full flex flex-col gap-[25px]">
                <h1 className="text-[56px] font-semibold leading-[100%]">Наши направления</h1>
                <p className="max-w-[667px] text-[18px] font-normal leading-[120%]">Универсальная программа обучения охватывает множество отраслей информационных технологий, что позволяет студентам выбрать свою нишу</p>
            </div>
            <div className="grid grid-cols-2 items-center flex-col">
                <div className="bg-section_five-one h-[310px] flex flex-col p-[25px] bg-[#F4F4F4]/65 relative 
                w-auto
                after:translate-x-[50%]
                after:w-full
                after:h-full
                ">
                    <h1 className="text-[36px] font-semibold leading-[135%]">Кибербезопасность</h1>
                    <p>2 курс</p>
                </div>
            </div>
        </section>
    )
}

export default SectionFive