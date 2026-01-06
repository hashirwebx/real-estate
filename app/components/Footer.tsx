"use client";

import React from 'react';
import Image from 'next/image';
import Logo from '../../Logo/logo4-removebg-preview.png';
const Footer: React.FC = () => {
    return (
        <footer className="bg-slate-950 text-white py-16 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-26 pb-16">
                    <div>
                        <div className="flex items-center gap-2 cursor-pointer">
                            <Image src={Logo} alt="logo" className="h-20 w-auto object-contain" width={100} height={100} />
                        </div>
                        <span className="text-2xl font-bold font-heading tracking-wider mb-6 block">
                            Bahria<span className="text-[#755e40]">Elite</span>
                        </span>
                        <p className="text-white/40 text-sm leading-relaxed mb-6">
                            Premium Real Estate Consultants – Bahria Phase 7, Islamabad
                            <br />
                            Leading the way in verified property sales, investment advisory, and project marketing within Bahria Town Phase 7. Our work is guided by integrity, transparency, and measurable results for both homeowners and investors.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-lg font-bold mb-6">Quick Links</h4>
                        <ul className="space-y-4 text-white/60 text-sm">
                            <li><a href="#home" className="hover:text-[#C5A059] transition-colors">Home</a></li>
                            <li><a href="#proporties" className="hover:text-[#C5A059] transition-colors">Proporties</a></li>
                            <li><a href="#services" className="hover:text-[#C5A059] transition-colors">Services</a></li>
                            <li><a href="#experience" className="hover:text-[#C5A059] transition-colors">Experience</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-lg font-bold mb-6">Services</h4>
                        <ul className="space-y-4 text-white/60 text-sm">
                            <li><a href="#" className="hover:text-[#C5A059] transition-colors">Buying & Selling</a></li>
                            <li><a href="#" className="hover:text-[#C5A059] transition-colors">Property Investment</a></li>
                            <li><a href="#" className="hover:text-[#C5A059] transition-colors">Consultation</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-lg font-bold mb-6">Newsletter</h4>
                        <p className="text-white/40 text-sm mb-2">Stay Updated With Bahria Phase 7 Property Market</p>
                        <p className="text-white/40 text-sm mb-6">Subscribe to receive weekly updates on new listings, price trends, investment opportunities, and upcoming projects in Bahria Town Phase 7.</p>
                        <div className="flex bg-white/5 rounded-full overflow-hidden p-1">
                            <input type="email" placeholder="Email your email" className="bg-transparent px-4 py-2 w-full outline-none text-sm" />
                            <button className="bg-[#FBA12B] text-slate-900 px-4 py-2 rounded-full font-bold text-xs uppercase">Join</button>
                        </div>
                    </div>
                </div>

                <div className="pt-12 flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="text-white/40 text-xs">
                        © {new Date().getFullYear()} Bahria Phase 7 Real Estate. All Rights Reserved.
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
