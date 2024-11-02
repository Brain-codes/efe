import AnimatedText from "@/components/Tags/AnimatedText";
import React from "react";

const HeroWork = () => {
  return (
    <div className="bg-[#E1FFF6] h-[100dvh] px-[5%]">
      {" "}
      <AnimatedText.h1
        className="font-druk uppercase text-center leading-[139.2%] md:text-[175px] text-[18dvw] text-deep-green pt-20"
        variant="spread"
        trigger="scroll"
      >
        WORK
      </AnimatedText.h1>
    </div>
  );
};

export default HeroWork;
