"use client";

import React from 'react';

const Contact: React.FC = () => {
    return (
        <section id="contact" className="py-24 bg-white relative overflow-hidden">
            {/* Decorative Blur */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-[#C5A059]/5 blur-[120px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10 bo">
                <div className="bg-[#0F172A] rounded-4xl overflow-hidden shadow-2xl flex flex-col lg:flex-row">
                    <div className="lg:w-1/2 p-12 md:p-20 text-white">
                        <h2 className="text-4xl md:text-5xl font-bold mb-8">Ready to <br /><span className="text-[#FBA12B]">Start Your Journey?</span></h2>
                        <p className="text-white/60 mb-12 text-lg">
                            Whether you're looking for a new home or a high-yield investment, our team is ready to guide you through every step.
                        </p>

                        <div className="space-y-8">
                            <div className="flex items-center gap-6 group">
                                <div className="w-12 h-12 bg-white/10 rounded-none flex items-center justify-center text-[#FBA12B] group-hover:bg-[#C5A059] group-hover:text-white transition-all">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                </div>
                                <div>
                                    <div className="text-white/40 text-xs uppercase tracking-widest mb-1">Call Us</div>
                                    <div className="text-xl font-bold">+92 300 1234567</div>
                                </div>
                            </div>
                            <div className="flex items-center gap-6 group">
                                <div className="w-12 h-12 bg-white/10 rounded-none flex items-center justify-center text-[#FBA12B] group-hover:bg-[#FBA12B] group-hover:text-white transition-all">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                </div>
                                <div>
                                    <div className="text-white/40 text-xs uppercase tracking-widest mb-1">Office</div>
                                    <div className="text-xl font-bold">Plaza 45, Phase 7, Bahria Town</div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-16 pt-16 flex gap-6">
                            {['fb', 'tw', 'ln', 'ig'].map(s => (
                                <div key={s} className="w-10 h-10 rounded-none bg-white/5 flex items-center justify-center hover:bg-[#FBA12B] transition-colors cursor-pointer text-xs uppercase font-bold">
                                    {s}
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="lg:w-1/2 bg-white p-12 md:p-20">
                        <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
                            <div className="grid grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase text-slate-400">Full Name</label>
                                    <input type="text" className="w-full px-6 py-4 bg-slate-50 rounded-none focus:bg-slate-100 focus:outline-none transition-colors" placeholder="John Doe" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase text-slate-400">Phone</label>
                                    <input type="tel" className="w-full px-6 py-4 bg-slate-50 rounded-none focus:bg-slate-100 focus:outline-none transition-colors" placeholder="+92 ..." />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-bold uppercase text-slate-400">Email Address</label>
                                <input type="email" className="w-full px-6 py-4 bg-slate-50 rounded-none focus:bg-slate-100 focus:outline-none transition-colors" placeholder="email@example.com" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-bold uppercase text-slate-400">Interested In</label>
                                <select className="w-full px-6 py-4 bg-slate-50 rounded-none focus:bg-slate-100 focus:outline-none transition-colors appearance-none">
                                    <option>Select Option</option>
                                    <option>Residential Property</option>
                                    <option>Commercial Investment</option>
                                    <option>Selling My Property</option>
                                </select>
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-bold uppercase text-slate-400">Message</label>
                                <textarea rows={4} className="w-full px-6 py-4 bg-slate-50 rounded-none focus:bg-slate-100 focus:outline-none transition-colors" placeholder="Tell us about your requirements..." />
                            </div>
                            <button className="w-full py-5 bg-[#FBA12B] text-slate-900 font-bold rounded-none shadow-lg hover:shadow-[#C5A059]/30 transition-all active:scale-95">
                                Send Inquiry
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
