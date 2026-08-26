import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";
import Icon from "@/components/Icon";

export default function Footer() {
  return (
    <footer className="bg-surface-container-lowest border-t border-on-surface/5 py-xl">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter px-margin-mobile md:px-margin-desktop max-w-[1440px] mx-auto">
        <div className="col-span-1 md:col-span-1 flex flex-col gap-4">
          <Link
            className="font-headline text-headline-md font-bold text-primary flex items-center gap-2"
            href="/"
          >
            <Image
              src="/images/logo-icon-only.webp"
              alt=""
              width={24}
              height={24}
            />
            <span>One Stop</span>
          </Link>
          <p className="text-on-surface-variant text-sm mt-2 max-w-[20rem]">
            Premium mobile tyre fitting service operating 24/7 across
            Wakefield and surrounding areas.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <h4 className="font-headline text-on-surface font-semibold">
            Quick Links
          </h4>
          <Link
            className="text-on-surface-variant hover:text-primary transition-colors"
            href="/services"
          >
            Services
          </Link>
          <Link
            className="text-on-surface-variant hover:text-primary transition-colors"
            href="/coverage-areas"
          >
            Coverage Areas
          </Link>
          <Link
            className="text-on-surface-variant hover:text-primary transition-colors"
            href="/gallery"
          >
            Gallery
          </Link>
          <Link
            className="text-on-surface-variant hover:text-primary transition-colors"
            href="/about"
          >
            About
          </Link>
          <Link
            className="text-on-surface-variant hover:text-primary transition-colors"
            href="/contact"
          >
            Contact
          </Link>
        </div>

        <div className="flex flex-col gap-4">
          <h4 className="font-headline text-on-surface font-semibold">
            Legal
          </h4>
          <a
            className="text-on-surface-variant hover:text-primary transition-colors"
            href="#"
          >
            Privacy Policy
          </a>
          <a
            className="text-on-surface-variant hover:text-primary transition-colors"
            href="#"
          >
            Terms of Service
          </a>
        </div>

        <div className="flex flex-col gap-4">
          <h4 className="font-headline text-on-surface font-semibold">
            Contact
          </h4>
          <a
            className="text-on-surface-variant hover:text-primary transition-colors flex items-center gap-2"
            href={site.phoneHref}
          >
            <Icon name="call" className="w-4 h-4" />
            {site.phone}
          </a>
          <a
            className="text-on-surface-variant hover:text-primary transition-colors flex items-center gap-2"
            href={site.emailHref}
          >
            <Icon name="mail" className="w-4 h-4" />
            {site.email}
          </a>
          <p className="text-on-surface-variant flex items-center gap-2">
            <Icon name="location_on" className="w-4 h-4" />
            Wakefield, West Yorkshire
          </p>
        </div>
      </div>

      <div className="border-t border-white/5 mt-lg pt-8 px-margin-mobile md:px-margin-desktop max-w-[1440px] mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-on-surface-variant text-sm opacity-80">
          © {new Date().getFullYear()} {site.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
