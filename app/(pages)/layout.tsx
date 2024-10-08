import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "../globals.css";
import Header from "@/components/Header";
import {cookies} from "next/headers";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });
const montserrat = Montserrat({ subsets: ["cyrillic"] });

export const metadata: Metadata = {
  title: "Nazdar",
  description: "Сеть цветочных магазинов в Астане",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    const userToken = cookies().get("token")

  return (
    <html lang="ru">
      <body className={montserrat.className + " bg-bg_pink p-2 md:p-10"}>
        <Header token={userToken?.value} />
        {children}
        <Footer />
      </body>
    </html>
  );
}
