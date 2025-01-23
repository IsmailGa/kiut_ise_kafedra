import Image from "next/image";
import logo from "@/public/assets/logo_blue.png";
import React from "react";
import Container from "./container";
import Link from "next/link";

const Footer = () => {

  const firstRowLinks = [
    {
      title: "Направления", links: [
        {
          label: "Кибербезопасность",
          link: "/"
        },
        {
          label: "Веб Разработка",
          link: "/"
        },
        {
          label: "ПО Разработка",
          link: "/"
        },
        {
          label: "UI/UX Дизайн",
          link: "/"
        },
      ]
    },
    {
      title: "Кафедра", links: [
        {
          label: "О нас",
          link: "/"
        },
        {
          label: "Учительский состав",
          link: "/"
        },
        {
          label: "Что-то ещё",
          link: "/"
        },
      ]
    },
    {
      title: "Сообщество", links: [
        {
          label: "Новости",
          link: "/"
        },
        {
          label: "Календарь ивентов",
          link: "/"
        },
        {
          label: "Что-то ещё",
          link: "/"
        },
      ]
    }
  ]

  const secondRowLinks = [
    {
      title: "Контакты", links: [
        {
          label: "+998 78 129 40 40",
          link: "/"
        },
        {
          label: "info@kiut.uz",
          link: "/"
        },
        {
          label: "Shota Rustaveli street, 156, 100121 Tashkent",
          link: "/"
        },
        {
          label: "Посмотреть на карте",
          link: "/"
        },
      ]
    },
    {
      title: "Социальные сети", links: [
        {
          label: "Facebook",
          link: "/"
        },
        {
          label: "Telegram",
          link: "/"
        },
        {
          label: "Instagram",
          link: "/"
        },
      ]
    },
    {
      title: "Сообщество", links: [
        {
          label: "Новости",
          link: "/"
        },
        {
          label: "Календарь ивентов",
          link: "/"
        },
        {
          label: "Что-то ещё",
          link: "/"
        },
      ]
    }
  ]

  return (
    <footer className="flex w-ful bg-[#F4F4F465] pt-[45px] mt-[120px]">
      <Container>
        <div className="flex flex-col items-center">
          <div className="w-full flex justify-between border-b-[#666666]">
            {/* LOGO */}
            <div className="flex flex-col gap-[32px]">
              <Image src={logo} alt="logo" />
              <h1 className="font-normal text-[18px] leading-[26px] max-w-[256px]">Международный университет Кимё</h1>
            </div>
            {
              firstRowLinks.map((item) => (
                <div className="flex flex-col gap-[32px]">
                  <h1 className="text-black text-[20px] leading-[32px] font-semibold">{item.title}</h1>
                  <ul className="flex flex-col gap-[16px]">
                    {item.links.map((link) => (
                      <li className="text-[#666666] leading-[24px] font-normal text-[16px]">
                        <Link href={link.link}>{link.label}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))
            }
          </div>
          <div className="w-full flex border-b-[#666666]">
            {
              secondRowLinks.map((item) => (
                <div className="flex flex-col gap-[32px]">
                  <h1 className="text-black text-[20px] leading-[32px] font-semibold">{item.title}</h1>
                  <ul className="flex flex-col gap-[16px]">
                    {item.links.map((link) => (
                      <li className="text-[#666666] leading-[24px] font-normal text-[16px]">
                        <Link href={link.link}>{link.label}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))
            }
          </div>
        </div>

      </Container>
    </footer>
  );
};

export default Footer;
