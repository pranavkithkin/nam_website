import type { Metadata } from "next";
import { Inter, Outfit, Dancing_Script } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import TargetCursor from "@/components/TargetCursor";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  variable: "--font-dancing",
  weight: ["600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "NAM UAE - Solutions Beyond Expectations",
  description: "Premier provider of corporate gifts, digital printing, and custom uniforms in Dubai, UAE. Serving businesses across multiple industries since 2018.",
  keywords: "corporate gifts Dubai, digital printing UAE, custom uniforms, business solutions, NAM UAE",
  authors: [{ name: "Noor Al Masafi" }],
  openGraph: {
    title: "NAM UAE - Solutions Beyond Expectations",
    description: "Premier provider of corporate gifts, digital printing, and custom uniforms in Dubai, UAE.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${outfit.variable} ${dancingScript.variable} font-sans antialiased`}>
        <TargetCursor
          spinDuration={2}
          hideDefaultCursor
          parallaxOn
          hoverDuration={0.2}
        />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
