import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/navbar";
import type { HeroContent } from "@/lib/types";

type HeroVariant = "default" | "shabridham-ref";

export function PageHero({ content, variant = "default" }: { content: HeroContent; variant?: HeroVariant }) {
  if (variant === "shabridham-ref") {
    const [first, ...rest] = content.title.split(" ");
    return (
      <section className="panel">
        <Navbar />
        <div className="section-pad hero-grid pt-8">
          <div>
            <h1 className="title-xl">{first} <span className="highlight">{rest.slice(0,1).join(" ")}</span> {rest.slice(1).join(" ")}</h1>
            <p className="body-copy mt-6 max-w-xl">{content.description}</p>
            <div className="mt-8 flex flex-wrap gap-4"><Link href={content.primaryCta.href} className="btn-primary">{content.primaryCta.label}</Link>{content.secondaryCta ? <Link href={content.secondaryCta.href} className="btn-secondary">{content.secondaryCta.label} ↗</Link> : null}</div>
            <div className="mt-16 grid max-w-xl grid-cols-3 gap-3"><div className="sticker"><span className="badge">Gujarati</span><p className="mt-3 text-3xl font-black">Medium</p></div><div className="sticker bg-[var(--purple)]"><span className="badge">Vyara</span><p className="mt-3 text-3xl font-black">394650</p></div><div className="sticker bg-[var(--yellow)]"><span className="badge">Learning</span><p className="mt-3 text-3xl font-black">Co-Ed</p></div></div>
          </div>
          <div className="relative"><div className="absolute right-4 top-0 z-10 rounded-full border-2 border-black bg-[var(--yellow)] px-5 py-4 text-xl font-black">135+</div><div className="illo-card rotate-2"><Image src={content.imageSrc ?? ""} alt={content.imageAlt ?? content.title} width={860} height={620} priority className="aspect-[4/3] w-full object-cover" /></div></div>
        </div>
      </section>
    );
  }
  return <section className="panel section-pad"><h1 className="title-lg">{content.title}</h1><p className="body-copy mt-5">{content.description}</p></section>;
}
