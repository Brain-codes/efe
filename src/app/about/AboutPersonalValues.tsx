import React from 'react'
import AnimatedText from "@/components/Tags/AnimatedText";

const AboutPersonalValues = () => {
  return (
    <div>
      <div className="flex justify-between items-center gap-10">
        <div>
          <AnimatedText.h1
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-druk uppercase text-center leading-[107.6%] md:text-[77px] text-[11dvw] text-primary w-full z-[5]"
            delay={1.5}
            // trigger="load"
            // variant="fade"
          >
            ABOUT <br /> ME
          </AnimatedText.h1>
        </div>
      </div>
    </div>
  );
}

export default AboutPersonalValues