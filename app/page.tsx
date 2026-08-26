import Link from "next/link";
import Visual from "@/components/Visual";
import Icon from "@/components/Icon";
import { site } from "@/lib/site";

const services = [
  {
    title: "Emergency Fitting",
    desc: "Stuck on the roadside? Our rapid response team will get you back on the road safely and quickly.",
    icon: "emergency_share",
    img: "/images/service-emergency-fitting.webp",
  },
  {
    title: "Mobile Tyre Service",
    desc: "We bring the full workshop to your driveway or workplace for ultimate convenience.",
    icon: "local_shipping",
    img: "/images/service-mobile-tyre.webp",
  },
  {
    title: "Tyre Replacement",
    desc: "Premium, mid-range, and budget tyres available for all vehicle makes and models.",
    icon: "tire_repair",
    img: "/images/service-tyre-replacement.webp",
  },
  {
    title: "Locking Wheel Nut Removal",
    desc: "Lost your key? We use specialized equipment to remove locking nuts without damaging your alloys.",
    icon: "lock_open",
    img: "/images/service-locking-wheel-nut.webp",
  },
  {
    title: "Puncture Repair",
    desc: "Professional BSA-approved puncture repairs to extend the life of your existing tyres.",
    icon: "build",
    img: "/images/service-puncture-repair.webp",
  },
  {
    title: "Tyre Change",
    desc: "Seasonal tyre swaps or fitting tyres you've purchased elsewhere.",
    icon: "sync_alt",
    img: "/images/service-tyre-change.webp",
  },
  {
    title: "Tyre Repair",
    desc: "Comprehensive inspection and repair of minor tyre damage to keep you safe.",
    icon: "handyman",
    img: "/images/service-tyre-repair.webp",
  },
  {
    title: "New Tyre Installation",
    desc: "Precision fitting, computerized balancing, and new valves included as standard.",
    icon: "settings_suggest",
    img: "/images/service-new-installation.webp",
  },
];

const whyChooseUs = [
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

const steps = [
  {
    title: "Call or Quote",
    desc: "Contact us with your tyre size and location. We'll provide a fast, transparent quote.",
  },
  {
    title: "We Come to You",
    desc: "Our fully equipped mobile van arrives at your chosen location, whether at home, work, or roadside.",
  },
  {
    title: "Back on the Road",
    desc: "We professionally fit, balance, and safely dispose of your old tyre, getting you moving again.",
  },
];

const coverageAreas = [
  "Wakefield",
  "Leeds",
  "Bradford",
  "Huddersfield",
  "Halifax",
  "Pontefract",
  "Castleford",
  "Normanton",
  "Ossett",
];

const testimonials = [
  {
    quote:
      "Absolutely lifesavers! Hit a pothole on the M1 late at night. They were with me in 40 minutes and had a new tyre fitted swiftly. Extremely professional service.",
    author: "Sarah J., Wakefield",
  },
  {
    quote:
      "Convenience at its best. Had two new tyres fitted while I was in meetings at the office. Didn't lose any time in my day. Great prices too.",
    author: "Mark T., Leeds",
  },
  {
    quote:
      "Lost my locking wheel nut key and was panicking before an MOT. They came out same day, removed them without damaging the alloys, and fitted replacements. Top class.",
    author: "Dave R., Pontefract",
  },
];

const faqs = [
  {
    q: "What areas do you cover?",
    a: "We cover Wakefield, Leeds, Bradford, Huddersfield, Halifax, Pontefract, Castleford, and surrounding areas in West Yorkshire.",
  },
  {
    q: "How fast can you arrive for an emergency?",
    a: "For emergency callouts, we aim to be with you within 30 to 60 minutes, depending on traffic and your exact location.",
  },
  {
    q: "Do you fit tyres at home or work?",
    a: "Yes, our fully equipped mobile vans can fit tyres anywhere it's safe to do so - your driveway, workplace car park, or on the roadside.",
  },
  {
    q: "Can you remove locking wheel nuts if I've lost the key?",
    a: "Absolutely. Our technicians carry specialized equipment designed to safely remove locking wheel nuts without causing damage to your alloy wheels.",
  },
  {
    q: "Do you repair punctures?",
    a: "Yes, we offer BSA-standard puncture repairs. We'll assess the tyre first; if it's safe and legal to repair, we'll fix it rather than making you buy a new one.",
  },
];

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Visual
            icon="tire_repair"
            label="Wakefield Mobile Tyre Fitting Van at Night"
            src="/images/hero-van.webp"
            priority
            className="absolute inset-0 opacity-70"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent z-10" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10" />
        </div>
        <div className="relative z-20 w-full px-margin-mobile md:px-margin-desktop max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-gutter">
          <div className="lg:col-span-8 flex flex-col gap-6">
            <div className="inline-flex items-center gap-2 border border-primary-container/30 bg-primary-container/10 px-4 py-2 rounded-full self-start backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-primary-container animate-pulse" />
              <span className="text-label-sm text-primary uppercase tracking-wider">
                Live Response Available Now
              </span>
            </div>
            <h1 className="font-headline text-headline-xl lg:text-[64px] lg:leading-[1.1] text-on-surface drop-shadow-2xl">
              On-Demand Mobile{" "}
              <span className="text-primary-container glow-text">
                Tyre Fitting
              </span>{" "}
              Across Wakefield
            </h1>
            <p className="text-body-lg text-on-surface-variant max-w-2xl">
              Fast, professional, and reliable. We bring the tyre shop
              directly to your home, workplace, or roadside emergency. 24/7
              service when you need it most.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <a
                className="bg-primary-container text-white px-8 py-4 rounded-xl font-medium text-center glow-primary hover:bg-inverse-primary transition-all duration-300 active:scale-95 flex items-center justify-center gap-2 text-lg"
                href={site.phoneHref}
              >
                <Icon name="call" className="w-5 h-5" />
                Call Now
              </a>
              <Link
                className="border-[1.5px] border-primary-container text-primary-container px-8 py-4 rounded-xl font-medium text-center hover:bg-primary-container/10 transition-all duration-300 active:scale-95 flex items-center justify-center text-lg"
                href="/contact"
              >
                Get a Free Quote
              </Link>
            </div>
            <div className="flex flex-wrap items-center gap-6 mt-8 pt-6 border-t border-white/10">
              <div className="flex items-center gap-2 text-on-surface-variant">
                <Icon name="verified_user" className="text-primary-container w-5 h-5" />
                <span>Fully Insured</span>
              </div>
              <div className="flex items-center gap-2 text-on-surface-variant">
                <Icon name="bolt" className="text-primary-container w-5 h-5" />
                <span>Same-Day Service</span>
              </div>
              <div className="flex items-center gap-2 text-on-surface-variant">
                <Icon name="location_on" className="text-primary-container w-5 h-5" />
                <span>All Wakefield Areas</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="py-xl relative z-10" id="about">
        <div className="px-margin-mobile md:px-margin-desktop max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-lg items-center">
            <div className="relative rounded-xl overflow-hidden group aspect-[4/3] lg:aspect-auto h-full min-h-[400px]">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary-container/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 mix-blend-overlay" />
              <Visual
                icon="engineering"
                label="Professional Mobile Tyre Technician Working"
                src="/images/technician-fitting.webp"
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="absolute inset-0 rounded-xl transform group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute bottom-6 left-6 glass-panel p-4 rounded-xl z-20 flex items-center gap-4">
                <div className="bg-primary-container p-3 rounded-full">
                  <Icon name="timer" className="text-white w-6 h-6" />
                </div>
                <div>
                  <div className="font-headline text-headline-md text-on-surface">
                    30-60 Min
                  </div>
                  <div className="text-label-sm text-on-surface-variant uppercase">
                    Average ETA
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-6">
              <h2 className="text-label-sm text-primary uppercase tracking-widest">
                About Us
              </h2>
              <h3 className="font-headline text-headline-lg-mobile md:text-headline-lg text-on-surface">
                Precision Automotive Care, Delivered to Your Doorstep.
              </h3>
              <p className="text-on-surface-variant leading-relaxed">
                One Stop Mobile Tyre Wakefield is built on a simple premise:
                vehicle maintenance shouldn&apos;t disrupt your life.
                We&apos;ve engineered our mobile service to deliver
                dealership-level precision directly to your location,
                utilizing state-of-the-art diagnostic and fitting equipment
                housed within our fleet of mobile workshops.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4">
                <div className="glass-panel p-6 rounded-xl border border-white/5 flex flex-col gap-2">
                  <Icon name="workspace_premium" className="text-primary-container w-9 h-9" />
                  <div className="font-headline text-headline-md text-on-surface">
                    15+ Years
                  </div>
                  <div className="text-on-surface-variant text-sm">
                    Combined Industry Experience
                  </div>
                </div>
                <div className="glass-panel p-6 rounded-xl border border-white/5 flex flex-col gap-2">
                  <Icon name="handshake" className="text-primary-container w-9 h-9" />
                  <div className="font-headline text-headline-md text-on-surface">
                    10,000+
                  </div>
                  <div className="text-on-surface-variant text-sm">
                    Tyres Fitted Locally
                  </div>
                </div>
              </div>
              <Link
                href="/about"
                className="text-primary font-medium inline-flex items-center gap-1 hover:gap-2 transition-all w-fit"
              >
                Learn more about us
                <Icon name="arrow_forward" className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-xl bg-surface-container-low" id="services">
        <div className="px-margin-mobile md:px-margin-desktop max-w-[1440px] mx-auto">
          <div className="text-center mb-lg">
            <h2 className="text-label-sm text-primary uppercase tracking-widest mb-4">
              Our Services
            </h2>
            <h3 className="font-headline text-headline-lg-mobile md:text-headline-lg text-on-surface">
              Complete Mobile Tyre Care
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s) => (
              <div
                key={s.title}
                className="glass-panel rounded-xl overflow-hidden card-hover-border flex flex-col group"
              >
                <div className="h-48 overflow-hidden relative">
                  <Visual
                    icon={s.icon}
                    label={s.title}
                    src={s.img}
                    sizes="(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 100vw"
                    className="absolute inset-0 transform group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="p-6 flex flex-col gap-3 flex-grow">
                  <h4 className="font-headline text-xl text-on-surface group-hover:text-primary transition-colors">
                    {s.title}
                  </h4>
                  <p className="text-on-surface-variant text-sm">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-lg">
            <Link
              href="/services"
              className="border-[1.5px] border-primary-container text-primary-container px-8 py-3 rounded-xl font-medium hover:bg-primary-container/10 transition-all duration-300 active:scale-95 inline-flex items-center gap-2"
            >
              View All Services
              <Icon name="arrow_forward" className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-xl">
        <div className="px-margin-mobile md:px-margin-desktop max-w-[1440px] mx-auto">
          <div className="text-center mb-lg">
            <h2 className="text-label-sm text-primary uppercase tracking-widest mb-4">
              Why Choose Us
            </h2>
            <h3 className="font-headline text-headline-lg-mobile md:text-headline-lg text-on-surface">
              The Premier Choice for Wakefield
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((w) => (
              <div
                key={w.title}
                className="flex flex-col items-center text-center gap-4"
              >
                <div className="w-16 h-16 rounded-full bg-primary-container/10 flex items-center justify-center border border-primary-container/30">
                  <Icon name={w.icon} className="text-primary-container w-7 h-7" />
                </div>
                <h4 className="font-headline text-xl text-on-surface">
                  {w.title}
                </h4>
                <p className="text-on-surface-variant text-sm">{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-xl bg-surface-container-low relative overflow-hidden">
        <div className="absolute top-1/2 left-0 w-full h-px bg-primary-container/20 -translate-y-1/2 hidden md:block z-0" />
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
            {steps.map((s, i) => (
              <div
                key={s.title}
                className="flex flex-col items-center text-center gap-6 relative"
              >
                <div className="w-16 h-16 rounded-full bg-surface-container-high flex items-center justify-center border-2 border-primary-container shadow-[0_0_15px_rgba(255,107,26,0.3)] z-10">
                  <span className="font-headline text-xl text-white">
                    {i + 1}
                  </span>
                </div>
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

      {/* COVERAGE */}
      <section className="py-xl" id="coverage">
        <div className="px-margin-mobile md:px-margin-desktop max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-lg items-center">
            <div className="flex flex-col gap-6">
              <h2 className="text-label-sm text-primary uppercase tracking-widest">
                Coverage Area
              </h2>
              <h3 className="font-headline text-headline-lg-mobile md:text-headline-lg text-on-surface">
                Serving Wakefield &amp; Surrounding Areas
              </h3>
              <p className="text-on-surface-variant leading-relaxed">
                Our mobile tyre fitting service covers the entirety of
                Wakefield and the broader West Yorkshire region. Whether
                you&apos;re in the city centre or a surrounding village, our
                vans are strategically positioned for rapid response.
              </p>
              <div className="mt-4">
                <h4 className="text-on-surface mb-4 font-medium">
                  Areas We Cover:
                </h4>
                <div className="flex flex-wrap gap-3">
                  {coverageAreas.map((a) => (
                    <span
                      key={a}
                      className="px-4 py-2 rounded-full border border-white/10 text-on-surface-variant text-sm bg-surface-container-low"
                    >
                      {a}
                    </span>
                  ))}
                </div>
              </div>
              <Link
                href="/coverage-areas"
                className="text-primary font-medium inline-flex items-center gap-1 hover:gap-2 transition-all w-fit"
              >
                View full coverage map
                <Icon name="arrow_forward" className="w-5 h-5" />
              </Link>
            </div>
            <div className="rounded-xl overflow-hidden relative group aspect-[4/3]">
              <div className="absolute inset-0 bg-primary-container/10 mix-blend-overlay group-hover:bg-transparent transition-colors duration-500 z-10" />
              <Visual
                icon="map"
                label="Wakefield Coverage Area Map"
                src="/images/coverage-map.webp"
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="absolute inset-0 rounded-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="py-xl bg-surface-container-low" id="gallery">
        <div className="px-margin-mobile md:px-margin-desktop max-w-[1440px] mx-auto">
          <div className="text-center mb-lg">
            <h2 className="text-label-sm text-primary uppercase tracking-widest mb-4">
              Gallery
            </h2>
            <h3 className="font-headline text-headline-lg-mobile md:text-headline-lg text-on-surface">
              Our Work in Action
            </h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {services.slice(0, 6).map((s) => (
              <div
                key={s.title}
                className="aspect-square rounded-xl overflow-hidden relative"
              >
                <Visual
                  icon={s.icon}
                  label={s.title}
                  src={s.img}
                  sizes="(min-width: 768px) 33vw, 50vw"
                  className="absolute inset-0 hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
          <div className="text-center mt-lg">
            <Link
              href="/gallery"
              className="border-[1.5px] border-primary-container text-primary-container px-8 py-3 rounded-xl font-medium hover:bg-primary-container/10 transition-all duration-300 active:scale-95 inline-flex items-center gap-2"
            >
              View Full Gallery
              <Icon name="arrow_forward" className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-xl" id="reviews">
        <div className="px-margin-mobile md:px-margin-desktop max-w-[1440px] mx-auto">
          <div className="text-center mb-lg">
            <h2 className="text-label-sm text-primary uppercase tracking-widest mb-4">
              Reviews
            </h2>
            <h3 className="font-headline text-headline-lg-mobile md:text-headline-lg text-on-surface">
              What Our Customers Say
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div
                key={t.author}
                className="glass-panel p-8 rounded-xl border border-white/5 flex flex-col gap-4"
              >
                <div className="flex gap-1 text-primary-container">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Icon key={i} name="star" className="w-5 h-5 fill-current" />
                  ))}
                </div>
                <p className="text-on-surface-variant italic flex-grow">
                  &quot;{t.quote}&quot;
                </p>
                <div className="font-headline text-base text-on-surface">
                  - {t.author}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-xl bg-surface-container-low" id="faq">
        <div className="px-margin-mobile md:px-margin-desktop max-w-3xl mx-auto">
          <div className="text-center mb-lg">
            <h2 className="text-label-sm text-primary uppercase tracking-widest mb-4">
              FAQ
            </h2>
            <h3 className="font-headline text-headline-lg-mobile md:text-headline-lg text-on-surface">
              Frequently Asked Questions
            </h3>
          </div>
          <div className="flex flex-col gap-4">
            {faqs.map((f) => (
              <details
                key={f.q}
                className="group bg-surface-container-high rounded-xl border border-white/5 overflow-hidden"
              >
                <summary className="flex justify-between items-center font-headline text-lg p-6 cursor-pointer text-on-surface hover:text-primary transition-colors">
                  {f.q}
                  <Icon
                    name="expand_more"
                    className="transition duration-300 group-open:rotate-180 w-5 h-5"
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

      {/* FINAL CTA */}
      <section className="py-xl relative overflow-hidden" id="contact">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-surface to-primary-container/20 opacity-50 z-0" />
        <div className="px-margin-mobile md:px-margin-desktop max-w-[1440px] mx-auto relative z-10 text-center">
          <h2 className="font-headline text-headline-xl lg:text-[48px] text-on-surface mb-6 drop-shadow-lg">
            Stuck With a Flat Tyre?
          </h2>
          <p className="text-body-lg text-on-surface-variant max-w-2xl mx-auto mb-10">
            Don&apos;t let a tyre issue ruin your day. Contact our 24/7 mobile
            fitting team now for immediate assistance or to schedule a
            convenient appointment.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            <a
              className="bg-primary-container text-white px-10 py-5 rounded-xl font-medium text-center glow-primary hover:bg-inverse-primary transition-all duration-300 active:scale-95 flex items-center justify-center gap-3 text-xl w-full sm:w-auto"
              href={site.phoneHref}
            >
              <Icon name="call" className="w-7 h-7" />
              {site.phone}
            </a>
            <Link
              className="glass-panel text-on-surface border border-white/10 px-10 py-5 rounded-xl font-medium text-center hover:bg-white/5 transition-all duration-300 active:scale-95 flex items-center justify-center gap-3 text-xl w-full sm:w-auto"
              href="/contact"
            >
              <Icon name="mail" className="w-7 h-7" />
              Request a Quote
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
