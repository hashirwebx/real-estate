"use client";

import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { motion } from 'framer-motion';

const StatCard: React.FC<{ value: number; label: string; suffix?: string; delay: number }> = ({ value, label, suffix = "", delay }) => {
    const [count, setCount] = useState(0);
    const cardRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {

            gsap.to({ val: 0 }, {
                val: value,
                duration: 2.5,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: cardRef.current,
                    start: 'top 85%',
                },
                onUpdate: function () {
                    setCount(Math.floor(this.targets()[0].val));
                }
            });

            gsap.from(cardRef.current, {
                y: 60,
                opacity: 0,
                duration: 1.2,
                delay: delay,
                ease: "expo.out",
                scrollTrigger: {
                    trigger: cardRef.current,
                    start: 'top 90%',
                }
            });
        }, cardRef);
        return () => ctx.revert();
    }, [value, delay]);

    return (
        <div ref={cardRef} className="relative group">
            <div className="flex flex-col items-center text-center p-8 bg-slate-50 border border-slate-100 transition-all duration-500 hover:bg-white hover:shadow-2xl hover:-translate-y-3">
                <div className="text-6xl md:text-7xl font-black text-slate-900 mb-4 tracking-tighter group-hover:text-[#FBA12B] transition-colors">
                    {count}{suffix}
                </div>
                <div className="w-12 h-1 bg-[#FBA12B] mb-6 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center" />
                <div className="text-sm font-bold uppercase tracking-[0.3em] text-slate-400 group-hover:text-slate-600 transition-colors">
                    {label}
                </div>
            </div>
        </div>
    );
};

const Experience: React.FC = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const titleRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from('.exp-header > *', {
                y: 40,
                opacity: 0,
                stagger: 0.2,
                duration: 1,
                ease: "power4.out",
                scrollTrigger: {
                    trigger: titleRef.current,
                    start: 'top 80%',
                }
            });

            gsap.from('.exp-line', {
                scaleX: 0,
                transformOrigin: "left center",
                duration: 1.5,
                ease: "expo.inOut",
                scrollTrigger: {
                    trigger: titleRef.current,
                    start: 'top 80%',
                }
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section id="experience" ref={sectionRef} className="py-32 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div ref={titleRef} className="exp-header mb-24 max-w-3xl">
                    <div className="flex items-center gap-4 mb-6">
                        <div className="exp-line w-20 h-[2px] bg-[#FBA12B]" />
                        <span className="text-[#FBA12B] font-bold text-xs uppercase tracking-widest">A Decade of Trust</span>
                    </div>
                    <h2 className="text-5xl md:text-7xl font-black text-slate-950 mb-8 leading-[0.95] tracking-tighter">
                        Our Legacy in <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-900 via-slate-700 to-slate-400">Bahria Town</span>
                    </h2>
                    <p className="text-lg text-slate-500 max-w-xl leading-relaxed">
                        We Are Pakistan’s Leading Experts in Real Estate Sales and Investment
                        With 18 years of proven experience, Top10 Marketing specializes in property sales, real estate investments, and project marketing. Our team is dedicated to delivering transparent, reliable, and profitable real estate solutions for both investors and homeowners.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 lg:divide-x divide-slate-100">
                    <StatCard value={15} label="Years Experience" suffix="+" delay={0} />
                    <StatCard value={500} label="Properties Sold" suffix="+" delay={0.1} />
                    <StatCard value={1200} label="Happy Families" suffix="+" delay={0.2} />
                    <StatCard value={4} label="Excellence Awards" suffix="" delay={0.3} />
                </div>
                <div className="mt-32 p-12 bg-[#0F172A] relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-[#FBA12B]/10 blur-[100px]" />
                    <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
                        <div className="max-w-2xl">
                            <h3 className="text-3xl font-bold text-white mb-4 italic">"Expertise that turns your property dreams into high-value reality."</h3>
                            <p className="text-white/40 font-medium tracking-widest uppercase text-sm">— Bahria Elite Leadership</p>
                        </div>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-12 py-5 bg-[#FBA12B] text-slate-950 font-black rounded-none uppercase tracking-widest text-sm shadow-2xl"
                        >
                            Meet Our Team
                        </motion.button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
