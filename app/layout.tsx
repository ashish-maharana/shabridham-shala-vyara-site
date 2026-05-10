import type { Metadata } from "next";
import "./globals.css";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { RouteScrollReset } from "@/components/route-scroll-reset";
import { ScrollProgress } from "@/components/scroll-progress";

export const metadata: Metadata = {
  title: "Shabridham Shala | Vyara",
  description: "A Learnify-style school website concept for Shabridham Shala, Vyara, Tapi, Gujarat.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" data-theme="light" className="h-full antialiased">
      <body className="min-h-full">
        <RouteScrollReset />
        <ScrollProgress />
        <div className="learnify-shell">
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
