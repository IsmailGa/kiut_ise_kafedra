import Image from "next/image";
import { CalendarIcon, ClockIcon } from "@/public/icons";
import { NewsItem } from "@/types/new";
import { Link } from "@/navigation";
import { useLocale, useTranslations } from "next-intl";

interface NewsCardProps {
  news: NewsItem;
}

const uzbekMonths = [
  "yanvar",
  "fevral",
  "mart",
  "aprel",
  "may",
  "iyun",
  "iyul",
  "avgust",
  "sentabr",
  "oktabr",
  "noyabr",
  "dekabr",
];

const formatDate = (dateString: string | undefined, locale: string): string => {
  if (!dateString) return "";
  const date = new Date(dateString);
  if (isNaN(date.getTime())) return "";

  if (locale === "uz") {
    const day = date.getDay();
    const month = uzbekMonths[date.getMonth()]; // Get the Uzbek month name
    const year = date.getFullYear();
    return `${day} ${month} ${year}`;
  }

  const options: Intl.DateTimeFormatOptions = {
    day: "2-digit",
    month: "short",
    year: "numeric",
  };

  return date.toLocaleDateString(locale, options);
};

export function NewsCard({ news }: NewsCardProps) {
  const t = useTranslations("");
  const locale = useLocale();
  const { title, description } = news.translations[locale];

  const formattedTime = new Date(news.created_at).toLocaleTimeString(locale, {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <div className="flex w-full items-stretch rounded-[25px] border-[#CEDAE0] border-[1px] overflow-hidden lg:max-h-[341px] h-full max-lg:flex-col">
      <Image
        src={`http://ai.kiut.uz/${news.images[0]}`}
        alt="news"
        className="w-full h-auto object-cover flex-1 aspect-video"
        width={350}
        height={200}
      />
      {/* RIGHT SIDE */}
      <div className="flex flex-col justify-between max-lg:gap-[20px] p-[25px] flex-1">
        <div className="flex flex-col gap-[16px] text-ellipsis ">
          <h2 className="text-[24px] leading-[135%] font-semibold line-clamp-1">
            {title}
          </h2>
          <p className="font-normal text-[18px] leading-[145%] text-black line-clamp-6">
            {description}
          </p>
        </div>

        <div className="flex justify-between sm:items-end max-sm:flex-col max-sm:gap-[20px]">
          <div className="flex gap-[15px] max-[350px]:flex-col">
            <div className="flex gap-[5px] items-center">
              <CalendarIcon />
              <span>{formatDate(news.created_at, locale)}</span>
            </div>
            <div className="flex gap-[5px] items-center">
              <ClockIcon />
              <span>{formattedTime}</span>
            </div>
          </div>
          <Link
            scroll={false}
            href={`/news/${news.uuid}`}
            className="text-[16px] font-semibold leading-[140%] px-[24px] py-[16px] bg-primary rounded-[15px] text-white text-center"
          >
            {t("button")}
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
