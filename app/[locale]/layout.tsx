import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import "./globals.css";
import Footer from "@/components/footer";
import { getMessages } from "next-intl/server";
import ScrollToTop from "@/components/toTop";
import "react-slideshow-image/dist/styles.css";

const manrope = Manrope({ subsets: ["latin"] });

import { getTranslations } from "next-intl/server";

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: "metadata" });

  return {
    title: t("title"),
    description: t("description"),
  };
}

export default async function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  // Fetch messages for use in your providers and components
  // @ts-expect-error-next-intl
  const messages = await getMessages(locale);

  return (
    <html lang={locale}>
      <NextIntlClientProvider locale={locale} messages={messages}>
        <body className={`${manrope.className} antialiased`}>
          <ScrollToTop />
          <main>{children}</main>
          <Footer />
        </body>
      </NextIntlClientProvider>
    </html>
  );
}
