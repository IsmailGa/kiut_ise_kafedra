"use client";

import api from "@/api/axios";
import { SubjectsItem } from "@/types/subjects";
import { useLocale, useTranslations } from "next-intl";
import React, { useEffect, useState } from "react";

const SixthSection = () => {
  const [subjects, setSubjects] = useState<SubjectsItem[]>([]);
  const [expandedStates, setExpandedStates] = useState({
    sections: {} as Record<string, boolean>,
    subjects: {} as Record<string, boolean>,
  });
  const locale = useLocale();
  const t = useTranslations("courses.bachelors.sectionSix");
  const credits = useTranslations("courses");

  useEffect(() => {
    api
      .get("/subjects")
      .then((res) => setSubjects(res.data))
      .catch((err) => console.log(err.message));
  }, []);

  const toggleExpand = (type: "section" | "subject", key: string) => {
    setExpandedStates((prev) => ({
      ...prev,
      [type === "section" ? "sections" : "subjects"]: {
        ...prev[type === "section" ? "sections" : "subjects"],
        [key]: !prev[type === "section" ? "sections" : "subjects"][key],
      },
    }));
  };

  // Group and chunk subjects by semester
  const groupedSubjects = subjects.reduce((acc, subject) => {
    const semester = subject.semester || 1;
    acc[semester] = acc[semester] || [];
    acc[semester].push(subject);
    return acc;
  }, {} as Record<number, SubjectsItem[]>);

  return (
    <section className="flex flex-col mt-[120px] w-full bg-[#F7F7F7] rounded-[30px] gap-[45px] md:py-[35px] sm:py-[25px] py-[15px] md:px-[40px] sm:px-[20px] px-[10px]">
      {/* Header and info list */}
      <div className="flex flex-col gap-[16px]">
        <h1 className="lg:text-[56px] md:text-[40px] sm:text-[30px] text-[26px] leading-[140%] font-semibold">
          {t("title")}
        </h1>
        <div className="flex items-center gap-[18px]">
          <div className="flex sm:items-center max-sm:flex-col gap-[18px]">
            {/* INFO ONE */}
            <div className="flex gap-[6px] bg-white rounded-[12px] py-[11px] px-[16px] font-semibold text-[16px] leading-[140%] text-[#292D32]">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 2C6.49 2 2 6.49 2 12C2 17.51 6.49 22 12 22C17.51 22 22 17.51 22 12C22 6.49 17.51 2 12 2ZM16.35 15.57C16.21 15.81 15.96 15.94 15.7 15.94C15.57 15.94 15.44 15.91 15.32 15.83L12.22 13.98C11.45 13.52 10.88 12.51 10.88 11.62V7.52C10.88 7.11 11.22 6.77 11.63 6.77C12.04 6.77 12.38 7.11 12.38 7.52V11.62C12.38 11.98 12.68 12.51 12.99 12.69L16.09 14.54C16.45 14.75 16.57 15.21 16.35 15.57Z"
                  fill="#0096DB"
                />
              </svg>
              123 часов теории
            </div>
            {/* INFO TWO */}
            <div className="flex gap-[6px] bg-white rounded-[12px] py-[11px] px-[16px] font-semibold text-[16px] leading-[140%] text-[#292D32]">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.19C2 19.83 4.17 22 7.81 22H16.19C19.83 22 22 19.83 22 16.19V7.81C22 4.17 19.83 2 16.19 2ZM9.97 14.9L7.72 17.15C7.57 17.3 7.38 17.37 7.19 17.37C7 17.37 6.8 17.3 6.66 17.15L5.91 16.4C5.61 16.11 5.61 15.63 5.91 15.34C6.2 15.05 6.67 15.05 6.97 15.34L7.19 15.56L8.91 13.84C9.2 13.55 9.67 13.55 9.97 13.84C10.26 14.13 10.26 14.61 9.97 14.9ZM9.97 7.9L7.72 10.15C7.57 10.3 7.38 10.37 7.19 10.37C7 10.37 6.8 10.3 6.66 10.15L5.91 9.4C5.61 9.11 5.61 8.63 5.91 8.34C6.2 8.05 6.67 8.05 6.97 8.34L7.19 8.56L8.91 6.84C9.2 6.55 9.67 6.55 9.97 6.84C10.26 7.13 10.26 7.61 9.97 7.9ZM17.56 16.62H12.31C11.9 16.62 11.56 16.28 11.56 15.87C11.56 15.46 11.9 15.12 12.31 15.12H17.56C17.98 15.12 18.31 15.46 18.31 15.87C18.31 16.28 17.98 16.62 17.56 16.62ZM17.56 9.62H12.31C11.9 9.62 11.56 9.28 11.56 8.87C11.56 8.46 11.9 8.12 12.31 8.12H17.56C17.98 8.12 18.31 8.46 18.31 8.87C18.31 9.28 17.98 9.62 17.56 9.62Z"
                  fill="#0096DB"
                />
              </svg>
              360 часов практики
            </div>
            {/* INFO THREE */}
            <div className="flex gap-[6px] bg-white rounded-[12px] py-[11px] px-[16px] font-semibold text-[16px] leading-[140%] text-[#292D32]">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21 10H3C2.45 10 2 10.45 2 11V16.19C2 16.39 2.01 16.59 2.03 16.79C2.23 19.87 4.13 21.77 7.21 21.97C7.41 21.99 7.61 22 7.81 22H16.19C16.39 22 16.59 21.99 16.79 21.97C19.87 21.77 21.77 19.87 21.97 16.79C21.99 16.59 22 16.39 22 16.19V11C22 10.45 21.55 10 21 10ZM8 16.15C8.34 16.65 8.8 17.06 9.33 17.33C9.71 17.51 9.86 17.96 9.67 18.34C9.54 18.6 9.27 18.75 9 18.75C8.89 18.75 8.77 18.72 8.67 18.67C7.89 18.29 7.23 17.7 6.76 16.99C6.36 16.39 6.36 15.61 6.76 15.01C7.23 14.3 7.89 13.71 8.67 13.33C9.04 13.14 9.49 13.29 9.67 13.66C9.86 14.04 9.71 14.49 9.33 14.67C8.8 14.94 8.34 15.35 8 15.85C7.94 15.94 7.94 16.06 8 16.15ZM17.45 16.99C16.97 17.7 16.31 18.29 15.54 18.67C15.43 18.72 15.32 18.75 15.21 18.75C14.93 18.75 14.67 18.6 14.54 18.34C14.35 17.96 14.5 17.51 14.87 17.33C15.41 17.06 15.87 16.65 16.2 16.15C16.27 16.06 16.27 15.94 16.2 15.85C15.87 15.35 15.41 14.94 14.87 14.67C14.5 14.49 14.35 14.04 14.54 13.66C14.72 13.29 15.17 13.14 15.54 13.33C16.31 13.71 16.97 14.3 17.45 15.01C17.85 15.61 17.85 16.39 17.45 16.99Z"
                  fill="#0096DB"
                />
                <path
                  d="M22 7.81V8C22 8.55 21.55 9 21 9L3 9.01C2.45 9.01 2 8.56 2 8.01V7.81C2 7.61 2.01 7.41 2.03 7.21C2.23 4.13 4.13 2.23 7.21 2.03C7.41 2.01 7.61 2 7.81 2H16.19C16.39 2 16.59 2.01 16.79 2.03C19.87 2.23 21.77 4.13 21.97 7.21C21.99 7.41 22 7.61 22 7.81Z"
                  fill="#0096DB"
                />
              </svg>
              56 проектов
            </div>
          </div>
        </div>
      </div>

      {/* Semester content */}
      <div className="w-full flex flex-col gap-[32px]">
        {Object.entries(groupedSubjects).map(([semester, subjects]) => {
          const chunked = [];
          for (let i = 0; i < subjects.length; i += subjects.length) {
            chunked.push(subjects.slice(i, i + subjects.length));
          }

          return (
            <div key={semester} className="flex flex-col gap-[24px]">
              <h3 className="py-[8px] px-[14px] bg-primary text-white rounded-[12px] self-start">
                {t("semester", { semester })}
              </h3>

              {chunked.map((chunk, idx) => {
                return (
                  <ul className="flex flex-col gap-[16px]" key={idx}>
                    {chunk.map((subject) => (
                      <li
                        key={subject.uuid}
                        className="flex flex-col gap-[8px] md:py-[24px] py-[8px] md:px-[30px] px-[15px]  bg-white md:rounded-[25px] rounded-[10px] transition-colors group cursor-pointer hover:bg-[#CEDAE0]"
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleExpand("subject", subject.uuid);
                        }}
                      >
                        <div className="w-full flex justify-between max-sm:gap-[5px] items-center">
                          <div className="flex flex-col">
                            <div className="flex items-center">
                              <h4 className="md:text-[24px] text-[16px] font-semibold ">
                                {subject.translations[locale].name}
                              </h4>
                            </div>
                            {expandedStates.subjects[subject.uuid] && (
                              <div className="flex flex-col gap-[15px]">
                                <p className="md:text-[18px] text-[14px] text-[#666666]">
                                  {subject.translations[locale].description}
                                </p>
                                <p className="md:text-[18px] text-[14px] text-primary">
                                  {subject.credits} {credits("credits")}
                                </p>
                              </div>
                            )}
                          </div>

                          <div className="rounded-full md:w-[50px] w-[20px] md:h-[50px] h-[20px] bg-[#F4F4F4] group-hover:bg-primary transition-colors flex items-center justify-center">
                            <svg
                              className={`md:w-[28px] w-[20px] md:h-[28px] h-[14px] transition-transform ${
                                expandedStates.subjects[subject.uuid]
                                  ? "rotate-180"
                                  : ""
                              }`}
                              viewBox="0 0 28 28"
                              fill="none"
                            >
                              <path
                                d="M5.25 10L14 18.75L22.75 10"
                                stroke="white"
                                strokeWidth="3"
                                strokeLinecap="round"
                                className="stroke-[#292D32] group-hover:stroke-white"
                              />
                            </svg>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                );
              })}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default SixthSection;
