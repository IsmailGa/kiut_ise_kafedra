import Image from "next/image";
import logo from "@/public/assets/logo_blue_small.png";
import React from "react";
import Container from "./container";
import { Link } from "@/navigation";
import { useTranslations } from "next-intl";

const Footer = () => {
  const t = useTranslations("footer");

  const firstRowLinks = [
    {
      title: t("directions"),
      links: [
        {
          label: t("bachelors"),
          link: "/courses/bachelors",
        },
        {
          label: t("masters"),
          link: "/courses/masters",
        },
      ],
    },
    {
      title: t("department"),
      links: [
        {
          label: t("about_us"),
          link: "/aboutus",
        },
        {
          label: t("teachers"),
          link: "/teachers",
        },
      ],
    },
    {
      title: t("community"),
      links: [
        {
          label: t("news"),
          link: "/news",
        },
        {
          label: t("events_calendar"),
          link: "/news",
        },
      ],
    },
  ];

  const secondRowLinks = [
    {
      title: t("contacts"),
      links: [
        {
          label: "+998 78 129 40 40",
          link: "/",
        },
        {
          label: "info@kiut.uz",
          link: "mailto:info@kiut.uz",
        },
      ],
    },
    {
      title: t("address"),
      links: [
        {
          label: "Shota Rustaveli street, 156, 100121 Tashkent",
          link: "https://maps.app.goo.gl/ALWdVpPRGKhSNkM6A",
        },
        {
          label: t("view_on_map"),
          link: "https://maps.app.goo.gl/ALWdVpPRGKhSNkM6A",
        },
      ],
    },
    {
      title: t("social_media"),
      links: [
        {
          label: "Facebook",
          link: "https://www.facebook.com/kiut.uz/?locale=ru_RU",
        },
        {
          label: "Telegram",
          link: "https://t.me/engineeringdeanoffice",
        },
        {
          label: "Instagram",
          link: "https://www.instagram.com/kiut.uz_rasmiy/",
        },
      ],
    },
  ];

  return (
    <footer className="flex w-ful bg-[#F4F4F465] pt-[45px] mt-[120px]">
      <Container>
        <div className="flex flex-col items-center">
          <div className="w-full grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 md:gap-[32px] gap-[40px] justify-between border-b border-[#66666640] pb-[45px]">
            {/* LOGO */}
            <div className="flex flex-col gap-[32px]">
              <Link href="/">
                <Image src={logo} alt="logo" />
              </Link>
              <h1 className="font-normal md:text-[18px] text-[26px] md:leading-[26px] leading-9 max-w-[min-content]">
                {t("university_name")}
              </h1>
            </div>
            {/* FIRST ROW */}
            {firstRowLinks.map((item, index) => (
              <div className="flex flex-col gap-[32px]" key={"card " + index}>
                <h1 className="text-black md:text-[20px] text-[24px] leading-[32px] font-semibold">
                  {item.title}
                </h1>
                <ul className="flex flex-col gap-[16px]">
                  {item.links.map((link, index) => (
                    <li
                      className="text-[#666666] leading-[24px] font-normal md:text-[16px] text-[18px]"
                      key={index}
                    >
                      <Link href={link.link}>{link.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          {/* SECOND ROW */}
          <div className="w-full justify-between grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-[32px] border-b border-[#66666640] py-[45px]">
            {secondRowLinks.map((item, index) => (
              <div className="flex-col flex gap-[32px]" key={"card " + index}>
                <h1 className="text-black md:text-[20px] text-[24px] leading-[32px] font-semibold">
                  {item.title}
                </h1>
                <ul className="flex flex-col gap-[16px]">
                  {item.links.map((link, index) => (
                    <li
                      className="text-[#666666] leading-[24px] font-normal md:text-[16px] text-[18px]"
                      key={index}
                    >
                      <Link href={link.link}>{link.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="w-full flex sm:flex-row flex-col sm:gap-0 gap-[20px] justify-between py-[20px]">
            <h1 className="md:text-[16px] text-[20px] font-normal leading-[135%]">
              © 2024 ise.kiut.uz, {t("all_rights_reserved")}
            </h1>
            <p className="md:text-[16px] text-[20px] font-medium leading-[135%]">
              {t("developed_by")}{" "}
              <Link
                href="https://t.me/vortexstudio_official"
                className="text-blue-600"
              >
                Vortex Agency
              </Link>{" "}
              {t("and")}{" "}
              <Link
                href="https:\\t.me/farrukh_yuldoshev"
                className="text-blue-600"
              >
                Farrukh Yuldoshev
              </Link>{" "}
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;