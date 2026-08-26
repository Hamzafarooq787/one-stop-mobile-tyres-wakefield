import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

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

const siteUrl = "https://onestopmobiletyrewakefield.co.uk";
const title = "One Stop Mobile Tyre Wakefield | 24/7 Mobile Tyre Fitting";
const description =
  "On-demand 24/7 mobile tyre fitting across Wakefield. Fast response, professional service, right to your location.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  openGraph: {
    title,
    description,
    url: siteUrl,
    siteName: "One Stop Mobile Tyre Wakefield",
    images: [
      {
        url: "/images/og-image.webp",
        width: 1200,
        height: 630,
        alt: "One Stop Mobile Tyre Wakefield — 24/7 Mobile Tyre Fitting",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/images/og-image.webp"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`dark ${inter.variable} ${spaceGrotesk.variable} scroll-smooth h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-body overflow-x-hidden selection:bg-primary-container selection:text-white">
        <Header />
        <main className="flex-grow pt-[72px]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
