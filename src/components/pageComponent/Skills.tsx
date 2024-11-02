"use-client";

import { allSkills } from "@/utils/Constants";
import React, { useState, useEffect, FC, SVGProps } from "react";

interface Props extends SVGProps<SVGSVGElement> {}

const Skills: FC<Props> = () => {
  const [currentCategory, setCurrentCategory] = useState("all");
  const [filteredSkills, setFilteredSkills] = useState(allSkills);
  const [animationKey, setAnimationKey] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [windowWidth, setWindowWidth] = useState<number | undefined>(undefined);

  useEffect(() => {
    // Run only on the client side
    if (typeof window !== "undefined") {
      setWindowWidth(window.innerWidth);

      const handleResize = () => {
        setWindowWidth(window.innerWidth);
      };

      window.addEventListener("resize", handleResize);

      // Cleanup the event listener on component unmount
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  useEffect(() => {
    const newFilteredSkills =
      currentCategory === "all"
        ? allSkills
        : allSkills.filter((skill) => skill.category === currentCategory);
    setFilteredSkills(newFilteredSkills);
    setAnimationKey((prev) => prev + 1); // Increment key to trigger re-render
    setCurrentSlide(0); // Reset slide to the first one when category changes
  }, [currentCategory]);

  useEffect(() => {
    if (windowWidth !== undefined) {
      skillsPerSlide();
      console.log("Window width changed:", windowWidth);
    }
  }, [windowWidth]);

  const handleNext = () => {
    const maxSlides = Math.ceil(filteredSkills.length / skillsPerSlide());
    setCurrentSlide((prev) => (prev + 1) % maxSlides);
  };

  const handlePrev = () => {
    const maxSlides = Math.ceil(filteredSkills.length / skillsPerSlide());
    setCurrentSlide((prev) => (prev - 1 + maxSlides) % maxSlides);
  };

  const skillsPerSlide = () => {
    if (windowWidth !== undefined) {
      if (windowWidth <= 661) return 8;
      if (windowWidth <= 1116) return 15;
      return 16;
    }
    return 16; // Default value if windowWidth is undefined
  };

  const visibleSkills = filteredSkills.slice(
    currentSlide * skillsPerSlide(),
    (currentSlide + 1) * skillsPerSlide()
  );

  return (
    <div className="h-full relative max-[1009px]:flex max-[1009px]:flex-col max-[1009px]:items-center max-[1009px]:justify-center">
      <h1
        className={`title-animation text-primary rotate-[-90deg] absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-1/2 w-fit font-black uppercase text-[200px] `}
        key={animationKey} // Using animationKey to trigger re-animation
      >
        {currentCategory.charAt(0).toUpperCase() + currentCategory.slice(1)}
      </h1>
      <div className="absolute top-1/2 max-[1009px]:static  right-[1%] transform max-[1009px]:transform-none -translate-y-1/2 -translate-x-1/2 flex flex-col max-[1009px]:flex-row max-[1009px]:flex-wrap space-y-4 mb-4 max-[1009px]:items-center max-[1009px]:justify-center">
        {["all", "frontend", "backend", "stacks", "others"].map((category) => (
          <h1
            key={category}
            onClick={() => setCurrentCategory(category)}
            className={`cursor-pointer px-4 py-2 rounded uppercase text-[13px] font-black underline max-[1009px]:text-center text-right max-[1009px]:!mt-0  ${
              currentCategory === category ? "text-primary" : "dark:text-white"
            }`}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </h1>
        ))}
      </div>
      <div className="h-full max-[1009px]:h-fit max-[1009px]:mx-[5%]  flex items-center justify-center mx-[10%]">
        <div className="grid grid-cols-4 max-[1116px]:grid-cols-3 gap-4 max-[779px]:grid-cols-3 max-[582px]:grid-cols-2">
          {visibleSkills.map((skill, index) => (
            <div
              key={`${skill.category}-${index}-${animationKey}`}
              className={`group fade-in-item rounded-[8px] flex items-center justify-center w-[234px] max-[1009px]:w-[200px] max-[1009px]:h-[100px] h-[134px] cursor-pointer overflow-hidden relative max-[661px]:w-[180px] max-[336px]:w-[100%]`}
              style={{
                backgroundColor: `#${skill.color}`,
                animationDelay: `${index * 0.1}s`,
              }}
            >
              <skill.icon className="group-hover:opacity-1 opacity-100 transition-all duration-150 ease-out max-[1009px]:w-[40%]" />
            </div>
          ))}
        </div>
      </div>
      {filteredSkills.length > skillsPerSlide() && (
        <div className="mt-10 flex gap-10">
          <h1
            className="cursor-pointer uppercase text-[13px] font-black underline dark:text-white"
            onClick={handlePrev}
          >
            PREV
          </h1>
          <h1
            className="cursor-pointer uppercase text-[13px] font-black underline dark:text-white"
            onClick={handleNext}
          >
            NEXT
          </h1>
        </div>
      )}
    </div>
  );
};

export default Skills;
