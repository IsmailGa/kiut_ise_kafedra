"use client";
import Image from "next/image";
import profileTeacher from "@/public/assets/teacher_profile.png";
import React, { useEffect } from "react";
import Container from "@/components/container";
import Link from "next/link";
import History from "./sections/history";
import { Teacher } from "@/types/teachers";
import api from "@/api/axios";
import Navbar from "@/components/navbar";

const SkeletonLoader = () => (
  <div className="flex flex-col flex-1 animate-pulse">
    <div className="h-10 w-2/3 bg-gray-300 rounded-md"></div>
    <div className="h-6 w-1/2 bg-gray-300 rounded-md mt-2"></div>
    <div className="w-full h-[1px] bg-gray-300 mt-[16px] mb-[10px]"></div>
    <h1 className="text-black text-[20px] leading-[27px] font-medium mb-[16px]">
      Biography
    </h1>
    <div className="h-28 bg-gray-300 rounded-md"></div>
  </div>
);

const Teachers = ({ params }: { params: { teachersId: string } }) => {
  const [data, setData] = React.useState<Teacher | null>(null);
  const [error, setError] = React.useState(null);

  useEffect(() => {
    api
      .get("/teachers/" + params.teachersId)
      .then((response) => {
        setData(response.data);
      })
      .catch((err) => {
        setError(err.message);
        console.error("Error fetching teachers:", err);
      });
  }, [params.teachersId]);

  useEffect(() => {
    console.log("Teachers Data:", data);
  }, [data]);

  if (params.teachersId !== data?.uuid) {
    return (
      <div className="h-screen flex items-center justify-center w-full">
        <Container>
          <div className="w-full flex flex-col items-center">
            <h1 className="text-center text-[56px] font-bold">
              Teacher not found
            </h1>
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
  }

  return (
    <div className="w-full flex flex-col items-center justify-center">
      <Navbar />
      <div className="w-full mt-[70px]">
        <Container>
          {/* INFO ABOUT TEACHER */}
          <div className="flex items-stretch gap-[30px] mt-[25px]">
            {/* LEFT SIDE */}
            <Image
              src={
                error || !data?.image
                  ? profileTeacher
                  : `http://ai.kiut.uz/${data?.image}`
              }
              alt={data?.full_name || "Teacher profile"} // Added alt text
              width={350}
              height={380}
              loading="lazy"
              className="max-w-[350px] shrink-0 aspect-[350/370] h-[100%] object-cover rounded-[20px] border border-solid"
              onError={() => setError(null)}
            />
            {/* RIGHT SIDE */}
            {data ? (
              <div className="flex flex-col flex-1">
                {/* NAME */}
                <h1 className="font-semibold leading-[55px] text-[40px]">
                  {data?.full_name}
                </h1>
                {/* Job Title */}
                <h2 className="text-[#666666] text-[18px] leading-[25px] font-normal">
                  {data?.role}
                </h2>
                <span className="w-full h-[1px] bg-[#CEDAE0] mt-[16px] mb-[10px]"></span>
                {/* Bio */}
                <div className="flex flex-col gap-[8px]">
                  <h1 className="text-black text-[20px] leading-[27px] font-medium">
                    Biography
                  </h1>
                  <p className="text-[#666666] text-[16px] font-normal leading-[165%]">
                    {data.biography ? data?.biography : "Нет данных"}
                  </p>
                </div>
              </div>
            ) : (
              <SkeletonLoader />
            )}
          </div>
          <History data={data ?? null} />
        </Container>
      </div>
    </div>
  );
};

export default Teachers;
