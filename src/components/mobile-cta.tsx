import { site, ticketsHref } from "@/config/site";

// Thumb-reachable booking bar for phones.
export function MobileCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-30 grid grid-cols-2 border-t border-ink/20 bg-paper text-[0.9rem] font-normal md:hidden">
      <a href={ticketsHref} className="py-3.5 text-center">
        Book Tickets
      </a>
      <a href={site.contact.phoneHref} className="bg-ink py-3.5 text-center text-paper">
        Book a Table
      </a>
    </div>
  );
}
