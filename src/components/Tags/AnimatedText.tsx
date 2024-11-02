/* eslint-disable react/display-name */
"use client";

import { useEffect, useRef, createElement, forwardRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import SplitType from "split-type";

gsap.registerPlugin(ScrollTrigger);

// Define the allowed HTML tags
type TagVariant = "h1" | "h2" | "h3" | "h4" | "h5" | "p" | "span" | "div";

// Add new types for animation variants
type AnimationType = "chars" | "words";
type AnimationVariant =
  | "fade"
  | "slide"
  | "scale"
  | "wave"
  | "scrub"
  | "spread";
type AnimationTrigger = "scroll" | "load";

// Add this CSS somewhere in your styles (like globals.css)
const styles = `
.spread-char {
  display: inline-block;
  transition: letter-spacing 1.2s ease-in-out;
}
`;

// Base animation component
const AnimatedElement = forwardRef<
  HTMLElement,
  {
    children: React.ReactNode;
    tag: TagVariant;
    className?: string;
    animationType?: AnimationType;
    variant?: AnimationVariant;
    delay?: number;
    trigger?: AnimationTrigger;
  }
>(
  (
    {
      children,
      tag,
      className = "",
      animationType = "chars",
      variant = "fade",
      delay = 0,
      trigger = "scroll",
    },
    ref
  ) => {
    const elementRef = useRef<HTMLElement>(null);
    const finalRef = (ref as any) || elementRef;

    useEffect(() => {
      const element = finalRef.current;
      if (!element) return;

      const text = new SplitType(element, {
        types: animationType,
        tagName: "span",
      });

      const targets = text[animationType];

      // Base animation configurations
      const baseAnimations = {
        fade: {
          opacity: 0,
          y: 50,
          duration: 0.5,
          ease: "back.out",
        },
        slide: {
          opacity: 0,
          x: -50,
          duration: 0.6,
          ease: "power2.out",
        },
        scale: {
          opacity: 0,
          scale: 0.5,
          duration: 0.7,
          ease: "elastic.out(1, 0.7)",
        },
        wave: {
          opacity: 0,
          y: 20,
          rotationX: -90,
          duration: 0.8,
          ease: "power1.out",
        },
        scrub: {
          opacity: 0.2,
          y: 5,
          duration: 1,
          ease: "power2.out",
        },
        spread: {
          opacity: 0,
          letterSpacing: "0.5em",
          duration: 1.2,
          ease: "power2.inOut",
        },
      };

      // Scroll trigger configuration
      const scrollTriggerConfig = {
        trigger: element,
        start: "top 80%",
        end: "top 20%",
        toggleActions: "play none none reverse",
      };

      // Special handling for spread animation
      if (variant === "spread") {
        const chars = text.chars;
        if (!chars) return;

        // Add style tag if it doesn't exist
        if (!document.getElementById('spread-animation-style')) {
          const styleSheet = document.createElement('style');
          styleSheet.id = 'spread-animation-style';
          styleSheet.textContent = styles;
          document.head.appendChild(styleSheet);
        }

        // Add the class for transition
        chars.forEach(char => char.classList.add('spread-char'));

        const animation = gsap.timeline({ delay })
          .set(chars, {
            opacity: 0,
            letterSpacing: "0.5em",
          })
          .to(chars, {
            opacity: 1,
            letterSpacing: "0em",
            duration: 0.5,
            ease: "power1",
            stagger: 0.02,
            ...(trigger === "scroll" ? { scrollTrigger: scrollTriggerConfig } : {})
          });

        return () => {
          chars.forEach(char => char.classList.remove('spread-char'));
          text.revert();
          animation.kill();
        };
      }

      // Build final animation configuration
      const animationConfig = {
        ...baseAnimations[variant],
        stagger: animationType === "chars" ? 0.02 : 0.1,
        delay,
        ...(variant === "scrub" && trigger === "scroll"
          ? { scrollTrigger: { ...scrollTriggerConfig, scrub: true } }
          : trigger === "scroll"
          ? { scrollTrigger: scrollTriggerConfig }
          : {}),
      };

      const animation = gsap.from(targets, animationConfig);

      return () => {
        text.revert();
        animation.kill();
      };
    }, [finalRef, animationType, variant, delay, trigger]);

    return createElement(
      tag,
      {
        ref: finalRef,
        className: `animated-text ${className}`,
      },
      children
    );
  }
);

AnimatedElement.displayName = "AnimatedElement";

// Create the compound component
const createAnimatedComponent = <T extends HTMLElement>(tag: TagVariant) =>
  Object.assign(
    forwardRef<
      T,
      {
        children: React.ReactNode;
        className?: string;
        animationType?: AnimationType;
        variant?: AnimationVariant;
        delay?: number;
        trigger?: AnimationTrigger;
      }
    >((props, ref) => <AnimatedElement {...props} tag={tag} ref={ref} />),
    { displayName: `AnimatedText.${tag}` }
  );

const AnimatedText = {
  h1: createAnimatedComponent<HTMLHeadingElement>("h1"),
  h2: createAnimatedComponent<HTMLHeadingElement>("h2"),
  h3: createAnimatedComponent<HTMLHeadingElement>("h3"),
  h4: createAnimatedComponent<HTMLHeadingElement>("h4"),
  h5: createAnimatedComponent<HTMLHeadingElement>("h5"),
  p: createAnimatedComponent<HTMLParagraphElement>("p"),
  span: createAnimatedComponent<HTMLSpanElement>("span"),
  div: createAnimatedComponent<HTMLDivElement>("div"),
} as const;

export default AnimatedText;
