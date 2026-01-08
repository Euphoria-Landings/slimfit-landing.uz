import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Navbar } from "@/widgets/navbar/ui/Navbar";

const gothamPro = localFont({
  src: [
    { path: "../fonts/gothampro_light.ttf", weight: "300" },
    { path: "../fonts/gothampro.ttf", weight: "400" },
    { path: "../fonts/gothampro_medium.ttf", weight: "500" },
    { path: "../fonts/gothampro_bold.ttf", weight: "700" },
    { path: "../fonts/gothampro_black.ttf", weight: "900" },
  ],
  variable: "--font-gotham",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://slimfit.uz"), // Absolyut linklar uchun
  title: {
    default: "Slimfit.uz - Vazn nazoratiga oqilona yondashuv",
    template: "%s | Slimfit.uz",
  },
  description:
    "Tabiiy komponentlar asosidagi ozdiruvchi dori vositasi. 100% tabiiy va xavfsiz ozish kursi.",
  keywords: [
    "ozish",
    "slimfit",
    "vazn yo'qotish",
    "sog'lom ozish",
    "tabiiy dori",
  ],
  openGraph: {
    title: "Slimfit.uz - Sog'lom ozish",
    description: "Vazn nazoratini biz bilan oqilona boshlang",
    url: "https://slimfit.uz",
    siteName: "Slimfit Uzbekistan",
    images: [
      {
        url: "/og-image.jpg", // Ijtimoiy tarmoqlar uchun rasm (public ichida bo'lishi kerak)
        width: 1200,
        height: 630,
        alt: "Slimfit.uz - Tabiiy ozish vositasi",
      },
    ],
    locale: "uz_UZ",
    type: "website",
  },
  alternates: {
    canonical: "/",
  },
};

export const viewport: Viewport = {
  themeColor: "#2D7A4D",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5, // Accessibility uchun: foydalanuvchi zoom qila olishi kerak
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="uz"
      className={`${gothamPro.variable} scroll-smooth`}
      suppressHydrationWarning
    >
      <body className="font-sans antialiased min-h-screen bg-white text-slate-900 selection:bg-green-600 selection:text-white">
        {/* Lighthouse Accessibility: Asosiy contentga tez o'tish tugmasi */}
        <a
          href="#main-content"
          className="sr-only focus:not-only-sr focus:fixed focus:top-4 focus:left-4 focus:z-[200] focus:bg-white focus:p-4 focus:shadow-lg focus:rounded-md focus:text-green-700 font-bold"
        >
          Asosiy mazmunga o'tish
        </a>

        <Navbar />
        <main id="main-content">{children}</main>

        {/* Bu yerga Footer qo'shamiz keyinchalik */}

        {/* Structured Data (Schema.org) - SEO uchun juda muhim */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Product",
              name: "Slimfit",
              description:
                "Tabiiy komponentlar asosidagi ozdiruvchi dori vositasi.",
              brand: {
                "@type": "Brand",
                name: "Slimfit",
              },
              offers: {
                "@type": "Offer",
                url: "https://slimfit.uz",
                priceCurrency: "UZS",
                availability: "https://schema.org/InStock",
              },
            }),
          }}
        />
      </body>
    </html>
  );
}
