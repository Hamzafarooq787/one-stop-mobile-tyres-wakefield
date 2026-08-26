import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy | One Stop Mobile Tyre Wakefield",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="pt-8 pb-xl px-margin-mobile md:px-margin-desktop max-w-3xl mx-auto">
      <h1 className="font-headline text-headline-xl text-on-surface mb-sm">
        Privacy Policy
      </h1>
      <p className="text-on-surface-variant text-sm mb-lg">
        Last updated: January 2026
      </p>

      <div className="flex flex-col gap-6 text-on-surface-variant leading-relaxed">
        <p>
          {site.name} (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;) is
          committed to protecting your privacy. This policy explains what
          personal information we collect when you contact us or use our
          mobile tyre fitting service, how we use it, and what rights you
          have over it.
        </p>

        <section>
          <h2 className="font-headline text-headline-md text-on-surface mb-sm">
            Information We Collect
          </h2>
          <p className="mb-sm">
            When you request a quote, book a callout, or contact us, we may
            collect:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Your name, phone number, and email address</li>
            <li>Your location or postcode, so we can dispatch a technician</li>
            <li>
              Vehicle details (make, model, tyre size) needed to fulfil your
              request
            </li>
            <li>
              Any additional details you provide in a message or booking form
            </li>
          </ul>
        </section>

        <section>
          <h2 className="font-headline text-headline-md text-on-surface mb-sm">
            How We Use Your Information
          </h2>
          <p className="mb-sm">We use your information to:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Respond to quote requests and arrange callouts</li>
            <li>Provide the mobile tyre fitting service you&apos;ve booked</li>
            <li>
              Contact you about your booking, including arrival times and
              follow-ups
            </li>
            <li>
              Maintain records for invoicing, warranty, and legal
              requirements
            </li>
          </ul>
          <p className="mt-sm">
            We do not sell your personal information to third parties.
          </p>
        </section>

        <section>
          <h2 className="font-headline text-headline-md text-on-surface mb-sm">
            Cookies &amp; Website Analytics
          </h2>
          <p>
            Our website may use essential cookies to function correctly and
            basic analytics to understand how visitors use the site. These
            tools do not identify you personally and are used only to
            improve the website experience.
          </p>
        </section>

        <section>
          <h2 className="font-headline text-headline-md text-on-surface mb-sm">
            Sharing Your Information
          </h2>
          <p>
            We only share your information where necessary to deliver our
            service — for example, with payment processors to take payment,
            or where required by law. Any third party we work with is
            required to keep your information secure and confidential.
          </p>
        </section>

        <section>
          <h2 className="font-headline text-headline-md text-on-surface mb-sm">
            Data Retention
          </h2>
          <p>
            We keep booking and invoicing records for as long as necessary to
            meet our legal and accounting obligations, after which they are
            securely deleted.
          </p>
        </section>

        <section>
          <h2 className="font-headline text-headline-md text-on-surface mb-sm">
            Your Rights
          </h2>
          <p className="mb-sm">
            Under UK data protection law, you have the right to:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Ask what personal information we hold about you</li>
            <li>Ask us to correct inaccurate information</li>
            <li>Ask us to delete your information, where we&apos;re not required to keep it</li>
            <li>Object to how we use your information</li>
          </ul>
          <p className="mt-sm">
            To exercise any of these rights, contact us using the details
            below.
          </p>
        </section>

        <section>
          <h2 className="font-headline text-headline-md text-on-surface mb-sm">
            Changes to This Policy
          </h2>
          <p>
            We may update this policy from time to time. Any changes will be
            posted on this page with an updated revision date.
          </p>
        </section>

        <section>
          <h2 className="font-headline text-headline-md text-on-surface mb-sm">
            Contact Us
          </h2>
          <p>
            If you have any questions about this policy or how we handle
            your information, please contact us at{" "}
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
  );
}
