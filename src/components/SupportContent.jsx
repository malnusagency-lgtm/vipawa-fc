'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Ticket, Heart, Handshake, Check, Copy, CreditCard, Building } from 'lucide-react';

const SupportContent = () => {
    const [activePlan, setActivePlan] = useState('fan');

    const copyToClipboard = (text) => {
        navigator.clipboard.writeText(text);
        alert('Copied to clipboard!');
    };

    const navItems = [
        { icon: Ticket, title: 'Membership', desc: 'Join the official fan club', action: 'Join Now', scroll: 'membership', color: 'text-accent-blue', border: 'hover:border-accent-blue/30' },
        { icon: Heart, title: 'Donate', desc: 'Support team operations', action: 'Donate Now', scroll: 'donate', color: 'text-accent-red', border: 'hover:border-accent-red/30' },
        { icon: Handshake, title: 'Partner', desc: 'Corporate sponsorship', action: 'Partner', scroll: 'sponsorship', color: 'text-gold', border: 'hover:border-gold/30' },
    ];

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="pt-32 pb-20 min-h-screen">
            {/* Hero */}
            <div className="container-custom text-center mb-20">
                <span className="section-tag">Get Involved</span>
                <h1 className="section-title">Support The Army</h1>
                <p className="text-white/50 max-w-2xl mx-auto text-lg">
                    Join the movement. Whether through membership, donation, or partnership, your support drives Vipawa Ladies FC forward.
                </p>
            </div>

            {/* Quick Navigation Cards */}
            <div className="container-custom grid md:grid-cols-3 gap-6 mb-32">
                {navItems.map((item, idx) => (
                    <motion.div
                        key={idx}
                        onClick={() => scrollToSection(item.scroll)}
                        whileHover={{ y: -5 }}
                        className={`glass-card p-8 text-center ${item.border} transition-colors cursor-pointer group block`}
                    >
                        <div className={`w-14 h-14 rounded-full bg-white/5 flex items-center justify-center mx-auto mb-4 ${item.color} group-hover:scale-110 transition-transform`}>
                            <item.icon size={24} />
                        </div>
                        <h3 className="text-xl font-bold uppercase mb-2">{item.title}</h3>
                        <p className="text-white/50 text-sm mb-4">{item.desc}</p>
                        <span className="text-xs font-bold uppercase tracking-widest border-b border-white/20 pb-0.5 group-hover:border-white/50 transition-colors">
                            {item.action}
                        </span>
                    </motion.div>
                ))}
            </div>

            {/* Membership Section */}
            <section id="membership" className="container-custom mb-32 scroll-mt-32">
                <div className="grid lg:grid-cols-2 gap-16 items-start">
                    <div>
                        <h2 className="text-4xl font-black uppercase mb-6 flex items-center gap-4">
                            <Ticket className="text-accent-blue" size={32} /> Official Membership
                        </h2>
                        <p className="text-white/60 mb-8 leading-relaxed">
                            Become an official member of Vipawa Ladies FC. Membership funds directly support player kits, travel, and meals.
                        </p>

                        <div className="space-y-4 mb-8">
                            <div
                                onClick={() => setActivePlan('fan')}
                                className={`p-6 rounded-2xl border cursor-pointer transition-all ${activePlan === 'fan' ? 'border-accent-blue bg-accent-blue/10' : 'border-white/10 bg-white/5 hover:border-white/20'}`}
                            >
                                <div className="flex justify-between items-center mb-2">
                                    <h3 className="font-bold uppercase text-lg">Fan Member</h3>
                                    <span className="text-accent-blue font-black text-xl">KES 500<span className="text-sm text-white/50 font-normal">/yr</span></span>
                                </div>
                                <ul className="space-y-2">
                                    <li className="flex items-center gap-2 text-sm text-white/70"><Check size={14} className="text-accent-blue" /> Official Membership Card</li>
                                    <li className="flex items-center gap-2 text-sm text-white/70"><Check size={14} className="text-accent-blue" /> 10% Off Merchandise</li>
                                </ul>
                            </div>

                            <div
                                onClick={() => setActivePlan('gold')}
                                className={`p-6 rounded-2xl border cursor-pointer transition-all ${activePlan === 'gold' ? 'border-gold bg-gold/10' : 'border-white/10 bg-white/5 hover:border-white/20'}`}
                            >
                                <div className="flex justify-between items-center mb-2">
                                    <h3 className="font-bold uppercase text-lg text-gold">Gold Member</h3>
                                    <span className="text-gold font-black text-xl">KES 2,000<span className="text-sm text-white/50 font-normal">/yr</span></span>
                                </div>
                                <ul className="space-y-2">
                                    <li className="flex items-center gap-2 text-sm text-white/70"><Check size={14} className="text-gold" /> All Fan Benefits</li>
                                    <li className="flex items-center gap-2 text-sm text-white/70"><Check size={14} className="text-gold" /> Voting Rights (AGM)</li>
                                    <li className="flex items-center gap-2 text-sm text-white/70"><Check size={14} className="text-gold" /> Free Home Match Entry</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="glass-card p-8 md:p-10 border-accent-blue/20">
                        <h3 className="text-xl font-bold uppercase mb-6">Register Now</h3>
                        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <label className="text-xs uppercase font-bold tracking-widest text-white/50">First Name</label>
                                    <input type="text" className="w-full bg-black/40 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-accent-blue transition-colors" placeholder="Jane" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs uppercase font-bold tracking-widest text-white/50">Last Name</label>
                                    <input type="text" className="w-full bg-black/40 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-accent-blue transition-colors" placeholder="Doe" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs uppercase font-bold tracking-widest text-white/50">Email Address</label>
                                <input type="email" className="w-full bg-black/40 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-accent-blue transition-colors" placeholder="jane@example.com" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs uppercase font-bold tracking-widest text-white/50">Phone Number</label>
                                <input type="tel" className="w-full bg-black/40 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-accent-blue transition-colors" placeholder="+254 7..." />
                            </div>
                            <button className="btn-primary w-full mt-4">Proceed to Pay</button>
                            <p className="text-xs text-center text-white/30 pt-4">Secure payment via M-Pesa or Card</p>
                        </form>
                    </div>
                </div>
            </section>

            {/* Donation Section */}
            <section id="donate" className="bg-white/5 py-24 scroll-mt-20">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <span className="w-12 h-12 rounded-full bg-accent-red/20 text-accent-red flex items-center justify-center mx-auto mb-4">
                            <Heart size={24} />
                        </span>
                        <h2 className="text-4xl font-black uppercase mb-4">Make a Donation</h2>
                        <p className="text-white/50 max-w-xl mx-auto">
                            Directly fund specific needs. 100% of your donation goes to the team.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
                        {/* M-Pesa */}
                        <div className="glass-card p-8 flex flex-col items-center text-center relative overflow-hidden">
                            <div className="absolute top-0 left-0 w-full h-1 bg-green-500"></div>
                            <div className="mb-6 bg-white p-2 rounded-lg">
                                {/* M-Pesa Text instead of Image for simplicity/speed if no logo asset */}
                                <span className="text-green-600 font-black text-xl tracking-tighter">M-PESA</span>
                            </div>
                            <div className="space-y-1 mb-6">
                                <p className="text-xs uppercase font-bold text-white/50">Paybill Number</p>
                                <div className="text-3xl font-black font-mono flex items-center justify-center gap-3">
                                    247247
                                    <Copy size={16} className="text-white/30 hover:text-white cursor-pointer transition-colors" onClick={() => copyToClipboard('247247')} />
                                </div>
                            </div>
                            <div className="space-y-1">
                                <p className="text-xs uppercase font-bold text-white/50">Account Number</p>
                                <div className="text-xl font-bold font-mono">0700 123 456</div>
                            </div>
                        </div>

                        {/* Bank */}
                        <div className="glass-card p-8 flex flex-col items-center text-center relative overflow-hidden">
                            <div className="absolute top-0 left-0 w-full h-1 bg-blue-500"></div>
                            <CreditCard className="mb-6 text-white/80" size={40} />
                            <div className="space-y-4 w-full">
                                <div className="bg-white/5 rounded-lg p-3">
                                    <p className="text-[10px] uppercase font-bold text-white/40 mb-1">Bank Name</p>
                                    <p className="font-bold">Equity Bank</p>
                                </div>
                                <div className="bg-white/5 rounded-lg p-3 relative">
                                    <p className="text-[10px] uppercase font-bold text-white/40 mb-1">Account Number</p>
                                    <p className="font-bold font-mono">1234 5678 9012 34</p>
                                    <Copy size={14} className="absolute top-3 right-3 text-white/30 hover:text-white cursor-pointer transition-colors" onClick={() => copyToClipboard('1234 5678 9012 34')} />
                                </div>
                            </div>
                        </div>

                        {/* In-Kind */}
                        <div className="glass-card p-8 flex flex-col items-center text-center relative overflow-hidden">
                            <div className="absolute top-0 left-0 w-full h-1 bg-purple-500"></div>
                            <Building className="mb-6 text-white/80" size={40} />
                            <h3 className="font-bold uppercase text-lg mb-2">In-Kind Support</h3>
                            <p className="text-sm text-white/50 mb-6">
                                We accept equipment, kits, water, and transport services.
                            </p>
                            <a href="mailto:support@vipawafc.com" className="btn-secondary w-full text-sm">
                                Contact to Arrange
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Sponsorship Section */}
            <section id="sponsorship" className="container-custom py-32 scroll-mt-20">
                <div className="grid lg:grid-cols-2 gap-16">
                    <div>
                        <h2 className="text-4xl font-black uppercase mb-6 flex items-center gap-4">
                            <Handshake className="text-gold" size={32} /> Corporate Sponsorship
                        </h2>
                        <p className="text-white/60 mb-8 leading-relaxed">
                            Align your brand with Nairobi's fastest-growing women's football brand.
                            We offer jersey branding, digital media exposure, and community activation opportunities.
                        </p>
                        <ul className="space-y-4">
                            <li className="flex items-center gap-3">
                                <span className="w-8 h-8 rounded-full bg-gold/10 flex items-center justify-center text-gold font-bold">1</span>
                                <span className="font-bold uppercase text-sm">Front of Shirt Branding</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="w-8 h-8 rounded-full bg-gold/10 flex items-center justify-center text-gold font-bold">2</span>
                                <span className="font-bold uppercase text-sm">Social Media Campaigns</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="w-8 h-8 rounded-full bg-gold/10 flex items-center justify-center text-gold font-bold">3</span>
                                <span className="font-bold uppercase text-sm">Match Day Banners</span>
                            </li>
                        </ul>
                    </div>

                    <div className="bg-gradient-to-br from-white/10 to-transparent border border-white/10 p-10 rounded-3xl">
                        <h3 className="text-xl font-bold uppercase mb-6">Partner Inquiry</h3>
                        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                            <div className="space-y-2">
                                <label className="text-xs uppercase font-bold tracking-widest text-white/50">Company Name</label>
                                <input type="text" className="w-full bg-black/40 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-gold transition-colors" placeholder="Brand Ltd" />
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <label className="text-xs uppercase font-bold tracking-widest text-white/50">Contact Person</label>
                                    <input type="text" className="w-full bg-black/40 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-gold transition-colors" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs uppercase font-bold tracking-widest text-white/50">Email</label>
                                    <input type="email" className="w-full bg-black/40 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-gold transition-colors" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs uppercase font-bold tracking-widest text-white/50">Partnership Interest</label>
                                <select className="w-full bg-black/40 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-gold transition-colors">
                                    <option>Apparel Sponsorship (Kits)</option>
                                    <option>Event/Match Day Sponsor</option>
                                    <option>General Corporate Partner</option>
                                </select>
                            </div>
                            <button className="w-full py-4 bg-gold text-black font-bold uppercase tracking-wider rounded-lg hover:bg-white transition-colors">
                                Submit Proposal
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default SupportContent;
