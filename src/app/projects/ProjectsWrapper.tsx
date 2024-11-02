import Navbar from "@/components/Navbar/Navbar";
import { useCursor } from "@/components/context/CursorProvider";
import { useDarkMode } from "@/components/context/DarkModeContext";
import React, { useState } from "react";
import { DownArrow } from "../../../public/images/RenderedIcons";
import { accordionItems } from "@/utils/Constants";
import Link from "next/link";
import Image from "next/image";
import { useToggle } from "@/components/context/ToggleContext";

export type AccordionItem = {
  title: string;
  content: string[];
  link: string;
  image: string[];
};

const ProjectsWrapper = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();
  const { updateCursorState } = useCursor();
  const [openIndex, setOpenIndex] = useState<number>(0);
  const { isOpen, toggleIsOpen } = useToggle();

  const toggleAccordion = (index: number) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? -1 : index));
  };

  return (
    <div className={`${darkMode && "dark"} `}>
      <Navbar />
      <div
        className={`${
          isOpen ? "fixed top-[90%]" : "fixed top-0"
        } "bg-white dark:bg-[#010101] h-[100dvh] md:overflow-y-auto overflow-y-scroll flex items-center justify-between px-[5%] md:flex-row flex-col md:pt-0 pt-20 transition-all duration-500`}
      >
        <h1 className="text-primary leading-none font-extrabold md:text-[86px] text-[56px] md:mb-0 mb-10">
          Projects
        </h1>
        <div
          className="md:w-2/3  md:h-[90%] md:overflow-y-scroll md:mr-[3%]"
          id="custom-ios-scrollbar"
        >
          {accordionItems.map((item: AccordionItem, index: number) => (
            <div
              key={index}
              className="w-full dark:bg-[#0F0F0F] bg-black/20 rounded mb-4"
            >
              {/* ACCORDION HEADER */}
              <div
                className="flex w-full justify-between items-center py-10 px-10 cursor-pointer"
                onClick={() => toggleAccordion(index)}
              >
                <h1 className="rounded uppercase text-[13px] font-black underline dark:text-white">
                  {item.title}
                </h1>
                <div className="rounded-full border-2 dark:border-gray-600 border-primary bg-primary dark:bg-primary w-10 h-10 flex items-center justify-center">
                  <DownArrow
                    className={`dark:text-white text-black transform transition-transform ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </div>
              </div>
              {/* ACCORDION CONTENT */}
              <div
                className={`accordion-content ${
                  openIndex === index ? "open" : ""
                }`}
              >
                <Image
                  src={item.image[0]}
                  alt={item.title}
                  width={10000}
                  height={10000}
                  priority
                  className="h-[20dvh] w-full object-cover"
                />{" "}
                <div className="border-l-primary py-7 px-7 border-l-[3px] w-full bg-white/70 dark:bg-primary/10">
                  {item.content.map((con, contentIndex) => (
                    <p
                      key={contentIndex}
                      className="text-black dark:text-white mb-6"
                    >
                      {con}
                    </p>
                  ))}

                  <div className="flex justify-end items-center">
                    <Link
                      href={item.link}
                      className="cursor-pointer px-4 py-2 rounded uppercase text-[13px] font-black underline text-right dark:text-white"
                    >
                      {" "}
                      Visit{" "}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <button
        className="absolute w-16 h-16 bottom-16 right-16 bg-neutral-900 dark:bg-white rounded-full text-white dark:text-black font-semibold"
        onClick={toggleDarkMode}
        onMouseEnter={() =>
          updateCursorState({
            width: "80px",
            height: "80px",
            label: "Preview",
          })
        }
        onMouseLeave={() =>
          updateCursorState({ width: "60px", height: "60px", label: "" })
        }
      >
        {darkMode ? "LHT" : "DRK"}
      </button>
    </div>
  );
};

export default ProjectsWrapper;
