
"use client";




import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { PROPERTY_TYPES } from '../constants';

const PropertyTypes: React.FC = () => {
    const containerRef = useRef<HTMLElement>(null);
    const imagesRef = useRef<(HTMLDivElement | null)[]>([]);
    const contentRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // 1. Entrance Animation for Content (Text, Button, Icon)
            const contentElements = contentRef.current?.children;
            if (contentElements) {
                gsap.from(contentElements, {
                    scrollTrigger: {
                        trigger: contentRef.current,
                        start: 'top 80%',
                    },
                    y: 30,
                    opacity: 0,
                    stagger: 0.15,
                    duration: 1.2,
                    ease: 'power4.out',
                });
            }

            // 2. Bento Grid Items Reveal
            gsap.from('.grid-item-reveal', {
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top 75%',
                },
                y: 80,
                scale: 0.95,
                opacity: 0,
                stagger: 0.1,
                duration: 1.4,
                ease: 'expo.out',
            });

            // 3. Internal Parallax for Images
            imagesRef.current.forEach((el) => {
                if (el) {
                    const img = el.querySelector('img');
                    gsap.to(img, {
                        y: -40, // Subtle movement
                        ease: 'none',
                        scrollTrigger: {
                            trigger: el,
                            start: 'top bottom',
                            end: 'bottom top',
                            scrub: 0.5,
                        },
                    });
                }
            });

            // 4. Background Decorative Lines "Growth" Animation
            gsap.set('.bg-line-path', { strokeDasharray: 1000, strokeDashoffset: 1000 });
            gsap.to('.bg-line-path', {
                strokeDashoffset: 0,
                ease: 'none',
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top bottom',
                    end: 'bottom top',
                    scrub: 1,
                },
            });

        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section id="services" className="py-32 bg-white relative overflow-hidden" ref={containerRef}>
            <div className="absolute inset-0 pointer-events-none z-0">
                <svg className="w-full h-full opacity-[0.08]" viewBox="0 0 1440 1000" fill="none" preserveAspectRatio="none">
                    <path
                        className="bg-line-path"
                        d="M-100 200 Q 400 100 700 500 T 1500 300"
                        stroke="#00D1A0"
                        strokeWidth="1.5"
                    />
                    <path
                        className="bg-line-path"
                        d="M1600 700 Q 1100 900 700 500 T -200 800"
                        stroke="#00D1A0"
                        strokeWidth="1.5"
                    />
                </svg>
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8">
                    <div ref={contentRef} className="md:col-span-5 flex flex-col justify-center lg:pr-12 mb-12 md:mb-0">
                        <div className="flex items-center gap-3 mb-6">
                            <span>___</span>
                            <span className="text-[#FBA12B] font-black text-xs uppercase tracking-[0.2em]">Categories</span>
                        </div>

                        <h2 className="text-5xl md:text-6xl font-black text-slate-900 leading-[1.05] tracking-tighter mb-8">
                            Explore best properties <br />
                            <span className="text-slate-400">with expert services.</span>
                        </h2>

                        <p className="text-slate-500 text-lg mb-10 leading-relaxed font-medium">
                            Discover a diverse range of premium properties, from luxurious apartments to spacious villas, tailored to your needs.
                        </p>

                        <div>
                            <button className="group relative px-10 py-4 bg-[#FBA12B] text-white font-bold rounded-full overflow-hidden transition-all active:scale-95 shadow-xl shadow-[#00D1A0]/10">
                                <span className="relative z-10">View properties</span>
                                <div className="absolute inset-0 bg-slate-900 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                            </button>
                        </div>
                    </div>

                    {/* GRID ITEM 1: Top Right (Luxury Villas) */}
                    <div
                        ref={(el) => { imagesRef.current[0] = el; }}
                        className="grid-item-reveal md:col-span-7 h-[450px] overflow-hidden shadow-2xl relative group cursor-pointer"
                    >
                        <img
                            src={PROPERTY_TYPES[0].image}
                            alt={PROPERTY_TYPES[0].title}
                            className="w-full h-full object-cover scale-110 transition-transform duration-1000 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-slate-950/20 group-hover:bg-transparent transition-colors duration-500" />
                        <div className="absolute bottom-10 left-10 text-white transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                            <span className="text-[10px] font-black uppercase tracking-widest block mb-2">{PROPERTY_TYPES[0].count}</span>
                            <h4 className="text-2xl font-bold">{PROPERTY_TYPES[0].title}</h4>
                        </div>
                    </div>

                    {/* GRID ITEM 2: Bottom Left (Large Landscape) */}
                    <div
                        ref={(el) => { imagesRef.current[1] = el; }}
                        className="grid-item-reveal md:col-span-6 h-[400px] overflow-hidden shadow-2xl relative group cursor-pointer"
                    >
                        <img
                            src={PROPERTY_TYPES[3].image}
                            alt={PROPERTY_TYPES[3].title}
                            className="w-full h-full object-cover scale-110 transition-transform duration-1000 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-slate-950/20 group-hover:bg-transparent transition-colors duration-500" />
                        <div className="absolute bottom-10 left-10 text-white transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                            <span className="text-[10px] font-black uppercase tracking-widest block mb-2">{PROPERTY_TYPES[3].count}</span>
                            <h4 className="text-2xl font-bold">{PROPERTY_TYPES[3].title}</h4>
                        </div>
                    </div>

                    {/* GRID ITEM 3: Bottom Middle (Tall Portrait) */}
                    <div
                        ref={(el) => { imagesRef.current[2] = el; }}
                        className="grid-item-reveal md:col-span-3 h-[400px] overflow-hidden shadow-2xl relative group cursor-pointer"
                    >
                        <img
                            src={PROPERTY_TYPES[1].image}
                            alt={PROPERTY_TYPES[1].title}
                            className="w-full h-full object-cover scale-110 transition-transform duration-1000 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-slate-950/20 group-hover:bg-transparent transition-colors duration-500" />
                        <div className="absolute bottom-10 left-10 text-white transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                            <span className="text-[10px] font-black uppercase tracking-widest block mb-2">{PROPERTY_TYPES[1].count}</span>
                            <h4 className="text-xl font-bold">{PROPERTY_TYPES[1].title}</h4>
                        </div>
                    </div>

                    {/* GRID ITEM 4: Bottom Right (Portrait/Square) */}
                    <div
                        ref={(el) => { imagesRef.current[3] = el; }}
                        className="grid-item-reveal md:col-span-3 h-[400px] overflow-hidden shadow-2xl relative group cursor-pointer"
                    >
                        <img
                            src={PROPERTY_TYPES[2].image}
                            alt={PROPERTY_TYPES[2].title}
                            className="w-full h-full object-cover scale-110 transition-transform duration-1000 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-slate-950/20 group-hover:bg-transparent transition-colors duration-500" />
                        <div className="absolute bottom-10 left-10 text-white transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                            <span className="text-[10px] font-black uppercase tracking-widest block mb-2">{PROPERTY_TYPES[2].count}</span>
                            <h4 className="text-xl font-bold">{PROPERTY_TYPES[2].title}</h4>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default PropertyTypes;
