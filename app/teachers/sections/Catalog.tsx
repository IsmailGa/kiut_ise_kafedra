import TeacherCard from "./TeacherCard";

const Teachers = () => {
    return (
        <section className="w-full flex flex-col mt-[64px]">
            <div className="grid grid-cols-2 items-center flex-col gap-[30px] mb-[45px]">
                <TeacherCard/>
                <TeacherCard/>
                <TeacherCard/>
                <TeacherCard/>
            </div>
        </section>
    );
};

export default Teachers;
