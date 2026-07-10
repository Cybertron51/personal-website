import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import { Header } from "@/components/Header";
import { ClientEffects } from "@/components/ClientEffects";
import "./globals.css";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono-loaded",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Derek Peng",
  description:
    "Derek Peng — SWE at Doppel, EECS at UC Berkeley. Building at the intersection of security, AI, and systems. NeurIPS & IEEE published.",
  openGraph: {
    title: "Derek Peng",
    description:
      "SWE at Doppel. EECS at Berkeley. Published at NeurIPS and IEEE. Security, AI, and systems.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={jetbrainsMono.variable} suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');if(t){document.documentElement.setAttribute('data-theme',t)}else{document.documentElement.setAttribute('data-theme',matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light')}}catch(e){}})();`,
          }}
        />
      </head>
      <body>
        <Header />
        {children}
        <ClientEffects />
      </body>
    </html>
  );
}
