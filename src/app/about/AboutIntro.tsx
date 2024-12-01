/* eslint-disable react/no-unescaped-entities */
import React, { useEffect } from "react";
import { StarIconTwo } from "../../../public/images/RenderedIcons";
import AnimatedText from "@/components/Tags/AnimatedText";
import ImageWithHistoryTile from "@/components/tiles/ImageWithHistoryTile";
import SAMPLE from "../../../public/images/group1.svg";
import { gsap } from "gsap";
import { animateElement } from "@/utils/gsapAnimations";

const AboutIntro = () => {
  useEffect(() => {
    gsap.fromTo(
      ".image-about-scale", // Target the element with class scale-50
      { scale: 0.5 }, // Start scale
      {
        scale: 1, // End scale
        scrollTrigger: {
          trigger: ".scale-50", // Trigger the animation when this element is in view
          start: "top 120%", // Start when the top of the element is 80% from the top of the viewport
          end: "top 30%", // End when the top of the element is 30% from the top of the viewport
          scrub: true, // Smooth scrubbing, takes 1 second to catch up to the scrollbar
        },
      }
    );

    gsap.fromTo(
      ".intro-abt-cont", // Target the container
      { opacity: 0 }, // Initial state
      { opacity: 1, duration: 1, delay: 1.7 } // Final state
    );

    animateElement(".star-roll", 2, 1, 360); // Star rotation and scale animation

    gsap.fromTo(
      ".star-roll", // Target the element with class scale-50
      { scale: 2, top: "-20%", position: "absolute" }, // Start scale and position
      {
        scale: 1, // End scale
        top: "5%", // Position it at the top of its container
        scrollTrigger: {
          trigger: ".intro-abt-cont", // Trigger the animation when this element is in view
          start: "top 120%", // Start when the top of the element is 80% from the top of the viewport
          end: "top 30%", // End when the top of the element is 30% from the top of the viewport
          scrub: true, // Smooth scrubbing, takes 1 second to catch up to the scrollbar
        },
      }
    );
  }, []);

  return (
    <div className="py-[20dvh] flex flex-col items-center justify-center px-[5%] relative intro-abt-cont">
      <div className=" star-roll">
        <StarIconTwo className="text-[#A4FCFC] rotate-infinite" />
      </div>
      <AnimatedText.p
        className="md:text-[20px] font-atype-normal text-[#A4FCFC] uppercase w-full mt-10 text-center font-[800]"
        animationType="words"
        variant="scrub"
      >
        I'm a front-end developer based in Abuja Nigeria, passionate about
        crafting refined, responsive digital experiences that engage users and
        bring functionality to life with creativity and precision. I'm a
        front-end developer based in Abuja Nigeria, passionate about crafting
        refined, responsive digital experiences that engage users and bring
        functionality to life with creativity and precision. I'm a front-end
        developer based in Abuja Nigeria, passionate about crafting refined,
        responsive digital experiences that engage users and bring functionality
        to life with creativity and precision.
      </AnimatedText.p>
      <div className="mb-[10dvh]"></div>
      <div className="scale-50 image-about-scale">
        <ImageWithHistoryTile
          imageSrc={SAMPLE.src}
          text="DEV FEST ABUJA 2022"
          position={"top-right"}
          borderRadius="30px"
        />
      </div>
    </div>
  );
};

export default AboutIntro;
