
"use client";

import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

const Navbar: React.FC = () => {
    const navRef = useRef<HTMLElement>(null);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        let lastScrollY = window.scrollY;

        const updateNavbar = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }


            if (currentScrollY > lastScrollY && currentScrollY > 200) {

                gsap.to(navRef.current, {
                    yPercent: -100,
                    duration: 0.4,
                    ease: 'power2.inOut',
                });
            } else {

                gsap.to(navRef.current, {
                    yPercent: 0,
                    duration: 0.4,
                    ease: 'power2.out',
                });
            }
            lastScrollY = currentScrollY;
        };

        window.addEventListener('scroll', updateNavbar);
        return () => window.removeEventListener('scroll', updateNavbar);
    }, []);

    return (
        <nav
            ref={navRef}
            className={`fixed top-0 left-0 w-full z-50 px-6 md:px-16 transition-all duration-500 flex items-center justify-between ${isScrolled
                ? 'py-4 bg-[#0F172A]/85 backdrop-blur-xl border-b border-white/10 shadow-2xl'
                : 'py-8 bg-transparent'
                }`}
        >
            <div className="flex items-center gap-3 group cursor-pointer">
                <div className={`w-10 h-10 flex items-center justify-center border-2 rounded-xl transition-all duration-500 ${isScrolled ? 'border-[#FBA12B] bg-[#FBA12B]/10' : 'border-white'
                    }`}>
                    <svg className={`w-6 h-6 transition-colors duration-500 ${isScrolled ? 'text-[#FBA12B]' : 'text-white'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                </div>
                <div className="flex flex-col">
                    <span className="text-xl font-black text-white tracking-tighter leading-none">BAHRIA</span>
                    <span className={`text-[10px] font-bold tracking-[0.3em] uppercase transition-colors duration-500 ${isScrolled ? 'text-[#FBA12B]' : 'text-white/60'}`}>ELITE</span>
                </div>
            </div>

            <div className="hidden lg:flex items-center space-x-12">
                {['Home', 'Featured', 'Investment', 'Locations', 'Contact'].map((link) => (
                    <a
                        key={link}
                        href={`#${link.toLowerCase()}`}
                        className="text-xs font-bold uppercase tracking-widest text-white/70 hover:text-[#FBA12B] transition-all relative group"
                    >
                        {link}
                        <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#FBA12B] transition-all duration-300 group-hover:w-full" />
                    </a>
                ))}
            </div>

            <div className="flex items-center gap-6">
                <button className={`hidden sm:block text-xs font-bold uppercase tracking-widest transition-colors ${isScrolled ? 'text-white/60 hover:text-white' : 'text-white/80 hover:text-white'}`}>
                    Member Portal
                </button>
                <button className={`px-8 py-3 rounded-full text-sm font-bold transition-all transform active:scale-95 ${isScrolled
                    ? 'bg-[#FBA12B] text-white shadow-lg shadow-orange-500/20 hover:bg-[#e89325]'
                    : 'bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20'
                    }`}>
                    List Property
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
