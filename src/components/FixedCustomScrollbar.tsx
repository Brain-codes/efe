import React, { useEffect, useState } from "react";

const FixedCustomScrollbar: React.FC = () => {
  const [scrollHeight, setScrollHeight] = useState(0);
  const [scrollTop, setScrollTop] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      setScrollTop(scrollY);
      setScrollHeight((scrollY / (documentHeight - windowHeight)) * 100);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Call once to set initial state

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="fixed right-0 top-0 h-full w-2 bg-gray-300 z-[99]">
      <div
        className="bg-blue-500"
        style={{
          height: `${scrollHeight}%`,
          transform: `translateY(${scrollTop}px)`,
          transition: "transform 0.2s ease",
        }}
      />
    </div>
  );
};

export default FixedCustomScrollbar;
