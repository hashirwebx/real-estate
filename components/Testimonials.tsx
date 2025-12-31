
import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TESTIMONIALS } from '../constants';

const Testimonials: React.FC = () => {
    const [index, setIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    const next = useCallback(() => {
        setIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    }, []);

    const prev = useCallback(() => {
        setIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
    }, []);

    // Auto-slide effect
    useEffect(() => {
        if (isPaused) return;

        const timer = setInterval(() => {
            next();
        }, 5000); // Slide every 5 seconds

        return () => clearInterval(timer);
    }, [next, isPaused]);

    // Get three testimonials to show: prev, current, next
    const getVisibleItems = () => {
        const prevIdx = (index - 1 + TESTIMONIALS.length) % TESTIMONIALS.length;
        const nextIdx = (index + 1) % TESTIMONIALS.length;
        return [
            { ...TESTIMONIALS[prevIdx], position: 'left' },
            { ...TESTIMONIALS[index], position: 'center' },
            { ...TESTIMONIALS[nextIdx], position: 'right' },
        ];
    };

    return (
        <section
            className="py-32 bg-white overflow-hidden"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
        >
            <div className="max-w-7xl mx-auto px-6 text-center">
                <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-20 tracking-tight">
                    What <span className="text-slate-400 font-light">people</span> say
                </h2>

                {/* Testimonials Container */}
                <div className="relative flex justify-center items-center gap-4 md:gap-8 mb-20 min-h-[500px]">
                    <AnimatePresence mode="popLayout" initial={false}>
                        {getVisibleItems().map((item) => {
                            const isCenter = item.position === 'center';

                            return (
                                <motion.div
                                    key={`${item.id}-${item.position}`}
                                    layout
                                    initial={{
                                        opacity: 0,
                                        x: item.position === 'left' ? -150 : item.position === 'right' ? 150 : 0,
                                        scale: 0.7,
                                        rotate: item.position === 'left' ? -15 : item.position === 'right' ? 15 : 0
                                    }}
                                    animate={{
                                        opacity: isCenter ? 1 : 0.4,
                                        x: 0,
                                        scale: isCenter ? 1 : 0.85,
                                        rotate: item.position === 'left' ? -6 : item.position === 'right' ? 6 : 0,
                                        zIndex: isCenter ? 20 : 10
                                    }}
                                    exit={{
                                        opacity: 0,
                                        scale: 0.7,
                                        x: item.position === 'left' ? -150 : item.position === 'right' ? 150 : 0
                                    }}
                                    transition={{
                                        type: 'spring',
                                        stiffness: 180,
                                        damping: 20,
                                        opacity: { duration: 0.4 }
                                    }}
                                    className={`relative group w-full max-w-[380px] transition-all duration-700 ${item.position === 'left' ? 'hidden md:block' :
                                            item.position === 'right' ? 'hidden md:block' :
                                                ''
                                        }`}
                                >
                                    {/* Speech Bubble Card */}
                                    <div
                                        className={`relative p-8 md:p-10 rounded-[40px] shadow-xl transition-all duration-700 mb-12 ${isCenter
                                                ? 'bg-[#101b35] text-white shadow-navy-900/20'
                                                : 'bg-white text-slate-600 border border-slate-100 group-hover:bg-[#0F172A] group-hover:text-white group-hover:scale-105'
                                            }`}
                                    >
                                        <p className="text-[15px] md:text-[17px] leading-relaxed font-medium italic mb-2 select-none">
                                            {item.content}
                                        </p>

                                        {/* Speech Bubble Tail */}
                                        <div
                                            className={`absolute bottom-[-15px] left-12 w-8 h-8 rotate-45 transition-colors duration-700 ${isCenter
                                                    ? 'bg-[#101b35]'
                                                    : 'bg-white group-hover:bg-[#0F172A]'
                                                }`}
                                        />
                                    </div>

                                    {/* Profile Info */}
                                    <div className={`flex items-center gap-4 px-8 transition-all duration-500 ${isCenter ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0'}`}>
                                        <img
                                            src={item.image}
                                            alt={item.name}
                                            className="w-12 h-12 rounded-full object-cover border-2 border-slate-100 shadow-md"
                                        />
                                        <div className="text-left">
                                            <h4 className="font-bold text-slate-900 text-sm md:text-base leading-none mb-1">{item.name}</h4>
                                            <p className="text-xs text-slate-400 font-medium">{item.role}</p>
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </AnimatePresence>
                </div>

                {/* Navigation Section */}
                <div className="flex flex-col items-center gap-8">
                    {/* Decorative Progress Arc */}
                    <div className="relative w-48 h-1 flex items-center justify-center bg-slate-100 rounded-full overflow-hidden">
                        <motion.div
                            className="absolute left-0 h-full bg-[#FBA12B]"
                            initial={{ width: "0%" }}
                            animate={{ width: `${((index + 1) / TESTIMONIALS.length) * 100}%` }}
                            transition={{ type: 'spring', stiffness: 100, damping: 20 }}
                        />
                    </div>

                    <div className="flex items-center gap-6">
                        <button
                            onClick={(e) => { e.stopPropagation(); prev(); }}
                            className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:border-[#FBA12B] hover:text-[#FBA12B] hover:bg-slate-50 transition-all active:scale-90"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>
                        <button
                            onClick={(e) => { e.stopPropagation(); next(); }}
                            className="w-12 h-12 rounded-full bg-[#FBA12B] flex items-center justify-center text-white shadow-lg shadow-orange-500/20 hover:bg-[#e89325] hover:scale-105 transition-all active:scale-90"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
