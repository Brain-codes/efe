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
import { useDarkMode } from "@/components/context/DarkModeContext";
import { HeroWhatIDo } from "@/utils/Constants";

const Hero = () => {
  const [greeting, time] = useGreeting();
  const { darkMode } = useDarkMode();
  return (
    <div className="h-full w-full">
      <h1 className="absolute z-[-1] top-[-300px] left-[-50px] dark:text-[#1a1a1a6e] text-[#CBCBCB6e] text-[500px] font-black ">
        A
      </h1>

      <div className="max-[743px]:h-[100dvh] max-[743px]:flex max-[743px]:flex-col ">
        <h5 className="text-black dark:text-white flex items-center gap-2 font-light text-[23px] mt-10 ml-[5%] max-[614px]:text-[17px] transition-all duration-500">
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
              <div className="rounded-full md:p-[300px] max-[743px]:p-[220px] p-[179px] bg-primary flex items-center justify-start">
                <div className="absolute w-full bottom-0 left-0 flex items-center  justify-center ">
                  <div className="h-full relative flex items-start justify-center ">
                    <div className="absolute top-[-13%] hover-element">
                      <h1 className="text-black dark:text-white font-black text-[172px] max-[743px]:text-[7.313rem] max-[743px]:leading-[100px] leading-[160px] max-[614px]:text-[4.313rem] transition-all duration-500 max-[614px]:leading-none max-[338px]:text-[3.313rem]">
                        ADENUGA
                      </h1>
                      <h1
                        className=" text-black/0 dark:text-white/0 absolute top-0  left-0 stroke font-black text-[172px] max-[743px]:text-[7.313rem] z-[3] max-[743px]:leading-[100px] leading-[160px] transition-all duration-500 max-[614px]:text-[4.313rem] max-[614px]:leading-none max-[338px]:text-[3.313rem]"
                        style={{
                          WebkitTextStrokeWidth: "2px",
                          WebkitTextStrokeColor: darkMode ? "white" : "black",
                        }}
                      >
                        ADENUGA
                      </h1>
                      <div className=" flex justify-end ">
                        <h2 className=" text-black dark:text-white font-light text-[23px] max-[614px]:z-[10]">
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
                      className="h-[70dvh] w-full object-fill max-[743px]:object-cover z-[2]"
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
      <div className="relative max-[743px]:absolute max-[743px]:mb-12  left-[5%] bottom-[60px] z-[10] w-fit max-[743px]:w-full max-[743px]:left-0 max-[743px]:bottom-0">
        <Swiper
          direction={"vertical"}
          centeredSlides={true}
          slidesPerView={2}
          loop={true}
          spaceBetween={20}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          className="h-[200px] max-[743px]:h-[110px] w-fit "
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
