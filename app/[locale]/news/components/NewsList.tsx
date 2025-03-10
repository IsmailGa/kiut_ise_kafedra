"use client";
import api from "@/api/axios";
import React, { useEffect, useState } from "react";
import { NewsCard, NewsSkeletonLoader } from "./NewsCard";
import { NewsItem } from "@/types/new";

interface NewsListProps {
  searchQuery: string;
}

const NewsList = ({ searchQuery }: NewsListProps) => {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await api.get("/announcements");
        setNews(response.data);
      } catch (error) {
        console.error("Failed to fetch news:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  const filteredNews = news.filter(
    (item) =>
      item.translations.uz.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.translations.uz.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="mt-[64px]">
      {loading ? (
        <NewsSkeletonLoader />
      ) : (
        <div className="flex flex-col w-full items-center gap-[32px]">
          {filteredNews.map((item) => (
            <NewsCard key={item.uuid} news={item} />
          ))}
        </div>
      )}
    </div>
  );
};

export default NewsList;
