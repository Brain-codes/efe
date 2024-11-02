"use client";

import React, { createContext, useContext, useState } from "react";

interface TransitionContextType {
  isAnimating: boolean;
  isClosing: boolean;
  startPageTransition: (callback: () => void) => void;
}

const TransitionContext = createContext<TransitionContextType | undefined>(undefined);

export const TransitionProvider = ({ children }: { children: React.ReactNode }) => {
  const [isAnimating, setIsAnimating] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const startPageTransition = (callback: () => void) => {
    // Start opening animation
    setIsAnimating(true);
    setIsClosing(false);
    
    // Wait for curtains to drop
    setTimeout(() => {
      // Execute the navigation
      callback();
      
      // Start closing animation after page loads
      setTimeout(() => {
        setIsClosing(true);
        
        // Reset everything after closing animation
        setTimeout(() => {
          setIsAnimating(false);
          setIsClosing(false);
        }, 1000);
      }, 500);
    }, 800);
  };

  return (
    <TransitionContext.Provider value={{ isAnimating, isClosing, startPageTransition }}>
      {children}
    </TransitionContext.Provider>
  );
};

export const useTransition = () => {
  const context = useContext(TransitionContext);
  if (!context) {
    throw new Error("useTransition must be used within a TransitionProvider");
  }
  return context;
}; 