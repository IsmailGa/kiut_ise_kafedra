"use client";
import { usePathname, useRouter } from "@/navigation";
import { ReactNode, startTransition } from "react";

type Props = {
  children: ReactNode;
  defaultValue: string;
  label: string;
  isOpen: boolean;
};

export default function LocaleSwitcherSelect({
  children,
  defaultValue,
  label,
  isOpen,
}: Props) {
  const router = useRouter();
  const pathname = usePathname();
  const isTeachersOrHome = pathname === "/teachers" || pathname === "/";

  function onSelectChange(event: React.ChangeEvent<HTMLSelectElement>) {
    const nextLocale = event.target.value;
    startTransition(() => {
      router.replace(
        {
          pathname,
        },
        { locale: nextLocale }
      );
    });
  }

  return (
    <label
      className={`${
        isTeachersOrHome
          ? `${isOpen ? "text-black" : "text-white"}`
          : `${isOpen ? "text-white" : "text-black"}`
      }`}
    >
      <p className="sr-only">{label}</p>
      <select
        id="locale-switcher"
        defaultValue={defaultValue}
        onChange={onSelectChange}
        className="outline-none border-none bg-transparent rounded px-[5px]"
      >
        {children}
      </select>
    </label>
  );
}
