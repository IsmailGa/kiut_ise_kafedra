import React, { useState, useEffect } from "react";
import { useLocale, useTranslations } from "next-intl";
import {
  Education,
  Publication,
  ResearchInterest,
  Teacher,
  WorkExperience,
} from "@/types/teachers";

const links = [
  "education",
  "work_experience",
  "research_interests",
  "publications",
];
const dataKeys: (keyof Teacher)[] = [
  "educations",
  "work_experiences",
  "research_interests",
  "publications",
];

type Props = {
  data: Teacher | null;
};

type ContentItem =
  | (Education & { from_date?: string; to_date?: string })
  | (WorkExperience & { from_date?: string; to_date?: string })
  | Publication
  | ResearchInterest;

const formatDate = (dateString: string | undefined, locale: string): string => {
  if (!dateString) return "";
  const date = new Date(dateString);
  if (isNaN(date.getTime())) return "";

  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
  };

  return date.toLocaleDateString(locale, options);
};

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
  const [loading, setLoading] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const locale = useLocale();
  const t = useTranslations("teachers.history");

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleItemClick = (index: number) => {
    setIsActive(index);
    setIsDropdownOpen(false);
  };

  useEffect(() => {
    if (data) setLoading(false);
  }, [data]);

  const content: ContentItem[] =
    (data?.[dataKeys[isActive]] as ContentItem[]) || [];

  return (
    <div className="flex flex-col mt-14">
      <h1 className="text-black font-semibold text-5xl leading-[76px]">
        {t("title")}
      </h1>
      <div className="mt-10 relative">
        {isMobile ? (
          <>
            <button
              className="flex justify-between items-center w-full bg-white border border-gray-300 rounded-xl px-6 py-3"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              <span>{t(`links.${links[isActive]}`)}</span>
              <svg
                className={`w-4 h-4 transition-transform ${
                  isDropdownOpen ? "rotate-180" : ""
                }`}
                viewBox="0 0 24 24"
              >
                <path fill="currentColor" d="M7 10l5 5 5-5z" />
              </svg>
            </button>

            {isDropdownOpen && (
              <div className="absolute w-full mt-2 bg-white border border-gray-300 rounded-xl shadow-lg z-10">
                {links.map((link, index) => (
                  <button
                    key={index}
                    className={`w-full text-left px-6 py-3 hover:bg-gray-100 ${
                      isActive === index ? "bg-primary text-white" : ""
                    }`}
                    onClick={() => handleItemClick(index)}
                  >
                    {t(`links.${link}`)}
                  </button>
                ))}
              </div>
            )}
          </>
        ) : (
          <div className="flex gap-4">
            {links.map((link, index) => (
              <button
                key={index}
                className={`text-center text-black h-12 px-6 outline-0 rounded-xl border border-gray-300 ${
                  isActive === index ? "bg-primary text-white" : ""
                }`}
                onClick={() => setIsActive(index)}
              >
                {t(`links.${link}`)}
              </button>
            ))}
          </div>
        )}
      </div>
      <div className="mt-10">
        {loading ? (
          <SkeletonLoader />
        ) : content.length > 0 ? (
          content.map((item, index) => {
            let title = "";
            let subtitle = "";
            let dateRange = "";

            switch (dataKeys[isActive]) {
              case "educations": {
                const education = item as Education;
                //@ts-expect-error-notypecheck
                title = education.translations?.[locale]?.place || "";
                //@ts-expect-error-notypecheck
                subtitle = education.translations?.[locale]?.degree || "";

                const eduFromDate = formatDate(education.from_date, locale);
                const eduToDate = formatDate(education.to_date, locale);
                dateRange =
                  eduFromDate && eduToDate
                    ? `${eduFromDate} - ${eduToDate}`
                    : "";
                break;
              }
              case "work_experiences": {
                const workExp = item as WorkExperience;
                //@ts-expect-error-notypecheck
                title = workExp.translations?.[locale]?.role || "";
                //@ts-expect-error-notypecheck
                subtitle = workExp.translations?.[locale]?.place || "";

                const workFromDate = formatDate(workExp.from_date, locale);
                const workToDate = formatDate(workExp.to_date, locale);
                dateRange =
                  workFromDate && workToDate
                    ? `${workFromDate} - ${workToDate}`
                    : "";
                break;
              }
              case "research_interests": {
                const research = item as ResearchInterest;
                //@ts-expect-error-notypecheck
                title = research.translations?.[locale]?.title || "";
                break;
              }
              case "publications": {
                const publication = item as Publication;
                title = publication.title || "";
                break;
              }
            }

            return (
              <div
                key={index}
                className="flex flex-col sm:flex-row items-center justify-between py-7 border-b border-gray-300"
              >
                <h1 className="text-3xl font-semibold text-black max-w-[434px] mb-2 sm:mb-0 max-md:self-start">
                  {title}
                </h1>
                <div className="flex flex-col sm:flex-row items-start max-md:self-start md:items-center gap-4 ">
                  {subtitle && (
                    <p className="text-lg text-black max-w-[520px]">
                      {subtitle}
                    </p>
                  )}
                  {dateRange && (
                    <span className="text-lg text-gray-500">({dateRange})</span>
                  )}
                </div>
              </div>
            );
          })
        ) : (
          <p className="text-lg text-black max-w-[520px]">{t("no_data")}</p>
        )}
      </div>
    </div>
  );
};

export default History;
