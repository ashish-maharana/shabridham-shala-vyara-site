import Image from "next/image";
import Link from "next/link";
import { footerLinks, site, socialLinks } from "@/data/site";
import { placeholderAssets } from "@/data/placeholders";

export function Footer() {
  return (
    <footer className="footer-panel section-gap">
      <div className="grid gap-10 lg:grid-cols-[1.2fr_.75fr_.75fr_.9fr]">
        <div><div className="flex items-center gap-3"><Image src={placeholderAssets.logo} alt="Shabridham logo placeholder" width={48} height={48} /><h3 className="text-3xl font-black">{site.name}</h3></div><p className="body-copy mt-5 max-w-md">A playful Learnify-style website concept for Shabridham Shala, Vyara, with Gujarati learning, activities, digital readiness, and parent-friendly admissions guidance.</p></div>
        <div><h4 className="text-lg font-black">Explore</h4><div className="mt-4 grid gap-3">{footerLinks.quick.slice(0,5).map((link)=><Link key={link.href} href={link.href} className="text-sm font-bold text-[var(--muted)]">{link.label}</Link>)}</div></div>
        <div><h4 className="text-lg font-black">Admissions</h4><div className="mt-4 grid gap-3">{footerLinks.admissions.map((link)=><Link key={link.href} href={link.href} className="text-sm font-bold text-[var(--muted)]">{link.label}</Link>)}</div></div>
        <div><h4 className="text-lg font-black">Contact</h4><div className="mt-4 grid gap-2 text-sm font-bold text-[var(--muted)]"><p>{site.address}</p><p>{site.phones[0]}</p><p>{site.email}</p></div><div className="mt-4 flex flex-wrap gap-2">{socialLinks.map((s)=><Link key={s.platform} href={s.url} className="chip text-xs">{s.platform}</Link>)}</div></div>
      </div>
      <div className="mt-10 flex flex-wrap justify-between gap-4 border-t border-black/10 pt-6 text-xs font-bold text-[var(--muted)]"><p>Copyright 2026 {site.shortName}. Placeholder school site concept.</p><p>Privacy Policy · Terms</p></div>
    </footer>
  );
}
