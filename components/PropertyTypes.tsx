
"use client";

import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { PROPERTY_TYPES } from '@/constants';
import ImageLightbox from './ImageLightbox';
import { PropertyType } from '@/type';

const PropertyTypes: React.FC = () => {
    const containerRef = useRef<HTMLElement>(null);
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from('.type-card', {
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top 80%',
                },
                opacity: 0,
                scale: 0.9,
                stagger: 0.15,
                duration: 0.8,
                ease: 'back.out(1.7)',
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section id="types" className="py-24 bg-white" ref={containerRef}>
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-slate-900 mb-4">Investment Portfolios</h2>
                    <p className="text-slate-600 max-w-2xl mx-auto">Explore a variety of property options tailored to your lifestyle and budget.</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {PROPERTY_TYPES.map((type: PropertyType, idx: number) => (
                        <div
                            key={idx}
                            onClick={() => setSelectedImage(type.image)}
                            className="type-card group relative overflow-hidden rounded-none h-[400px] cursor-zoom-in shadow-lg"
                        >
                            <img
                                src={type.image}
                                alt={type.title}
                                className="absolute inset-0 w-full h-full object-cover object-bottom rounded-none transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />

                            <div className="absolute bottom-0 left-0 w-full p-8 transition-transform duration-300 translate-y-2 group-hover:translate-y-0">
                                <span className="text-[#C5A059] text-[10px] font-bold uppercase tracking-widest mb-2 block">
                                    {type.count}
                                </span>
                                <h3 className="text-2xl font-bold text-white mb-2">{type.title}</h3>
                                <p className="text-white/60 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    {type.description}
                                </p>
                            </div>
                        </div>
                    ))}
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

export default PropertyTypes;
