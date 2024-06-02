"use client";
import React from "react";
import { ToggleProvider } from "@/components/context/ToggleContext";
import { DarkModeProvider } from "@/components/context/DarkModeContext";
import CustomCursor from "@/utils/CustomCursor";
import { CursorProvider } from "@/components/context/CursorProvider";
import ProjectsWrapper from "./ProjectsWrapper";

export default function Page() {
  return (
    <main>
      <DarkModeProvider>
        <ToggleProvider>
          <CursorProvider>
            <CustomCursor />
            <ProjectsWrapper />
          </CursorProvider>
        </ToggleProvider>
      </DarkModeProvider>
    </main>
  );
}
