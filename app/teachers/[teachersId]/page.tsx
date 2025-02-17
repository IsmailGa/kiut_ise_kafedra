"use client";
import Image from "next/image";
import logo from "@/public/assets/logo_blue.png";
import profileTeacher from "@/public/assets/teacher_profile.png";
import React, { useEffect } from "react";
import Container from "@/components/container";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import Link from "next/link";
import History from "./sections/history";
import api from "@/api/axios";
import { TeachersType } from "@/types/teachers";

const Teachers = () => {
  const [data, setData] = React.useState<TeachersType>([]);

  useEffect(() => {
    api
      .get("/teachers")
      .then((response) => {
        console.log("Response:", response.data); // Debugging API response
        setData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching teachers:", error.message);
      });
  }, []);

  useEffect(() => {
    console.log("Teachers Data:", data);
  }, [data]);

  return (
    <div className="w-full flex flex-col items-center justify-center">
      <header className="w-full flex items-center py-[25px]">
        <Container>
          <div className="flex justify-between items-center">
            {/* LEFT SIDE */}
            <div className="flex items-center gap-[45px]">
              <Link href="/">
                <Image src={logo} alt="logo" />
              </Link>
            </div>
            {/* RIGHT SIDE */}
            <div className="flex items-center gap-[45px]">
              <ul className="flex gap-[30px] text-black">
                <li>
                  <Menu as="div" className="relative inline-block text-left">
                    <div>
                      <MenuButton className="inline-flex w-full justify-center items-center text-black">
                        Кафедра
                        <ChevronDownIcon
                          aria-hidden="true"
                          className="-mr-1 size-5 text-black"
                        />
                      </MenuButton>
                    </div>
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
                    <div>
                      <MenuButton className="inline-flex w-full justify-center items-center text-black">
                        Направления
                        <ChevronDownIcon
                          aria-hidden="true"
                          className="-mr-1 size-5 text-black"
                        />
                      </MenuButton>
                    </div>
                    <MenuItems
                      transition
                      className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                    >
                      <div className="py-1">
                        <MenuItem>
                          <a
                            href="#"
                            className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
                          >
                            Account settings
                          </a>
                        </MenuItem>
                        <MenuItem>
                          <a
                            href="#"
                            className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
                          >
                            Support
                          </a>
                        </MenuItem>
                        <MenuItem>
                          <a
                            href="#"
                            className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
                          >
                            License
                          </a>
                        </MenuItem>
                        <form action="#" method="POST">
                          <MenuItem>
                            <button
                              type="submit"
                              className="block w-full px-4 py-2 text-left text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
                            >
                              Sign out
                            </button>
                          </MenuItem>
                        </form>
                      </div>
                    </MenuItems>
                  </Menu>
                </li>
                <li>
                  <Link href="/news">Новости</Link>
                </li>
              </ul>
              <button className="text-center bg-primary text-white h-[50px] px-[25px] border-0 outline-0 rounded-[15px]">
                Оставить заявку
              </button>
            </div>
          </div>
        </Container>
      </header>
      <div className="w-full">
        <Container>
          {/* INFO ABOUT TEACHER */}
          <div className="flex items-stretch gap-[30px] mt-[25px]">
            {/* LEFT SIDE */}
            <Image
              src={profileTeacher}
              alt="profileTeacher"
              className="w-full h-[100%]"
            />

            {/* RIGHT SIDE */}
            <div className="flex flex-col max-w-[934px]">
              {/* NAME */}
              <h1 className="font-semibold leading-[55px] text-[40px]">
                {data[0].full_name}
              </h1>
              {/* Job Title */}
              <div className="flex flex-col gap-[8px] mt-[16px]">
                <h2 className="text-[#666666] text-[18px] leading-[25px] font-normal">
                  {data[0].role}
                </h2>
                <h2 className="text-[#666666] text-[18px] leading-[25px] font-normal">
                  Professor of applied Informatics
                </h2>
              </div>
              <span className="w-full h-[1px] bg-[#CEDAE0] mt-[16px] mb-[10px]"></span>
              {/* Bio */}
              <div className="flex flex-col gap-[8px]">
                <h1 className="text-black text-[20px] leading-[27px] font-medium">
                  Biography
                </h1>
                <p className="text-[#666666] text-[16px] font-normal leading-[165%]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum. Sed ut perspiciatis unde omnis
                  iste natus error sit voluptatem accusantium doloremque
                  laudantium, totam rem aperiam, eaque ipsa quae ab illo
                  inventore veritatis et quasi architecto beatae vitae dicta
                  sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
                  aspernatur aut odit aut fugit, sed quia consequuntur magni
                  dolores eos qui ratione voluptatem sequi nesciunt.
                </p>
              </div>
            </div>
          </div>
          <History />
        </Container>
      </div>
    </div>
  );
};

export default Teachers;
