import "../globals.css";

import {Montserrat} from "next/font/google";

export const metadata = {
  title: 'Nazdar Admin Panel',
  description: 'Амин панель Nazdar.kz',
}

const montserrat = Montserrat({ subsets: ["cyrillic"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={montserrat.className + " bg-bg_pink p-2 md:p-10"}>{children}</body>
    </html>
  )
}
