import { directionsUrl, site } from "@/config/site";
import { Wordmark } from "@/components/ui/wordmark";
import { Watercolor } from "@/components/ui/watercolor";

export function Footer() {
  const socials = [
    { label: "Instagram", href: site.social.instagram },
    { label: "Facebook", href: site.social.facebook },
  ].filter((s) => s.href);

  return (
    <footer className="relative overflow-hidden pb-24 pt-10 md:pb-8">
      <div className="relative flex items-center">
        <span className="h-px flex-1 bg-ink/60" />
        <span className="mx-6 flex h-20 w-20 items-center justify-center rounded-full border border-ink/60 font-deva text-2xl text-kumkum">
          रा
        </span>
        <span className="h-px flex-1 bg-ink/60" />
      </div>

      <Watercolor tone="marigold" seed={61} className="left-[8%] bottom-24 w-44 opacity-75" />
      <Watercolor tone="teal" seed={62} className="left-[46%] bottom-48 w-24 opacity-60" />
      <Watercolor tone="rose" seed={63} className="right-[10%] bottom-16 w-36 opacity-60" />
      <Watercolor tone="leaf" seed={64} className="right-[30%] bottom-56 w-14 opacity-80" />

      <div className="relative mx-auto mt-14 grid max-w-6xl gap-10 px-6 text-[0.95rem] sm:grid-cols-3">
        <div>
          <p className="label">Address</p>
          <p className="mt-2 text-ink-soft">
            {site.contact.street}, {site.contact.city} {site.contact.postalCode}
          </p>
          <a href={directionsUrl} target="_blank" rel="noopener noreferrer" className="font-display italic text-kumkum hover:underline">
            Get directions
          </a>
        </div>
        <div>
          <p className="label">For bookings</p>
          <a href={site.contact.phoneHref} className="mt-2 block text-ink-soft hover:text-kumkum">
            {site.contact.phoneLocal}
          </a>
        </div>
        <div>
          <p className="label">Explore</p>
          <ul className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-ink-soft">
            {site.nav.map((n) => (
              <li key={n.href}>
                <a href={n.href} className="hover:text-kumkum">
                  {n.label}
                </a>
              </li>
            ))}
            {socials.map((s) => (
              <li key={s.label}>
                <a href={s.href} target="_blank" rel="noopener noreferrer" className="hover:text-kumkum">
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="relative mt-12 flex justify-center">
        <Wordmark size="xl" />
      </div>
      <p className="relative mt-8 text-center text-sm text-ink-soft">
        © {new Date().getFullYear()} {site.legalName} · {site.contact.city}, {site.contact.region}
      </p>
    </footer>
  );
}
