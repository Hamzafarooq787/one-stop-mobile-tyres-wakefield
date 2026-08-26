import type { Metadata } from "next";
import { site } from "@/lib/site";

export const siteUrl = "https://onestopmobiletyrewakefield.co.uk";

const ogImage = {
  url: "/images/og-image.webp",
  width: 1200,
  height: 630,
  alt: "One Stop Mobile Tyre Wakefield — 24/7 Mobile Tyre Fitting",
};

export function pageMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  const url = `${siteUrl}${path}`;
  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: site.name,
      images: [ogImage],
      locale: "en_GB",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage.url],
    },
  };
}
