"use client";
import React, { useState, useEffect } from "react";
import {
  Teacher,
  Education,
  WorkExperience,
  Publication,
  ResearchInterest,
} from "@/types/teachers";

const links = ["Образование", "Опыт работы", "Достижения", "Научные статьи"];

const dataKeys: (keyof Teacher)[] = [
  "educations",
  "work_experiences",
  "publications",
  "research_interests",
];

type Props = {
  data: Teacher | null;
};

type ContentItem = Education | WorkExperience | Publication | ResearchInterest;

const SkeletonLoader = () => (
  <div className="animate-pulse space-y-4">
    {[...Array(3)].map((_, i) => (
      <div
        key={i}
        className="flex items-center justify-between py-7 border-b border-gray-300"
      >
        <div className="h-6 bg-gray-300 rounded w-1/3"></div>
        <div className="h-6 bg-gray-300 rounded w-1/4"></div>
      </div>
    ))}
  </div>
);

const History = ({ data }: Props) => {
  const [isActive, setIsActive] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (data) {
      setLoading(false);
    }
  }, [data]);

  const content: ContentItem[] =
    (data?.[dataKeys[isActive]] as ContentItem[]) || [];

  const renderTitle = (item: ContentItem) =>
    "title" in item ? item.title : item.place || "Unknown";

  return (
    <div className="flex flex-col mt-14">
      <h1 className="text-black font-semibold text-5xl leading-[76px]">
        История
      </h1>
      <div className="flex gap-4 mt-10">
        {links.map((link, index) => (
          <button
            key={index}
            className={`text-center text-black h-12 px-6 outline-0 rounded-xl border border-gray-300 ${
              isActive === index ? "bg-primary text-white" : ""
            }`}
            onClick={() => setIsActive(index)}
          >
            {link}
          </button>
        ))}
      </div>
      <div className="mt-10">
        {loading ? (
          <SkeletonLoader />
        ) : content.length > 0 ? (
          content.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-between py-7 border-b border-gray-300"
            >
              <h1 className="text-3xl font-semibold text-black max-w-[334px]">
                {renderTitle(item)}
              </h1>
              <p className="text-lg text-black max-w-[520px]">
                {"degree" in item ? item.degree : ""}
              </p>
            </div>
          ))
        ) : (
          <p className="text-lg text-black max-w-[520px]">Нет данных</p>
        )}
      </div>
    </div>
  );
};

export default History;
