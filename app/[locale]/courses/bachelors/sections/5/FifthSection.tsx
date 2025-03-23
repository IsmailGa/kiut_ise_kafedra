"use client";

import Image from "next/image";
import { Link } from "@/navigation";
import React, { useEffect, useState } from "react";
import teacher_profile from "@/public/assets/teacher_profile.png";
import { useTranslations } from "next-intl";
import api from "@/api/axios";

type Teacher = {
  image: string;
};

type ImageTeachers = {
  teachers: Teacher[];
  count: number;
};

const FifthSection = () => {
  const [error, setError] = useState("");
  const [data, setData] = useState<ImageTeachers | null>(null);
  const t = useTranslations("teachers.banner");

  useEffect(() => {
    api
      .get("/?teachers_image_limit=4")
      .then((res) => setData(res.data))
      .catch((err) => setError(err.message));
    console.log(error);
  }, [error]);

  return (
    <section className="w-full flex md:items-center max-lg:flex-col max-lg:gap-[30px] justify-between mt-[120px] bg-primary rounded-[30px] md:py-[35px] sm:py-[25px] py-[15px] md:px-[40px] sm:px-[30px] px-[20px] overflow-hidden">
      {/* LEFT SIDE */}
      <div className="flex flex-col gap-[32px] w-full">
        <h1 className="text-white lg:text-[56px] md:text-[40px] sm:text-[30px] text-[26px] leading-[125%] font-semibold">
          {t("title")}
        </h1>
        <Link
          href="/teachers"
          className="bg-white text-primary text-[16px] leading-[140%] font-semibold rounded-[15px] px-[24px] py-[16px] self-start"
        >
          {t("button")}
        </Link>
      </div>
      <div className="w-full flex">
        {data
          ? data?.teachers.map((item, index) => (
              <Image
                key={index}
                src={item ? `http://ai.kiut.uz/${item.image}` : teacher_profile}
                width={200}
                height={200}
                priority
                alt="teacher"
                className={`
              shrink-0 
              aspect-square
              w-[80px] md:w-[100px] lg:w-[120px] 
              rounded-full 
              border-[5px] border-white
              object-cover
              ${index > 0 ? "sm:-ml-6 -ml-10" : ""}
            `}
              />
            ))
          : Array(4)
              .fill(null)
              .map((_, index) => (
                <Image
                  key={index}
                  src={teacher_profile}
                  width={200}
                  height={200}
                  alt="teacher"
                  className={`shrink-0 aspect-square w-[80px] md:w-[100px] lg:w-[120px] rounded-full border-[5px] border-white ${
                    index > 0 ? "sm:ml-[-35px] ml-[-40px]" : "ml-0"
                  }`}
                />
              ))}
        <span className="text-[32px] border-white border-[5px] rounded-full sm:ml-[-35px] ml-[-40px] shrink-0 aspect-square lg:w-[134px] w-[80px] flex items-center justify-center font-medium leading-[140%] text-primary bg-white">
          {data?.count}+
        </span>
      </div>
    </section>
  );
};

export default FifthSection;
