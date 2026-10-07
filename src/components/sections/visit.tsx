import { directionsUrl, mapEmbedUrl, site } from "@/config/site";
import { Reveal } from "@/components/ui/reveal";
import { ArrowLink } from "@/components/ui/arrow-link";
import { Watercolor } from "@/components/ui/watercolor";

export function Visit() {
  const { contact } = site;
  return (
    <section id="visit" className="relative overflow-hidden py-28 md:py-36">
      <Watercolor tone="marigold" seed={51} className="-right-10 top-10 w-52 opacity-70" />
      <div className="mx-auto grid max-w-6xl gap-14 px-6 md:grid-cols-2 md:gap-20">
        <Reveal>
          <h2 className="font-display text-5xl md:text-6xl">Find us</h2>
          <div className="mt-8 grid gap-10 sm:grid-cols-2">
            <div>
              <p className="label text-ink-soft">Address</p>
              <address className="mt-2 not-italic leading-relaxed">
                {contact.street}
                <br />
                {contact.city}, {contact.region} {contact.postalCode}
              </address>
              <ArrowLink href={directionsUrl} target="_blank" rel="noopener noreferrer" className="mt-3 font-display text-lg italic text-kumkum">
                Directions
              </ArrowLink>
            </div>
            <div>
              <p className="label text-ink-soft">Tickets &amp; tables</p>
              <a href={contact.phoneHref} className="mt-2 block font-display text-3xl hover:text-kumkum">
                {contact.phoneLocal}
              </a>
            </div>
            <div className="sm:col-span-2">
              <p className="label text-ink-soft">Opening hours</p>
              {site.hours.length > 0 ? (
                <ul className="mt-2 leading-relaxed">
                  {site.hours.map((h) => (
                    <li key={h.label}>
                      {h.label}: {h.time}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="mt-2 leading-relaxed">Open daily. Please call for today&rsquo;s showtimes and table availability.</p>
              )}
            </div>
          </div>
        </Reveal>
        <Reveal delay={0.15}>
          <div className="relative rotate-1 bg-white p-3 pb-12 shadow-[0_14px_40px_-12px_rgba(40,25,10,0.35)]">
            <div className="relative aspect-[4/3]">
              <iframe
                title={`Map showing ${site.legalName}`}
                src={mapEmbedUrl}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 h-full w-full sepia-[0.35]"
              />
            </div>
            <p className="absolute bottom-3 left-0 right-0 text-center font-display text-lg italic text-ink-soft">
              Sambhaji Chowk, near Ramayan Hotel
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
