import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/navbar";
import { Toaster } from "@/components/ui/toaster";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mouhameth Lamotte - Développeur Web",
  description: "Portfolio de Mouhameth Lamotte, développeur web passionné basé à Dakar",
  keywords: ["développeur web", "Dakar", "Next.js", "Django", "Firebase", "Mouhameth Lamotte"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  

  return (
    <html lang="fr" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="min-h-screen bg-background">
            <Navbar />
            <main className="">
              {children}
            </main>
          </div>
          <Toaster />
        </ThemeProvider>
        <Script  src="http://localhost:3000/js/track.js" data-api-key="cm3n6j8wx000111m3dvlmfny5" />
      </body>
    </html>
  );
}