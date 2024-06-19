"use client";
import React from "react";
import { ToggleProvider } from "@/components/context/ToggleContext";
import { DarkModeProvider } from "@/components/context/DarkModeContext";
import CustomCursor from "@/utils/CustomCursor";
import { CursorProvider } from "@/components/context/CursorProvider";
import ImageUpload from "./Upll";

export default function Page() {
  return (
    <main>
      <DarkModeProvider>
        <ToggleProvider>
          <CursorProvider>
            <CustomCursor />
            <ImageUpload />
          </CursorProvider>
        </ToggleProvider>
      </DarkModeProvider>
    </main>
  );
}
