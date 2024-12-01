"use client";
import React from "react";
import { ToggleProvider } from "@/components/context/ToggleContext";
import { DarkModeProvider } from "@/components/context/DarkModeContext";
import CustomCursor from "@/utils/CustomCursor";
import { CursorProvider } from "@/components/context/CursorProvider";
import AboutPageHero from "./AboutPageHero";
import AboutIntro from "./AboutIntro";
import ClientWrapper from "@/components/ClientWrapper";
import PositionedStar from "@/components/pageComponent/PositionedStar";
import PartnerSlider from "./PartnerSlider";

export default function Page() {
  return (
    <main>
      <ClientWrapper>
        <DarkModeProvider>
          <ToggleProvider>
            <CursorProvider>
              <CustomCursor />
              <main className="bg-deep-green main-abt-cont">
                <AboutPageHero />
                <AboutIntro />
                <PositionedStar />
                <PartnerSlider /> {/* Add the PartnerSlider here */}
              </main>
            </CursorProvider>
          </ToggleProvider>
        </DarkModeProvider>
      </ClientWrapper>
    </main>
  );
}
