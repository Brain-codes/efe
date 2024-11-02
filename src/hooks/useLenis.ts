import { useEffect, useState } from 'react'
import Lenis from '@studio-freight/lenis'

export const useLenis = () => {
  const [lenis, setLenis] = useState<Lenis | null>(null)

  useEffect(() => {
    const lenisInstance = new Lenis()

    function raf(time: number) {
      lenisInstance.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
    setLenis(lenisInstance)

    return () => {
      lenisInstance.destroy()
    }
  }, [])

  return lenis
} 


// USAGE 
// import { useLenis } from "@/hooks/useLenis";

// export default function YourComponent() {
//   const lenis = useLenis();

//   const scrollToTop = () => {
//     lenis?.scrollTo(0);
//   };

//   return <button onClick={scrollToTop}>Scroll to top</button>;
// }