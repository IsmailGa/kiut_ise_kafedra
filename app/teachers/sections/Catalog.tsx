"use client";
import TeacherCard from "./TeacherCard";

import { useEffect, useState } from "react";
import { teacherService } from "@/app/services/teacherService";
import { TeachersType } from "@/types/teachers";

const Teachers = () => {
    const [teachers, setTeachers] = useState<TeachersType>([]);

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
