/* eslint-disable @next/next/no-img-element */
import React from "react";
import SAMPLE from "../../../public/images/group1.svg";
import AnimatedText from "../Tags/AnimatedText";

interface ImageWithHistoryTileProps {
  imageSrc: string;
  text: string;
  height?: string; // e.g., '50dvh'
  position: "top-left" | "top-right"; // positioning options
  borderRadius?: string; // e.g., '46px
}

const ImageWithHistoryTile: React.FC<ImageWithHistoryTileProps> = ({
  imageSrc,
  text,
  height,
  position,
  borderRadius = "46px",
}) => {
  return (
    <div
      style={{ height, borderRadius }}
      className="relative w-full flex items-center justify-center overflow-hidden"
    >
      <img
        src={imageSrc}
        alt="Image Description"
        className="w-full h-auto object-cover "
      />
      <div
        className={`bg-deep-green rounded-full border-[#A4FCFC] border-[0.5px] py-2 px-5 absolute overflow-hidden ${
          position === "top-left" ? "top-3 left-5" : "top-3 right-5"
        }`}
      >
        <AnimatedText.p className="md:text-[14px] text-[10px] font-atype-normal text-[#ffffffdb] uppercase text-center font-[600]">
          {text}
        </AnimatedText.p>
      </div>
    </div>
  );
};

export default ImageWithHistoryTile;
