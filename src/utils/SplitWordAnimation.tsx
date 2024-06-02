import { useRef, useEffect } from "react";
import anime from "animejs/lib/anime.es.js";

const SplitWordAnimation = ({
  word,
  duration = 1000,
}: {
  word: string;
  duration?: number;
}) => {
  const textWrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const textWrapper = textWrapperRef.current;

    const handleAnimation = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && textWrapper) {
          const originalText = textWrapper.textContent;
          if (originalText) {
            textWrapper.innerHTML = originalText
              .split(" ")
              .map((w) => `<span class='word'>${w}</span>`)
              .join(" ");

            anime.timeline().add({
              targets: ".full-text .word",
              opacity: [0, 1],
              easing: "easeInOutQuad",
              duration: duration,
              delay: (_el: any, i: number) => 10 * (i + 1),
            });

            observer.unobserve(entry.target); // Stop observing after animation
          }
        }
      });
    };

    const observer = new IntersectionObserver(handleAnimation, {
      threshold: 0.5, // Adjust as needed
    });

    if (textWrapper) {
      observer.observe(textWrapper);
    }

    return () => {
      if (textWrapper) {
        observer.unobserve(textWrapper);
      }
    };
  }, [duration, word]);

  return (
    <span className="full-text" ref={textWrapperRef}>
      <span style={{ visibility: "hidden" }}>{word}</span>
    </span>
  );
};

export default SplitWordAnimation;
