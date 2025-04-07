"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import Container from "@/components/container";
import { Link } from "@/navigation";
import { Teacher, Translations } from "@/types/teachers";
import api from "@/api/axios";
import Navbar from "@/components/navbar";
import { useLocale, useTranslations } from "next-intl";
import Loader from "@/components/loader";
import TeacherInfo from "./sections/info";

const Error = () => (
  <div className="h-screen w-screen fixed top-0 left-0 bg-white z-[9999] flex items-center justify-center">
    <Container>
      <div className="w-full flex flex-col items-center">
        <h1 className="text-center text-[56px] font-bold">Teacher not found</h1>
        <Link
          href="/teachers"
          className="text-center text-primary flex gap-[12px] text-[30px] font-semibold leading-[135%]"
        >
          Back
        </Link>
      </div>
    </Container>
  </div>
);

const Teachers = ({ params }: { params: { teachersId: string } }) => {
  const locale = useLocale();
  const t = useTranslations("teachers");
  const [data, setData] = React.useState<Teacher | null>(null);
  const [error, setError] = React.useState(null);
  const [isLoading, setLoading] = React.useState(true);

  const fullName = data?.translations[locale as keyof Translations]?.full_name;
  const role = data?.translations[locale as keyof Translations]?.role;
  const biography = data?.translations[locale as keyof Translations]?.biography;

  const teachersId = params.teachersId;
  useEffect(() => {
    setLoading(true);
    api
      .get("/teachers/" + teachersId)
      .then((response) => {
        setData(response.data);
      })
      .catch((err) => {
        setError(err.message);
        console.error("Error fetching teachers:", err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [teachersId]);

  if (isLoading) {
    return <Loader />;
  }

  if (data && data.uuid !== params.teachersId) {
    return <Error />;
  }

  return (
    <div className="w-full flex flex-col items-center justify-center">
      <Navbar />
      <div className="w-full mt-[70px]">
        <Container>
          {/* INFO ABOUT TEACHER */}
          <div className="flex max-lg:flex-col items-stretch gap-[30px] mt-[25px]">
            {/* LEFT SIDE */}
            <div className="flex flex-col">
              <Image
                src={
                  error || !data?.image
                    ? ""
                    : `http://ai.kiut.uz/${data?.image}`
                }
                alt={fullName || "Teacher profile"} // Added alt text
                width={350}
                height={370}
                loading="lazy"
                className="max-w-[100%] max-h-[370px] shrink-0 aspect-[1/1] object-contain rounded-[20px] border border-solid"
                onError={() => setError(null)}
              />
            </div>

            {/* RIGHT SIDE */}
            {data ? (
              <div className="flex flex-col flex-1">
                {/* NAME */}
                <h1 className="font-semibold leading-[55px] text-[40px]">
                  {fullName}
                </h1>
                {/* Job Title */}
                <h2 className="text-[#666666] text-[18px] leading-[25px] font-normal">
                  {role}
                </h2>
                <span className="w-full h-[1px] bg-[#CEDAE0] mt-[16px] mb-[10px]"></span>
                {/* Bio */}
                <div className="flex flex-col gap-[8px]">
                  <h1 className="text-black text-[20px] leading-[27px] font-medium">
                    {t("biography")}
                  </h1>
                  {biography ? (
                    <div className="text-[#666666] text-[16px] font-normal leading-[165%]">
                      {biography}
                    </div>
                  ) : (
                    <p>Нет данных</p>
                  )}
                </div>
              </div>
            ) : (
              <Error />
            )}
          </div>
          <TeacherInfo data={data ?? null} />
        </Container>
      </div>
    </div>
  );
};

export default Teachers;
