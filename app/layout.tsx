import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import { pageMetadata, siteUrl } from "@/lib/seo";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  ...pageMetadata({
    title: "One Stop Mobile Tyre Wakefield | 24/7 Mobile Tyre Fitting",
    description:
      "24/7 mobile tyre fitting across Wakefield & West Yorkshire. Emergency callouts, puncture repairs and new tyres fitted at your home, work or roadside.",
    path: "/",
  }),
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "AutoRepair",
  name: "One Stop Mobile Tyre Wakefield",
  image: `${siteUrl}/images/hero-van.webp`,
  logo: `${siteUrl}/images/logo-icon-only.webp`,
  url: siteUrl,
  telephone: "+441924123456",
  email: "onestoptyreswakefield@gmail.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Wakefield",
    addressRegion: "West Yorkshire",
    addressCountry: "GB",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 53.6833,
    longitude: -1.4977,
  },
  areaServed: [
    "Wakefield",
    "Leeds",
    "Bradford",
    "Huddersfield",
    "Halifax",
    "Pontefract",
    "Castleford",
    "Normanton",
    "Ossett",
  ],
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
    opens: "00:00",
    closes: "23:59",
  },
  sameAs: [],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`dark ${inter.variable} ${spaceGrotesk.variable} scroll-smooth h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-body overflow-x-hidden selection:bg-primary-container selection:text-white">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <Header />
        <main className="flex-grow pt-[72px]">{children}</main>
        <Footer />
        <FloatingActions />
      </body>
    </html>
  );
}
