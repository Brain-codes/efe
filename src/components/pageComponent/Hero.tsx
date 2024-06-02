import { useGreeting } from "@/hooks/useGreeting";
import Image from "next/image";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { useDarkMode } from "../context/DarkModeContext";
import { HeroWhatIDo } from "@/utils/Constants";

const Hero = () => {
  const [greeting, time] = useGreeting();
  const { darkMode, toggleDarkMode } = useDarkMode();
  return (
    <div className="h-full w-full">
      <h1 className="absolute z-[-1] top-[-300px] left-[-50px] dark:text-[#1a1a1a6e] text-[#CBCBCB6e] text-[500px] font-black ">
        A
      </h1>

      <div className="">
        <h5 className="text-black dark:text-white flex items-center gap-2 font-light text-[23px] mt-10 ml-[5%]">
          {greeting}
          <Image
            src="/images/wave.png"
            alt="wave"
            width={100}
            height={100}
            priority
            className="w-[21px] h-[20px] transition-all duration-500"
          />
          {time}
        </h5>
        <div className="flex items-center justify-center ">
          <div className="rounded-full p-[50px] bg-primary/5">
            <div className="rounded-full p-[50px] bg-primary/55">
              <div className="rounded-full p-[300px] bg-primary flex items-center justify-start">
                <div className="absolute w-full bottom-0 left-0 flex items-center  justify-center ">
                  <div className="h-full relative flex items-start justify-center ">
                    <div className="absolute top-[-13%] hover-element">
                      <h1 className="text-black dark:text-white font-black text-[172px] leading-[160px] ">
                        ADENUGA
                      </h1>
                      <h1
                        className=" text-black/0 dark:text-white/0 absolute top-0  left-0 stroke font-black text-[172px] z-[3] leading-[160px]"
                        style={{
                          WebkitTextStrokeWidth: "2px",
                          WebkitTextStrokeColor: darkMode ? "white" : "black",
                        }}
                      >
                        ADENUGA
                      </h1>
                      <div className=" flex justify-end ">
                        <h2 className=" text-black dark:text-white font-light text-[23px] ">
                          ADEWUMI EFE
                        </h2>
                      </div>
                    </div>

                    <Image
                      src="/images/pot-1.svg"
                      alt="Logo"
                      width={100}
                      height={100}
                      priority
                      className="h-[70vh] w-full object-fill z-[2]"
                    />
                    <h1 className="absolute z-[-1] right-[-320px] dark:text-[#1a1a1a6e] text-[#CBCBCB6e] text-[500px] font-black ">
                      B
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative left-[5%] bottom-[60px] z-[10] w-fit">
        <Swiper
          direction={"vertical"}
          centeredSlides={true}
          slidesPerView={3}
          loop={true}
          spaceBetween={20}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          className="h-[200px] w-fit"
        >
          {HeroWhatIDo.map((item, index) => (
            <SwiperSlide key={index} className={` flex h-fit w-fit`}>
              <div
                className={` flex items-center h-fit gap-2 py-4 px-5 rounded`}
                style={{
                  background: `#${item.color}`,
                }}
              >
                <item.icon
                  style={{
                    color: `#${item.tColor}`,
                  }}
                />
                <p
                  className={` text-[#${item.tColor}]`}
                  style={{
                    color: `#${item.tColor}`,
                  }}
                >
                  {item.title}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Hero;
