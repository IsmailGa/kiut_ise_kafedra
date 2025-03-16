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
    <label
      className={"text-black border-primary border-[1px] rounded-[10px] p-[10px]"}
      htmlFor="locale-switcher"
    >
      <p className="sr-only">{label}</p>
      <select
        id="locale-switcher"
        defaultValue={defaultValue}
        onChange={onSelectChange}
        className="outline-none border-none bg-transparent rounded"
      >
        {children}
      </select>
    </label>
  );
}
