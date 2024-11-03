"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

interface CursorProviderProps {
  children: ReactNode;
}

const CursorContext = createContext<any>(null);

export const CursorProvider = ({ children }: CursorProviderProps) => {
  const [cursorState, setCursorState] = useState({
    width: "60px",
    height: "60px",
    label: "", // Add label to the state
  });

  const updateCursorState = (state: {
    width: string;
    height: string;
    label: string;
  }) => {
    setCursorState(state);
  };

  return (
    <CursorContext.Provider value={{ cursorState, updateCursorState }}>
      {children}
    </CursorContext.Provider>
  );
};

export const useCursor = () => useContext(CursorContext);
