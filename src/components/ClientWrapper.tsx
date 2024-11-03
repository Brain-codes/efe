"use client";

import SmoothScroll from "@/components/Lenis/SmoothScroll";
import PageTransition from "@/components/Transitions/PageTransition";
import { TransitionProvider } from "@/components/context/TransitionContext";

export default function ClientWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <TransitionProvider>
      <SmoothScroll>
        <PageTransition />
        {children}
      </SmoothScroll>
    </TransitionProvider>
  );
} 