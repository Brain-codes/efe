"use client";
import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Mousewheel, Pagination, Keyboard } from "swiper/modules";
import Navbar from "@/components/Navbar/Navbar";
import { ToggleProvider, useToggle } from "@/components/context/ToggleContext";
import Hero from "@/components/pageComponent/Hero";
import { useDarkMode } from "@/components/context/DarkModeContext";
import { useCursor } from "@/components/context/CursorProvider";
import About from "@/components/pageComponent/About";
import Skills from "@/components/pageComponent/Skills";
import Image from "next/image";

const Wrapper = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();
  const { isOpen, toggleIsOpen } = useToggle();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [totalSlides, setTotalSlides] = useState(0);
  const { updateCursorState } = useCursor();
  const [underConstruction, setUnderConstruction] = useState(true);
  useEffect(() => {
    console.log(`Total slides: ${totalSlides}`);
  }, [totalSlides]);

  return (
    <>
      {!underConstruction ? (
        <div className={`${darkMode && "dark"}`}>
          <Navbar showLogo={currentSlide == 0 ? false : true} />
          <main
            className={`${
              isOpen ? "fixed top-[90%]" : "fixed top-0"
            }  h-[100vh] w-full flex-col bg-white dark:bg-[#010101] transition-all duration-500`}
          >
            <div className="w-full h-full">
              <Swiper
                direction={"vertical"}
                keyboard={{
                  enabled: true,
                }}
                mousewheel={true}
                modules={[Mousewheel, Keyboard]}
                className="h-full transition-all duration-500"
                onSlideChange={(swiper) => setCurrentSlide(swiper.activeIndex)}
                onSwiper={(swiper) => setTotalSlides(swiper.slides.length)}
              >
                <SwiperSlide className="">
                  <Hero />
                </SwiperSlide>
                <SwiperSlide>
                  <About />
                </SwiperSlide>
                <SwiperSlide>
                  <Skills />
                </SwiperSlide>
                <SwiperSlide>Slide 4</SwiperSlide>
                <SwiperSlide>Slide 5</SwiperSlide>
                <SwiperSlide>Slide 6</SwiperSlide>
                <SwiperSlide>Slide 7</SwiperSlide>
                <SwiperSlide>Slide 8</SwiperSlide>
                <SwiperSlide>Slide 9</SwiperSlide>
              </Swiper>
            </div>
          </main>
          {/* <div className="flex flex-col gap-2 absolute bottom-16 right-[5%]">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <div
            key={index}
            className={`w-4 h-4 rounded-full ${
              currentSlide === index ? "bg-primary" : ""
            } dark:border-white border-[1px]`}
          ></div>
        ))}
      </div> */}
          <button
            className="absolute w-16 h-16 bottom-16 right-16 bg-neutral-900 dark:bg-white rounded-full text-white dark:text-black font-semibold"
            onClick={toggleDarkMode}
            onMouseEnter={() =>
              updateCursorState({
                width: "80px",
                height: "80px",
                label: "Preview",
              })
            }
            onMouseLeave={() =>
              updateCursorState({ width: "60px", height: "60px", label: "" })
            }
          >
            {darkMode ? "LHT" : "DRK"}
          </button>
        </div>
      ) : (
        <div className={`${darkMode && "dark"}`}>
          <Navbar showLogo={currentSlide == 0 ? false : true} />
          <main
            className={`${
              isOpen ? "fixed top-[90%]" : "fixed top-0"
            }  h-[100vh] items-center flex justify-center w-full flex-col bg-white dark:bg-[#010101] transition-all duration-500 gap-5`}
          >
            <Image
              src="/images/logo.svg"
              alt="Logo"
              width={100}
              height={100}
              priority
              className={` "opacity-0" : "opacity-1"
              } w-[86px] h-[86px] transition-all duration-500`}
            />
            <h1 className="rounded uppercase text-center text-[13px] font-black underline dark:text-white">
              This site is under construction, <br /> sorry for the
              inconveniences
            </h1>
          </main>
        </div>
      )}{" "}
    </>
  );
};

export default Wrapper;
