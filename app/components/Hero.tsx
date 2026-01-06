
"use client";


import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';

const Hero: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const infoCardRef = useRef<HTMLDivElement>(null);

    const handleNavClick = (e: React.MouseEvent<HTMLButtonElement>, target: string) => {
        e.preventDefault();
        const element = document.getElementById(target);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline();

            tl.from('.hero-content > *', {
                y: 40,
                opacity: 0,
                stagger: 0.5,
                duration: 3.5,
                ease: 'power4.out'
            })
                .from(infoCardRef.current, {
                    y: 100,
                    opacity: 0,
                    duration: 4,
                    ease: 'expo.out'
                }, '-=0.9');

        }, containerRef);

        return () => ctx.revert();
    }, []);



    return (
        <section
            ref={containerRef}
            id='home'
            className="bg-linear-to-b from-[#83B3F5] via-lightskyblue dark:via-[#83B3F5] to-[#83B3F5] dark:to-[#83B3F5] overflow-hidden relative w-full h-screen min-h-200 flex flex-col justify-center"
        >
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <div className="relative w-full h-full">
                    <Image
                        src="https://images.unsplash.com/photo-1762758731221-044c22e651e0?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="Futuristic Haven Architecture"
                        fill
                        className="object-cover"
                    />
                </div>

                <div className="absolute inset-0 bg-black/5" />
            </div>
            <div className="relative z-10 px-6 md:px-16 lg:px-24 w-full">
                <div className="relative z-10 px-6 md:px-16 lg:px-24 w-full">
                    <div className="hero-content max-w-4xl">
                        {/* Main Content Area */}
                        <div className="mb-4">
                            <span className="inline-block px-4 py-1 bg-slate/900 backdrop-blur-md border border-slate/900 text-white font-black text-xs uppercase tracking-[0.2em] rounded-full mb-4">
                                bahria phase 7, Islamabad  Real Estate
                            </span>
                            <h1 className="text-6xl md:text-[100px] font-black text-white mb-6 leading-[0.9] tracking-tighter drop-shadow-2xl">
                                Bahria <br /> <span>Phase 7</span>
                            </h1>
                        </div>

                        <p className="text-white/70 text-base md:text-lg mb-10 leading-relaxed max-w-2xl font-medium">
                            Discover premium residential and commercial properties in Bahria Phase 7, Islamabad.
                            A community designed for comfort, security, and long-term investment growth.
                        </p>

                        {/* Pricing Highlight */}
                        <div className="price-tag flex items-center gap-4 mb-12">
                            <div className="h-12 w-1 bg-[#00D1A0]" />
                            <div>
                                <p className="text-white/40 text-[10px] font-black uppercase tracking-[0.2em] mb-1">Investment Starting From</p>
                                <h3 className="text-3xl font-black text-white tracking-tight">PKR 4,750,000*</h3>
                            </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex flex-wrap items-center gap-5">
                            <div>
                                <button
                                    onClick={(e) => handleNavClick(e, 'proporties')}
                                    className="group relative px-10 py-5 bg-white text-black hover:text-white font-black rounded-full text-xs overflow-hidden transition-all active:scale-95 shadow-xl shadow-[#00D1A0]/10"
                                    >
                                    <span className="relative z-10">Explore Properties</span>
                                    <div className="absolute inset-0 bg-slate-900 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                                </button>
                            </div>
                            <button className="px-10 py-5 bg-transparent text-white border-2 border-white/20 backdrop-blur-md font-black uppercase tracking-widest text-xs rounded-full hover:bg-white/10 transition-all active:scale-95">
                                View Details
                            </button>
                        </div>
                    </div>
                </div>
                <div className="absolute left-0 w-full flex justify-end md:justify-end pb-0">
                    <div
                        ref={infoCardRef}
                        className="w-full max-w-5xl bg-white rounded-t-[40px] p-10 md:p-14 shadow-2xl flex flex-col md:flex-row justify-end gap-8 md:gap-20 -mb-10">
                        <div className="flex flex-1 items-center justify-between md:justify-start gap-8 md:gap-20 w-full">
                            <div className="flex flex-col items-center gap-3">
                                <svg className="w-8 h-8 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                                </svg>
                                <span className="text-slate-900 font-bold text-sm whitespace-nowrap">4 Bedrooms</span>
                            </div>
                            <div className="flex flex-col items-center gap-3">
                                <svg className="w-8 h-8 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
                                </svg>
                                <span className="text-slate-900 font-bold text-sm whitespace-nowrap">4 Restroom</span>
                            </div>

                            <div className="flex flex-col items-center gap-3">
                                <svg className="w-8 h-8 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                </svg>
                                <span className="text-slate-900 font-bold text-sm whitespace-nowrap">Parking space</span>
                            </div>
                        </div>
                        <div className="text-center md:text-right">
                            <div className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tighter">
                                $4,750,000
                            </div>
                            <div className="text-slate-400 text-sm font-semibold uppercase tracking-widest mt-1">
                                For selling price
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
