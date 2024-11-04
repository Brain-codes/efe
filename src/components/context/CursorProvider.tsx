"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

interface CursorProviderProps {
  children: ReactNode;
}

interface CursorState {
  width: string;
  height: string;
  label: string | React.ReactNode;
  showBackground?: boolean;
  mixBlendMode?: string;
}

const CursorContext = createContext<any>(null);

const initialCursorState: CursorState = {
  width: "60px",
  height: "60px",
  label: "",
  showBackground: true,
  mixBlendMode: "difference",
};

export const CursorProvider = ({ children }: CursorProviderProps) => {
  const [cursorState, setCursorState] = useState<CursorState>(initialCursorState);

  const updateCursorState = (state: Partial<CursorState>) => {
    setCursorState(prev => ({
      ...prev,
      ...state
    }));
  };

  const resetCursorState = () => {
    setCursorState(initialCursorState);
  };

  return (
    <CursorContext.Provider value={{ cursorState, updateCursorState, resetCursorState }}>
      {children}
    </CursorContext.Provider>
  );
};

export const useCursor = () => useContext(CursorContext);
