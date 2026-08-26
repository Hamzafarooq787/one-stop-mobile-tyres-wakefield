import Visual from "@/components/Visual";
import Icon from "@/components/Icon";
import Breadcrumbs from "@/components/Breadcrumbs";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Coverage Areas | Mobile Tyre Fitting Wakefield",
  description:
    "We cover Wakefield, Leeds, Bradford, Huddersfield, Halifax, Pontefract, Castleford, Normanton and Ossett with 30-60 minute mobile tyre callouts.",
  path: "/coverage-areas",
});

export default function CoverageAreasPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Coverage Areas", href: "/coverage-areas" }]} />
      <main className="pt-2 pb-xl px-margin-mobile md:px-margin-desktop max-w-[1536px] mx-auto space-y-xl">
      {/* Hero + Map */}
      <section className="relative rounded-xl overflow-hidden glass-panel border border-border-subtle mt-md">
        <div className="absolute inset-0 z-0">
          <Visual
            icon="map"
            label="Wakefield coverage map"
            src="/images/coverage-map.webp"
            priority
            className="absolute inset-0 opacity-70"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
        </div>
        <div className="relative z-10 px-md py-xl md:p-xl flex flex-col md:flex-row gap-lg items-center">
          <div className="md:w-1/2 space-y-md">
            <div className="inline-flex items-center gap-xs px-sm py-xs border border-primary rounded-full bg-surface-container-highest">
              <div className="w-2 h-2 rounded-full bg-primary-container animate-pulse" />
              <span className="text-label-sm text-primary">
                Live Dispatch Active
              </span>
            </div>
            <h1 className="font-headline text-headline-xl text-white">
              Serving Wakefield &amp; Beyond.
            </h1>
            <p className="text-body-lg text-on-surface-variant max-w-[32rem]">
              Rapid response mobile tyre fitting across West Yorkshire. Our
              kinetic dispatch system ensures we reach you quickly, day or
              night.
            </p>
          </div>

          <div className="md:w-1/2 w-full grid grid-cols-2 gap-sm">
            <div className="glass-panel p-md rounded-lg card-hover-border space-y-sm">
              <Icon name="speed" className="text-primary w-7 h-7" />
              <h3 className="font-headline text-headline-md text-white">
                Zone 1
              </h3>
              <p className="text-on-surface-variant">Wakefield Central</p>
              <div className="text-primary font-bold">30 - 45 mins</div>
            </div>
            <div className="glass-panel p-md rounded-lg card-hover-border space-y-sm mt-md">
              <Icon name="route" className="text-tertiary-container w-7 h-7" />
              <h3 className="font-headline text-headline-md text-white">
                Zone 2
              </h3>
              <p className="text-on-surface-variant">
                Greater West Yorkshire
              </p>
              <div className="text-tertiary-container font-bold">
                45 - 60 mins
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Coverage Sectors */}
      <section className="space-y-lg">
        <div className="flex items-end justify-between border-b border-border-subtle pb-sm">
          <h2 className="font-headline text-headline-lg text-white">
            Coverage Sectors
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-md">
          <div className="md:col-span-2 lg:col-span-2 glass-panel p-lg rounded-xl card-hover-border relative overflow-hidden group">
            <div className="absolute -right-10 -top-10 w-40 h-40 bg-glow-orange rounded-full blur-3xl opacity-20 group-hover:opacity-40 transition-opacity" />
            <div className="relative z-10 flex flex-col h-full justify-between">
              <div>
                <div className="w-12 h-12 rounded-full bg-surface-container-highest border border-primary/20 flex items-center justify-center mb-md">
                  <Icon name="trip_origin" className="text-primary w-6 h-6" />
                </div>
                <h3 className="font-headline text-headline-md text-white">
                  Wakefield
                </h3>
                <p className="text-label-sm text-primary mt-xs">
                  Central Dispatch Hub
                </p>
              </div>
              <p className="text-on-surface-variant mt-md">
                Includes Central Wakefield, Outwood, Stanley, Sandal, and
                surrounding immediate areas.
              </p>
            </div>
          </div>

          <SectorCard title="Leeds" desc="Full coverage across Leeds metropolitan area." />
          <SectorCard title="Bradford" desc="Rapid response for Bradford and district." />
          <SectorCard title="Huddersfield" desc="Kirklees sector coverage 24/7." />
          <SectorCard title="Halifax" desc="Calderdale region rapid dispatch." />

          <div className="md:col-span-2 lg:col-span-2 glass-panel p-md rounded-xl card-hover-border flex items-center gap-md">
            <div className="w-10 h-10 rounded-full bg-surface-container-high border border-outline-variant flex flex-shrink-0 items-center justify-center">
              <Icon name="hub" className="text-on-surface w-5 h-5" />
            </div>
            <div>
              <h4 className="text-label-sm text-white">
                Five Towns Corridor
              </h4>
              <p className="text-on-surface-variant text-sm mt-xs">
                Pontefract, Castleford, Normanton, Ossett, and Knottingley.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
    </>
  );
}

function SectorCard({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="glass-panel p-md rounded-xl card-hover-border">
      <h4 className="text-label-sm text-white mb-xs flex items-center gap-xs">
        <Icon name="my_location" className="text-tertiary w-4 h-4" />
        {title}
      </h4>
      <p className="text-on-surface-variant text-sm">{desc}</p>
    </div>
  );
}
