import SplitWordAnimation from "@/utils/SplitWordAnimation";
import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div className="h-full flex items-end justify-start">
      <Image
        src="/images/about-img.svg"
        alt="Logo"
        width={1000}
        height={1000}
        priority
        className="h-full w-fit object-fill z-[2]"
      />
      <div className="h-full flex flex-col items-start justify-center relative w-full">
        <div className="h-full w-full flex flex-col items-start justify-center absolute left-[-10%]">
          <h1 className="text-primary leading-none font-extrabold text-[86px]">
            HELLO
          </h1>
          <h3 className=" text-black dark:text-white font-light text-[23px]">
            I’m Adenuga Adewumi <span className="text-primary">Efe</span>{" "}
          </h3>
          <p className="border-l-primary py-14 px-14 border-l mt-10 text-black dark:text-white font-light text-[23px]">
            <SplitWordAnimation
              word="
            I am a Self-motivated Front-End Web/Application Developer and UI
            Designer that adds high level of experience for over more than 2
            years collaborating and working on multiple web-based projects. I am
            a Passionate, hardworking coder with penchant for developing
            customized interfaces that factor in unique demands for
            accessibility, reachability and security. Organized approach to
            meeting multiple, concurrent deadlines.I pull from active knowledge
            of current technology landscape to promote best practices in web
            design."
            />{" "}
            <br />
            <br />
            <br />
            <SplitWordAnimation
              word="Seeking a Front-end Developer role to pursue my passion for
            developing effective and usefull User Interfaces and grow an
            emerging brand."
            />
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
