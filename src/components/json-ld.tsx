import { site } from "@/config/site";

export function JsonLd() {
  const address = {
    "@type": "PostalAddress",
    streetAddress: site.contact.street,
    addressLocality: site.contact.city,
    addressRegion: site.contact.region,
    postalCode: site.contact.postalCode,
    addressCountry: "IN",
  };
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "MovieTheater", name: site.legalName, url: site.url, telephone: site.contact.phoneDisplay, address },
      { "@type": "Restaurant", name: `${site.name} Restaurant`, url: site.url, telephone: site.contact.phoneDisplay, address, servesCuisine: ["Indian", "Vegetarian"] },
    ],
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}
