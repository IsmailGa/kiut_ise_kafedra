import { useState } from "react";
import Image from "next/image";
import teacher_img from "public/assets/teacher.png";
import { Teacher, Translations } from "@/types/teachers";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";

type Props = {
  teacher: Teacher;
};

const TeacherCard = ({ teacher }: Props) => {
  const t = useTranslations("main.sectionThree");
  const locale = useLocale();
  const fullName =
    teacher.translations[locale as keyof Translations]?.full_name;
  const role = teacher.translations[locale as keyof Translations]?.role;
  const [imageError, setImageError] = useState(false);

  return (
    <div className="flex flex-1 flex-col h-full 2xl:p-[25px] p-[20px] 2xl:gap-[25px] gap-[20px] 2xl:rounded-[25px] rounded-[20px] bg-[#F4F4F4]/65 relative group">
      <div className="flex-1 aspect-square">
        <Image
          src={
            imageError || !teacher.image
              ? teacher_img
              : `http://ai.kiut.uz/${teacher.image}`
          }
          alt={fullName}
          className="w-full h-full object-cover rounded-2xl"
          width="200"
          height="200"
          priority
          onError={() => setImageError(true)}
        />
      </div>
      <div className="flex flex-1 flex-col justify-between overflow-hidden">
        <div className="h-full flex flex-col justify-between gap-[16px]">
          <div className="flex flex-col gap-[16px]">
            <div className="flex-col gap-[8px] pb-[16px] border-b-[1px] border-[#CEDAE0]">
              <h3 className="2xl:text-[24px] text-[20px] font-semibold">{fullName}</h3>
              <h5 className="text-[16px] font-medium text-[#666666]">{role}</h5>
            </div>
            <div className="flex flex-col gap-[8px]">
              <div className="text-[18px] font-medium">{teacher.email}</div>
              <div className="text-[18px] font-medium">
                Пн - Сб, 10:30 - 18:00
              </div>
            </div>
          </div>
          <Link
            href={`teachers/${teacher.uuid}`}
            scroll={false}
            className="flex items-center justify-between transition-all duration-200 ease-in-out h-[48px] hover:bg-primary hover:border-none rounded-[15px] hover:text-white border-[1px] border-[#CEDAE0] hover:fill-black text-[18px] text-black px-[24px]"
          >
            {/* Button is from locales/[lang].json in main.sectionThree*/}
            <span>{t("button")}</span>
            <svg
              width="19"
              height="15"
              viewBox="0 0 19 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 6.6C0.502944 6.6 0.1 7.00294 0.1 7.5C0.1 7.99706 0.502944 8.4 1 8.4V6.6ZM18.6364 8.1364C18.9879 7.78492 18.9879 7.21508 18.6364 6.8636L12.9088 1.13604C12.5574 0.784567 11.9875 0.784567 11.636 1.13604C11.2846 1.48751 11.2846 2.05736 11.636 2.40883L16.7272 7.5L11.636 12.5912C11.2846 12.9426 11.2846 13.5125 11.636 13.864C11.9875 14.2154 12.5574 14.2154 12.9088 13.864L18.6364 8.1364ZM1 8.4H18V6.6H1V8.4Z"
                fill="currentColor"
              />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TeacherCard;
