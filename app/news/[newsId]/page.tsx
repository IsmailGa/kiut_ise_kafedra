"use client"
import Container from "@/components/container";
import Navbar from "@/components/navbar2";
import { BlueLArrowIcon, CalendarIcon, ClockIcon } from "@/public/icons";
import example from "@/public/assets/news/example-big.png";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import japan_bg from "@/public/assets/section_six/japan_bg.jpg";
import { ArrowRight, ArrowLeft } from "@/public/icons";

const NewsInfo = () => {
  const [count, setCount] = React.useState(1);
  const maxCount = 5;
  const minCount = 1;
  const formattedDate = new Date().toLocaleDateString("ru-RU", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
  const formattedTime = new Date().toLocaleTimeString("ru-RU", {
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
                <h1 className="text-[40px] font-semibold leading-[135%]">
                  KIUT и Япония: новые горизонты сотрудничества
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
              <Image src={example} alt="example" />
              <p className="text-[18px] font-normal leading-[145%]">
                Укрепляется сотрудничество Ташкентского международного
                университета Кимё с японскими компаниями. 30 сентября текущего
                года наш университет посетила делегация известной архитектурно –
                строительной компании Terumasagumi Co., во главе с её
                президентом Теруей Кейтой. Компания расположена в японской
                префектуре Окинава. <br /> <br /> Гостей приветствовали ректор
                университета Каримжон Ахмеджанов и руководитель направления
                «Архитектура и строительство» Камаладдин Саидов. В ходе визита
                члены делегации проявили большой интерес к инженерным
                направлениям университета. Также в центре внимания был энтузиазм
                студентов. Были организованы встречи со студентами и
                увлекательные беседы со слушателями вновь созданных курсов
                японского языка. <br /> <br /> Основной целью визита был
                трудоустройство выпускников нашего университета в престижные
                организации Японии, а также организация летних стажировок
                студентов младших курсов и создание возможностей для повышения
                квалификации профессоров и преподавателей. <br /> <br /> Теперь
                это сотрудничество не ограничивается только местными
                организациями, но и предоставляет возможность студентам и
                преподавателям развивать свои знания и навыки в ведущих странах
                мира.
              </p>
            </div>
            {/* LINKS */}
            <div className="w-full flex justify-center items-center mt-[36px] text-[20px] font-semibold leading-[145%] gap-[16px]">
              <p>Поделиться новостью:</p>
              <div className="flex gap-[16px]">
                <p>Telegram</p>
                <span className="bg-[#CEDAE0] h-[30px] w-[2px] block"></span>
                <p>Ссылка</p>
              </div>
            </div>
            {/* NEWS */}
            <section className="w-full flex flex-col mt-[120px] gap-[65px]">
              <div className="flex justify-between items-center w-full">
                <h1 className="text-[56px] font-semibold">Другие новости</h1>
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
              </div>
              {/* CARDS */}
              <div className="flex items-stretch gap-[30px]">
                {/* CARD 1 */}
                <div className="rounded-[25px] overflow-hidden flex flex-col w-full max-w-[416px] h-[432px]">
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
                    <div className="self-start border-[1px] border-[#CEDAE0] rounded-[10px] py-[7px] px-[15px]">
                      11 сен 2024
                    </div>
                    <div className="flex flex-col gap-[15px]">
                      <h1 className="font-semibold text-[25px] max-w-[366px] leading-[135%]">
                        KIUT и Япония: новые горизонты сотрудничества{" "}
                      </h1>
                      <p className="font-normal text-[16px] leading-[135%] ">
                        Укрепляется сотрудничество Ташкентского международного
                        университета Кимё с японскими компаниями
                      </p>
                    </div>
                  </div>
                </div>
                {/* CARD 2 */}
                <div className="rounded-[25px] overflow-hidden flex flex-col w-full max-w-[416px] h-[432px]">
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
                    <div className="self-start border-[1px] border-[#CEDAE0] rounded-[10px] py-[7px] px-[15px]">
                      11 сен 2024
                    </div>
                    <div className="flex flex-col gap-[15px]">
                      <h1 className="font-semibold text-[25px] max-w-[366px] leading-[135%]">
                        KIUT и Япония: новые горизонты сотрудничества{" "}
                      </h1>
                      <p className="font-normal text-[16px] leading-[135%] ">
                        Укрепляется сотрудничество Ташкентского международного
                        университета Кимё с японскими компаниями
                      </p>
                    </div>
                  </div>
                </div>
                {/* CARD 3 */}
                <div className="rounded-[25px] overflow-hidden flex flex-col w-full max-w-[416px] h-[432px]">
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
                    <div className="self-start border-[1px] border-[#CEDAE0] rounded-[10px] py-[7px] px-[15px]">
                      11 сен 2024
                    </div>
                    <div className="flex flex-col gap-[15px]">
                      <h1 className="font-semibold text-[25px] max-w-[366px] leading-[135%]">
                        KIUT и Япония: новые горизонты сотрудничества{" "}
                      </h1>
                      <p className="font-normal text-[16px] leading-[135%] ">
                        Укрепляется сотрудничество Ташкентского международного
                        университета Кимё с японскими компаниями
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </Container>
      </div>
    </>
  );
};

export default NewsInfo;
