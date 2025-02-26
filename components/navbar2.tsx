import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import logo from "@/public/assets/logo_blue.png";
import Image from "next/image";
import Link from "next/link";
import Container from "./container";

const Navbar = () => {
  return (
    <header className="absolute w-full top-[25px]">
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
  );
};

export default Navbar;
