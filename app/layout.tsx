import type { Metadata } from "next";
import { Urbanist } from "next/font/google";

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

import "./globals.css";
import ToastProvider from "@/providers/toast-provider";
import NightAnnouncement from "@/components/night-announcement";
import ModalProvider from "@/providers/modal-provider";

const font = Urbanist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "eStore",
  description: "eStore - The place for all your purchases.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  const currentTime = new Date();
  const hour = currentTime.getHours();

  // Check if the current time is between 9pm and 9am
  const isNightTime = hour >= 21 || hour < 9;
  
  return (
    <html lang="en">
      <body className={font.className}>
        <ToastProvider />
        <ModalProvider />
        {isNightTime && <NightAnnouncement />}
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
