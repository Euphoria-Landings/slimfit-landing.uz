import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Navbar } from "@/widgets/navbar/ui/Navbar";

// Gotham Pro fontini optimallashtirilgan yuklash
const gothamPro = localFont({
  src: [
    { path: "../fonts/gothampro_light.ttf", weight: "300" },
    { path: "../fonts/gothampro.ttf", weight: "400" },
    { path: "../fonts/gothampro_medium.ttf", weight: "500" },
    { path: "../fonts/gothampro_bold.ttf", weight: "700" },
    { path: "../fonts/gothampro_black.ttf", weight: "900" },
  ],
  variable: "--font-gotham",
  display: "swap", // Performance uchun: font yuklanguncha tizim fontini ko'rsatib turadi
});

// SEO va Analitika uchun Metadata
export const metadata: Metadata = {
  title: "Slimfit.uz - Vazn nazoratiga oqilona yondashuv",
  description:
    "Tabiiy komponentlar asosidagi ozdiruvchi dori vositasi. 100% tabiiy va xavfsiz ozish kursi.",
  keywords: ["ozish", "slimfit", "vazn yo'qotish", "tabiiy dori", "parhez"],
  authors: [{ name: "Slimfit Team" }],
  openGraph: {
    title: "Slimfit.uz - Sog'lom ozish",
    description: "Vazn nazoratini biz bilan oqilona boshlang",
    url: "https://slimfit.uz",
    siteName: "Slimfit Uzbekistan",
    locale: "uz_UZ",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

// Mobil qurilmalar uchun moslashuvchanlik sozlamalari
export const viewport: Viewport = {
  themeColor: "#2D7A4D",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // suppressHydrationWarning - brauzer qo'shimchalari (extensions) keltirib chiqaradigan kichik farqlarni e'tiborsiz qoldiradi
    <html lang="uz" className={gothamPro.variable} suppressHydrationWarning>
      <body className="font-sans antialiased min-h-screen bg-white text-slate-900">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
