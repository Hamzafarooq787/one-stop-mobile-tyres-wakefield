import Link from "next/link";
import Visual from "@/components/Visual";
import Icon from "@/components/Icon";
import Breadcrumbs from "@/components/Breadcrumbs";
import { site } from "@/lib/site";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Mobile Tyre Fitting Services | One Stop Wakefield",
  description:
    "Emergency tyre fitting, puncture repair, locking wheel nut removal and new tyre installation - all mobile, all across Wakefield, 24 hours a day.",
  path: "/services",
});

const serviceList = [
  {
    icon: "emergency_share",
    title: "Mobile Tyre Emergency Fitting",
    desc: "Rapid response for unexpected blowouts or severe tyre damage, wherever you are.",
    price: "From £80.00",
    img: "/images/service-emergency-fitting.webp",
    tags: ["24/7", "Rapid Response"],
  },
  {
    icon: "local_shipping",
    title: "Mobile Tyre Service",
    desc: "Complete workshop capabilities delivered directly to your home or workplace.",
    price: "From £45.00",
    img: "/images/service-mobile-tyre.webp",
    tags: ["At Your Door", "Full Workshop"],
  },
  {
    icon: "tire_repair",
    title: "Mobile Tyre Replacement",
    desc: "Premium and budget tyre options, expertly mounted and balanced on-site.",
    price: "Quote on Request",
    img: "/images/service-tyre-replacement.webp",
    tags: ["All Brands", "All Budgets"],
  },
  {
    icon: "lock_open",
    title: "Mobile Tyre Locking Wheel Nut Removal",
    desc: "Specialised extraction tools safely remove stubborn or damaged locking nuts.",
    price: "From £55.00",
    img: "/images/service-locking-wheel-nut.webp",
    tags: ["Specialist Tools", "No Damage"],
  },
  {
    icon: "build",
    title: "Mobile Tyre Puncture Repair",
    desc: "BSAU159 approved plug and patch repairs for tread punctures.",
    price: "From £35.00",
    img: "/images/service-puncture-repair.webp",
    tags: ["BSA Approved", "Same Day"],
  },
  {
    icon: "sync_alt",
    title: "Mobile Tyre Change",
    desc: "Seasonal swaps or switching out damaged wheels, safely and quickly.",
    price: "From £40.00",
    img: "/images/service-tyre-change.webp",
    tags: ["Seasonal", "Any Vehicle"],
  },
  {
    icon: "handyman",
    title: "Mobile Tyre Repair",
    desc: "Advanced diagnostics and safe sealing of minor leaks and valve issues.",
    price: "From £30.00",
    img: "/images/service-tyre-repair.webp",
    tags: ["Safety Check", "Minor Damage"],
  },
  {
    icon: "settings_suggest",
    title: "Mobile New Tyre Installation",
    desc: "Precision fitting of fresh rubber with digital balancing and new valves.",
    price: "Quote on Request",
    img: "/images/service-new-installation.webp",
    tags: ["Digital Balancing", "New Valves"],
  },
];

const differenceItems = [
  {
    icon: "timer",
    title: "Fast Response",
    desc: "We aim to be with you within 30-60 minutes for emergency callouts across Wakefield.",
  },
  {
    icon: "home",
    title: "Convenient",
    desc: "No need to wait at a garage. We come to your home, workplace, or the roadside.",
  },
  {
    icon: "payments",
    title: "Fair Pricing",
    desc: "Transparent quotes with no hidden fees. Quality service at competitive prices.",
  },
  {
    icon: "verified",
    title: "Certified",
    desc: "Fully trained technicians using state-of-the-art equipment for precision fitting.",
  },
];

const processSteps = [
  {
    icon: "call",
    title: "Call or Quote",
    desc: "Contact us with your tyre size and location for a fast, transparent quote.",
  },
  {
    icon: "local_shipping",
    title: "We Come to You",
    desc: "Our fully equipped mobile van arrives at your chosen location.",
  },
  {
    icon: "check_circle",
    title: "Back on the Road",
    desc: "We fit, balance, and dispose of your old tyre responsibly.",
  },
];

const serviceFaqs = [
  {
    q: "How long does a mobile tyre fitting take?",
    a: "Most callouts, from arrival to a fitted and balanced tyre, take around 30-45 minutes depending on the job.",
  },
  {
    q: "Do you fit tyres at my home or workplace?",
    a: "Yes. As long as there's safe, legal access, our vans can fit tyres in your driveway, an office car park, or at the roadside.",
  },
  {
    q: "Can you source specific tyre brands or sizes?",
    a: "Yes, we stock a wide range of premium, mid-range, and budget tyres and can order in specific sizes or brands on request.",
  },
  {
    q: "Is there a guarantee on the work?",
    a: "All fitting work is guaranteed against workmanship defects, and any tyres we supply carry the manufacturer's warranty.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Services", href: "/services" }]} />

      {/* HERO */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Visual
            icon="factory"
            label="Modern automotive workshop at night"
            src="/images/hero-van.webp"
            priority
            className="absolute inset-0 opacity-70"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent z-10" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10" />
        </div>
        <div className="relative z-20 w-full px-margin-mobile md:px-margin-desktop max-w-[1440px] mx-auto">
          <h2 className="text-label-sm text-primary uppercase tracking-widest mb-4">
            What We Do
          </h2>
          <h1 className="font-headline text-headline-xl lg:text-[56px] lg:leading-[1.1] text-on-surface max-w-3xl drop-shadow-2xl">
            Professional Mobile Tyre Services
          </h1>
          <p className="text-body-lg text-on-surface-variant max-w-2xl mt-6">
            Precision mobile tyre fitting, repair, and emergency assistance.
            24/7 reliability straight to your location, no garage visit
            required.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <a
              className="bg-primary-container text-white px-8 py-4 rounded-xl font-medium text-center glow-primary hover:bg-inverse-primary transition-all duration-300 active:scale-95 flex items-center justify-center gap-2 text-lg"
              href={site.phoneHref}
            >
              <Icon name="call" className="w-5 h-5" />
              Call for Emergency
            </a>
            <a
              className="bg-[#25D366] text-white px-8 py-4 rounded-xl font-medium text-center hover:brightness-110 transition-all duration-300 active:scale-95 flex items-center justify-center gap-2 text-lg"
              href={site.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
            >
              <WhatsAppGlyph className="w-5 h-5" />
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="py-xl px-margin-mobile md:px-margin-desktop max-w-[1440px] mx-auto">
        <div className="text-center mb-lg">
          <h2 className="text-label-sm text-primary uppercase tracking-widest mb-4">
            Services
          </h2>
          <h3 className="font-headline text-headline-lg-mobile md:text-headline-lg text-on-surface">
            Everything You Need, On-Site
          </h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {serviceList.map((s) => (
            <div
              key={s.title}
              className="bg-surface-container rounded-xl overflow-hidden card-hover-border border border-border-subtle group flex flex-col"
            >
              <div className="h-48 w-full relative">
                <Visual
                  icon={s.icon}
                  label={s.title}
                  src={s.img}
                  sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                  className="absolute inset-0 transform group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-md flex-grow flex flex-col">
                <h4 className="font-headline text-lg text-on-surface mb-xs group-hover:text-primary transition-colors">
                  {s.title}
                </h4>
                <p className="text-on-surface-variant text-sm mb-md flex-grow">
                  {s.desc}
                </p>
                <div className="flex flex-wrap gap-2 mb-sm">
                  {s.tags.map((t) => (
                    <span
                      key={t}
                      className="text-[11px] uppercase tracking-wide px-2 py-1 rounded-full border border-primary-container/30 text-primary bg-primary-container/10"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <span className="text-label-sm text-primary">{s.price}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* THE DIFFERENCE */}
      <section className="py-xl bg-surface-container-low">
        <div className="px-margin-mobile md:px-margin-desktop max-w-[1440px] mx-auto">
          <div className="text-center mb-lg">
            <h2 className="text-label-sm text-primary uppercase tracking-widest mb-4">
              Why Choose Us
            </h2>
            <h3 className="font-headline text-headline-lg-mobile md:text-headline-lg text-on-surface">
              The One Stop Mobile Tyre Difference
            </h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {differenceItems.map((w) => (
              <div
                key={w.title}
                className="flex items-start gap-4 bg-surface-container-high rounded-xl border border-border-subtle p-md"
              >
                <div className="w-11 h-11 shrink-0 rounded-full bg-primary-container/10 flex items-center justify-center border border-primary-container/30">
                  <Icon name={w.icon} className="text-primary-container w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-headline text-base text-on-surface mb-1">
                    {w.title}
                  </h4>
                  <p className="text-on-surface-variant text-sm">{w.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-xl relative overflow-hidden">
        <div className="absolute top-8 left-0 w-full h-px bg-primary-container/20 hidden md:block z-0" />
        <div className="px-margin-mobile md:px-margin-desktop max-w-[1440px] mx-auto relative z-10">
          <div className="text-center mb-lg">
            <h2 className="text-label-sm text-primary uppercase tracking-widest mb-4">
              Process
            </h2>
            <h3 className="font-headline text-headline-lg-mobile md:text-headline-lg text-on-surface">
              How It Works
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {processSteps.map((s, i) => (
              <div
                key={s.title}
                className="flex flex-col items-center text-center gap-4"
              >
                <div className="w-16 h-16 rounded-full bg-primary-container flex items-center justify-center glow-primary z-10">
                  <Icon name={s.icon} className="text-white w-7 h-7" />
                </div>
                <span className="text-label-sm text-primary uppercase tracking-widest">
                  Step {i + 1}
                </span>
                <div>
                  <h4 className="font-headline text-xl text-on-surface mb-2">
                    {s.title}
                  </h4>
                  <p className="text-on-surface-variant text-sm">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EMERGENCY CTA BANNER */}
      <section className="bg-primary-container">
        <div className="px-margin-mobile md:px-margin-desktop max-w-[1440px] mx-auto py-lg flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-start md:items-center gap-4">
            <Icon name="warning" className="text-white w-8 h-8 shrink-0" />
            <div>
              <span className="text-label-sm text-white/80 uppercase tracking-widest">
                24/7 Emergency Line
              </span>
              <h3 className="font-headline text-headline-md text-white">
                Flat Tyre Right Now?
              </h3>
              <p className="text-white/80 text-sm mt-1">
                We dispatch immediately. Average Wakefield area arrival under
                60 minutes.
              </p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 shrink-0 w-full sm:w-auto">
            <a
              className="bg-white text-primary-container px-8 py-4 rounded-xl font-medium text-center hover:bg-white/90 transition-all duration-300 active:scale-95 flex items-center justify-center gap-2"
              href={site.phoneHref}
            >
              <Icon name="call" className="w-5 h-5" />
              Call Now
            </a>
            <a
              className="bg-[#25D366] text-white px-8 py-4 rounded-xl font-medium text-center hover:brightness-110 transition-all duration-300 active:scale-95 flex items-center justify-center gap-2"
              href={site.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
            >
              <WhatsAppGlyph className="w-5 h-5" />
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-xl bg-surface-container-low">
        <div className="px-margin-mobile md:px-margin-desktop max-w-3xl mx-auto">
          <div className="text-center mb-lg">
            <h2 className="text-label-sm text-primary uppercase tracking-widest mb-4">
              FAQ
            </h2>
            <h3 className="font-headline text-headline-lg-mobile md:text-headline-lg text-on-surface">
              Common Questions
            </h3>
          </div>
          <div className="flex flex-col gap-4">
            {serviceFaqs.map((f) => (
              <details
                key={f.q}
                className="group bg-surface-container-high rounded-xl border border-white/5 overflow-hidden"
              >
                <summary className="flex justify-between items-center gap-4 font-headline text-lg p-6 cursor-pointer text-on-surface hover:text-primary transition-colors">
                  {f.q}
                  <Icon
                    name="expand_more"
                    className="shrink-0 transition duration-300 group-open:rotate-180 w-5 h-5"
                  />
                </summary>
                <div className="p-6 pt-0 text-on-surface-variant text-sm">
                  {f.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* READY TO BOOK */}
      <section className="py-xl">
        <div className="px-margin-mobile md:px-margin-desktop max-w-[1440px] mx-auto text-center">
          <h2 className="font-headline text-headline-lg-mobile md:text-headline-lg text-on-surface mb-4">
            Ready to Book?
          </h2>
          <p className="text-body-lg text-on-surface-variant max-w-2xl mx-auto mb-lg">
            No garage visit, no waiting room. A certified mobile technician at
            your door, when and where you need it.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              className="bg-primary-container text-white px-8 py-4 rounded-xl font-medium text-center glow-primary hover:bg-inverse-primary transition-all duration-300 active:scale-95 flex items-center justify-center gap-2"
              href={site.phoneHref}
            >
              <Icon name="call" className="w-5 h-5" />
              Call {site.phone}
            </a>
            <Link
              className="border-[1.5px] border-primary-container text-primary-container px-8 py-4 rounded-xl font-medium hover:bg-primary-container/10 transition-all duration-300 active:scale-95 flex items-center justify-center"
              href="/contact"
            >
              Book Online
            </Link>
          </div>
        </div>
      </section>

      {/* BOTTOM EMERGENCY STRIP */}
      <section className="bg-primary-container">
        <div className="px-margin-mobile md:px-margin-desktop max-w-[1440px] mx-auto py-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-white text-sm">
            <Icon name="warning" className="w-5 h-5" />
            Flat tyre or roadside emergency? We&apos;re available 24/7.
          </div>
          <div className="flex items-center gap-3">
            <a
              className="text-white text-sm underline underline-offset-2 hover:no-underline"
              href={site.phoneHref}
            >
              {site.phone}
            </a>
            <a
              className="bg-[#25D366] text-white px-4 py-2 rounded-lg text-sm font-medium hover:brightness-110 transition-all flex items-center gap-2"
              href={site.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
            >
              <WhatsAppGlyph className="w-4 h-4" />
              WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

function WhatsAppGlyph({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
      <path d="M12 2C6.477 2 2 6.477 2 12c0 1.99.583 3.847 1.588 5.408L2 22l4.735-1.556A9.955 9.955 0 0 0 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18.077a8.06 8.06 0 0 1-4.113-1.13l-.295-.176-3.048 1.002 1.008-2.966-.192-.305A8.06 8.06 0 0 1 3.923 12c0-4.463 3.614-8.077 8.077-8.077 4.462 0 8.077 3.614 8.077 8.077 0 4.462-3.615 8.077-8.077 8.077z" />
    </svg>
  );
}
