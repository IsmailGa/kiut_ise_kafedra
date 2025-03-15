"use client";
import TeacherCard from "./TeacherCard";

import { useEffect, useMemo, useState } from "react";
import { TeachersType } from "@/types/teachers";
import api from "@/api/axios";

const Teachers = () => {
  const [teachers, setTeachers] = useState<TeachersType>([]);
  const [isOpen, setOpen] = useState(false);

  const teachersFiltered = useMemo(() => teachers.slice(0, 4), [teachers]);
  useEffect(() => {
    api
      .get("/teachers")
      .then((res) => {
        setTeachers(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <section className="w-full flex flex-col mt-[64px]">
      <div className="grid lg:grid-cols-2 grid-cols-1 items-center flex-col gap-[30px] mb-[45px]">
        {teachers.length > 0 &&
          (isOpen
            ? teachers.map((teacher) => (
                <TeacherCard key={teacher.uuid} teacher={teacher} />
              ))
            : teachersFiltered.map((teacher) => (
                <TeacherCard key={teacher.uuid} teacher={teacher} />
              )))}
      </div>
      <button
        className="transition-all duration-200 ease-in-out h-[48px] hover:bg-transparent bg-primary rounded-[15px] hover:text-black text-white hover:border-[1px] hover:border-[#CEDAE0] text-[18px] text-center px-[24px] max-w-[400px] w-full self-center"
        onClick={() => {
          setOpen(!isOpen);
        }}
      >
        Toggle
      </button>
    </section>
  );
};

export default Teachers;
