import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import GlowPatternLayout from "@/components/layouts/GlowPatternLayout";
import AnimatedText from "@/components/Tags/AnimatedText";
import { useIsMobile } from "@/hooks/useIsMobile";
import { gsap } from "gsap"; // Import GSAP
import { useEffect } from "react"; // Import useEffect
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider, { Settings } from "react-slick";

const HeroStatsAndBrand = () => {
  const isMobile = useIsMobile();
  const { ref, inView } = useInView({ threshold: 0.1 });
  const targetNumber = 450; // Your target number

  const settings: Settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: true,
    speed: 10000,
    autoplaySpeed: 0,
    cssEase: "linear",
    arrows: false,
    pauseOnFocus: true,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024, // For screens below 1024px
        settings: {
          slidesToShow: 4, // Show 5 slides
          slidesToScroll: 4, // Scroll 1 slide at a time
        },
      },
      {
        breakpoint: 768, // For screens below 768px
        settings: {
          slidesToShow: 3, // Show 3 slides
          slidesToScroll: 3, // Scroll 1 slide at a time
        },
      },
      {
        breakpoint: 480, // For screens below 480px
        settings: {
          slidesToShow: 2, // Show 2 slides
          slidesToScroll: 2, // Scroll 1 slide at a time
        },
      },
      {
        breakpoint: 320, // For screens below 320px
        settings: {
          slidesToShow: 1, // Show 1 slide
          slidesToScroll: 1, // Scroll 1 slide at a time
        },
      },
    ],
  };

  useEffect(() => {
    if (inView) {
      gsap.fromTo(
        ".animated-width",
        { width: "0%" },
        { width: "50%", duration: 1 }
      ); // Animate width from 0 to 50%
    }
  }, [inView]);

  return (
    <GlowPatternLayout
      className="!h-[140dvh] mb-[20dvh] overflow-hidden"
      height="140dvh"
    >
      <div className="h-full">
        {/* CountUp Component for the Number */}
        <AnimatedText.h1
          ref={ref}
          className="font-atype-normal font-[500] uppercase text-left leading-[139.2%] md:text-[202px] text-[150px] text-primary mt-20 px-[5%]"
        >
          {inView && (
            <CountUp
              start={0}
              end={targetNumber}
              duration={2} // Animation duration in seconds
              separator="," // Separator for thousands
              // easingFn={(t) => t * (2 - t)} // Custom easing function for smoother transition
              // onComplete={() => console.log("Counting complete!")} // Optional callback
            />
          )}
        </AnimatedText.h1>

        <div className="flex md:flex-row flex-col justify-between md:items-center w-full px-[5%]">
          <AnimatedText.h1 className="font-druk uppercase text-left leading-[139.2%] md:text-[31px] text-[6dvw] text-[#fff]">
            Projects
          </AnimatedText.h1>
          <div className="bg-white animated-width h-[2px] md:block hidden"></div>
          <AnimatedText.h1
            className="font-druk uppercase text-left leading-[139.2%] md:text-[31px] text-[6dvw] text-[#fff] w-fit"
            animationType={isMobile ? "words" : "chars"}
          >
            Successfully Done
          </AnimatedText.h1>
          <div className="bg-white animated-width h-[2px] block md:hidden"></div>
        </div>

        <AnimatedText.h1 className="font-druk uppercase text-left leading-[139.2%] md:text-[40px] text-[6dvw] text-[#E1FFF6] mt-56 px-[5%]">
          Brands <br /> i&apos;ve worked with
        </AnimatedText.h1>
        <div className="mt-[15dvh] mb-[20dvh] ">
          <Slider
            {...settings}
            className="flex w-full overflow-visible slick-brand-cont items-center gap-52"
          >
            {Array.from({ length: 3 }, (_, index) => (
              <div
                key={index}
                className="border-[2px] border-[#50555370] bg-[#ffffff1a] backdrop-blur-[3px] !flex !items-center justify-start md:w-[400px] w-[100%] h-[194px] px-4"
              >
                <img
                  src={`/images/salako.svg`}
                  alt={`brand`}
                  className="ml-[5%]"
                />{" "}
                {/* Dummy brand images */}
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </GlowPatternLayout>
  );
};

export default HeroStatsAndBrand;
