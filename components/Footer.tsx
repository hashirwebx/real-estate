"use client";

import React from 'react';
import Image from 'next/image';
import Logo from '../Logo/logo4-removebg-preview.png';
const Footer: React.FC = () => {
    return (
        <footer className="bg-slate-950 text-white py-16 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-16">
                    <div>
                        <div className="flex items-center gap-2 cursor-pointer">
                            <Image src={Logo} alt="logo" className="h-20 w-auto object-contain" width={60} height={60} />
                        </div>
                        <span className="text-2xl font-bold font-heading tracking-wider mb-6 block">
                            Bahria<span className="text-[#755e40]">Elite</span>
                        </span>
                        <p className="text-white/40 text-sm leading-relaxed mb-6">
                            Leading the way in premium real estate services in Bahria Town Phase 7. Integrity, transparency, and results.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-lg font-bold mb-6">Explore</h4>
                        <ul className="space-y-4 text-white/60 text-sm">
                            <li><a href="#home" className="hover:text-[#C5A059] transition-colors">Home</a></li>
                            <li><a href="#locations" className="hover:text-[#C5A059] transition-colors">Proporties</a></li>
                            <li><a href="#types" className="hover:text-[#C5A059] transition-colors">Services</a></li>
                            <li><a href="#featured" className="hover:text-[#C5A059] transition-colors">Experience</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-lg font-bold mb-6">Support</h4>
                        <ul className="space-y-4 text-white/60 text-sm">
                            <li><a href="#" className="hover:text-[#C5A059] transition-colors">Privacy Policy</a></li>
                            <li><a href="#" className="hover:text-[#C5A059] transition-colors">Terms of Service</a></li>
                            <li><a href="#" className="hover:text-[#C5A059] transition-colors">Contact Support</a></li>
                            <li><a href="#" className="hover:text-[#C5A059] transition-colors">FAQ</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-lg font-bold mb-6">Newsletter</h4>
                        <p className="text-white/40 text-sm mb-6">Get weekly updates on new property launches.</p>
                        <div className="flex bg-white/5 rounded-none overflow-hidden p-1">
                            <input type="email" placeholder="Email" className="bg-transparent px-4 py-2 w-full outline-none text-sm" />
                            <button className="bg-[#FBA12B] text-slate-900 px-4 py-2 rounded-none font-bold text-xs uppercase">Join</button>
                        </div>
                    </div>
                </div>

                <div className="pt-12 flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="text-white/40 text-xs">
                        © {new Date().getFullYear()} Bahria Elite. All Rights Reserved.
                    </div>
                    <div className="flex gap-8 text-white/40 text-[10px] font-bold uppercase tracking-widest">
                        <span>Demo Website, Can be customized</span>
                        <span className="text-[#FBA12B]">Powered by Peham.ltd</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
