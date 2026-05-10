import Image from "next/image";
import Link from "next/link";
import { footerLinks, site, socialLinks } from "@/data/site";
import { placeholderAssets } from "@/data/placeholders";

export function Footer() {
  return (
    <footer className="footer-panel section-gap">
      <div className="grid gap-10 lg:grid-cols-[1.2fr_.75fr_.75fr_.9fr]">
        <div><div className="flex items-center gap-3"><Image src={placeholderAssets.logo} alt="શબરીધામ લોગો પ્લેસહોલ્ડર" width={64} height={64} className="rounded-full object-cover" /><h3 className="text-3xl font-black">{site.name}</h3></div><p className="body-copy mt-5 max-w-md">શબરીધામ શાળા, વ્યારા માટે લર્નિફાય-શૈલીનો રમૂજી અને સ્પષ્ટ વેબસાઇટ કૉન્સેપ્ટ: ગુજરાતી શીખણ, પ્રવૃત્તિઓ, ડિજિટલ તૈયારી અને પેરેન્ટ-ફ્રેન્ડલી Admissions માર્ગદર્શન.</p></div>
        <div><h4 className="text-lg font-black">મેનુ</h4><div className="mt-4 grid gap-3">{footerLinks.quick.slice(0,5).map((link)=><Link key={link.href} href={link.href} className="text-sm font-bold text-[var(--muted)]">{link.label}</Link>)}</div></div>
        <div><h4 className="text-lg font-black">Admissions</h4><div className="mt-4 grid gap-3">{footerLinks.admissions.map((link)=><Link key={link.href} href={link.href} className="text-sm font-bold text-[var(--muted)]">{link.label}</Link>)}</div></div>
        <div><h4 className="text-lg font-black">સંપર્ક</h4><div className="mt-4 grid gap-2 text-sm font-bold text-[var(--muted)]"><p>{site.address}</p><p>{site.phones[0]}</p><p>{site.email}</p></div><div className="mt-4 flex flex-wrap gap-2">{socialLinks.map((s)=><Link key={s.platform} href={s.url} className="chip text-xs">{s.platform}</Link>)}</div></div>
      </div>
      <div className="mt-10 flex flex-wrap justify-between gap-4 border-t border-black/10 pt-6 text-xs font-bold text-[var(--muted)]"><p>કોપીરાઇટ 2026 {site.shortName}. પ્લેસહોલ્ડર શાળા સાઇટ કૉન્સેપ્ટ.</p><p>ગોપનીયતા નીતિ · શરતો</p></div>
    </footer>
  );
}
