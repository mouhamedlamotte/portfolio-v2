import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Toaster } from "@/components/ui/toaster";
import { Provider } from "./providers";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mouhameth Lamotte - Développeur Web",
  description: "Portfolio de Mouhameth Lamotte, développeur web passionné basé à Dakar",
  keywords: [
    "développeur web", 
    "Dakar", 
    "Next.js", 
    "Django", 
    "Firebase", 
    "Mouhameth Lamotte", 
    "développement web freelance", 
    "création de sites web", 
    "développement d'applications web", 
    "développeur Next.js à Dakar", 
    "solutions web sur mesure", 
    "intégration Firebase", 
    "développement d'API Django", 
    "freelance en développement web", 
    "portefeuille en ligne de développeur", 
    "Mouhameth Lamotte portfolio", 
    "développement frontend et backend", 
    "réalisation de projets web à Dakar"
  ]
};

export default async function LocaleLayout({
  children,
  params : {locale}
}: Readonly<{
  children: React.ReactNode;
  params: { 
    locale: string
   }; 
}>) {

  
  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={inter.className}>
        <Provider locale={locale}>
          <div className="min-h-screen bg-background">
            <Navbar />
            <main className="">
              {children}
            </main>
          </div>
          <Toaster />
        </Provider>
      </body>
    </html>
  );
}