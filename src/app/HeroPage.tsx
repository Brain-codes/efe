import AnimatedText from "@/components/Tags/AnimatedText";
import GlowPatternLayout from "@/components/layouts/GlowPatternLayout";

const HeroPage = () => {
  return (
    <GlowPatternLayout>
      <div className="flex flex-col items-center justify-center h-full px-[5%]">
        <AnimatedText.h1
          className="font-druk uppercase text-center leading-[107.6%] md:text-[87px] text-[11dvw] text-primary md:mt-24"
          // trigger="load"
          // variant="fade"
        >
          MOBILE <br /> & WEB <br />
          DEVELOPER
        </AnimatedText.h1>
        <div className="md:py-[10dvh] py-[5dvh]"></div>
        <AnimatedText.h1
          className="font-druk uppercase text-center leading-[107.6%] text-[17px] text-primary"
          delay={0.5}
          trigger="load"
        >
          &lt;ABOUT ME/&gt;
        </AnimatedText.h1>
        <AnimatedText.p
          className="text-[18px] font-atype-normal text-[#7c8685] uppercase md:w-[30%] w-full mt-10 text-center font-[800]"
          animationType="words"
          variant="scrub"
          delay={0.8}
          trigger="load"
        >
          Crafting unique digital experiences through an Alté approach—combining
          creative design, technical finesse, and strategic insight to build
          user-centered solutions that stand out.
        </AnimatedText.p>
      </div>
    </GlowPatternLayout>
  );
};

export default HeroPage;
