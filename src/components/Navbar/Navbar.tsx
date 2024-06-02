"use client";
import React, { useState } from "react";
import { useToggle } from "../context/ToggleContext";
import Image from "next/image";
import { useDarkMode } from "../context/DarkModeContext";

const Navbar = ({ showLogo = true }: { showLogo?: boolean }) => {
  const { isOpen, toggleIsOpen } = useToggle();
  const { darkMode, toggleDarkMode } = useDarkMode();
  return (
    <div
      className={` ${
        isOpen ? "h-[90%]" : "h-[50px]"
      } transition-all duration-500 w-full fixed z-10`}
    >
      {!isOpen ? (
        <div className="px-[5%] py-10 h-full w-full flex justify-between">
          {/* {showLogo ? (
            <Image
              src="/images/logo.svg"
              alt="Logo"
              width={100}
              height={100}
              priority
              className="w-[56px] h-[56px]"
              
            />
          ) : (
            <></>
          )} */}
          <Image
            src="/images/logo.svg"
            alt="Logo"
            width={100}
            height={100}
            priority
            className={`${
              !showLogo ? "opacity-0" : "opacity-1"
            } w-[56px] h-[56px] transition-all duration-500`}
          />
          <Image
            src={darkMode ? "/images/nav.svg" : "/images/nav-dark.svg"}
            alt="Logo"
            width={100}
            height={100}
            priority
            className={` ${
              isOpen ? "rotate-[90deg]" : "rotate-[45deg]"
            } w-[56px] h-[56px] transition-all duration-500`}
            onClick={toggleIsOpen}
          />
        </div>
      ) : (
        <div className="top-0 left-0 h-full w-full bg-orange-500">
          <div className="px-[5%] py-10 h-full w-full flex justify-between">
            <Image
              src="/images/logo.svg"
              alt="Logo"
              width={100}
              height={100}
              priority
              className="w-[56px] h-[56px]"
            />
            <Image
              src="/images/nav.svg"
              alt="Logo"
              width={100}
              height={100}
              priority
              className={` ${
                isOpen ? "rotate-[90deg]" : ""
              } rotate-0 w-[56px] h-[56px] transition-all duration-500`}
              onClick={toggleIsOpen}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
