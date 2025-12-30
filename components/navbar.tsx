
"use client";



import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

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

    return (
        <>
            <nav
                className={`fixed top-0 left-0 w-full z-50 px-6 md:px-16 lg:px-24 transition-all duration-500 flex items-center justify-between ${isScrolled ? 'py-4 bg-white/90 backdrop-blur-md shadow-sm' : 'py-8 bg-transparent'
                    }`}>
                <div className="flex items-center gap-3 cursor-pointer group">
                    <div className="w-10 h-10 flex items-center justify-center">

                        <img src="https://lh3.googleusercontent.com/gg-dl/ABS2GSkjfiUhCcUilg0jgZzq9moPbrpvNFqufhsWM89TJjoGkmY4Hp3jksL4vCj06R_gw3ZTqLpaUwBVGldEkJUet_dcywl_QHGr-H9yvKnrJAB9WLMWQn90bfKDzAD2zXl-2OoAshWsz9ivhadFZiXD3iurD1DnebQUAhnpCHtROBW9QKIgNQ=s1024-rj" alt="Logo" width="40" height="40" />

                    </div>
                    <span className={`text-2xl font-bold tracking-tight transition-colors ${isScrolled ? 'text-slate-900' : 'text-white'}`}>
                        Bahria Elite
                    </span>
                </div>

                <div className="flex items-center gap-4 md:gap-6">
                    <div className="hidden sm:flex items-center gap-2">
                        <svg className={`w-4 h-4 ${isScrolled ? 'text-slate-900' : 'text-white'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        <span className={`text-sm font-bold tracking-tight ${isScrolled ? 'text-slate-900' : 'text-white'}`}>
                            +1-212-456-789
                        </span>
                    </div>
                    <div className={`hidden sm:block h-6 w-\[1px] ${isScrolled ? 'bg-slate-200' : 'bg-white/30'}`} />

                    <button
                        onClick={() => setIsMenuOpen(true)}
                        className="flex items-center gap-3 px-6 py-2.5 bg-white text-slate-900 rounded-full font-bold text-sm shadow-xl hover:bg-slate-50 transition-all active:scale-95 border border-slate-100"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                        </svg>
                        Menu
                    </button>
                </div>
            </nav>
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] bg-slate-950/40 backdrop-blur-sm"
                    >
                        <motion.div
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: 'spring', damping: 30, stiffness: 200 }}
                            className="absolute right-0 top-0 w-full sm:w-[500px] h-full bg-[#111827] text-white p-12 md:p-20 flex flex-col justify-between shadow-2xl"
                        >
                            {/* Close Button */}
                            <div className="flex justify-start">
                                <button
                                    onClick={() => setIsMenuOpen(false)}
                                    className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-slate-950 hover:scale-110 transition-transform shadow-lg"
                                >
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>
                            <div className="flex flex-col gap-4 mt-4">
                                <a href="#" className="group flex items-center hover:gap-4 text-5xl md:text-4xl font-bold hover:text-[#00D1A0] transition-colors">
                                    <span className="opacity-100 visible ">—</span>
                                    Home
                                </a>
                                {['Proporties', 'Services', 'Experience', 'Contact'].map((item) => (
                                    <a
                                        key={item}
                                        href={`#${item.toLowerCase()}`}
                                        className="text-5xl md:text-4xl font-medium text-slate-400 hover:text-white transition-all hover:translate-x-2"
                                    >
                                        {item}
                                    </a>
                                ))}
                            </div>
                            <div className="flex items-center gap-4 mt-12">
                                <button className="px-6 py-2 bg-[#00D1A0] text-slate-900 font-bold rounded-full text-lg hover:brightness-110 transition-all active:scale-95 shadow-lg shadow-[#00D1A0]/20">
                                    Sign In
                                </button>
                                <button className="px-6 py-2 bg-transparent border-2 border-[#00D1A0]/40 text-[#00D1A0] font-bold rounded-full text-lg hover:bg-[#00D1A0]/10 transition-all active:scale-95">
                                    Sign up
                                </button>
                            </div>

                            <div className="flex flex-col md:flex-row justify-between items-end gap-10 mt-20">
                                <div className="flex flex-col gap-2">
                                    <span className="text-slate-500 text-sm font-bold uppercase tracking-widest">Contact</span>
                                    <a href="mailto:hello@homely.com" className="text-xl font-bold hover:text-[#00D1A0] transition-colors">hello@property.com</a>
                                    <a href="tel:+12124567890" className="text-xl font-bold hover:text-[#00D1A0] transition-colors">+1-212-456-7890</a>
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
