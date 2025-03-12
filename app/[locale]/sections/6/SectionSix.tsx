"use client";
import japan_bg from "@/public/assets/section_six/japan_bg.jpg";
import Image from "next/image";
import { ArrowRight, ArrowLeft, CalendarIcon, ClockIcon } from "@/public/icons";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import { useTranslations } from "next-intl";

const SectionSix = () => {
  const t = useTranslations("header");
  return (
    <section className="w-full flex flex-col 2xl:mt-[120px] mt-[95px] 2xl:gap-[65px] gap-[45px]">
      <div className="flex justify-between items-center w-full">
        <h1 className="2xl:text-[56px] xl:text-[40px] lg:text-[32px] font-semibold">
          {t("news")}
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
      <div className="flex">
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={30}
          slidesPerView={"auto"}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          pagination={{
            el: ".swiper-pagination",
            type: "fraction",
          }}
          breakpoints={{
            320: { slidesPerView: 1 },
            1024: { slidesPerView: 2 },
            1280: { slidesPerView: 3 },
          }}
        >
          {[...Array(5)].map((_, index) => (
            <SwiperSlide key={index}>
              <div className="rounded-[25px] overflow-hidden flex flex-col w-full max-w-[430px] h-[432px]">
                <div className="relative w-full h-[200px]">
                  <Image
                    src={japan_bg}
                    alt="news img"
                    fill
                    className="object-cover rounded-t-[25px]"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className="flex flex-col border-[1px] border-[#CEDAE0] p-[25px] rounded-b-[25px] gap-[20px]">
                  <div className="flex flex-col gap-[15px]">
                    <h1 className="font-semibold 2xl:text-[25px] text-[20px] max-w-[366px] leading-[135%] line-clamp-2">
                      KIUT и Япония: новые горизонты сотрудничества{" "}
                    </h1>
                    <p className="font-normal text-[16px] leading-[135%] line-clamp-3">
                      Укрепляется сотрудничество Ташкентского международного
                      университета Кимё с японскими компаниями
                    </p>
                  </div>
                  <div className="flex gap-[15px]">
                    <div className="flex gap-[5px] items-center">
                      <CalendarIcon />
                      <span>12 окт 2024</span>
                    </div>
                    <div className="flex gap-[5px] items-center">
                      <ClockIcon />
                      <span>19:25</span>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default SectionSix;
