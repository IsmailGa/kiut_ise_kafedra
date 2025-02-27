import Image from "next/image";
import example from "@/public/assets/news/example.png";
import Link from "next/link";
import { CalendarIcon, ClockIcon } from "@/public/icons";

export function NewsCard() {
  const formattedDate = new Date().toLocaleDateString("ru-RU", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
  const formattedTime = new Date().toLocaleTimeString("ru-RU", {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <div className="flex w-full items-stretch rounded-[25px] border-[#CEDAE0] border-[1px] overflow-hidden">
      <Image src={example} alt="news" className="w-full object-cover flex-1" />
      {/* RIGHT SIDE */}
      <div className="flex flex-col justify-between p-[25px] flex-1">
        <div className="flex flex-col gap-[16px] text-ellipsis">
          <h2 className="text-xl font-semibold mt-4">
            KIUT и Япония: новые горизонты сотрудничества
          </h2>
          <p className="text-gray-600 mt-2">
            Укрепляется сотрудничество Ташкентского международного университета
            Кимё с японскими компаниями. 30 сентября текущего года наш
            университет посетила делегация известной архитектурно – строительной
            компании Terumasagumi Co., во главе с её президентом Теруей Кейтой.
            Компания расположена в японской префектуре Окинава.
          </p>
        </div>

        <div className="flex justify-between items-end ">
          <div className="flex gap-[15px]">
            <div className="flex gap-[5px] items-center">
              <CalendarIcon />
              <span>{formattedDate}</span>
            </div>
            <div className="flex gap-[5px] items-center">
              <ClockIcon />
              <span>{formattedTime}</span>
            </div>
          </div>
          <Link
            href="/news/1"
            className="text-[16px] font-semibold leading-[140%] px-[24px] py-[16px] bg-primary rounded-[15px] text-white"
          >
            Подробнее
          </Link>
        </div>
      </div>
    </div>
  );
}

export function NewsSkeletonLoader() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {[...Array(6)].map((_, i) => (
        <div key={i} className="animate-pulse">
          <div className="bg-gray-300 h-48 rounded-lg"></div>
          <div className="h-6 bg-gray-300 rounded mt-4 w-3/4"></div>
          <div className="h-4 bg-gray-300 rounded mt-2 w-full"></div>
          <div className="h-4 bg-gray-300 rounded mt-2 w-1/4"></div>
        </div>
      ))}
    </div>
  );
}
