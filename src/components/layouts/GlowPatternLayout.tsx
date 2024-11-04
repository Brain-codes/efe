"use client";

import React from "react";
import PATTERNBG from "../../../public/images/patternBG.svg";
import { useIsMobile } from "../../hooks/useIsMobile";

interface GlowPatternLayoutProps {
  children: React.ReactNode;
  className?: string;
  height?: string;
}

const GlowPatternLayout: React.FC<GlowPatternLayoutProps> = ({
  children,
  className = "",
  height = "100dvh"
}) => {
  const [mousePosition, setMousePosition] = React.useState({ x: 0, y: 0 });
  const isMobile = useIsMobile();

  const handleMouseMove = (e: React.MouseEvent) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  return (
    <div
      onMouseMove={!isMobile ? handleMouseMove : undefined}
      className={`relative w-full h-full min-h-[100dvh] bg-deep-green ${className}`}
      style={{ isolation: "isolate" }}
    >
      {/* Content Layer */}
      <div className="absolute inset-0" style={{ zIndex: 30 }}>
        {children}
      </div>

      {/* Pattern Background Layer */}
      <div
        className={`absolute inset-0 h-[${height}]`}
        style={{
          backgroundImage: `url(${PATTERNBG.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          zIndex: 20,
        }}
      />

      {/* Cursor Effect Layer - Only shown on desktop */}
      {!isMobile && (
        <div
          className="absolute pointer-events-none"
          style={{
            left: `${mousePosition.x - 150}px`,
            top: `${mousePosition.y - 150}px`,
            width: "300px",
            height: "300px",
            backgroundColor: "#FFB901",
            borderRadius: "50%",
            filter: "blur(100px)",
            opacity: 0.5,
            transform: "translate3d(0, 0, 0)",
            willChange: "transform",
            zIndex: 10,
          }}
        />
      )}

      {/* Static Glow Effects - Only shown on mobile */}
      {isMobile && (
        <>
          <div
            className="absolute pointer-events-none"
            style={{
              right: "0",
              top: "0",
              width: "200px",
              height: "200px",
              backgroundColor: "#FFB901",
              borderRadius: "50%",
              filter: "blur(100px)",
              opacity: 0.5,
              zIndex: 10,
            }}
          />
          <div
            className="absolute pointer-events-none"
            style={{
              left: "0",
              bottom: "0",
              width: "200px",
              height: "200px",
              backgroundColor: "#FFB901",
              borderRadius: "50%",
              filter: "blur(100px)",
              opacity: 0.5,
              zIndex: 10,
            }}
          />
        </>
      )}
    </div>
  );
};

export default GlowPatternLayout;
