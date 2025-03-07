import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer";


const manrope = Manrope({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "KIUT Ai Kafedra",
  description: "Created by Vortex Agency and Farrukh Yuldoshev",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${manrope.className} antialiased`}>
        <main className="">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
