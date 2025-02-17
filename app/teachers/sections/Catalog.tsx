"use client";
import TeacherCard from "./TeacherCard";

import { useEffect, useState } from "react";
import { teacherService } from "@/app/services/teacherService";

export type teacher = {
    uuid: string;
    full_name: string;
    email: string;
    role: string;
    scopus_link?: string;
    image?: string;
    research_interests?: string[];
    publications?: string[];
    work_experiences?: string[];
    educations?: string[];
  };

const Teachers = () => {
    const [teachers, setTeachers] = useState<teacher[]>([]);

    useEffect(() => {
        teacherService.getAllTeachers().then(setTeachers);
    }, []);
    return (
        <section className="w-full flex flex-col mt-[64px]">
            <div className="grid grid-cols-2 items-center flex-col gap-[30px] mb-[45px]">
            {teachers.map((teacher) => (
                <TeacherCard key={teacher.uuid} teacher={teacher} />
            ))}
            </div>
        </section>
    );
};

export default Teachers;
