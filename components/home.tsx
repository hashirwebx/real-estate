
"use client";

import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

const Hero: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);
    const searchBarRef = useRef<HTMLDivElement>(null);

    const [searchData, setSearchData] = useState({
        location: '123 Street',
        typology: 'Villa',
        price: '€ 950.000,00'
    });
    const [isSearching, setIsSearching] = useState(false);

    const handleSearch = () => {
        setIsSearching(true);

        setTimeout(() => {
            setIsSearching(false);
            alert(`Searching for ${searchData.typology} in ${searchData.location} around ${searchData.price}`);
        }, 1500);
    };

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline();

            tl.from('.hero-bg', {
                scale: 1.1,
                duration: 2,
                ease: 'power2.out'
            })
                .from('.hero-headline', {
                    y: 40,
                    opacity: 0,
                    duration: 1,
                    ease: 'power3.out'
                }, '-=1.2')
                .from('.hero-subtext', {
                    y: 20,
                    opacity: 0,
                    duration: 0.8,
                    ease: 'power3.out'
                }, '-=0.6')
                .from('.hero-mini-search', {
                    x: -30,
                    opacity: 0,
                    duration: 0.8,
                    ease: 'power3.out'
                }, '-=0.4')
                .from('.hero-floating-bar', {
                    y: 60,
                    opacity: 0,
                    duration: 1.2,
                    ease: 'power4.out'
                }, '-=0.8');
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={containerRef}
            className="relative w-full h-[95vh] min-h-[750px] overflow-hidden flex flex-col justify-center"
        >
            <div className="hero-bg absolute inset-0 z-0">
                <img
                    src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=2000"
                    alt="Luxury Villa at Night"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />
            </div>
            <div className="relative z-10 px-6 md:px-16 lg:px-24 max-w-7xl w-full">
                <div ref={contentRef} className="max-w-2xl">
                    <h1 className="hero-headline text-5xl md:text-7xl font-bold text-white mb-8 leading-[1.1] tracking-tight">
                        Finding Your New <br /> Home Is Simple
                    </h1>

                    <p className="hero-subtext text-white/70 text-lg md:text-xl mb-12 max-w-lg leading-relaxed font-light">
                        RentHomes.com is your go-to destination for finding the perfect rental home to suit your needs. With thousands of property listings across the United States and Europe.
                    </p>

                    <div className="hero-mini-search flex items-center group cursor-pointer" onClick={() => searchBarRef.current?.scrollIntoView({ behavior: 'smooth' })}>
                        <div className="px-10 py-4 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full text-white/90 text-sm font-medium flex items-center gap-8 group-hover:bg-white/20 transition-all">
                            <span>Explore Now</span>
                            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>

            <div className="absolute bottom-10 left-0 w-full px-4 md:px-16 z-20 flex justify-center">
                <div
                    ref={searchBarRef}
                    className="hero-floating-bar w-full max-w-6xl bg-white rounded-3xl md:rounded-full p-3 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-4 md:gap-0 border border-slate-100"
                >

                    <div className="flex-1 flex flex-col md:flex-row items-center justify-around w-full px-2 md:px-6 divide-y md:divide-y-0 md:divide-x divide-slate-100">


                        <div className="flex flex-col px-4 md:px-8 py-3 md:py-0 group cursor-pointer w-full md:w-1/3 hover:bg-slate-50/50 rounded-2xl md:rounded-none transition-colors">
                            <div className="flex items-center gap-2 text-slate-400 text-[10px] font-bold uppercase tracking-[0.2em] mb-1 group-hover:text-[#FBA12B] transition-colors">
                                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" /></svg>
                                <span>Select Sector</span>
                            </div>
                            <select
                                value={searchData.location}
                                onChange={(e) => setSearchData({ ...searchData, location: e.target.value })}
                                className="bg-transparent text-slate-900 font-bold text-sm md:text-base outline-none w-full appearance-none cursor-pointer"
                            >
                                <option value="Sector A">Sector A</option>
                                <option value="Sector B">Sector B</option>
                                <option value="Sector C">Sector C</option>
                                <option value="Sector D">Sector D</option>
                                <option value="Sector E">Sector E</option>
                                <option value="Sector F">Sector F</option>
                                <option value="Executive Block">Executive Block</option>
                            </select>
                        </div>


                        <div className="flex flex-col px-4 md:px-8 py-3 md:py-0 group cursor-pointer w-full md:w-1/3 hover:bg-slate-50/50 rounded-2xl md:rounded-none transition-colors">
                            <div className="flex items-center gap-2 text-slate-400 text-[10px] font-bold uppercase tracking-[0.2em] mb-1 group-hover:text-[#FBA12B] transition-colors">
                                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" /></svg>
                                <span>Property Type</span>
                            </div>
                            <select
                                value={searchData.typology}
                                onChange={(e) => setSearchData({ ...searchData, typology: e.target.value })}
                                className="bg-transparent text-slate-900 font-bold text-sm md:text-base outline-none w-full appearance-none cursor-pointer"
                            >
                                <option value="Luxury Villa">Luxury Villa</option>
                                <option value="Residential Plot">Residential Plot</option>
                                <option value="Commercial Plot">Commercial Plot</option>
                                <option value="Penthouse">Penthouse</option>
                                <option value="Studio Apartment">Studio Apartment</option>
                                <option value="Modern House">Modern House</option>
                            </select>
                        </div>

                        <div className="flex flex-col px-4 md:px-8 py-3 md:py-0 group cursor-pointer w-full md:w-1/3 hover:bg-slate-50/50 rounded-2xl md:rounded-none transition-colors">
                            <div className="flex items-center gap-2 text-slate-400 text-[10px] font-bold uppercase tracking-[0.2em] mb-1 group-hover:text-[#FBA12B] transition-colors">
                                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M12 8c-1.657 0-3 1.343-3 3s1.343 3 3 3 3-1.343 3-3-1.343-3-3-3zM12 2a10 10 0 100 20 10 10 0 000-20z" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" /></svg>
                                <span>Price Range</span>
                            </div>
                            <select
                                value={searchData.price}
                                onChange={(e) => setSearchData({ ...searchData, price: e.target.value })}
                                className="bg-transparent text-slate-900 font-bold text-sm md:text-base outline-none w-full appearance-none cursor-pointer"
                            >
                                <option value="Any Price">Any Price</option>
                                <option value="Below 2 Crore">Below 2 Crore</option>
                                <option value="2 - 5 Crore">2 - 5 Crore</option>
                                <option value="5 - 10 Crore">5 - 10 Crore</option>
                                <option value="10 Crore +">10 Crore +</option>
                            </select>
                        </div>
                    </div>

                    <button
                        onClick={handleSearch}
                        disabled={isSearching}
                        className="w-full md:w-auto h-16 md:h-20 px-8 md:px-16 bg-[#0F172A] rounded-2xl md:rounded-full flex items-center justify-center gap-4 text-white font-bold transition-all hover:bg-[#1E293B] shadow-2xl active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed group"
                    >
                        {isSearching ? (
                            <div className="flex items-center gap-3">
                                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                <span>Searching...</span>
                            </div>
                        ) : (
                            <>
                                <svg className="w-5 h-5 md:w-6 md:h-6 transition-transform group-hover:rotate-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                                <span className="text-base md:text-lg">Find Property</span>
                            </>
                        )}
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Hero;
