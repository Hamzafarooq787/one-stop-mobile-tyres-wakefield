import { site } from "@/lib/site";
import Breadcrumbs from "@/components/Breadcrumbs";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Terms of Service | One Stop Mobile Tyre Wakefield",
  description:
    "The terms and conditions that apply when you book a mobile tyre fitting callout with One Stop Mobile Tyre Wakefield.",
  path: "/terms-of-service",
});

export default function TermsOfServicePage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Terms of Service", href: "/terms-of-service" }]} />
      <main className="pt-2 pb-xl px-margin-mobile md:px-margin-desktop max-w-3xl mx-auto">
      <h1 className="font-headline text-headline-xl text-on-surface mb-sm">
        Terms of Service
      </h1>
      <p className="text-on-surface-variant text-sm mb-lg">
        Last updated: January 2026
      </p>

      <div className="flex flex-col gap-6 text-on-surface-variant leading-relaxed">
        <p>
          These terms govern your use of the mobile tyre fitting services
          provided by {site.name} (&quot;we&quot;, &quot;us&quot;,
          &quot;our&quot;). By booking a callout or requesting our services,
          you agree to these terms.
        </p>

        <section>
          <h2 className="font-headline text-headline-md text-on-surface mb-sm">
            Our Services
          </h2>
          <p>
            We provide mobile tyre fitting, repair, and related services at a
            location of your choosing across Wakefield and the surrounding
            West Yorkshire area, subject to safe access and availability.
            Quotes provided over the phone or online are estimates based on
            the information you give us; the final price may vary if the
            job&apos;s scope changes once our technician is on site (for
            example, if additional damage is found).
          </p>
        </section>

        <section>
          <h2 className="font-headline text-headline-md text-on-surface mb-sm">
            Booking &amp; Cancellation
          </h2>
          <p>
            Bookings can be made by phone, email, or through our website.
            We&apos;ll aim to arrive within the estimated timeframe given at
            booking, but arrival times may be affected by traffic, weather,
            or prior emergency callouts. If you need to cancel or reschedule,
            please let us know as early as possible.
          </p>
        </section>

        <section>
          <h2 className="font-headline text-headline-md text-on-surface mb-sm">
            Payment
          </h2>
          <p>
            Payment is due on completion of the work unless otherwise agreed
            in advance. We accept the payment methods stated at the time of
            booking. Quoted prices include fitting unless stated otherwise;
            any parts or tyres supplied by us are charged at the price
            confirmed before work begins.
          </p>
        </section>

        <section>
          <h2 className="font-headline text-headline-md text-on-surface mb-sm">
            Your Responsibilities
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              Provide a safe, legal, and accessible location for the work to
              be carried out
            </li>
            <li>
              Give accurate vehicle and tyre information when booking, to
              help us bring the right equipment and parts
            </li>
            <li>
              Ensure any locking wheel nut key is available, or let us know
              in advance if one is needed
            </li>
          </ul>
        </section>

        <section>
          <h2 className="font-headline text-headline-md text-on-surface mb-sm">
            Warranty &amp; Liability
          </h2>
          <p>
            Tyres and parts we supply are covered by the relevant
            manufacturer&apos;s warranty. Our workmanship is guaranteed
            against fitting defects. We are not liable for pre-existing
            faults or damage to a vehicle that isn&apos;t caused by our
            negligence. Old tyres removed during a callout are disposed of
            responsibly in line with UK regulations unless you ask to keep
            them.
          </p>
        </section>

        <section>
          <h2 className="font-headline text-headline-md text-on-surface mb-sm">
            Changes to These Terms
          </h2>
          <p>
            We may update these terms from time to time to reflect changes to
            our services. The latest version will always be available on
            this page.
          </p>
        </section>

        <section>
          <h2 className="font-headline text-headline-md text-on-surface mb-sm">
            Governing Law
          </h2>
          <p>
            These terms are governed by the laws of England and Wales.
          </p>
        </section>

        <section>
          <h2 className="font-headline text-headline-md text-on-surface mb-sm">
            Contact Us
          </h2>
          <p>
            If you have any questions about these terms, please contact us at{" "}
            <a
              className="text-primary hover:underline"
              href={site.emailHref}
            >
              {site.email}
            </a>{" "}
            or{" "}
            <a className="text-primary hover:underline" href={site.phoneHref}>
              {site.phone}
            </a>
            .
          </p>
        </section>
      </div>
    </main>
    </>
  );
}
