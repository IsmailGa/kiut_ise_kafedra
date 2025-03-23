"use client";
import Container from "@/components/container";
import Navbar from "@/components/navbar";
import { BlueLArrowIcon, CalendarIcon, ClockIcon } from "@/public/icons";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { NewsItem } from "@/types/new";
import { ArrowRight, ArrowLeft } from "@/public/icons";
import api from "@/api/axios";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import { Link } from "@/navigation";
import Loader from "@/components/loader";
import { useLocale } from "next-intl";

const NewsInfo = ({ params }: { params: { newsId: string } }) => {
  const [news, setNews] = useState<NewsItem | null>(null);
  const [allNews, setAllNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);
  const locale = useLocale();

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await api.get(`/announcements/${params.newsId}`);
        const secondRes = await api.get(`/announcements`);

        // Фильтрация текущей новости
        const filteredNews = secondRes.data.filter(
          (item: NewsItem) => item.uuid !== params.newsId
        );

        setNews(response.data);
        setAllNews(filteredNews);
      } catch (error) {
        console.error("Failed to fetch news:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, [params.newsId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!news) {
    return <div>News not found</div>;
  }

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
    <>
      <Navbar />
      <div className="w-full mt-[165px]">
        <Container>
          <div className="w-full flex flex-col">
            {/* BRIEF INFO */}
            <div className="w-full flex flex-col gap-[22px] border-b border-[#CEDAE0] pb-[36px]">
              <Link
                href="/news"
                className="text-primary flex gap-[12px] items-center text-[18px] font-semibold leading-[135%] self-start"
              >
                <BlueLArrowIcon /> Все новости
              </Link>
              <div className="flex flex-col gap-[18px]">
                <h1 className="text-[40px] font-semibold leading-[135%] max-sm:hyphens-manual">
                  {news.translations[locale].title}
                </h1>
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
              </div>
            </div>
            {/* INFO */}
            <div className="flex flex-col gap-[32px] border-b border-[#CEDAE0] mt-[36px] pb-[36px]">
              <Image
                src={`http://ai.kiut.uz/${news.images[0]}`}
                alt="example"
                className="object-cover w-full h-full aspect-video"
                width={2000}
                height={500}
              />
              <p className="text-[18px] font-normal leading-[145%]">
                {news.translations[locale].description}
              </p>
            </div>
            {/* LINKS */}
            <div className="w-full max-sm:flex-col flex justify-center items-center mt-[36px] text-[20px] font-semibold leading-[145%] gap-[16px]">
              <p>Поделиться новостью:</p>
              <div className="flex gap-[16px]">
                <p className="cursor-pointer">Telegram</p>
                <span className="bg-[#CEDAE0] h-[30px] w-[2px] block"></span>
                <p className="cursor-pointer">Ссылка</p>
              </div>
            </div>
            {/* NEWS */}
            <section className="w-full flex flex-col 2xl:mt-[120px] mt-[95px] 2xl:gap-[65px] gap-[45px]">
              <div className="flex justify-between items-center w-full">
                <h1 className="2xl:text-[56px] xl:text-[40px] lg:text-[32px] font-semibold">
                  Другие Новости
                </h1>
                <div className="flex items-center gap-[10px]">
                  <button className="flex w-[45px] h-[45px] items-center justify-center bg-[#F4F4F4] rounded-[10px] swiper-button-prev">
                    <ArrowLeft color="#666666" />
                  </button>
                  <div className="flex justify-center swiper-pagination min-w-[32px]">
                    0/0
                  </div>
                  <button className="bg-primary rounded-[10px] relative border-0 w-[45px] h-[45px] flex flex-col items-center justify-center swiper-button-next">
                    <ArrowRight color="#FFFFFF" />
                  </button>
                </div>
              </div>
              {/* Swiper Slider */}
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
                    : allNews.map((item) => {
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
                                      item.translations[locale]?.title ||
                                      "News image"
                                    }
                                    fill
                                    className="object-cover rounded-t-[25px]"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                  />
                                </Link>
                              </div>
                              <div className="flex flex-col border-[1px] border-[#CEDAE0] p-[25px] rounded-b-[25px] gap-[20px]">
                                <div className="flex flex-col gap-[15px]">
                                  <h3 className="font-semibold 2xl:text-[25px] text-[20px] leading-[135%] line-clamp-2">
                                    {item.translations[locale]?.title ||
                                      "No title"}
                                  </h3>
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
          </div>
        </Container>
      </div>
    </>
  );
};

export default NewsInfo;
