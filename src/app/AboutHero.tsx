import AnimatedText from "@/components/Tags/AnimatedText";
import React from "react";
import { StarIcon } from "../../public/images/RenderedIcons";

const AboutHero = () => {
  return (
    <div className="md:py-[30dvh] py-[10dvh] flex flex-col items-center justify-center bg-[#E1FFF6] px-[5%]">
      <AnimatedText.h1 className="font-druk uppercase text-center leading-[107.6%] text-[17px] text-deep-green">
        &lt;HI &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; THERE/&gt;
      </AnimatedText.h1>
      <AnimatedText.h1
        className="font-druk uppercase text-center leading-[139.2%] md:text-[40px] text-[6dvw] text-deep-green mt-20"
        animationType="words"
        variant="scrub"
      >
        My development approach <br /> elevates digital <br /> experience and{" "}
        <br /> interactivity
      </AnimatedText.h1>
      <div className="md:py-[10dvh] py-[5dvh]"></div>
      <StarIcon />
      <AnimatedText.p
        className="text-[20px] font-atype-normal text-[#7C8685] md:w-[30%] w-full mt-10 text-center font-[400]"
        animationType="words"
        variant="scrub"
      >
        I&apos;m a front-end developer based in Abuja Nigeria, passionate about
        crafting refined, responsive digital experiences that engage users and
        bring functionality to life with creativity and precision.
      </AnimatedText.p>
    </div>
  );
};

export default AboutHero;
