import { allSkills } from "@/utils/Constants";
import React, { useState, useEffect, FC, SVGProps } from "react";

interface Props extends SVGProps<SVGSVGElement> {}

const Skills: FC<Props> = () => {
  const [currentCategory, setCurrentCategory] = useState("all");
  const [filteredSkills, setFilteredSkills] = useState(allSkills);
  const [animationKey, setAnimationKey] = useState(0);

  useEffect(() => {
    const newFilteredSkills =
      currentCategory === "all"
        ? allSkills
        : allSkills.filter((skill) => skill.category === currentCategory);
    setFilteredSkills(newFilteredSkills);
    setAnimationKey((prev) => prev + 1); // Increment key to trigger re-render
  }, [currentCategory]);

  return (
    <div className="h-full relative">
      <h1
        className={`title-animation text-primary rotate-[-90deg] absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-1/2 w-fit font-black uppercase text-[200px]`}
        key={animationKey} // Using animationKey to trigger re-animation
      >
        {currentCategory.charAt(0).toUpperCase() + currentCategory.slice(1)}
      </h1>
      <div className="absolute top-1/2 right-[1%] transform -translate-y-1/2 -translate-x-1/2 flex flex-col space-y-4 mb-4">
        {["all", "frontend", "backend", "stacks", "others"].map((category) => (
          <h1
            key={category}
            onClick={() => setCurrentCategory(category)}
            className={`cursor-pointer px-4 py-2 rounded uppercase text-[13px] font-black underline text-right ${
              currentCategory === category ? "text-primary" : "dark:text-white"
            }`}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </h1>
        ))}
      </div>
      <div className="h-full flex items-center justify-center mx-[10%] ">
        <div className="grid grid-cols-4 gap-4">
          {filteredSkills.map((skill, index) => (
            <div
              key={`${skill.category}-${index}-${animationKey}`}
              className={`group fade-in-item rounded-[8px] flex items-center justify-center w-[234px] h-[134px] cursor-pointer overflow-hidden relative`}
              style={{
                backgroundColor: `#${skill.color}`,
                animationDelay: `${index * 0.1}s`,
              }}
            >
              <skill.icon className="group-hover:opacity-1 opacity-100 transition-all duration-150 ease-out" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
