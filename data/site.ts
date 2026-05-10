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
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Academics", href: "/academics" },
  { label: "Activities", href: "/activities" },
  { label: "AI Learning", href: "/ai-learning" },
  { label: "Admissions", href: "/admissions" },
  { label: "Contact", href: "/contact" },
];

export const footerLinks = {
  quick: navigation,
  admissions: [
    { label: "Admission Process", href: "/admissions#process" },
    { label: "Documents", href: "/admissions#documents" },
    { label: "FAQ", href: "/admissions#faq" },
  ],
};

export const socialLinks = [
  { platform: "YouTube", url: "https://www.youtube.com/channel/UCdlhAdOGNC-9eWqLlllgvHQ", ariaLabel: "Visit Shabridham Shala on YouTube" },
  { platform: "Facebook", url: "https://facebook.com/", ariaLabel: "Follow us on Facebook" },
  { platform: "Instagram", url: "https://instagram.com/", ariaLabel: "Follow us on Instagram" },
] as const;
