import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { drukWide, atypNormal, atypLight } from "../fonts";
import SmoothScroll from "@/components/Lenis/SmoothScroll";
import PageTransition from "@/components/Transitions/PageTransition";
import { TransitionProvider } from "@/components/context/TransitionContext";

const inter = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Adenuga Adewumi Efe",
  description: "Front End Engineer | Mobile Engineer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/images/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/images/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/images/favicon-16x16.png"
        />
        <link rel="manifest" href="/images/site.webmanifest"></link>
        <link rel="icon" href="/images/favicon.ico" sizes="any" />
      </head>
      <body
        className={`${drukWide.variable} ${atypNormal.variable} ${atypLight.variable}`}
      >
        <SmoothScroll>
          <TransitionProvider>
            <PageTransition />
            {children}
          </TransitionProvider>
        </SmoothScroll>
      </body>
    </html>
  );
}
