import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import "./globals.css";
import Footer from "@/components/footer";
import { getMessages } from "next-intl/server";

const manrope = Manrope({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "KIUT Ai Kafedra",
  description: "Created by Vortex Agency and Farrukh Yuldoshev",
};

export default async function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <NextIntlClientProvider locale={locale} messages={messages}>
        <body className={`${manrope.className} antialiased`}>
          <main>{children}</main>
          <Footer />
        </body>
      </NextIntlClientProvider>
    </html>
  );
}
