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
  const [isElement, setIsElement] = useState(false);

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
    // Update isElement whenever cursorState.label changes
    setIsElement(React.isValidElement(cursorState.label));
  }, [cursorState.label]);

  useEffect(() => {
    const newCursorStyle: React.CSSProperties = {
      width: cursorState.width,
      height: cursorState.height,
      borderRadius: "50%",
      backgroundColor:
        cursorState.showBackground !== false
          ? darkMode
            ? "white"
            : "white"
          : "transparent",
      mixBlendMode: cursorState.mixBlendMode || "difference",
      position: "fixed",
      zIndex: 9999,
      pointerEvents: "none",
      transition: isElement
        ? "transform 0.2s ease-out, width 0.2s ease-out, height 0.2s ease-out, scale 0.3s ease-out"
        : "transform 0.2s ease-out, width 0.2s ease-out, height 0.2s ease-out",
      transform: `translate(${cursorPosition.x}px, ${
        cursorPosition.y
      }px) translate(-50%, -50%) ${isElement ? "scale(1)" : ""}`,
      opacity: visible ? 1 : 0,
      display: isSmallScreen ? "none" : "flex",
      alignItems: "center",
      justifyContent: "center",
      color: darkMode ? "black" : "black",
      fontSize: "14px",
    };
    setCursorStyle(newCursorStyle);
  }, [
    darkMode,
    cursorState,
    cursorPosition,
    visible,
    isSmallScreen,
    isElement,
  ]);

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
      {typeof cursorState.label === "string" ? (
        <p className="uppercase font-semibold">{cursorState.label}</p>
      ) : (
        <div
          style={{
            transform: `scale(${isElement ? 1 : 0})`,
            transition: "transform 0.3s ease-out",
          }}
        >
          {cursorState.label}
        </div>
      )}
    </div>
  );
};

export default CustomCursor;
