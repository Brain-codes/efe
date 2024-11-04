/* eslint-disable react/no-unescaped-entities */
import React from "react";
import AnimatedText from "@/components/Tags/AnimatedText";
import RD from "../../public/images/rd.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { CODINGPRACTICES } from "@/utils/Constants";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const HeroPractices = () => {
  return (
    <div className="bg-[#E1FFF6] py-[10dvh]">
      <div className="mx-[5%] pb-5 border-b-deep-green border-b">
        <AnimatedText.h1 className="font-druk uppercase text-left leading-[139.2%] md:text-[64px] text-[6dvw] text-deep-green mt-56">
          My Coding <br /> Practices
        </AnimatedText.h1>
      </div>
      <Swiper
        slidesPerView={3}
        pagination={true}
        // rewind={true}
        autoHeight={true}
        freeMode={true}
        spaceBetween={30}
        // modules={[Pagination]}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
        className="mt-20 practices-swiper-cont"
        // ... other swiper settings ...
      >
        {CODINGPRACTICES.map((item, index) => (
          <SwiperSlide key={index}>
            <div
              className={`flex flex-col gap-6 p-6 bg-deep-green md:ml-[15%] ml-0 md:w-[448px] w-full ${
                index === 0 ? "" : ""
              }`}
              style={{ height: "fit-content" }}
            >
              <img src={item.image} alt="" className="w-full" />
              <AnimatedText.h1 className="font-druk uppercase text-left leading-[139.2%] md:text-[30px] text-[20px] text-primary">
                {item.title.split("-")[0]}-<br />
                {item.title.split("-")[1]}
              </AnimatedText.h1>
              <AnimatedText.p
                className="md:text-[16px] text-[12px] font-atype-normal text-[#ECFFFD] text-left font-[400]"
                animationType="words"
                variant="scrub"
              >
                {item.description}
              </AnimatedText.p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroPractices;
