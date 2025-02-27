import React from "react";
import { NewsCard } from "./NewsCard";

const NewsList = () => {
  return (
    <div className="flex flex-col w-full items-center gap-[32px] mt-[64px]">
        <NewsCard />
        <NewsCard />
        <NewsCard />
    </div>
  );
};

export default NewsList;
