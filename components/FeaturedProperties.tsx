"use client";

import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { FEATURED_PROPERTIES } from '../constants';
import ImageLightbox from './ImageLightbox';

const FeaturedProperties: React.FC = () => {
    const triggerRef = useRef<HTMLDivElement>(null);
    const horizontalRef = useRef<HTMLDivElement>(null);
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            if (!horizontalRef.current || !triggerRef.current) return;

            const items = gsap.utils.toArray('.featured-item');

            gsap.to(items, {
                xPercent: -100 * (items.length - 1),
                ease: 'none',
                scrollTrigger: {
                    trigger: triggerRef.current,
                    pin: true,
                    scrub: 1,
                    snap: 1 / (items.length - 1),
                    end: () => `+=${horizontalRef.current?.offsetWidth}`,
                }
            });
        });

        return () => ctx.revert();
    }, []);

    return (
        <section id="proporties" className="bg-[#101b35] py-24 overflow-hidden w-full ">
            <div className="max-w-7xl mx-auto px-6 mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Featured <br />Properties</h2>
                <div className="flex items-center gap-4 text-[#C5A059]">
                    <div className="w-12 h-[2px] bg-[#C5A059]" />
                    <span className="text-sm font-bold uppercase tracking-widest">Selected for Excellence</span>
                </div>
            </div>

            <div ref={triggerRef} className="h-screen flex items-center">
                <div
                    ref={horizontalRef}
                    className="flex gap-12 px-6 lg:px-24"
                >
                    {FEATURED_PROPERTIES.map((prop) => (
                        <div
                            key={prop.id}
                            onClick={() => setSelectedImage(prop.image)}
                            className="featured-item flex-shrink-0 w-[300px] md:w-[600px] h-[500px] rounded-none overflow-hidden relative group cursor-zoom-in"
                        >
                            <img
                                src={prop.image}
                                alt={prop.title}
                                className="absolute inset-0 w-full h-full object-cover rounded-none transition-transform duration-1000 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />

                            <div className="absolute top-6 right-6">
                                <span className="px-4 py-2 bg-white/10 backdrop-blur-md text-[#C5A059] text-sm font-bold rounded-none">
                                    {prop.type}
                                </span>
                            </div>

                            <div className="absolute bottom-0 left-0 w-full p-8 md:p-12">
                                <div className="flex flex-col md:flex-row md:justify-between md:items-end mb-4 gap-4">
                                    <div>
                                        <h3 className="text-xl md:text-3xl font-bold text-white mb-2">{prop.title}</h3>
                                        <div className="flex items-center gap-2 text-white/60">
                                            <span>📍</span>
                                            <span className="text-sm">{prop.location}</span>
                                        </div>
                                    </div>
                                    <div className="md:text-right">
                                        <div className="text-[#C5A059] text-2xl font-bold">{prop.price}</div>
                                        <div className="text-white/40 text-sm">{prop.size}</div>
                                    </div>
                                </div>

                                <div className="flex gap-6 pt-6">
                                    <div className="flex items-center gap-2 text-white/60 text-sm">
                                        <span className="w-5 h-5 flex items-center justify-center bg-white/10 rounded-none">🛏️</span>
                                        {prop.beds} Beds
                                    </div>
                                    <div className="flex items-center gap-2 text-white/60 text-sm">
                                        <span className="w-5 h-5 flex items-center justify-center bg-white/10 rounded-none">🚿</span>
                                        {prop.baths} Baths
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}

                    {/* Spacer at the end for scroll feel */}
                    <div className="flex-shrink-0 w-[100px]" />
                </div>
            </div>

            <ImageLightbox
                isOpen={!!selectedImage}
                src={selectedImage || ''}
                onClose={() => setSelectedImage(null)}
            />
        </section>
    );
};

export default FeaturedProperties;
