
"use client";

import React, { useEffect, useRef, useState } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';

import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Experience from "@/components/experience";
import Hero from "@/components/Hero";
import Navbar from "@/components/navbar";
import PropertyTypes from "@/components/PropertyTypes";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import FeaturedProperties from '@/components/FeaturedProperties';

gsap.registerPlugin(ScrollTrigger);

const App: React.FC = () => {
  const lenisRef = useRef<Lenis | null>(null);
  const loaderRef = useRef<HTMLDivElement>(null);
  const counterRef = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
    });

    lenisRef.current = lenis;
    lenis.stop();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => {
          setIsLoading(false);
          lenis.start();
          if (loaderRef.current) loaderRef.current.style.display = 'none';
        }
      });
      const counterObj = { value: 0 };
      tl.to(counterObj, {
        value: 100,
        duration: 2,
        ease: "power2.inOut",
        onUpdate: () => {
          if (counterRef.current) {
            counterRef.current.innerText = Math.round(counterObj.value) + "%";
          }
        }
      });

      tl.to('.loader-bar-fill', {
        width: '100%',
        duration: 2,
        ease: "power2.inOut",
      }, 0);

      tl.to('.loader-title-char', {
        opacity: 1,
        y: 0,
        stagger: 0.05,
        duration: 0.8,
        ease: "power4.out"
      }, 0.5);

      tl.to('.loader-content', {
        opacity: 0,
        y: -20,
        duration: 0.5,
        ease: "power2.in"
      })
        .to('.loader-panel-top', {
          yPercent: -100,
          duration: 1,
          ease: "expo.inOut"
        }, "-=0.2")
        .to('.loader-panel-bottom', {
          yPercent: 100,
          duration: 1,
          ease: "expo.inOut"
        }, "<");

    }, loaderRef);

    gsap.to('.global-progress-bar', {
      scaleX: 1,
      ease: 'none',
      scrollTrigger: {
        trigger: document.body,
        start: 'top top',
        end: 'bottom bottom',
        scrub: 0.3,
      },
    });

    return () => {
      lenis.destroy();
      ScrollTrigger.getAll().forEach(t => t.kill());
      ctx.revert();
    };
  }, []);

  const title = "Real Estate";

  return (
    <div className="relative w-full overflow-hidden">
      <Navbar />
      <div className="global-progress-bar fixed top-0 left-0 w-full h-[4px] bg-[#00D1A0] z-[100] origin-left scale-x-0" />
      <div ref={loaderRef} className="fixed inset-0 z-[1000] pointer-events-none">
        <div className="loader-panel-top absolute top-0 left-0 w-full h-1/2 bg-[#0F172A] z-10" />
        <div className="loader-panel-bottom absolute bottom-0 left-0 w-full h-1/2 bg-[#0F172A] z-10" />
        <div className="loader-content absolute inset-0 z-20 flex flex-col items-center justify-center">
          <div className="flex overflow-hidden mb-12">
            {title.split('').map((char, i) => (
              <span
                key={i}
                className="loader-title-char opacity-0 translate-y-20 text-4xl md:text-7xl font-black text-white tracking-widest inline-block"
              >
                {char}
              </span>
            ))}
          </div>
          <div className="flex flex-col items-center gap-4 w-64 md:w-80">
            <div className="w-full h-[2px] bg-white/10 relative overflow-hidden rounded-full">
              <div className="loader-bar-fill absolute top-0 left-0 w-0 h-full bg-[#00D1A0]" />
            </div>
            <div className="flex justify-between w-full px-1">
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white/40 italic">Initializing Haven</span>
              <span ref={counterRef} className="text-[10px] font-black text-[#00D1A0] tracking-widest">0%</span>
            </div>
          </div>
        </div>
      </div>

      <div className="min-h-screen bg-white">
        <header className="relative">
          <Hero />
        </header>
        <main>
          <PropertyTypes />
          <Experience />
          <FeaturedProperties />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default App;
