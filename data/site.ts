import type { NavItem, SiteConfig } from "@/lib/types";

export const site: SiteConfig = {
  name: "Shabridham Shala",
  shortName: "Shabridham",
  location: "Vyara, Tapi, Gujarat",
  email: "admissions@shabridhamshala.in",
  phones: ["+91 98765 43210", "+91 02626 000000"],
  address: "Shabridham, Kakrapar Bypass Road, Vyara, Tapi, Gujarat - 394650",
  brand: {
    palette: { bg: "#BDAED4", ink: "#111111", primary: "#FF563D", accent: "#FFD044", support: "#B783EA", highlight: "#F9F9F5" },
    motif: "default",
    buttonStyle: "pill",
    sectionSpacing: "airy",
  },
};

export const navigation: NavItem[] = [
  { label: "મુખ્ય પૃષ્ઠ", href: "/" },
  { label: "અમારા વિશે", href: "/about" },
  { label: "અભ્યાસક્રમ", href: "/academics" },
  { label: "પ્રવૃત્તિઓ", href: "/activities" },
  { label: "AI Learning", href: "/ai-learning" },
  { label: "Admissions", href: "/admissions" },
  { label: "સંપર્ક", href: "/contact" },
];

export const footerLinks = {
  quick: navigation,
  admissions: [
    { label: "Admissions પ્રક્રિયા", href: "/admissions#process" },
    { label: "દસ્તાવેજો", href: "/admissions#documents" },
    { label: "FAQ", href: "/admissions#faq" },
  ],
};

export const socialLinks = [
  { platform: "YouTube", url: "https://www.youtube.com/channel/UCdlhAdOGNC-9eWqLlllgvHQ", ariaLabel: "YouTube પર Shabridham Shala જુઓ" },
  { platform: "Facebook", url: "https://facebook.com/", ariaLabel: "Facebook પર અમને અનુસરો" },
  { platform: "Instagram", url: "https://instagram.com/", ariaLabel: "Instagram પર અમને અનુસરો" },
] as const;
