import React, { useState } from "react";
import { SearchIcon } from "@/public/icons";
import Container from "@/components/container";

interface BannerProps {
  onSearch: (query: string) => void;
}

const Banner = ({ onSearch }: BannerProps) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);
    onSearch(query);
  };

  return (
    <div className="bg-[#F4F4F465]">
      <Container>
        <div className="h-[470px] pt-[25px] flex flex-col w-full justify-end pb-14">
          <div className="flex flex-col items-center justify-center gap-[32px]">
            <div className="flex flex-col gap-6 items-center">
              <h1 className="text-black text-[56px] font-medium max-w-[430px] leading-[120%] flex-shrink-0">
                Новости
              </h1>
              <h2 className="text-[18px] font-medium leading-[135%] text-[#666666]">
                Самое свежее о мире инноваций и технологий
              </h2>
            </div>
            <div className="flex w-full max-w-[530px]">
              <label htmlFor="kiut_search" className="relative flex w-full">
                <input
                  type="text"
                  name="kiut_search"
                  placeholder="Поиск"
                  id="kiut_search"
                  value={searchQuery}
                  onChange={handleInputChange}
                  className="bg-[#F0F0F0] outline-none text-[#666666] placeholder:text-[#666666] text-[18px] font-medium w-full h-[55px] px-[30px] rounded-[15px]"
                />
                <div className="absolute flex right-[30px] top-[50%] translate-y-[-50%]">
                  <SearchIcon />
                </div>
              </label>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Banner;