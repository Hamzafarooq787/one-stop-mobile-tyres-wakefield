import type { Metadata } from "next";
import Visual from "@/components/Visual";

export const metadata: Metadata = {
  title: "Gallery | One Stop Mobile Tyre Wakefield",
};

const items = [
  {
    icon: "tire_repair",
    tag: "Mobile Service Unit",
    title: "24/7 Readiness",
    alt: "Premium mobile tyre fitting van at night in Wakefield",
  },
  {
    icon: "settings_suggest",
    tag: "Premium Fitting",
    title: "Alloy Care",
    alt: "Brand new premium tyre being mounted onto a high-end alloy wheel",
  },
  {
    icon: "lock_open",
    tag: "Specialized Tools",
    title: "Locking Nut Removal",
    alt: "Specialized locking wheel nut removal tool in action",
  },
  {
    icon: "new_releases",
    tag: "Fresh Rubber",
    title: "New Tyre Installation",
    alt: "Installation of a brand-new tyre on a vehicle",
  },
  {
    icon: "search",
    tag: "Diagnostics",
    title: "Precision Inspection",
    alt: "Detailed tyre inspection and repair process",
  },
  {
    icon: "build",
    tag: "Emergency Repair",
    title: "Puncture Patching",
    alt: "Close-up of a tyre puncture being repaired with a professional patch",
  },
];

export default function GalleryPage() {
  return (
    <main className="pt-8 pb-xl min-h-screen">
      <header className="relative px-margin-mobile md:px-margin-desktop py-xl mb-xl text-center">
        <div className="absolute inset-0 bg-gradient-to-b from-surface-container-highest to-background opacity-50 z-0" />
        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="font-headline text-headline-xl text-primary mb-md drop-shadow-lg">
            Our Work in Action
          </h1>
          <p className="text-body-lg text-on-surface-variant max-w-2xl mx-auto">
            Precision, speed, and reliability. Explore our gallery of real
            roadside rescues, meticulous tyre fittings, and specialized
            repairs across Wakefield, available 24/7.
          </p>
        </div>
      </header>

      <section className="px-margin-mobile md:px-margin-desktop">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-md">
          {items.map((item) => (
            <div
              key={item.title}
              className="relative group aspect-[4/3] overflow-hidden rounded-lg bg-surface-container card-hover-border"
            >
              <Visual
                icon={item.icon}
                label={item.alt}
                className="absolute inset-0 transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-glass-bg backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-md border-t border-border-subtle">
                <span className="text-primary text-label-sm mb-xs">
                  {item.tag}
                </span>
                <h3 className="text-on-surface font-headline text-headline-md">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
