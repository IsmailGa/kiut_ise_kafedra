"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import api from "@/api/axios";
import random_pic from "@/public/assets/courses/bachelors/random_pic.jpg";
import random_pic2 from "@/public/assets/courses/bachelors/random_pic2.jpg";
import random_pic3 from "@/public/assets/courses/bachelors/random_pic3.jpg";
import { AcademicPrograms } from "@/types/academic";

const MainSection = () => {
  const [data, setData] = useState<AcademicPrograms | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const t = useTranslations("courses.masters.sectionOne");
  const locale = useLocale();

  const slideImages = [
    {
      src: random_pic,
      caption: "Slide 1",
    },
    {
      src: random_pic2,
      caption: "Slide 2",
    },
    {
      src: random_pic3,
      caption: "Slide 3",
    },
  ];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get("/academic_programs");
        setData(response.data[1]);
      } catch (err) {
        console.error("API Error:", err);
      }
    };
    fetchData();
  }, [slideImages.length]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slideImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="w-full flex flex-col md:flex-row items-center justify-between px-4 gap-8">
      {/* LEFT SIDE */}
      <div className="flex flex-col gap-6 md:gap-8 flex-1 max-w-full md:max-w-[500px]">
        <div className="flex flex-col gap-4">
          <h3 className="text-[#666666] text-lg md:text-xl font-normal leading-tight">
            {data?.translations[locale].program}
          </h3>
          <div className="flex gap-4 flex-col md:flex-row">
            <div className="flex flex-col gap-2">
              {data?.translations[locale].study_format.map((format, index) => (
                <p
                  key={index}
                  className="text-sm md:text-base font-semibold py-2 px-4 bg-white rounded-lg self-start"
                >
                  {format}
                </p>
              ))}
            </div>
            <p className="text-sm md:text-base font-semibold py-2 px-4 bg-primary text-white rounded-lg self-start">
              {t("duration")}
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-4 md:gap-6">
          <h1 className="text-primary text-2xl md:text-4xl lg:text-6xl font-medium leading-tight">
            {data?.translations[locale].title}
          </h1>
          <p className="text-[#666666] text-base md:text-lg leading-relaxed">
            {t("description")}
          </p>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="flex-1 w-full md:ml-8">
        <div className="relative w-full aspect-video rounded-2xl overflow-hidden">
          {slideImages.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-500 ${
                index === currentSlide ? "opacity-100" : "opacity-0"
              }`}
            >
              <Image
                src={slide.src}
                alt={slide.caption}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MainSection;
