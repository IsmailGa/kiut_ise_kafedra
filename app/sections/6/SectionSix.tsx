"use client";
import React, { useEffect, useState } from "react";
import japan_bg from "@/public/assets/section_six/japan_bg.jpg";
import Image from "next/image";
import { ArrowRight, ArrowLeft } from "@/public/icons";
import api from "@/api/axios";
import { NewsItem } from "@/types/new";
import Link from "next/link";

const SectionSix = () => {
  const [count, setCount] = useState(1);
  const [news, setNews] = useState<NewsItem[]>([]);
  const maxCount = 5;
  const minCount = 1;

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await api.get("/announcements");
        setNews(response.data);
      } catch (error) {
        console.error("Failed to fetch news:", error);
      }
    };

    fetchNews();
  }, []);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await api.get("/announcements");
        setNews(response.data);
      } catch (error) {
        console.error("Failed to fetch news:", error);
      }
    };

    fetchNews();
  }, []);

  return (
    <section className="w-full flex flex-col mt-[120px] gap-[65px]">
      <div className="flex justify-between items-center w-full">
        <h1 className="text-[56px] font-semibold">Новости</h1>
        {news.length > 3 && (
          <div className="flex items-center gap-[10px] mt-[70px]">
            <button
              className="flex w-[45px] h-[45px] items-center justify-center bg-white rounded-[10px]"
              onClick={() => setCount(Math.max(count - 1, minCount))}
            >
              <ArrowLeft color="#666666" />
            </button>
            <span className="block">{count}/5</span>
            <button
              className="bg-primary rounded-[10px] relative border-0 w-[45px] h-[45px] flex flex-col items-center justify-center"
              onClick={() => setCount(Math.min(count + 1, maxCount))}
            >
              <ArrowRight color="#FFFFFF" />
            </button>
          </div>
        )}
      </div>
      {/* CARDS */}
      <div className="flex items-stretch gap-[30px] ">
        {news.slice((count - 1) * 3, count * 3).map((item) => (
          <div
            key={item.uuid}
            className="rounded-[25px] overflow-hidden flex flex-col w-full max-w-[416px] border-[1px] border-[#CEDAE0]"
          >
            <Link
              href={`/news/${item.uuid}`}
              className="relative w-full h-[200px]"
            >
              <Image
                src={`http://ai.kiut.uz/${item.images[0]}`}
                alt="news img"
                fill
                className="object-cover rounded-t-[25px] max-h-[200px] "
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </Link>
            <div className="flex flex-col  p-[25px] rounded-b-[25px] gap-[20px]">
              <div className="self-start border-[1px] border-[#CEDAE0]  rounded-[10px]  py-[7px] px-[15px]">
                {new Date(item.created_at).toLocaleDateString("ru-RU", {
                  day: "2-digit",
                  month: "short",
                  year: "numeric",
                })}
              </div>
              <div className="flex flex-col gap-[15px]">
                <h1 className="font-semibold text-[25px] max-w-[366px] leading-[135%] line-clamp-2">
                  {item.title}
                </h1>
                <p className="font-normal text-[16px] leading-[135%] line-clamp-2">
                  {item.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SectionSix;
