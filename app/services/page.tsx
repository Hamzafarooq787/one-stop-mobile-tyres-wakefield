import type { Metadata } from "next";
import Visual from "@/components/Visual";
import Icon from "@/components/Icon";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Services | One Stop Mobile Tyre Wakefield",
};

export default function ServicesPage() {
  return (
    <>
      <section className="relative w-full h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Visual
            icon="factory"
            label="Modern automotive workshop at night"
            className="absolute inset-0 opacity-70"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background" />
        </div>
        <div className="relative z-10 text-center px-margin-mobile md:px-margin-desktop">
          <h1 className="font-headline text-headline-xl text-primary mb-sm">
            Professional Tyre Services
          </h1>
          <p className="text-body-lg text-on-surface-variant max-w-2xl mx-auto">
            Precision mobile tyre fitting, repair, and emergency assistance.
            24/7 reliability straight to your location.
          </p>
        </div>
      </section>

      <section className="py-xl px-margin-mobile md:px-margin-desktop max-w-screen-2xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-md">
          {/* Emergency Fitting - featured */}
          <div className="col-span-1 md:col-span-2 lg:col-span-2 row-span-2 bg-surface-container rounded-xl overflow-hidden card-hover-border border border-border-subtle group flex flex-col">
            <div className="relative h-64 w-full">
              <Visual
                icon="emergency_share"
                label="Emergency Fitting"
                className="absolute inset-0"
              />
              <div className="absolute top-sm left-sm bg-error-container text-on-error px-sm py-xs rounded-full border border-error flex items-center gap-xs text-label-sm">
                <span className="w-2 h-2 rounded-full bg-error animate-pulse" />
                LIVE
              </div>
            </div>
            <div className="p-md flex-grow flex flex-col justify-between">
              <div>
                <h2 className="font-headline text-headline-md text-on-surface mb-sm">
                  Emergency Fitting
                </h2>
                <p className="text-on-surface-variant mb-md">
                  Rapid response for unexpected blowouts or severe tyre
                  damage. Our fully equipped mobile vans reach you wherever
                  you are, ensuring you&apos;re safely back on the road in
                  record time.
                </p>
              </div>
              <div className="flex justify-between items-center mt-auto">
                <span className="text-label-sm text-primary">
                  From £80.00
                </span>
                <Icon
                  name="arrow_forward"
                  className="text-primary group-hover:translate-x-1 transition-transform w-5 h-5"
                />
              </div>
            </div>
          </div>

          <ServiceCard
            icon="local_shipping"
            title="Mobile Service"
            desc="Complete workshop capabilities delivered directly to your home or workplace."
            price="From £45.00"
          />
          <ServiceCard
            icon="tire_repair"
            title="Replacement"
            desc="Premium and budget options expertly mounted and balanced."
            price="Quote on Request"
          />

          {/* Locking Wheel Nut - wide */}
          <div className="col-span-1 md:col-span-2 bg-surface-container rounded-xl overflow-hidden card-hover-border border border-border-subtle group flex flex-row">
            <div className="w-1/3 relative">
              <Visual
                icon="lock_open"
                label="Locking Wheel Nut Removal"
                className="absolute inset-0"
              />
            </div>
            <div className="p-md w-2/3 flex flex-col justify-center">
              <h3 className="font-headline text-headline-md text-on-surface mb-sm">
                Locking Wheel Nut Removal
              </h3>
              <p className="text-on-surface-variant mb-md">
                Lost your key? Our specialized invasive and non-invasive
                extraction tools can safely remove stubborn or damaged locking
                wheel nuts without damaging your alloys.
              </p>
              <span className="text-label-sm text-primary">From £55.00</span>
            </div>
          </div>

          <ServiceCard
            icon="build"
            title="Puncture Repair"
            desc="BSAU159 approved plug and patch repairs for tread punctures."
            price="From £35.00"
          />
          <ServiceCard
            icon="sync_alt"
            title="Tyre Change"
            desc="Seasonal swaps or switching out damaged wheels safely."
            price="From £40.00"
          />
          <ServiceCard
            icon="handyman"
            title="Tyre Repair"
            desc="Advanced diagnostics and safe sealing of minor leaks and valve issues."
            price="From £30.00"
          />
          <ServiceCard
            icon="settings_suggest"
            title="New Installation"
            desc="Precision fitting of fresh rubber with digital balancing."
            price="Quote on Request"
          />
        </div>
      </section>

      <section className="py-xl px-margin-mobile md:px-margin-desktop bg-surface-container-high border-y border-border-subtle text-center">
        <h2 className="font-headline text-headline-lg text-on-surface mb-md">
          Need immediate assistance?
        </h2>
        <p className="text-body-lg text-on-surface-variant mb-lg max-w-[36rem] mx-auto">
          Our specialized mobile units are ready to deploy 24/7 across
          Wakefield and surrounding areas.
        </p>
        <a
          className="inline-flex items-center gap-sm bg-primary-container text-white px-lg py-md rounded-lg font-headline text-headline-md glow-primary active:scale-95 transition-all duration-300"
          href={site.phoneHref}
        >
          <Icon name="call" className="w-5 h-5" />
          Call {site.phone}
        </a>
      </section>
    </>
  );
}

function ServiceCard({
  icon,
  title,
  desc,
  price,
}: {
  icon: string;
  title: string;
  desc: string;
  price: string;
}) {
  return (
    <div className="bg-surface-container rounded-xl overflow-hidden card-hover-border border border-border-subtle group">
      <div className="h-40 w-full relative">
        <Visual icon={icon} label={title} className="absolute inset-0" />
      </div>
      <div className="p-md">
        <h3 className="font-headline text-lg text-on-surface mb-xs">
          {title}
        </h3>
        <p className="text-on-surface-variant text-sm mb-sm line-clamp-2">
          {desc}
        </p>
        <span className="text-label-sm text-primary">{price}</span>
      </div>
    </div>
  );
}
