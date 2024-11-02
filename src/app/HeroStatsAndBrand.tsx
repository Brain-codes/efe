import GlowPatternLayout from "@/components/layouts/GlowPatternLayout";
import AnimatedText from "@/components/Tags/AnimatedText";
import { useIsMobile } from "@/hooks/useIsMobile";
import React from "react";

const HeroStatsAndBrand = () => {
  const isMobile = useIsMobile();
  return (
    <GlowPatternLayout>
      <div className="px-[5%] h-full">
        <AnimatedText.h1 className="font-atype-normal font-[500] uppercase text-left leading-[139.2%] md:text-[202px] text-[150px] text-primary mt-20">
          35
        </AnimatedText.h1>{" "}
        <div className="flex md:flex-row flex-col justify-between md:items-center w-full">
          <AnimatedText.h1 className="font-druk uppercase text-left leading-[139.2%] md:text-[31px] text-[6dvw] text-[#fff]">
            Projects
          </AnimatedText.h1>
          <div className="bg-white w-[50%] h-[2px] md:block hidden"></div>
          <AnimatedText.h1
            className="font-druk uppercase text-left leading-[139.2%] md:text-[31px] text-[6dvw] text-[#fff] w-fit"
            animationType={isMobile ? "words" : "chars"}
          >
            Successfully Done
          </AnimatedText.h1>
          <div className="bg-white w-[50%] h-[2px] block md:hidden"></div>
        </div>
        <AnimatedText.h1 className="font-druk uppercase text-left leading-[139.2%] md:text-[40px] text-[6dvw] text-[#E1FFF6] mt-56">
          Brands <br /> i&apos;ve worked with
        </AnimatedText.h1>
      </div>
    </GlowPatternLayout>
  );
};

export default HeroStatsAndBrand;
