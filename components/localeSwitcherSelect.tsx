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
    <label className={"text-gray-400 "}>
      <p className="sr-only">{label}</p>
      <select
        id="locale-switcher"
        defaultValue={defaultValue}
        onChange={onSelectChange}
        className="border rounded p-2"
      >
        {children}
      </select>
    </label>
  );
}
