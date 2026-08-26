import type { Metadata } from "next";
import Visual from "@/components/Visual";
import Icon from "@/components/Icon";

export const metadata: Metadata = {
  title: "About Us | One Stop Mobile Tyre Wakefield",
};

const values = [
  {
    icon: "verified_user",
    title: "Reliability",
    desc: "24/7 readiness. When we say we're coming, we're already on the way.",
  },
  {
    icon: "bolt",
    title: "Speed",
    desc: "Rapid dispatch and efficient on-site execution to get you back on the road.",
  },
  {
    icon: "memory",
    title: "Tech-Forward",
    desc: "Utilizing state-of-the-art diagnostic and fitting equipment in every van.",
  },
  {
    icon: "visibility",
    title: "Transparency",
    desc: "Clear pricing, honest assessments, and no hidden fees. Ever.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-xl px-margin-mobile md:px-margin-desktop min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Visual
            icon="local_shipping"
            label="Mobile tyre fitting van at night in Wakefield"
            src="/images/hero-van.webp"
            priority
            className="absolute inset-0 opacity-70"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background z-10" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h1 className="font-headline text-headline-xl mb-md text-white">
            Precision Care, Delivered to Your Doorstep
          </h1>
          <p className="text-body-lg text-on-surface-variant max-w-2xl mx-auto">
            Redefining mobile tyre fitting with technology, speed, and
            uncompromising safety. We are Wakefield&apos;s premier on-demand
            service.
          </p>
        </div>
      </section>

      {/* Our Story + Stats */}
      <section className="py-xl px-margin-mobile md:px-margin-desktop max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-md">
          <div className="md:col-span-2 bg-surface-container border border-border-subtle rounded-xl p-lg relative overflow-hidden group card-hover-border">
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/10 rounded-full blur-3xl group-hover:bg-primary/20 transition-all duration-700" />
            <div className="relative z-10">
              <div className="flex items-center gap-sm mb-md text-primary">
                <Icon name="history_edu" className="w-6 h-6" />
                <h2 className="font-headline text-headline-lg">Our Story</h2>
              </div>
              <p className="text-on-surface-variant mb-md">
                Born out of a necessity for reliable, fast, and professional
                roadside assistance in Wakefield. We saw an industry stuck in
                the past—slow response times, opaque pricing, and outdated
                equipment. One Stop Mobile Tyre was founded to inject speed
                and precision into every callout.
              </p>
              <p className="text-on-surface-variant">
                Our mission is simple: to modernize mobile tyre fitting by
                combining high-end diagnostic technology with seasoned
                mechanical expertise, ensuring you are never left stranded in
                the dark.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-md">
            <div className="bg-glass-bg border-t border-border-subtle rounded-xl p-md flex flex-col items-center justify-center text-center h-full card-hover-border">
              <span className="font-headline text-headline-xl text-primary mb-xs">
                15+
              </span>
              <span className="text-label-sm text-on-surface-variant uppercase tracking-wider">
                Years Experience
              </span>
            </div>
            <div className="bg-glass-bg border-t border-border-subtle rounded-xl p-md flex flex-col items-center justify-center text-center h-full card-hover-border">
              <span className="font-headline text-headline-xl text-primary mb-xs">
                10k+
              </span>
              <span className="text-label-sm text-on-surface-variant uppercase tracking-wider">
                Tyres Fitted
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-xl px-margin-mobile md:px-margin-desktop bg-surface-container-low border-y border-border-subtle relative">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-headline text-headline-lg text-center mb-xl text-white">
            The Kinetic Standard
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-md">
            {values.map((v) => (
              <div
                key={v.title}
                className="p-md rounded-xl border border-border-subtle bg-surface-container hover:border-primary transition-colors duration-300 group"
              >
                <div className="w-12 h-12 rounded-lg bg-surface-container-highest flex items-center justify-center mb-md group-hover:bg-primary/20 transition-colors">
                  <Icon name={v.icon} className="text-primary w-6 h-6" />
                </div>
                <h3 className="font-headline text-headline-md mb-sm text-white">
                  {v.title}
                </h3>
                <p className="text-on-surface-variant">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet the Expert */}
      <section className="py-xl px-margin-mobile md:px-margin-desktop max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-xl items-center bg-surface-container rounded-xl overflow-hidden border border-border-subtle">
          <div className="w-full md:w-1/2 h-96 md:h-[500px] relative">
            <Visual
              icon="engineering"
              label="Professional mobile tyre technician at night"
              src="/images/technician-fitting.webp"
              sizes="(min-width: 768px) 50vw, 100vw"
              className="absolute inset-0"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent md:hidden" />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-surface-container hidden md:block" />
          </div>
          <div className="w-full md:w-1/2 p-lg md:p-xl md:pl-0">
            <span className="text-label-sm text-primary uppercase tracking-widest mb-xs block">
              Lead Technician
            </span>
            <h2 className="font-headline text-headline-lg mb-md text-white">
              Meet the Expert
            </h2>
            <p className="text-on-surface-variant mb-md">
              Behind every rapid response is a professional who knows your
              vehicle inside and out. Our lead technicians aren&apos;t just
              mechanics; they are specialists trained in the latest
              high-performance tyre technologies and safety protocols.
            </p>
            <p className="text-on-surface-variant mb-lg">
              Equipped with fully self-contained mobile workstations, they
              bring the capability of a premium garage directly to your
              driveway or the roadside.
            </p>
            <div className="flex items-center gap-sm">
              <div className="w-3 h-3 rounded-full bg-primary animate-pulse shadow-[0_0_10px_rgba(255,107,26,0.8)]" />
              <span className="text-label-sm text-on-surface">
                Currently Active in Wakefield Area
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
