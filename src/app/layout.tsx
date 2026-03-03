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
  metadataBase: new URL(process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : "http://localhost:3000"),
  title: "Sweet Timer",
  description:
    "A cute real-time synced timer. Create, share, and sync timers with anyone!",
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  openGraph: {
    title: "Sweet Timer",
    description: "Sweet moments, shared together. Create, share, and sync timers with anyone!",
    siteName: "Sweet Timer",
    images: [
      {
        url: "/android-chrome-512x512.png",
        width: 512,
        height: 512,
        alt: "Sweet Timer",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Sweet Timer",
    description: "Sweet moments, shared together. Create, share, and sync timers with anyone!",
    images: ["/android-chrome-512x512.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem("theme");if(t==="dark"||(t!=="light"&&matchMedia("(prefers-color-scheme:dark)").matches))document.documentElement.classList.add("dark")}catch(e){}})()`,
          }}
        />
      </head>
      <body
        className={`${instrumentSerif.variable} ${inter.variable} min-h-screen bg-[#f0f4fa] text-[#3a4a6b] dark:bg-[#141a2e] dark:text-[#c8d3e8] antialiased`}
      >
        <I18nProvider>{children}</I18nProvider>
      </body>
    </html>
  );
}
