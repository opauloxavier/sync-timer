import type { Metadata } from "next";
import { Instrument_Serif, Inter } from "next/font/google";
import { I18nProvider } from "@/contexts/I18nContext";
import "./globals.css";

const instrumentSerif = Instrument_Serif({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-instrument-serif",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Sweet Timer",
  description:
    "A cute real-time synced timer. Create, share, and sync timers with anyone!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${instrumentSerif.variable} ${inter.variable} min-h-screen bg-[#f0f4fa] text-[#3a4a6b] antialiased`}
      >
        <I18nProvider>{children}</I18nProvider>
      </body>
    </html>
  );
}
