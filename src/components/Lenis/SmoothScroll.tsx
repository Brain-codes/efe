'use client'

import { ReactLenis } from '@studio-freight/react-lenis'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  const lenisRef = useRef<any>(null)

  useEffect(() => {
    function update(time: number) {
      lenisRef.current?.lenis?.raf(time * 1000)
    }

    gsap.ticker.add(update)

    return () => {
      gsap.ticker.remove(update)
    }
  }, [])

  return (
    <ReactLenis ref={lenisRef} root autoRaf={false}>
      {children}
    </ReactLenis>
  )
} 