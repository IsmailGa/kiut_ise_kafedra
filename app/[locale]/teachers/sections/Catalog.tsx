"use client";
import TeacherCard from "./TeacherCard";
import { useEffect, useState } from "react";
import { TeachersType } from "@/types/teachers";
import api from "@/api/axios";

const Teachers = () => {
  const [teachers, setTeachers] = useState<TeachersType>([]);

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
        {teachers.map((teacher) => (
          <TeacherCard key={teacher.uuid} teacher={teacher} />
        ))}
      </div>
    </section>
  );
};

export default Teachers;
