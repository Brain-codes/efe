"use client";

import { useCursor } from "@/components/context/CursorProvider";
import { useDarkMode } from "@/components/context/DarkModeContext";
import React, { useState, useEffect } from "react";

const CustomCursor = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);
  const { darkMode } = useDarkMode();
  const { cursorState } = useCursor();
  const [cursorStyle, setCursorStyle] = useState<React.CSSProperties>({});
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  // Handle screen resize to check if the screen width is <= 749px
  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 749);
    };

    // Initial check
    handleResize();

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const newCursorStyle: React.CSSProperties = {
      width: cursorState.width,
      height: cursorState.height,
      borderRadius: "50%",
      backgroundColor: darkMode ? "white" : "white",
      mixBlendMode: darkMode ? "difference" : "difference",
      position: "fixed",
      zIndex: 9999,
      pointerEvents: "none",
      transition:
        "transform 0.2s ease-out, width 0.2s ease-out, height 0.2s ease-out",
      transform: `translate(${cursorPosition.x}px, ${cursorPosition.y}px) translate(-50%, -50%)`,
      opacity: visible ? 1 : 0,
      display: isSmallScreen ? "none" : "flex",
      alignItems: "center",
      justifyContent: "center",
      color: darkMode ? "black" : "black",
      fontSize: "14px", // Adjust font size as needed
    };
    setCursorStyle(newCursorStyle);
  }, [darkMode, cursorState, cursorPosition, visible, isSmallScreen]);

  useEffect(() => {
    const handleMouseMove = (e: { clientX: any; clientY: any }) => {
      setVisible(true);
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseLeave = () => {
      setVisible(false);
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div style={cursorStyle} aria-hidden="true">
      <p
        className="uppercase font-semibold"
        style={{
          textTransform: "uppercase",
        }}
      >
        {cursorState.label}
      </p>
      {/* Render the label */}
    </div>
  );
};

export default CustomCursor;
