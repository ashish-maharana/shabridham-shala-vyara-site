"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { navigation, site } from "@/data/site";
import { placeholderAssets } from "@/data/placeholders";

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  return (
    <header className="nav-learnify">
      <Link href="/" className="flex items-center gap-2">
        <Image
          src={placeholderAssets.logo}
          alt="Shabridham placeholder logo"
          width={50}
          height={50}
          className="rounded-full object-cover"
        />
        <span className="logo-text">{site.shortName}</span>
      </Link>
      <nav className="nav-center flex items-center gap-8">
        {navigation.slice(1, 6).map((item) => <Link key={item.href} href={item.href} className={`nav-link ${pathname === item.href ? "text-[var(--coral)]" : ""}`}>{item.label}</Link>)}
      </nav>
      <div className="hidden items-center gap-3 md:flex"><Link href="/contact" className="rounded-xl bg-white px-4 py-2 text-xs font-black">મુલાકાત</Link><Link href="/admissions" className="rounded-xl bg-[var(--coral)] px-4 py-2 text-xs font-black text-white">એડમિશન</Link></div>
      <button className="md:hidden" onClick={() => setOpen((v) => !v)} aria-label="Toggle navigation">{open ? <X /> : <Menu />}</button>
      {open ? <div className="absolute left-4 right-4 top-20 z-20 grid gap-2 rounded-3xl border-2 border-black bg-white p-4 md:hidden">{navigation.map((item)=><Link key={item.href} href={item.href} onClick={() => setOpen(false)} className="rounded-xl px-3 py-2 text-sm font-black hover:bg-[var(--soft)]">{item.label}</Link>)}</div> : null}
    </header>
  );
}
