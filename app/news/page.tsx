import Navbar from "@/components/navbar2";
import { SearchIcon } from "@/public/icons";
import NewsList from "./components/NewsList";
import React from "react";
import Container from "@/components/container";

const News = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-[50vh] w-full flex flex-col justify-end bg-[#F8F8F8] pb-[56px]">
        <div className="w-full flex flex-col items-center">
          <h1 className="text-[#000000] text-[56px] leading-[120%] font-medium">
            Новости
          </h1>
          <p className="font-medium text-[18px] leading-[125%] mt-[24px] mb-[32px]">
            Самое свежее о мире инноваций и технологий
          </p>
          <label className="bg-[#66666610] flex py-[21px] px-[30px] max-w-[529px] w-full rounded-[15px]">
            <input
              placeholder="Поиск"
              type="text"
              className="bg-transparent border-none outline-none w-full"
            />
            <SearchIcon />
          </label>
        </div>
      </div>
      <Container>
        <NewsList />
      </Container>
    </>
  );
};

export default News;
