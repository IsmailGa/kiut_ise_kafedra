"use client";
import React, { useEffect, useState } from "react";
import teacher_profile from "@/public/assets/teacher_profile.png";
import Image from "next/image";
import { Link } from "@/navigation";
import { useTranslations } from "next-intl";
import api from "@/api/axios";

type Teacher = {
  image: string;
};

type ImageTeachers = {
  teachers: Teacher[];
  count: number;
};

const SectionThree = () => {
  const [error, setError] = useState("");
  const [data, setData] = useState<ImageTeachers | null>(null);
  const t = useTranslations("main.sectionThree");

  useEffect(() => {
    api
      .get("/?teachers_image_limit=4")
      .then((res) => setData(res.data))
      .catch((err) => setError(err.message));
    console.log(error);
  }, []);

  return (
    <section className="flex flex-col w-full 2xl:mt-[120px] mt-[95px]" id="3">
      {/* WRAPPER */}
      <div className="flex">
        {/* FIRST COL */}
        <div className="w-full flex flex-col md:flex-row justify-between gap-[36px]">
          {/* FIRST ROW */}
          <div className="flex flex-col gap-[25px] flex-1">
            <h1 className="2xl:text-[56px] xl:text-[40px] lg:text-[32px] text-[32px] font-semibold leading-[120%]">
              {t("title")}
            </h1>
            <p className="2xl:max-w-[640px] xl:max-w-[580px] max-w-[480px] font-normal xl:text-[18px] text-[16px] text-[#666666] leading-[120%]">
              {t("description")}
            </p>
            <Link
              href="/teachers"
              className="bg-primary text-center rounded-[15px] text-white py-[16px] px-[24px] sm:self-start max-md:w-full"
            >
              {t("button")}
            </Link>
          </div>
          {/* SECOND ROW */}
          <div className="flex flex-col gap-[25px] lg:items-center items-start flex-1 w-full">
            <div className="relative flex items-center gap-[25px]">
              <div className="flex items-center">
                {data
                  ? data?.teachers.map((item, index) => (
                      <Image
                        key={index}
                        src={
                          item
                            ? `http://ai.kiut.uz/${item.image}`
                            : teacher_profile
                        }
                        width={200}
                        height={200}
                        priority
                        alt="teacher"
                        className={`shrink-0 aspect-square w-[80px] md:w-[100px] lg:w-[120px] rounded-full border-[5px] border-white ${
                          index > 0 ? "sm:ml-[-25px] ml-[-40px]" : "ml-0"
                        }`}
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
                            index > 0 ? "sm:ml-[-25px] ml-[-40px]" : "ml-0"
                          }`}
                        />
                      ))}

                {/* <Image
                  src={teacher_profile}
                  alt="teacher"
                  className="object-cover shrink-0 aspect-square w-[80px] md:w-[100px] lg:w-[120px] rounded-full sm:ml-[-25px] ml-[-40px] border-[5px] border-white"
                />
                <Image
                  src={teacher_profile}
                  alt="teacher"
                  className="object-cover shrink-0 aspect-square w-[80px] md:w-[100px] lg:w-[120px] rounded-full sm:ml-[-25px] ml-[-40px] border-[5px] border-white"
                />
                <Image
                  src={teacher_profile}
                  alt="teacher"
                  className="object-cover shrink-0 aspect-square w-[80px] md:w-[100px] lg:w-[120px] rounded-full sm:ml-[-25px] ml-[-40px] border-[5px] border-white"
                /> */}
              </div>
              <span className="2xl:text-[36px] xl:text-[32px] max-sm:bg-gray-400 max-sm:border-white  max-sm:border-[5px] max-sm:rounded-full max-sm:shrink-0 max-sm:aspect-square max-sm:w-[80px] flex items-center justify-center text-[28px] font-medium leading-[140%]">
                {data?.count}+
              </span>
            </div>

            <p className="2xl:text-[32px] xl:text-[26px] text-[24px] font-semibold lg:text-end text-start leading-[135%] sm:max-w-[455px] max-sm:max-w-[300px] w-full max-sm:hyphens-auto">
              {t("descriptionTwo")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionThree;
