import AnimatedText from "@/components/Tags/AnimatedText";
import { useCursor } from "@/components/context/CursorProvider";
import GlowPatternLayout from "@/components/layouts/GlowPatternLayout";
import PATTERNBG from "../../public/images/moving.gif";
import creator from "../../public/images/creator.svg";
import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import "swiper/css/pagination";
import "swiper/css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { StarIconTwo } from "../../public/images/RenderedIcons";

const HeroPage = () => {
  const { updateCursorState, resetCursorState } = useCursor();
  const slidingTextRef = useRef<HTMLDivElement | null>(null);
  let lastScrollY = 0;
  const [scrollDirection, setScrollDirection] = useState(1); // 1 for right, -1 for left

  // SLIDING TEXT
  const slidingText = [
    "Alte Developer",
    "UI/UX Designer",
    "Front-End Developer",
    "Backend Developer",
    "Photographer",
    "Videographer",
    "Graphics Designer",
    "Content Creator",
    "Brand Designer",
  ];

  // Slick settings
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: true,
    speed: 10000,
    autoplaySpeed: 0,
    pauseOnHover: false,
    cssEase: "linear",
    arrows: false,
    draggable: true,
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
          slidesToShow: 1, // Show 2 slides
          slidesToScroll: 1, // Scroll 1 slide at a time
        },
      },
      {
        breakpoint: 320, // For screens below 320px
        settings: {
          slidesToShow: 2, // Show 1 slide
          slidesToScroll: 1, // Scroll 1 slide at a time
        },
      },
    ],
    beforeChange: (current: number, next: number) => {
      // Change direction based on scroll
      if (scrollDirection === 1) {
        // Scroll down
        return next;
      } else {
        // Scroll up
        return current - 1 < 0 ? slidingText.length - 1 : current - 1;
      }
    },
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const direction = currentScrollY > lastScrollY ? "down" : "up";
      lastScrollY = currentScrollY;

      // Update scroll direction
      setScrollDirection(direction === "down" ? 1 : -1);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      style={{
        backgroundImage: `url(${PATTERNBG.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="bg-[#001614e6] py-[6rem]">
        <div className="flex flex-col items-center justify-center h-full ">
          <AnimatedText.h1 className="font-druk uppercase text-center leading-[107.6%] md:text-[87px] text-[11dvw] text-primary md:mt-24 px-[5%]">
            ONE{" "}
            <span className="align-bottom">
              <img src={creator.src} alt="" />
            </span>{" "}
            <br /> ENDLESS <br />
            POSSIBILITIES
          </AnimatedText.h1>
          <div className="md:py-[2dvh] py-[1dvh]"></div>
          <div className="w-full" ref={slidingTextRef}>
            <Slider {...settings}>
              {slidingText.map((item, index) => (
                <div
                  key={index}
                  className="!flex items-center justify-center md:gap-28 gap-0"
                >
                  <p className="font-instrument italic md:text-[30px] text-[15px] text-[#A4FCFC] text-nowrap">
                    {item}
                  </p>
                  <StarIconTwo className="text-[#A4FCFC] md:ml-0 ml-[25%] md:w-[18px] w-[10px]" />
                </div>
              ))}
            </Slider>
          </div>
          <div className="md:py-[10dvh] py-[5dvh]"></div>
          <div
            className="flex flex-col items-center justify-center md:w-[30%] w-full md:px-0 px-[5%] "
            onMouseEnter={() =>
              updateCursorState({
                width: "80px",
                height: "80px",
                mixBlendMode: "normal",
                label: (
                  <div className="text-white bg-primary rounded-full w-[200px] h-[200px] flex items-center justify-center ease ">
                    View
                  </div>
                ),
                showBackground: false,
              })
            }
            onMouseLeave={() => resetCursorState()}
          >
            <AnimatedText.h1
              className="font-druk uppercase text-center leading-[107.6%] text-[17px]  text-primary"
              delay={0.5}
              trigger="load"
            >
              &lt;ABOUT ME/&gt;
            </AnimatedText.h1>
            <AnimatedText.p
              className="text-[18px] font-atype-normal text-[#7c8685] uppercase w-full mt-10 text-center font-[800]"
              animationType="words"
              variant="scrub"
              delay={0.8}
              trigger="load"
            >
              Crafting unique digital experiences through an Alté
              approach—combining creative design, technical finesse, and
              strategic insight to build user-centered solutions that stand out.
            </AnimatedText.p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroPage;
