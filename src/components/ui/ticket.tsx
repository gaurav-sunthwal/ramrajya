import { nowShowing, site, ticketsHref } from "@/config/site";

// A cinema ticket stub: punched notches, perforated tear line, serial number.
export function Ticket() {
  return (
    <div className="relative mx-auto w-full max-w-md -rotate-2 text-ink drop-shadow-[0_18px_30px_rgba(0,0,0,0.45)]">
      <div
        className="relative flex bg-[#efe3c8]"
        style={{
          WebkitMaskImage:
            "radial-gradient(circle at 0 50%, transparent 14px, #000 15px), radial-gradient(circle at 100% 50%, transparent 14px, #000 15px)",
          WebkitMaskComposite: "source-in",
          maskImage:
            "radial-gradient(circle at 0 50%, transparent 14px, #000 15px), radial-gradient(circle at 100% 50%, transparent 14px, #000 15px)",
          maskComposite: "intersect",
        }}
      >
        <div className="flex-1 p-7">
          <p className="label text-kumkum">Admit one</p>
          <p className="mt-2 font-display text-3xl font-medium leading-none">{site.legalName}</p>
          <p className="font-display text-sm italic text-ink-soft">
            {site.contact.street.split(",")[0]}, {site.contact.city}
          </p>
          <div className="mt-5 border-t border-dashed border-ink/30 pt-4">
            {nowShowing.length > 0 ? (
              <ul className="space-y-2">
                {nowShowing.map((f) => (
                  <li key={f.title} className="flex justify-between gap-4">
                    <span className="font-display text-xl">{f.title}</span>
                    <span className="text-sm text-ink-soft">{f.times.join(" · ")}</span>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="leading-snug">
                Today&rsquo;s films and showtimes, by phone:
                <a href={ticketsHref} className="mt-1 block font-display text-3xl hover:text-kumkum">
                  {site.contact.phoneLocal}
                </a>
              </p>
            )}
          </div>
        </div>
        <div className="flex w-20 flex-col items-center justify-between border-l-2 border-dotted border-ink/35 py-6">
          <span className="text-[0.65rem] uppercase tracking-[0.25em] [writing-mode:vertical-rl]">No. 004128</span>
          <span className="font-display text-2xl text-kumkum [writing-mode:vertical-rl]">रामराज्य</span>
        </div>
      </div>
    </div>
  );
}
