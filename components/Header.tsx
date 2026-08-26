"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks, site } from "@/lib/site";
import Icon from "@/components/Icon";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-surface-container-low/80 backdrop-blur-xl border-b border-on-surface/5 shadow-[0_10px_30px_-15px_rgba(255,107,26,0.15)] transition-all duration-300">
      <div className="flex justify-between items-center w-full px-margin-mobile md:px-margin-desktop py-base max-w-[1440px] mx-auto h-[72px]">
        <Link
          className="font-headline text-headline-md font-bold text-on-surface flex items-center gap-2 group"
          href="/"
        >
          <Image
            src="/images/logo-icon-only.webp"
            alt=""
            width={28}
            height={28}
            priority
            className="group-hover:rotate-180 transition-transform duration-500"
          />
          <span className="hidden sm:block">{site.name}</span>
          <span className="sm:hidden">{site.shortName}</span>
        </Link>

        <nav className="hidden md:flex items-center gap-gutter">
          {navLinks.map((link) => {
            const active =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-label-sm font-medium transition-colors duration-300 active:scale-95 pb-1 ${
                  active
                    ? "text-primary border-b-2 border-primary"
                    : "text-on-surface-variant hover:text-primary"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-4">
          <div className="hidden lg:flex flex-col items-end mr-4">
            <span className="text-label-sm font-body text-on-surface-variant uppercase tracking-wider">
              24/7 Emergency
            </span>
            <a
              className="font-headline text-headline-md font-bold text-on-surface hover:text-primary-container transition-colors"
              href={site.phoneHref}
            >
              {site.phone}
            </a>
          </div>
          <a
            className="bg-primary-container text-white px-6 py-2 rounded-xl font-medium glow-primary hover:bg-inverse-primary transition-all duration-300 active:scale-95 items-center gap-2 hidden sm:flex"
            href={site.phoneHref}
          >
            <Icon name="call" className="w-5 h-5" />
            <span>Call Now</span>
          </a>
          <a
            className="bg-primary-container text-white p-2 rounded-xl glow-primary active:scale-95 transition-all duration-300 flex sm:hidden"
            href={site.phoneHref}
            aria-label="Call now"
          >
            <Icon name="call" className="w-5 h-5" />
          </a>
          <button
            className="md:hidden text-primary"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
          >
            <Icon name={open ? "close" : "menu"} className="w-7 h-7" />
          </button>
        </div>
      </div>

      {open && (
        <nav className="md:hidden flex flex-col gap-1 px-margin-mobile pb-4 bg-surface-container-low/95 backdrop-blur-xl border-b border-on-surface/5">
          {navLinks.map((link) => {
            const active =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`py-3 text-label-sm font-medium transition-colors duration-300 ${
                  active ? "text-primary" : "text-on-surface-variant"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
      )}
    </header>
  );
}
