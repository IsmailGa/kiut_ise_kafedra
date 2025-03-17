import { useRouter } from "next/router";
import { useEffect } from "react";
import { useLocale } from "next-intl";

export default function Custom404() {
  const router = useRouter();
  const locale = useLocale(); // Получаем текущую локаль

  useEffect(() => {
    // Перенаправляем на главную страницу с текущей локалью
    router.replace(`/${locale}`);
  }, [locale, router]);

  return (
    <div>
      <h1>404 - Page Not Found</h1>
      <p>Redirecting to the homepage...</p>
    </div>
  );
}
