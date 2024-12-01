import type { Metadata } from "next";
import { Outfit, Instrument_Serif } from "next/font/google";
import "./globals.css";
import { drukWide, atypNormal, atypLight } from "../../src/fonts";
import { TransitionProvider } from "@/components/context/TransitionContext";

const inter = Outfit({ subsets: ["latin"] });
const instrumentSerif = Instrument_Serif({ subsets: ["latin"], weight: "400" });

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
        className={`${drukWide.variable} ${atypNormal.variable} ${atypLight.variable} ${instrumentSerif.className}`}
      >
        <TransitionProvider>{children}</TransitionProvider>
      </body>
    </html>
  );
}
