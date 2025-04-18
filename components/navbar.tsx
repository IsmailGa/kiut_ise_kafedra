"use client";
import Image from "next/image";
import logoBlue from "@/public/assets/logo_blue.png";
import logo from "@/public/assets/logo.png";
import React, { useState } from "react";
import Container from "./container";
import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { useTranslations } from "next-intl";
import { Link, usePathname, useRouter } from "@/navigation";
import LocaleSwitcher from "./localeSwitcher";

const Navbar = () => {
  const t = useTranslations("header");
  const pathname = usePathname();
  const [navColour, updateNavbar] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

  const isTeachersOrHome = pathname === "/teachers" || pathname === "/";
  const exceptionalPath = pathname !== "/";
  const exceptionalUrls = ["/teachers", "/news", "/courses"];

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

  const handleBack = () => {
    router.back();
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 50);
  };

  return (
    <header
      className={`${
        isMenuOpen
          ? "fixed bg-white"
          : navColour
          ? "fixed bg-white/70 backdrop-blur-md border-b border-[1px]"
          : "absolute"
      } w-full top-0 lg:py-[25px] py-[18px] z-[99999]`}
    >
      <Container>
        <div className="flex justify-between items-center">
          {/* LEFT SIDE */}
          <div className="flex items-center xl:gap-[45px] gap-[25px]">
            <Link
              href="/"
              className="flex aspect-square xl:w-[55px] lg:w-[48px] w-[44px]"
            >
              <Image
                src={
                  isTeachersOrHome ? (navColour ? logoBlue : logo) : logoBlue
                }
                alt="logo"
              />
            </Link>
            {exceptionalPath && (
              <div
                onClick={handleBack}
                className="cursor-pointer flex items-center bg-primary text-white xl:h-[50px] lg:h-[48px] h-[44px] xl:px-[25px] lg:px-[23px] px-[20px] border-0 outline-0 rounded-[15px]"
              >
                {t("back")}
              </div>
            )}
          </div>
          {/* RIGHT SIDE */}
          <div className="flex items-center xl:gap-[45px] lg:gap-[25px] gap-[14px]">
            <ul
              className={`flex gap-[30px] ${
                isTeachersOrHome
                  ? navColour
                    ? "text-black"
                    : "text-white"
                  : "text-black"
              } max-xl:hidden`}
            >
              <li>
                <Menu as="div" className="relative inline-block text-left">
                  <MenuButton className="inline-flex w-full justify-center items-center">
                    <span
                      className={
                        isTeachersOrHome
                          ? navColour
                            ? "text-black"
                            : "text-white"
                          : "text-black"
                      }
                    >
                      {t("department")}
                    </span>
                    <ChevronDownIcon
                      aria-hidden="true"
                      className={`-mr-1 size-5 ${
                        isTeachersOrHome
                          ? navColour
                            ? "text-black"
                            : "text-white"
                          : "text-black"
                      }`}
                    />
                  </MenuButton>
                  <MenuItems
                    transition
                    modal={false}
                    className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                  >
                    <div className="py-1">
                      <MenuItem>
                        <Link
                          href="/#about"
                          className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
                        >
                          {t("about_us")}
                        </Link>
                      </MenuItem>
                      <MenuItem>
                        <Link
                          href="/teachers"
                          className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
                        >
                          {t("teachers")}
                        </Link>
                      </MenuItem>
                    </div>
                  </MenuItems>
                </Menu>
              </li>
              <li>
                <Menu as="div" className="relative inline-block text-left">
                  <MenuButton className="inline-flex w-full justify-center items-center">
                    <span
                      className={
                        isTeachersOrHome
                          ? navColour
                            ? "text-black"
                            : "text-white"
                          : "text-black"
                      }
                    >
                      {t("graduate")}
                    </span>
                    <ChevronDownIcon
                      aria-hidden="true"
                      className={`-mr-1 size-5 ${
                        isTeachersOrHome
                          ? navColour
                            ? "text-black"
                            : "text-white"
                          : "text-black"
                      }`}
                    />
                  </MenuButton>
                  <MenuItems
                    transition
                    modal={false}
                    className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                  >
                    <div className="py-1">
                      <MenuItem>
                        <Link
                          href="/courses"
                          className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
                        >
                          {t("program")}
                        </Link>
                      </MenuItem>
                      <MenuItem>
                        <Link
                          href="/courses/bachelors/structure-program"
                          className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
                        >
                          {t("curriculum")}
                        </Link>
                      </MenuItem>
                    </div>
                  </MenuItems>
                </Menu>
              </li>
              <li>
                <Link
                  href="/news"
                  className={
                    isTeachersOrHome
                      ? navColour
                        ? "text-black"
                        : "text-white"
                      : "text-black"
                  }
                >
                  {t("news")}
                </Link>
              </li>
              <span className="block h w-[2px] bg-white"></span>
              <li className="xl:flex hidden">
                <LocaleSwitcher />
              </li>
              {exceptionalUrls.filter((url) => pathname.includes(url))
                .length === 0 && (
                <span className="block h w-[2px] bg-white"></span>
              )}
            </ul>
            {exceptionalUrls.filter((url) => pathname.includes(url)).length ===
              0 && (
              <>
                <Link
                  href="https://admission.kiut.uz/"
                  className="text-center sm:flex hidden items-center justify-center bg-primary text-white xl:h-[50px] lg:h-[48px] h-[44px] xl:px-[25px] lg:px-[23px] px-[20px] border-0 outline-0 rounded-[15px]"
                >
                  {t("apply")}
                </Link>
              </>
            )}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="relative xl:hidden flex aspect-square lg:w-[48px] w-[44px] h-auto rounded-[15px] bg-white"
            >
              <span className="absolute w-[46%] h-[2px] bg-black left-[50%] top-[35%] translate-x-[-50%] translate-y-[-50%] rounded"></span>
              <span className="absolute w-[46%] h-[2px] bg-black left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] rounded"></span>
              <span className="absolute w-[46%] h-[2px] bg-black left-[50%] top-[65%] translate-x-[-50%] translate-y-[-50%] rounded"></span>
            </button>
          </div>
        </div>
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div
            onClick={(e) => {
              if (e.target === e.currentTarget) setIsMenuOpen(false);
            }}
            className="z-[5] fixed bg-black/50 top-0 right-0 w-full h-full"
          >
            <div className="relative w-full h-full">
              <div className="fixed top-0 right-0 px-[25px] max-w-[360px] w-full h-full bg-white">
                <div className="flex justify-between items-center py-4 mb-[52px]">
                  <div className="text-[32px] text-primary font-medium">
                    {t("menu")}
                  </div>
                  <button
                    onClick={() => setIsMenuOpen(false)}
                    className="relative flex aspect-square w-[48px] h-auto"
                  >
                    <span className="absolute w-[46%] h-[2px] bg-black left-[50%] top-[50%] rotate-[45deg] translate-x-[-50%] translate-y-[-50%] rounded"></span>
                    <span className="absolute w-[46%] h-[2px] bg-black left-[50%] top-[50%] rotate-[-45deg] translate-x-[-50%] translate-y-[-50%] rounded"></span>
                  </button>
                </div>
                <div className="flex flex-col gap-[10px]">
                  <Disclosure as="div">
                    {({ open }) => (
                      <>
                        <DisclosureButton className="flex w-full justify-between items-center rounded-[15px] px-5 py-[10px] font-medium text-black">
                          <div className="text-[24px] font-medium">
                            {t("department")}
                          </div>
                          <ChevronDownIcon
                            className={`${
                              open ? "rotate-180 transform" : ""
                            } h-7 w-7 text-black`}
                          />
                        </DisclosureButton>
                        <DisclosurePanel className="px-4 pb-2 pt-4 text-[20px] text-gray-700">
                          <Link
                            href="/teachers"
                            className="block px-4 py-2 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
                          >
                            {t("teachers")}
                          </Link>
                          <Link
                            href="/#about"
                            className="block px-4 py-2 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
                          >
                            {t("about_us")}
                          </Link>
                        </DisclosurePanel>
                      </>
                    )}
                  </Disclosure>
                  <Disclosure as="div">
                    {({ open }) => (
                      <>
                        <DisclosureButton className="flex w-full justify-between items-center rounded-[15px] px-5 py-[10px] font-medium text-black">
                          <div className="text-[24px] font-medium">
                            {t("graduate")}
                          </div>
                          <ChevronDownIcon
                            className={`${
                              open ? "rotate-180 transform" : ""
                            } h-7 w-7 text-black`}
                          />
                        </DisclosureButton>
                        <DisclosurePanel className="px-4 pb-2 pt-4 text-[20px] text-gray-700">
                          <Link
                            href="/courses"
                            className="block px-4 py-2 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
                          >
                            {t("program")}
                          </Link>
                          <Link
                            href="/courses/bachelors/structure-program"
                            className="block px-4 py-2 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
                          >
                            {t("curriculum")}
                          </Link>
                        </DisclosurePanel>
                      </>
                    )}
                  </Disclosure>
                  <div>
                    <Link
                      href="/news"
                      className="flex w-full justify-between items-center rounded-[15px] px-5 py-[10px] text-[24px] font-medium text-black"
                    >
                      {t("news")}
                    </Link>
                  </div>
                  <div className="lang-switch px-5">
                    <LocaleSwitcher />
                  </div>
                  <Link
                    href="https://admission.kiut.uz/"
                    className="mt-[15px] ml-5 text-center flex items-center justify-center bg-primary text-white xl:h-[50px] lg:h-[48px] h-[44px] xl:px-[25px] lg:px-[23px] md:px-[20px] px-[10px] border-0 outline-0 rounded-[15px]"
                  >
                    {t("apply")}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </Container>
    </header>
  );
};

export default Navbar;
