import Link from "next/link";

type CTAProps = { title: string; description: string; primary: { label: string; href: string }; secondary?: { label: string; href: string }; variant?: "default" | "shabridham-ref"; };
export function CTASection({ title, description, primary, secondary }: CTAProps) {
  return <section className="panel section-pad section-gap bg-[var(--yellow)]"><div className="grid gap-8 lg:grid-cols-[1.05fr_.95fr] lg:items-center"><h2 className="title-lg">{title}</h2><div><p className="body-copy">{description}</p><div className="mt-7 flex flex-wrap gap-3"><Link href={primary.href} className="btn-primary btn-dark">{primary.label}</Link>{secondary ? <Link href={secondary.href} className="btn-secondary">{secondary.label} ↗</Link> : null}</div></div></div></section>;
}
