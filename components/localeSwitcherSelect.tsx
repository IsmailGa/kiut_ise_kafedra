"use client";
import { usePathname, useRouter } from "@/navigation";
import { ReactNode, startTransition } from "react";

type Props = {
  children: ReactNode;
  defaultValue: string;
  label: string;
};

export default function LocaleSwitcherSelect({
  children,
  defaultValue,
  label,
}: Props) {
  const router = useRouter();
  const pathname = usePathname();

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
    <label className={""}>
      <p className="sr-only">{label}</p>
      <select
        id="locale-switcher"
        defaultValue={defaultValue}
        onChange={onSelectChange}
        className="focus:border-primary border-[2px] outline-none rounded px-2 py-3 bg-transparent text-gray-400"
      >
        {children}
      </select>
    </label>
  );
}
