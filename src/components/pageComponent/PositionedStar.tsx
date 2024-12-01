import React, { useEffect } from "react";
import { StarIconTwo } from "../../../public/images/RenderedIcons";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const PositionedStar = () => {
  useEffect(() => {
    gsap.fromTo(
      ".star-roll-two",
      { scale: 1.5, rotation: 0 },
      {
        scale: 1,
        duration: 1,
        scrollTrigger: {
          trigger: ".main-abt-cont", // Set the trigger to the main container
          start: "top top", // Start when the main container reaches the top
          end: "bottom bottom", // End when the main container reaches the bottom
          scrub: true,
          onUpdate: (self) => {
            // Update rotation based on scroll progress, creating a continuous rotation
            gsap.to(".star-roll-two", {
              rotation: self.progress * 360, // Adjust for continuous rotation
              overwrite: "auto",
            });
          },
        },
      }
    );
  }, []);

  return (
    <StarIconTwo className="text-[#A4FCFC] star-roll-two fixed bottom-5 right-5 w-10 h-10" />
  );
};

export default PositionedStar;
