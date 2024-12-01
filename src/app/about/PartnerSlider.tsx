import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const PartnerSlider = () => {
  const sliderRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return; // Ensure slider is not null
    const sliderWidth = slider.scrollWidth - slider.offsetWidth;

    gsap.to(slider, {
      x: -sliderWidth, // Slide the container fully to the left
      ease: "none",
      scrollTrigger: {
        trigger: ".main-abt-cont", // Trigger based on the main container
        start: "top top",
        end: "bottom bottom",
        scrub: true,
        onUpdate: (self) => {
          // Reverses direction on scroll-up
          gsap.set(slider, { x: -sliderWidth * self.progress });
        },
      },
    });
  }, []);

  return (
    <div
      ref={sliderRef}
      className="flex space-x-8 overflow-hidden partner-slider"
      style={{ width: "200%" }} // Adjust width as needed
    >
      {/* Example logos or partner elements */}
      <img src="/images/logo1.png" alt="Partner 1" className="h-12 w-auto" />
      <img src="/images/logo2.png" alt="Partner 2" className="h-12 w-auto" />
      <img src="/images/logo3.png" alt="Partner 3" className="h-12 w-auto" />
      <img src="/images/logo4.png" alt="Partner 4" className="h-12 w-auto" />
      {/* Add more logos as needed */}
    </div>
  );
};

export default PartnerSlider;
