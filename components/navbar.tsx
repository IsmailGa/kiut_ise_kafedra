import Image from "next/image";
import logo from "@/public/assets/logo.png";
import React from "react";
import Container from "./container";
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

const Navbar = () => {
  return (
    <header className="absolute w-full top-[25px]">
      <Container>
        <div className="flex justify-between items-center">
          {/* LEFT SIDE */}

          <div className="flex items-center gap-[45px]">
            <Image src={logo} alt="logo" />
            <button className="text-center bg-white/20 backdrop-blur-lg  text-white h-[50px] px-[25px] border-0 outline-0 rounded-[15px]">
              Все направления
            </button>
          </div>
          {/* RIGHT SIDE */}

          <div className="flex items-center gap-[45px]">
            <ul className="flex gap-[30px] text-white">
              <li>Кафедра</li>
              <li>Направления</li>
              <li>Новости</li>
            </ul>
            <button className="text-center bg-primary text-white h-[50px] px-[25px] border-0 outline-0 rounded-[15px]">
              Оставить заявку
            </button>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Navbar;
