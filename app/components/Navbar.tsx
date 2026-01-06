
"use client";

declare global {
    interface Window {
        lenis?: {
            scrollTo: (target: number | Element, options?: { offset?: number; duration?: number; easing?: (t: number) => number }) => void;
        };
    }
}

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Logo from '../../Logo/logo4-removebg-preview.png';
const Navbar: React.FC = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isMenuOpen]);

    const handleNavClick = (e: React.MouseEvent<HTMLElement>, targetId: string) => {
        e.preventDefault();
        setIsMenuOpen(false);

        // Use the global Lenis instance for high-quality smooth scroll
        if (window.lenis) {
            if (targetId === 'top') {
                window.lenis.scrollTo(0, {
                    duration: 1.5,
                    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
                });
            } else {
                const element = document.getElementById(targetId);
                if (element) {
                    window.lenis.scrollTo(element, {
                        offset: -80,
                        duration: 1.5,
                        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
                    });
                }
            }
        } else {
            // Fallback to native smooth scroll
            const element = document.getElementById(targetId);
            if (element) {
                window.scrollTo({
                    top: targetId === 'top' ? 0 : element.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        }
    };

    const menuItems = [
        { name: 'Properties', id: 'proporties' },
        { name: 'Services', id: 'services' },
        { name: 'Experience', id: 'experience' },
        { name: 'Contact', id: 'contact' }
    ];

    return (
        <>
            <nav
                className={`fixed left-1/2 w-337.5 -translate-x-1/2 z-50 rounded-full transition-all duration-900 ease-out flex items-center justify-between px-6 md:px-10 ${isScrolled
                    ? 'top-6 w-[90%] max-w-7xl py-1 bg-white/95 backdrop-blur-lg rounded-full shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-slate-100'
                    : 'top-0 w-[80%] py-6 bg-transparent'
                    }`}
            >
                <div
                    onClick={(e) => handleNavClick(e, 'top')}
                    className="flex items-center gap-3 cursor-pointer group"
                >
                    <div className="flex items-center gap-2 cursor-pointer">
                        <Image src={Logo} alt="logo" className="h-16 w-auto object-contain" width={60} height={60} />
                    </div>
                    <span className={`text-xl font-bold tracking-tight transition-colors ${isScrolled ? 'text-slate-900' : 'text-white'}`}>
                        Bahria Elite
                    </span>
                </div>

                <div className="flex items-center gap-3 md:gap-5">
                    <div className="hidden lg:flex items-center gap-2 group cursor-pointer">
                        <svg className={`w-4 h-4 transition-transform group-hover:rotate-12 ${isScrolled ? 'text-slate-900' : 'text-white'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        <span className={`text-sm font-bold tracking-tight ${isScrolled ? 'text-slate-900' : 'text-white'}`}>
                            <a href="tel:+923347676171">+92 334 7676171</a>
                        </span>
                    </div>

                    <div className={`hidden lg:block h-6 w-[1.5px] ${isScrolled ? 'bg-slate-200' : 'bg-white/30'}`} />

                    <div>
                        <button onClick={() => setIsMenuOpen(true)} className="group relative flex items-center gap-3 px-6 py-2.5 bg-white hover:text-white text-slate-900 font-bold text-sm hover:bg-slate-50  border border-slate-100 rounded-full overflow-hidden transition-all active:scale-95 shadow-xl shadow-[#00D1A0]/10">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                            </svg>
                            <span className="relative z-10">Menu</span>
                            <div className="absolute inset-0 bg-slate-900 hover:text-white translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                        </button>
                    </div>
                </div>
            </nav>

            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-100 bg-slate-950/40 backdrop-blur-sm"
                    >
                        <motion.div
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: 'spring', damping: 30, stiffness: 200 }}
                            className="absolute right-0 top-0 w-full sm:w-125 h-full bg-[#111827] text-white p-12 md:p-18 flex flex-col justify-between shadow-2xl"
                        >
                            <div className="flex justify-start">
                                <button
                                    type="button"
                                    aria-label="Close menu"
                                    onClick={() => setIsMenuOpen(false)}
                                    className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-slate-950 hover:scale-110 transition-transform shadow-lg"
                                >
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>

                            <div className="flex flex-col gap-6 mt-10">
                                <a
                                    href="#"
                                    onClick={(e) => handleNavClick(e, 'home')}
                                    className="group flex items-center hover:gap-4 text-5xl md:text-4xl font-bold text-slate-400 hover:text-white transition-all hover:translate-x-2"
                                >
                                    {/* <span className="opacity-100">—</span> */}
                                    Home
                                </a>
                                {menuItems.map((item) => (
                                    <a
                                        key={item.id}
                                        href={`#${item.id}`}
                                        onClick={(e) => handleNavClick(e, item.id)}
                                        className="text-5xl md:text-4xl font-bold text-slate-400 hover:text-white transition-all hover:translate-x-2"
                                    >
                                        {item.name}
                                    </a>
                                ))}
                            </div>

                            <div className="flex items-center gap-4 mt-10">
                                <button
                                    type="button"
                                    onClick={(e) => handleNavClick(e, 'contact')}
                                    className="group relative px-8 py-3 bg-[#FBA12B] text-white font-bold rounded-full overflow-hidden transition-all active:scale-95 shadow-xl shadow-[#00D1A0]/10"
                                >
                                    <span className="relative z-10">Invest Now</span>
                                    <div className="absolute inset-0 bg-slate-900 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                                </button>
                            </div>

                            <div className="flex flex-col md:flex-row justify-between items-end gap-10 mt-18">
                                <div className="flex flex-col gap-2">
                                    <span className="text-slate-500 text-sm font-bold uppercase tracking-widest">Contact</span>
                                    <a href="mailto:info@bahria.com" className="text-xl font-bold hover:text-[#00D1A0] transition-colors">info@bahriaelite.com</a>
                                    <a href="tel:+923347676171" className="text-xl font-bold hover:text-[#00D1A0] transition-colors">+92 334 7676171</a>
                                </div>
                                <div className="text-slate-500 text-xs font-bold uppercase tracking-widest hover:text-white cursor-pointer transition-colors">
                                    Bahria Elite © 2026. All rights reserved.
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
