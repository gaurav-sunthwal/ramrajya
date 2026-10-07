import type { Metadata, Viewport } from "next";
import { Bodoni_Moda, Manrope, Tiro_Devanagari_Marathi } from "next/font/google";
import { SmoothScroll } from "@/components/providers/smooth-scroll";
import { Cursor } from "@/components/cursor";
import { site } from "@/config/site";
import "./globals.css";

// Bodoni Moda (high-contrast Didone, optical sizes) for headlines; Manrope for everything else.
const bodoni = Bodoni_Moda({
  variable: "--font-bodoni",
  subsets: ["latin"],
  style: ["normal", "italic"],
  axes: ["opsz"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const tiro = Tiro_Devanagari_Marathi({
  variable: "--font-tiro",
  subsets: ["devanagari"],
  weight: "400",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: `${site.legalName} · Cinema & Pure Veg Restaurant in ${site.contact.city}`, template: `%s · ${site.name}` },
  description: site.description,
  keywords: ["Ramrajya Cineplex", "Karanja Lad cinema", "movie theatre Karanja", "pure veg restaurant Karanja Lad", "vegetarian restaurant Karanja", "Ramrajya restaurant"],
  openGraph: {
    title: site.legalName,
    description: site.description,
    type: "website",
    locale: "en_IN",
    siteName: site.legalName,
  },
};

export const viewport: Viewport = {
  themeColor: "#f3ece0",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${bodoni.variable} ${manrope.variable} ${tiro.variable} antialiased`}>
      <body>
        <SmoothScroll>{children}</SmoothScroll>
        <Cursor />
      </body>
    </html>
  );
}
