"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useTransition } from "../context/TransitionContext";

const NavbarTwo = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [hasBackground, setHasBackground] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const router = useRouter();
  const { startPageTransition } = useTransition();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;

      // Handle navbar visibility
      setIsVisible(
        prevScrollPos > currentScrollPos || // Scrolling up
          currentScrollPos < 200 // Within first 200px
      );

      // Handle background color
      setHasBackground(currentScrollPos > 200);

      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  const handleNavigation = (href: string, e: React.MouseEvent) => {
    e.preventDefault();
    startPageTransition(() => {
      router.push(href);
    });
  };

  return (
    <div
      className={`w-full py-5 px-[5%] flex items-center justify-between border-b-[#7C8685] border-b fixed top-0 left-0 right-0 z-50 transition-all duration-300
        ${!isVisible ? "-translate-y-full" : "translate-y-0"}
        ${hasBackground ? "bg-deep-green" : "bg-transparent"}
      `}
    >
      <div className="flex items-center justify-center gap-10">
        <Link
          href="/projects"
          onClick={(e) => handleNavigation("/projects", e)}
          className="uppercase font-[900] font-atype-normal text-[17px] text-[#7C8685]"
        >
          ABOUT
        </Link>
        <Link
          href="/work"
          onClick={(e) => handleNavigation("/work", e)}
          className="uppercase font-[900] font-atype-normal text-[17px] text-[#7C8685]"
        >
          WORK
        </Link>
      </div>
    </div>
  );
};

export default NavbarTwo;
