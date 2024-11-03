"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

interface ToggleContextType {
  isOpen: boolean;
  toggleIsOpen: () => void;
}

const ToggleContext = createContext<ToggleContextType | undefined>(undefined);

export const ToggleProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleIsOpen = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <ToggleContext.Provider value={{ isOpen, toggleIsOpen }}>
      {children}
    </ToggleContext.Provider>
  );
};

export const useToggle = (): ToggleContextType => {
  const context = useContext(ToggleContext);
  if (!context) {
    throw new Error("useToggle must be used within a ToggleProvider");
  }
  return context;
};
