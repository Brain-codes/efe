"use client";

import SmoothScroll from "@/components/Lenis/SmoothScroll";
import PageTransition from "@/components/Transitions/PageTransition";
import { TransitionProvider } from "@/components/context/TransitionContext";
import FixedCustomScrollbar from "./FixedCustomScrollbar";

export default function ClientWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <TransitionProvider>
      <FixedCustomScrollbar />
      <SmoothScroll>
        <PageTransition />
        {children}
      </SmoothScroll>
    </TransitionProvider>
  );
}
