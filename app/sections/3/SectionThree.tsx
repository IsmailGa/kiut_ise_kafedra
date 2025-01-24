"use client";
import React, { useState, useRef } from "react";
import teacher from "@/public/assets/teacher.png";
import teacher_icon from "@/public/assets/teacher_icon.jpeg";
import Image from "next/image";
import { ArrowRight, ArrowLeft } from "@/public/icons";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import { EffectFade } from "swiper/modules";
import SwiperCore, { Swiper as SwiperType } from "swiper";

SwiperCore.use([EffectFade]);

const SectionThree = () => {
  const [count, setCount] = useState(1);
  const swiperRef = useRef<SwiperType | null>(null); 

  const handlePrev = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
    }
  };

  const handleNext = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  };

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
              Научный совет и преподаватели курса — выдающиеся российские ученые,
              доктора и кандидаты наук известные во всем мире. Практикующие
              специалисты превентивной, интегральной и антивозрастной медицины.
            </p>
          </div>
          {/* SECOND ROW */}
          <div className="flex flex-col gap-[25px]">
            <div className="relative">
              <Image
                src={teacher_icon}
                alt="teacher"
                className="flex items-center justify-center shrink-0 aspect-square max-w-[80px] max-h-[80px] rounded-full absolute bottom-0 left-0 border-[5px] border-white"
              />
              <Image
                src={teacher_icon}
                alt="teacher"
                className="flex items-center justify-center shrink-0 aspect-square max-w-[80px] max-h-[80px] rounded-full absolute bottom-0 left-[55px] border-[5px] border-white"
              />
              <Image
                src={teacher_icon}
                alt="teacher"
                className="flex items-center justify-center shrink-0 aspect-square max-w-[80px] max-h-[80px] rounded-full absolute bottom-0 left-[110px] border-[5px] border-white"
              />
              <Image
                src={teacher_icon}
                alt="teacher"
                className="flex items-center justify-center shrink-0 aspect-square max-w-[80px] max-h-[80px] rounded-full absolute bottom-0 left-[165px] border-[5px] border-white"
              />
              <span className="absolute left-[265px] bottom-0 translate-y-[-20%] text-[40px] font-medium leading-[140%]">
                25+
              </span>
            </div>

            <p className="text-[40px] font-semibold leading-[140%] max-w-[565px]">
              высококвалифицированных менторы в сфере IT
            </p>
            <button className="bg-primary text-center rounded-[15px] text-white py-[16px] px-[24px] self-start">
              Подробнее
            </button>
          </div>
        </div>
        {/* SECOND COL */}
        {/* CARD WITH SWIPER */}
        <div className="p-[30px] max-w-[480px] w-full rounded-[30px] flex flex-col justify-between bg-[#F7F7F7]">
          <Swiper
            onSwiper={(swiper: SwiperType) => {
              swiperRef.current = swiper;
              setCount(swiper.realIndex + 1);
            }}
            modules={[EffectFade]}
            effect="fade"
            fadeEffect={{ crossFade: true }} 
            className="w-full"
            onSlideChange={(swiper: SwiperType) => {
              setCount(swiper.realIndex + 1);
            }}
          >
            {/* Slide 1 */}
            <SwiperSlide>
              <div className="flex flex-col gap-[28px] animate-fade-up">
                <div className="rounded-[20px]">
                  <Image src={teacher} alt="teacher" />
                </div>
                <h1 className="text-[30px] font-semibold leading-[120%]">
                  Имя Учителя 1
                </h1>
                <span className="block w-full bg-[#CEDAE0] h-[1px]"></span>
                <div className="flex flex-col text-[#666666] text-[18px] font-normal leading-[120%]">
                  <h2>Head of the department</h2>
                  <h3>Professor of applied Informatics</h3>
                </div>
              </div>
            </SwiperSlide>
            {/* Slide 2 */}
            <SwiperSlide>
              <div className="flex flex-col gap-[28px] animate-fade-up">
                <div className="rounded-[20px]">
                  <Image src={teacher} alt="teacher" />
                </div>
                <h1 className="text-[30px] font-semibold leading-[120%]">
                  Имя Учителя 2
                </h1>
                <span className="block w-full bg-[#CEDAE0] h-[1px]"></span>
                <div className="flex flex-col text-[#666666] text-[18px] font-normal leading-[120%]">
                  <h2>Head of the department</h2>
                  <h3>Professor of applied Informatics</h3>
                </div>
              </div>
            </SwiperSlide>
            {/* Slide 3 */}
            <SwiperSlide>
              <div className="flex flex-col gap-[28px] animate-fade-up">
                <div className="rounded-[20px]">
                  <Image src={teacher} alt="teacher" />
                </div>
                <h1 className="text-[30px] font-semibold leading-[120%]">
                  Имя Учителя 3
                </h1>
                <span className="block w-full bg-[#CEDAE0] h-[1px]"></span>
                <div className="flex flex-col text-[#666666] text-[18px] font-normal leading-[120%]">
                  <h2>Head of the department</h2>
                  <h3>Professor of applied Informatics</h3>
                </div>
              </div>
            </SwiperSlide>
            {/* Slide 4 */}
            <SwiperSlide>
              <div className="flex flex-col gap-[28px] animate-fade-up">
                <div className="rounded-[20px]">
                  <Image src={teacher} alt="teacher" />
                </div>
                <h1 className="text-[30px] font-semibold leading-[120%]">
                  Имя Учителя 4
                </h1>
                <span className="block w-full bg-[#CEDAE0] h-[1px]"></span>
                <div className="flex flex-col text-[#666666] text-[18px] font-normal leading-[120%]">
                  <h2>Head of the department</h2>
                  <h3>Professor of applied Informatics</h3>
                </div>
              </div>
            </SwiperSlide>
            {/* Slide 5 */}
            <SwiperSlide>
              <div className="flex flex-col gap-[28px] animate-fade-up">
                <div className="rounded-[20px]">
                  <Image src={teacher} alt="teacher" />
                </div>
                <h1 className="text-[30px] font-semibold leading-[120%]">
                  Имя Учителя 5
                </h1>
                <span className="block w-full bg-[#CEDAE0] h-[1px]"></span>
                <div className="flex flex-col text-[#666666] text-[18px] font-normal leading-[120%]">
                  <h2>Head of the department</h2>
                  <h3>Professor of applied Informatics</h3>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
          {/* Navigation Buttons */}
          <div className="flex items-center gap-[10px] mt-[70px]">
            <button
              className="flex w-[45px] h-[45px] items-center justify-center bg-white rounded-[10px]"
              onClick={handlePrev}
            >
              <ArrowLeft color="#666666" />
            </button>
            <span className="block">
              {count}/5 {/* Display current slide */}
            </span>
            <button
              className="bg-primary rounded-[10px] relative border-0 w-[45px] h-[45px] flex flex-col items-center justify-center"
              onClick={handleNext}
            >
              <ArrowRight color="#FFFFFF" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionThree;