// src/utils/gsapAnimations.js
import { gsap } from "gsap";

export const animateElement = (
  selector,
  scaleStart,
  scaleEnd,
  rotationEnd,
  duration = 1
) => {
  gsap.fromTo(
    selector,
    { scale: scaleStart, rotation: 0 },
    {
      scale: scaleEnd,
      rotation: rotationEnd,
      duration: duration,
      scrollTrigger: {
        trigger: selector,
        start: "top 120%",
        end: "top 30%",
        scrub: true,
      },
    }
  );
};
