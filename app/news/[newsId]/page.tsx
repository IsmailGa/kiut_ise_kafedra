import Container from "@/components/container";
import Navbar from "@/components/navbar2";
import { BlueLArrowIcon } from "@/public/icons";
import Link from "next/link";
import React from "react";

const NewsInfo = () => {
  return (
    <>
      <Navbar />
      <div className="w-full mt-[165px]">
        <Container>
          <div className="w-full flex flex-col">
            <Link
              href="/news"
              className="text-primary flex gap-[12px] items-center text-[18px] font-semibold leading-[135%] self-start"
            >
              <BlueLArrowIcon /> Все новости
            </Link>
          </div>
        </Container>
      </div>
    </>
  );
};

export default NewsInfo;
