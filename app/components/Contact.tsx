
"use client";

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const Contact: React.FC = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const formRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from('.contact-reveal', {
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 80%',
                },
                y: 30,
                opacity: 0,
                stagger: 0.1,
                duration: 1,
                ease: 'power3.out',
            });

            gsap.from(formRef.current, {
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 70%',
                },
                x: 40,
                opacity: 0,
                duration: 1.2,
                ease: 'expo.out',
            });

            gsap.from('.map-reveal', {
                scrollTrigger: {
                    trigger: '.map-container',
                    start: 'top 90%',
                },
                opacity: 0,
                scale: 0.98,
                duration: 1.5,
                ease: 'power2.out',
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    const contactInfo = [
        {
            label: "Visit Us:",
            value: "Office No 7, First Floor, Bahria Town, Phase 7, Islamabad",
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
            )
        },
        {
            label: "Mail Us:",
            value: "info@bahriaElite.com",
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
            )
        },
        {
            label: "Phone:",
            value: "0334 000000",
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
            )
        }
    ];

    return (
        <section id="contact" ref={sectionRef} className="pt-24 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 mb-24">
                <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
                    <div className="lg:w-1/2">
                        <span className="contact-reveal text-[10px] font-black uppercase tracking-[0.2em] text-slate-800 mb-4 block">
                            CONTACT US
                        </span>
                        <h2 className="contact-reveal text-4xl md:text-5xl font-bold text-slate-900 mb-8 tracking-tight">
                            Get In Touch
                        </h2>
                        <p className="contact-reveal text-slate-500 text-sm leading-relaxed mb-12 max-w-lg">
                            Looking for information about a housing society or need help choosing the right property? Were here to assist you with expert guidance, project details, booking, and investment plans.
                        </p>

                        <div className="space-y-10">
                            {contactInfo.map((info, idx) => (
                                <div key={idx} className="contact-reveal flex items-start gap-6 group">
                                    <div className="shrink-0 w-12 h-12 bg-white border border-slate-100 shadow-sm flex items-center justify-center text-slate-400 group-hover:text-slate-900 group-hover:border-slate-200 transition-all duration-300">
                                        {info.icon}
                                    </div>
                                    <div>
                                        <div className="text-slate-900 font-bold text-sm mb-1">{info.label}</div>
                                        <div className="text-slate-500 text-sm leading-snug">{info.value}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="lg:w-1/2">
                        <div
                            ref={formRef}
                            className="bg-white p-10 md:p-14 shadow-[0_10px_60px_-15px_rgba(0,0,0,0.08)] border border-slate-50"
                        >
                            <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-10">
                                Get A Call Back !
                            </h3>

                            <form onSubmit={(e) => e.preventDefault()} className="space-y-10">
                                <div className="grid md:grid-cols-2 gap-x-12 gap-y-10">
                                    <div className="relative">
                                        <input
                                            type="text"
                                            placeholder="Name"
                                            className="w-full bg-transparent border-b border-slate-200 py-2 text-sm focus:outline-none focus:border-slate-900 transition-colors placeholder:text-black"
                                        />
                                    </div>
                                    <div className="relative">
                                        <input
                                            type="email"
                                            placeholder="E-Mail"
                                            className="w-full bg-transparent border-b border-slate-200 py-2 text-sm focus:outline-none focus:border-slate-900 transition-colors placeholder:text-black"
                                        />
                                    </div>
                                    <div className="relative">
                                        <input
                                            type="tel"
                                            placeholder="Phone Number"
                                            className="w-full bg-transparent border-b border-slate-200 py-2 text-sm focus:outline-none focus:border-slate-900 transition-colors placeholder:text-black"
                                        />
                                    </div>
                                    <div className="relative">
                                        <input
                                            type="text"
                                            placeholder="Your Website"
                                            className="w-full bg-transparent border-b border-slate-200 py-2 text-sm focus:outline-none focus:border-slate-900 transition-colors placeholder:text-black"
                                        />
                                    </div>
                                </div>

                                <div className="relative pt-4">
                                    <textarea
                                        rows={4}
                                        placeholder="Your Message Here"
                                        className="w-full bg-transparent border-b border-slate-200 py-2 text-sm focus:outline-none focus:border-slate-900 transition-colors placeholder:text-black resize-none"
                                    />
                                    <div className="absolute bottom-4 right-0 text-slate-400">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                                        </svg>
                                    </div>
                                </div>

                                <div className="pt-4">
                                    <button type="submit" className="group relative px-10 py-4 bg-[#FBA12B] text-white font-bold rounded-full overflow-hidden transition-all active:scale-95 shadow-xl shadow-[#00D1A0]/10">
                                <span className="relative z-10">Submit Now</span>
                                <div className="absolute inset-0 bg-slate-900 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                            </button>
                                </div>
                            </form>
                        </div>
                    </div>

                </div>
            </div>
            <div className="map-container relative w-full h-125 bg-slate-100 border-t border-slate-100 overflow-hidden">
                <div className="map-reveal absolute inset-0 w-full h-full">
                    <div className="absolute top-10 left-10 z-10 hidden md:block">
                        <div className="bg-white p-6 shadow-xl border border-slate-100 max-w-70">
                            <h4 className="font-bold text-sm text-slate-900 mb-1">Top 10 Group of Companies</h4>
                            <p className="text-[11px] text-slate-500 leading-relaxed mb-4">
                                Office No 7, First Floor, Bahria Town, Phase 7, Islamabad
                            </p>
                            <div className="flex items-center gap-1 mb-2">
                                <span className="text-[11px] font-bold text-slate-900">5.0</span>
                                <div className="flex text-orange-400">
                                    {[...Array(5)].map((_, i) => (
                                        <svg key={i} className="w-3 h-3 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                                    ))}
                                </div>
                                <span className="text-[11px] text-blue-500 ml-1">36 reviews</span>
                            </div>
                            <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="text-[11px] text-blue-600 font-bold hover:underline">View larger map</a>
                        </div>
                    </div>

                    <iframe
                        src="https://www.google.com/maps/search/real+estate+company+dealing+in+bahria+town+phase+7/@33.5258548,73.0901284,3727m/data=!3m2!1e3!4b1?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D"
                        width="100%"
                        height="100%"
                        allowFullScreen={true}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Map showing location of Real Estate Company in Bahria Town Phase 7"
                        className="grayscale contrast-[1.1] opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-700 border-0"
                    ></iframe>
                </div>
            </div>
        </section>
    );
};

export default Contact;
