/* eslint-disable @next/next/no-img-element */
import React, { useEffect } from "react";
import LEFT from "../../../public/images/leftAH.png";
import RIGHT from "../../../public/images/rightAH.png";
import AnimatedText from "@/components/Tags/AnimatedText";
import { gsap } from "gsap";

const AboutPageHero = () => {
  useEffect(() => {
    // GSAP animation
    gsap.fromTo(
      ".hero-container", // Target the container
      { opacity: 0, gap: "0%", rotation: 0 }, // Initial state
      { opacity: 1, gap: "50%", rotation: 0, duration: 1 } // Final state
    );

    gsap.fromTo(
      ".left-image", // Target the left image
      { opacity: 0, rotation: 0 }, // Initial state
      { opacity: 1, rotation: -15, duration: 1, delay: 0.5 } // Final state
    );

    gsap.fromTo(
      ".right-image", // Target the right image
      { opacity: 0, rotation: 0 }, // Initial state
      { opacity: 1, rotation: 15, duration: 1, delay: 0.5 } // Final state
    );
  }, []);

  return (
    <div className="hero-container flex items-center justify-center relative min-h-[100dvh] overflow-x-hidden bg-deep-green gap-[50%]">
      <img
        src={LEFT.src}
        alt=""
        className="left-image rotate-[-15deg]"
      />
      <AnimatedText.h1
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-druk uppercase text-center leading-[107.6%] md:text-[77px] text-[11dvw] text-primary w-full z-[5]"
        delay={1.5}
        // trigger="load"
        // variant="fade"
      >
        ABOUT <br /> ME
      </AnimatedText.h1>
      <img src={RIGHT.src} alt="" className="right-image rotate-[15deg]" />
    </div>
  );
};

export default AboutPageHero;
