import AnimatedText from "@/components/Tags/AnimatedText";
import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { worksData } from "@/utils/Constants";
import { useIsMobile } from "@/hooks/useIsMobile";

gsap.registerPlugin(ScrollTrigger);

const HeroWork = () => {
  const isMobile = useIsMobile();

  useEffect(() => {
    // Create a timeline for sequential animations
    // alert(`${worksData.length * 100}dvh`);
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".this-relative-one", // Trigger based on the container
        start: "top top",
        end: `${worksData.length * 150}%`, // Adjust end based on the number of items
        scrub: 5,
        // markers: true,
        pin: true, // Pin the container in place
      },
    });

    worksData.forEach((work, index) => {
      tl.fromTo(
        `.work-item-${index}`,
        { clipPath: "inset(100% 0% 0% 0%)" },
        {
          clipPath: "inset(0% 0% 0% 0%)",
          duration: 2, // Duration for each reveal
          onComplete: () => {
            // Add a delay before the next item starts revealing
            if (index < worksData.length - 1) {
              tl.to({}, { duration: 1 }); // Delay for 1 second before the next item starts
            }
          },
        },
        index === 0 ? 0 : "+=3" // Start the next animation after the previous one completes
      );

      // New animation for the image from a small square at the bottom
      tl.fromTo(
        `.work-item-${index} img`, // Target the image within the work item
        { clipPath: "inset(100% 0% 0% 0%)" }, // Start from a small square at the bottom
        {
          clipPath: "inset(0% 0% 0% 0%)", // Reveal the complete image
          duration: 2, // Duration for the image reveal
          ease: "power2.out", // Optional easing
        },
        index === 0 ? 0 : "+=3" // Start the next animation after the previous one completes
      );
    });

    return () => {
      tl.kill(); // Clean up the timeline on unmount
    };
  }, [worksData]);

  return (
    <div className="bg-[#E1FFF6] relative">
      <div className="h-[100dvh] sticky top-0 left-0 right-0 flex flex-col items-center justify-center">
        <AnimatedText.h1
          className="font-druk uppercase text-center leading-[139.2%] md:text-[175px] text-[18dvw] text-deep-green pt-20 px-[5%]"
          variant="spread"
          trigger="scroll"
        >
          WORK
        </AnimatedText.h1>
      </div>
      <div className="py-32"></div>
      <div className="sticky top-[0dvh] left-0 right-0 this-relative-one h-[100dvh]">
        {worksData.map((work, index) => (
          <div
            key={index}
            className={`work-item-${index} absolute top-0 left-0 right-0 flex flex-col items-center justify-center h-[100dvh] pt-[10dvh] z-[1000]`}
            style={{
              backgroundColor: work.backgroundColor,
              clipPath: "inset(100% 0% 0% 0%)", // Ensure initial state for animation
            }}
          >
            <AnimatedText.h1
              className="font-druk uppercase text-center leading-[139.2%] md:text-[96px] text-[7dvw] text-[#E1FFF6] px-[5%]"
              variant="scrub"
              animationType={isMobile ? "words" : "chars"}
            >
              {work.title}
            </AnimatedText.h1>
            <AnimatedText.p
              className="md:text-[18px] text-[12px] font-atype-normal text-[#ffffff] md:w-[60%] w-full text-center font-[400] md:mt-0 mt-4 px-[5%]"
              animationType="words"
              variant="scrub"
            >
              {work.description}
            </AnimatedText.p>
            {isMobile && (
              <div
                className="border py-1 px-7 mt-5 font-atype-normal text-center font-[800] bg-deep-green text-primary uppercase"
                style={{
                  color: work.backgroundColor,
                }}
              >
                VIEW project
              </div>
            )}

            <div className="overflow-hidden h-[90%] md:w-[80%] w-full mt-24">
              <img
                src={work.image}
                alt={work.title}
                className="w-full md:object-contain object-cover h-full"
              />
            </div>
            {/* <a href={work.link} className="text-[#E1FFF6] underline mt-4">
            Visit
          </a> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeroWork;
