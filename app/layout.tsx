import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import About from "./_pages/About";
import Contacts from "./_pages/Contacts";
import { MyJob } from "./_pages/MyJob";
import MesServices from "./_pages/MesServices";
import { Footer } from "./_Components/Footer";
import { Header } from "./_Components/Header";
//Delight Regular
const Delight = localFont({
  src: "../public/fonts/Delight-Regular.ttf",
  variable: "--font-Delight",
});
//Delight Medium
const DelightMedium = localFont({
  src: "../public/fonts/Delight-Medium.ttf",
  variable: "--font-Delight-Medium",
});
//DelightThin
const DelightThin = localFont({
  src: "../public/fonts/Delight-Thin.ttf",
  variable: "--font-Delight-Thin",
});
//DelightLight
const DelightLight = localFont({
  src: "../public/fonts/Delight-Light.ttf",
  variable: "--font-DelightLight",
});
//DelightBlack
const DelightBlack = localFont({
  src: "../public/fonts/Delight-Black.ttf",
  variable: "--font-DelightBlack",
});
//DelightBold
const DelightBold = localFont({
  src: "../public/fonts/Delight-Bold.ttf",
  variable: "--font-DelightBold",
});
//DelightSemiBold
const DelightSemiBold = localFont({
  src: "../public/fonts/Delight-SemiBold.ttf",
  variable: "--font-DelightSemiBold",
});

export const metadata: Metadata = {
  title: "KONKA Kokou Antoine Samuel Portfolio",
  description:
    "This is my portfolio website, showcasing my skills and projects as a web developer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      translate="no"
      className={`${DelightBlack.variable} ${DelightLight.variable} ${Delight.variable} ${DelightMedium.variable} ${DelightBold.variable} ${DelightThin.variable} ${DelightLight.variable} h-full antialiased bg-black`}
    >
      <body className="min-h-full flex flex-col">
        <Header />
        <main className="">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
