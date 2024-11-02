import SplitWordAnimation from "@/utils/SplitWordAnimation";
import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div className="h-full md:flex-row flex-col flex items-end justify-start md:gap-0 gap-10 relative">
      <div className="md:w-[45%] sm:w-[70%] max-[1262px]:w-[60%] md:h-full object-cover flex items-end justify-start">
        <Image
          src="/images/about-img.svg"
          alt="Logo"
          width={1000}
          height={1000}
          priority
          className="h-fit w-full  object-fill z-[2]"
        />
      </div>
      <div className="md:h-full flex flex-col items-start justify-center relative w-full md:w-1/2 min-[1262px]:w-[50%]">
        <div className="md:h-full w-full flex flex-col items-start justify-center md:relative absolute md:top-auto  sm:top-0 md:px-0 px-[5%] left-0">
          <h1 className="text-primary leading-none font-extrabold md:text-[86px] text-[46px]">
            HELLO
          </h1>
          <h3 className=" text-black dark:text-white font-light md:text-[23px] text-[16px]">
            I’m Adenuga Adewumi <span className="text-primary">Efe</span>{" "}
          </h3>
          <p
            className="border-l-primary md:py-14 py-5 md:pl-14 md:pr-14 pl-10 border-l mt-10 text-black dark:text-white font-light md:text-[23px] max-[1262px]:text-[18px] sm:text-[13px]
          "
          >
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
