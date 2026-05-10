import type { Metadata } from "next";
import "./globals.css";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { RouteScrollReset } from "@/components/route-scroll-reset";
import { ScrollProgress } from "@/components/scroll-progress";

export const metadata: Metadata = {
  title: "Shabridham Shala | વ્યારા",
  description: "શબરીધામ શાળા, વ્યારા (તાપી, ગુજરાત) માટે લર્નિફાય-શૈલીનો શાળા વેબસાઇટ કૉન્સેપ્ટ.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="gu" data-theme="light" className="h-full antialiased">
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
