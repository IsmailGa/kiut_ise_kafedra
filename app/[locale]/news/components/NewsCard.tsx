import Image from "next/image";
import { CalendarIcon, ClockIcon } from "@/public/icons";
import { NewsItem } from "@/types/new";
import { Link } from "@/navigation";

interface NewsCardProps {
  news: NewsItem;
}

export function NewsCard({ news }: NewsCardProps) {
  const { title, description } = news.translations.uz;
  const formattedDate = new Date(news.created_at).toLocaleDateString("ru-RU", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
  const formattedTime = new Date(news.created_at).toLocaleTimeString("ru-RU", {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <div className="flex w-full items-stretch rounded-[25px] border-[#CEDAE0] border-[1px] overflow-hidden max-h-[341px]">
      <Image
        src={`http://ai.kiut.uz/${news.images[0]}`}
        alt="news"
        className="w-full object-cover flex-1"
        width={350}
        height={200}
      />
      {/* RIGHT SIDE */}
      <div className="flex flex-col justify-between p-[25px] flex-1">
        <div className="flex flex-col gap-[16px] text-ellipsis ">
          <h2 className="text-[24px] leading-[135%] font-semibold line-clamp-1">
            {title}
          </h2>
          <p className="font-normal text-[18px] leading-[145%] text-black line-clamp-6">
            {description}
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
            href={`/news/${news.uuid}`}
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
    <div className="grid grid-cols-1 gap-[32px]">
      {[...Array(4)].map((_, i) => (
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
