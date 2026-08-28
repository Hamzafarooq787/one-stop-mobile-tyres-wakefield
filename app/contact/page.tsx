import ContactForm from "@/components/ContactForm";
import Visual from "@/components/Visual";
import Icon from "@/components/Icon";
import Breadcrumbs from "@/components/Breadcrumbs";
import { site } from "@/lib/site";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Contact Us | One Stop Mobile Tyre Wakefield",
  description:
    "Need a tyre fitted fast? Call, WhatsApp or fill in our form to book a mobile tyre fitting callout anywhere in Wakefield, 24 hours a day.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Contact", href: "/contact" }]} />
      <main className="pt-2 pb-xl px-margin-mobile md:px-margin-desktop max-w-[1536px] w-full mx-auto relative">
      {/* Atmospheric glow */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[-10%] right-[-5%] w-[40%] h-[40%] bg-primary rounded-full mix-blend-screen filter blur-[150px] opacity-10" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[50%] h-[50%] bg-blue-900 rounded-full mix-blend-screen filter blur-[150px] opacity-10" />
      </div>

      <div className="mb-xl text-center md:text-left flex flex-col md:flex-row justify-between items-end gap-md relative z-10">
        <div>
          <h1 className="font-headline text-headline-xl text-on-surface mb-sm tracking-tight">
            Get Back on the <span className="text-primary glow-text">Road Fast</span>
          </h1>
          <p className="text-body-lg text-on-surface-variant max-w-2xl">
            Stuck with a puncture? Need urgent fleet assistance? Our rapid
            response units are standing by 24/7 across Wakefield and
            surrounding areas.
          </p>
        </div>
        <div className="inline-flex items-center gap-xs px-sm py-xs rounded-full border border-primary text-primary bg-glass-bg backdrop-blur-sm self-start md:self-end mb-sm">
          <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          <span className="text-label-sm uppercase tracking-widest">
            24/7 Live Service
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-xl relative z-10">
        <div className="lg:col-span-7">
          <ContactForm />
        </div>

        <div className="lg:col-span-5 flex flex-col gap-lg">
          <div className="bg-surface-container-highest rounded-xl p-md glass-panel border border-border-subtle relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <h3 className="font-headline text-headline-md text-on-surface mb-md relative z-10">
              Direct Lines
            </h3>
            <div className="flex flex-col gap-sm relative z-10">
              <a
                className="flex items-center gap-md p-sm rounded-lg hover:bg-surface-variant transition-colors group/link cursor-pointer"
                href={site.phoneHref}
              >
                <div className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center group-hover/link:bg-primary/20 transition-colors">
                  <Icon name="call" className="text-primary w-5 h-5" />
                </div>
                <div>
                  <p className="text-label-sm text-on-surface-variant mb-xs">
                    Emergency Hotline
                  </p>
                  <p className="font-headline text-body-lg text-on-surface group-hover/link:text-primary transition-colors">
                    {site.phone}
                  </p>
                </div>
              </a>
              <a
                className="flex items-center gap-md p-sm rounded-lg hover:bg-surface-variant transition-colors group/link cursor-pointer"
                href="mailto:onestoptyreswakefield@gmail.com"
              >
                <div className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center group-hover/link:bg-primary/20 transition-colors">
                  <Icon name="mail" className="text-primary w-5 h-5" />
                </div>
                <div>
                  <p className="text-label-sm text-on-surface-variant mb-xs">
                    Email Enquiries
                  </p>
                  <p className="text-on-surface group-hover/link:text-primary transition-colors break-all">
                    onestoptyreswakefield@gmail.com
                  </p>
                </div>
              </a>
              <div className="flex items-center gap-md p-sm rounded-lg">
                <div className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center">
                  <Icon name="schedule" className="text-primary w-5 h-5" />
                </div>
                <div>
                  <p className="text-label-sm text-on-surface-variant mb-xs">
                    Operating Hours
                  </p>
                  <p className="text-on-surface">
                    24 Hours a Day, 7 Days a Week
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-xl overflow-hidden glass-panel border border-border-subtle relative h-[300px] shadow-lg group">
            <Visual
              icon="location_on"
              label="Wakefield, UK service map"
              src="/images/coverage-map.webp"
              sizes="(min-width: 1024px) 42vw, 100vw"
              className="absolute inset-0 opacity-80 group-hover:opacity-100 transition-opacity duration-500"
            />
            <div className="absolute bottom-md left-md right-md bg-surface-container-highest/90 backdrop-blur-md p-sm rounded-lg border border-border-subtle flex items-center justify-between">
              <div className="flex items-center gap-sm">
                <Icon name="location_on" className="text-primary w-5 h-5" />
                <div>
                  <p className="text-label-sm text-on-surface">
                    Wakefield HQ
                  </p>
                  <p className="text-xs text-on-surface-variant">
                    Serving West Yorkshire
                  </p>
                </div>
              </div>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Wakefield,UK"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary text-xs border border-primary px-xs py-[2px] rounded hover:bg-primary hover:text-white transition-colors"
              >
                Get Directions
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
    </>
  );
}
