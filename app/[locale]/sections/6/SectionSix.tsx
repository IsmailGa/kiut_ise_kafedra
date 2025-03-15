"use client";
import api from "@/api/axios";
import { NewsItem } from "@/types/new";
import Image from "next/image";
import { ArrowRight, ArrowLeft, CalendarIcon, ClockIcon } from "@/public/icons";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import { useLocale, useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import Loader from "@/components/loader";
import { Link } from "@/navigation";

const SectionSix = () => {
  const t = useTranslations("header");
  const [news, setNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const locale = useLocale();

  useEffect(() => {
    const controller = new AbortController();

    const fetchNews = async () => {
      try {
        const response = await api.get("/announcements", {
          signal: controller.signal,
        });
        setNews(response.data);
      } catch (err) {
        if (!controller.signal.aborted) {
          console.error("Ошибка загрузки новостей:", err);
          setError("Не удалось загрузить новости. Попробуйте позже.");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchNews();

    return () => controller.abort();
  }, []);

  if (error) return <div className="text-red-500">{error}</div>;

  return (
    <section className="w-full flex flex-col 2xl:mt-[120px] mt-[95px] 2xl:gap-[65px] gap-[45px]">
      <div className="flex justify-between items-center w-full">
        <h1 className="2xl:text-[56px] xl:text-[40px] lg:text-[32px] text-[22px] font-semibold">
          {t("news")}
        </h1>
        <div className="flex items-center gap-[10px]">
          <button className="swiper-button-prev bg-[#F4F4F4] rounded-[10px] w-[45px] h-[45px] flex items-center justify-center">
            <ArrowLeft color="#666666" />
          </button>
          <div className="swiper-pagination min-w-[32px] flex justify-center" />
          <button className="swiper-button-next bg-primary rounded-[10px] w-[45px] h-[45px] flex items-center justify-center">
            <ArrowRight color="#FFFFFF" />
          </button>
        </div>
      </div>

      <div className="w-full">
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={30}
          slidesPerView="auto"
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          pagination={{
            el: ".swiper-pagination",
            type: "fraction",
          }}
          breakpoints={{
            320: { slidesPerView: 1, spaceBetween: 20 },
            768: { slidesPerView: 2, spaceBetween: 30 },
            1024: { slidesPerView: 3, spaceBetween: 40 },
          }}
        >
          {loading
            ? [...Array(3)].map((_, i) => (
                <SwiperSlide key={i}>
                  <Loader />
                </SwiperSlide>
              ))
            : news.map((item) => {
                const date = new Date(item.created_at);

                return (
                  <SwiperSlide key={item.uuid}>
                    <div className="rounded-[25px] overflow-hidden flex flex-col w-full max-w-[430px] h-[432px]">
                      <div className="relative w-full h-[200px]">
                        <Link href={`/news/${item.uuid}`}>
                          <Image
                            src={
                              item.images[0]
                                ? `http://ai.kiut.uz/${item.images[0]}`
                                : "/placeholder.jpg"
                            }
                            alt={
                              item.translations[locale]?.title || "News image"
                            }
                            fill
                            className="object-cover rounded-t-[25px] hover:blur-sm transition"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          />
                        </Link>
                      </div>
                      <div className="flex flex-col border-[1px] border-[#CEDAE0] p-[25px] rounded-b-[25px] gap-[20px]">
                        <div className="flex flex-col gap-[15px]">
                          <Link href={`/news/${item.uuid}`}>
                            <h3 className="font-semibold 2xl:text-[25px] text-[20px] leading-[135%] line-clamp-2">
                              {item.translations[locale]?.title || "No title"}
                            </h3>
                          </Link>

                          <p className="font-normal text-[16px] leading-[135%] line-clamp-3">
                            {item.translations[locale]?.description ||
                              "No description"}
                          </p>
                        </div>
                        <div className="flex gap-[15px]">
                          <div className="flex gap-[5px] items-center">
                            <CalendarIcon />
                            <span>
                              {date.toLocaleDateString("ru-RU", {
                                day: "2-digit",
                                month: "short",
                                year: "numeric",
                              })}
                            </span>
                          </div>
                          <div className="flex gap-[5px] items-center">
                            <ClockIcon />
                            <span>
                              {date.toLocaleTimeString("ru-RU", {
                                hour: "2-digit",
                                minute: "2-digit",
                              })}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
        </Swiper>
      </div>
    </section>
  );
};

export default SectionSix;
