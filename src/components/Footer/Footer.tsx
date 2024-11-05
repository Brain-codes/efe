/* eslint-disable react/no-unescaped-entities */
import React from "react";
import AnimatedText from "@/components/Tags/AnimatedText";

const Footer = () => {
  return (
    <div className="bg-[#f5fffc] px-[5%]">
      <div className="md:pt-[10dvh] pt-[5dvh]"></div>
      <AnimatedText.h1 className="font-druk uppercase text-left leading-[139.2%] md:text-[148px] text-[8dvw] text-[#073933] md:mb-[10dvh] mb-[5dvh]">
        Say Hello!
      </AnimatedText.h1>
      <div className="border-y-[0.5px] border-[#00000048] py-10 flex md:flex-row flex-col md:gap-0 gap-10">
        <div className="md:w-[60%] w-full flex flex-col gap-5">
          <AnimatedText.p className="text-[18px] font-atype-normal text-[#7c8685] uppercase w-full text-left font-[500] md:w-1/3">
            Transforming Ideas into Impactful Products. Let's Collaborate on
            Your Next Innovation!
          </AnimatedText.p>
        </div>
        <div className="md:border-x-[0.5px] border-x-0 md:border-y-0 border-y-[0.5px]  border-[#00000048] md:w-[20%] w-full py-10 md:px-10">
          <AnimatedText.h1
            className="font-atype-normal uppercase text-left leading-[107.6%] text-[17px]  text-[#073933]"
            delay={0.5}
            trigger="load"
          >
            &lt;MENU/&gt;
          </AnimatedText.h1>
          <div className="flex flex-col gap-5 mt-10">
            <AnimatedText.p
              className="font-atype-normal uppercase text-left leading-[107.6%] text-[20px] font-[900] text-deep-green"
              delay={0.5}
              trigger="load"
            >
              ABOUT ME
            </AnimatedText.p>
            <AnimatedText.p
              className="font-atype-normal uppercase text-left leading-[107.6%] text-[20px] font-[900] text-deep-green"
              delay={0.5}
              trigger="load"
            >
              WORK
            </AnimatedText.p>
          </div>
        </div>
        <div className="border-[#00000048] md:w-[20%] w-full py-10 md:px-10">
          <AnimatedText.h1
            className="font-atype-normal uppercase text-left leading-[107.6%] text-[17px]  text-[#073933]"
            delay={0.5}
            trigger="load"
          >
            &lt;CONTACT/&gt;
          </AnimatedText.h1>
          <div className="flex flex-col gap-5 mt-10">
            <AnimatedText.p
              className="font-atype-normal uppercase text-left leading-[107.6%] text-[20px] font-[900] text-deep-green"
              delay={0.5}
              trigger="load"
            >
              EMAIL
            </AnimatedText.p>
            <AnimatedText.p
              className="font-atype-normal uppercase text-left leading-[107.6%] text-[20px] font-[900] text-deep-green"
              delay={0.5}
              trigger="load"
            >
              LINKEDIN
            </AnimatedText.p>
            <AnimatedText.p
              className="font-atype-normal uppercase text-left leading-[107.6%] text-[20px] font-[900] text-deep-green"
              delay={0.5}
              trigger="load"
            >
              DOWNLOAD.CV
            </AnimatedText.p>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-start md:flex-row flex-col py-10">
        <AnimatedText.p className="font-atype-normal text-left leading-[107.6%] text-[16px] font-[900] text-deep-green">
          Mobile and web developper
        </AnimatedText.p>
      </div>
    </div>
  );
};

export default Footer;
