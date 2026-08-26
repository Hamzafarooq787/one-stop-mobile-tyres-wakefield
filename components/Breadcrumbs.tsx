import Link from "next/link";
import { siteUrl } from "@/lib/seo";

type Crumb = { label: string; href: string };

export default function Breadcrumbs({ items }: { items: Crumb[] }) {
  const allItems: Crumb[] = [{ label: "Home", href: "/" }, ...items];

  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: allItems.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.label,
      item: `${siteUrl}${item.href}`,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <nav
        aria-label="Breadcrumb"
        className="px-margin-mobile md:px-margin-desktop max-w-[1440px] mx-auto pt-6 pb-2 text-sm"
      >
        <ol className="flex flex-wrap items-center gap-2">
          {allItems.map((item, i) => {
            const isLast = i === allItems.length - 1;
            return (
              <li key={item.href} className="flex items-center gap-2">
                {i > 0 && (
                  <span aria-hidden="true" className="text-on-surface-variant/50">
                    /
                  </span>
                )}
                {isLast ? (
                  <span aria-current="page" className="text-on-surface-variant">
                    {item.label}
                  </span>
                ) : (
                  <Link
                    href={item.href}
                    className="text-on-surface-variant hover:text-primary transition-colors"
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
