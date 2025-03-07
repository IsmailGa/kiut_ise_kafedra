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
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isTeachersOrHome = pathname === "/teachers" || pathname === "/";

  return (
    <header className="absolute w-full top-0 lg:py-[25px] py-[18px]">
      <Container>
        <div className="flex justify-between items-center">
          {/* LEFT SIDE */}
          <div className="flex items-center xl:gap-[45px] gap-[25px]">
            <Link
              href="/"
              className="flex aspect-square xl:w-[55px] lg:w-[48px] w-[44px]"
            >
              <Image src={isTeachersOrHome ? logo : logoBlue} alt="logo" />
            </Link>
            {isTeachersOrHome && (
              <Link
                href="#"
                className="flex items-center bg-white/20 backdrop-blur-lg text-white xl:h-[50px] lg:h-[48px] h-[44px] xl:px-[25px] lg:px-[23px] px-[20px] border-0 outline-0 rounded-[15px]"
              >
                Все направления
              </Link>
            )}
          </div>
          {/* RIGHT SIDE */}
          <div className="flex items-center xl:gap-[45px] lg:gap-[25px] gap-[14px]">
            <ul
              className={`flex gap-[30px] ${
                isTeachersOrHome ? "text-white" : "text-black"
              } max-xl:hidden`}
            >
              <li>
                <Menu as="div" className="relative inline-block text-left">
                  <MenuButton>
                    {({ open }) => (
                      <div className="inline-flex w-full justify-center items-center">
                        Кафедра
                        <ChevronDownIcon
                          aria-hidden="true"
                          className={`-mr-1 size-5 ${
                            isTeachersOrHome ? "text-white" : "text-black"
                          }`}
                        />
                      </div>
                    )}
                  </MenuButton>
                  <MenuItems
                    transition
                    className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                  >
                    <div className="py-1">
                      <MenuItem>
                        <Link
                          href="#"
                          className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
                        >
                          О нас
                        </Link>
                      </MenuItem>
                      <MenuItem>
                        <Link
                          href="/teachers"
                          className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
                        >
                          Учительский состав
                        </Link>
                      </MenuItem>
                    </div>
                  </MenuItems>
                </Menu>
              </li>
              <li>
                <Menu as="div" className="relative inline-block text-left">
                  <MenuButton>
                    {({ open }) => (
                      <div className="inline-flex w-full justify-center items-center">
                        Направления
                        <ChevronDownIcon
                          aria-hidden="true"
                          className={`-mr-1 size-5 ${
                            isTeachersOrHome ? "text-white" : "text-black"
                          }`}
                        />
                      </div>
                    )}
                  </MenuButton>
                  <MenuItems
                    transition
                    className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                  >
                    <div className="py-1">
                      <MenuItem>
                        <Link
                          href="courses/bachelors"
                          className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
                        >
                          ISE (Бакалавриат)
                        </Link>
                      </MenuItem>
                      <MenuItem>
                        <Link
                          href="courses/masters"
                          className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
                        >
                          AI (Магистратура)
                        </Link>
                      </MenuItem>
                    </div>
                  </MenuItems>
                </Menu>
              </li>
              <li>
                <Link href="/news">Новости</Link>
              </li>
            </ul>
            <button className="text-center bg-primary text-white xl:h-[50px] lg:h-[48px] h-[44px] xl:px-[25px] lg:px-[23px] px-[20px] border-0 outline-0 rounded-[15px]">
              Оставить заявку
            </button>
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
                    Меню
                  </div>
                  <button
                    onClick={() => setIsMenuOpen(false)}
                    className="relative flex aspect-square w-[48px] h-auto"
                  >
                    <span className="absolute w-[46%] h-[2px] bg-black left-[50%] top-[50%] rotate-[45deg] translate-x-[-50%] translate-y-[-50%] rounded"></span>
                    <span className="absolute w-[46%] h-[2px] bg-black left-[50%] top-[50%] rotate-[-45deg] translate-x-[-50%] translate-y-[-50%] rounded"></span>
                  </button>
                </div>
                <div className="flex flex-col gap-[6px]">
                  <Disclosure as="div">
                    {({ open }) => (
                      <>
                        <DisclosureButton className="flex w-full justify-between items-center rounded-[15px] px-5 py-[10px] font-medium text-black">
                          <div className="text-[24px] font-medium">Кафедра</div>
                          <ChevronDownIcon
                            className={`${
                              open ? "rotate-180 transform" : ""
                            } h-7 w-7 text-black`}
                          />
                        </DisclosureButton>
                        <DisclosurePanel className="px-4 pb-2 pt-4 text-[20px] text-gray-700">
                          <Link
                            href="/"
                            className="block px-4 py-2 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
                          >
                            О нас
                          </Link>
                          <Link
                            href="/teachers"
                            className="block px-4 py-2 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
                          >
                            Учительский состав
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
                            Направления
                          </div>
                          <ChevronDownIcon
                            className={`${
                              open ? "rotate-180 transform" : ""
                            } h-7 w-7 text-black`}
                          />
                        </DisclosureButton>
                        <DisclosurePanel className="px-4 pb-2 pt-4 text-[20px] text-gray-700">
                          <Link
                            href="/courses/bachelors"
                            className="block px-4 py-2 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
                          >
                            ISE (Бакалавриат)
                          </Link>
                          <Link
                            href="/courses/masters"
                            className="block px-4 py-2 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
                          >
                            AI (Магистратура)
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
                      Новости
                    </Link>
                  </div>
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
