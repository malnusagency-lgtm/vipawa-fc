'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Ticket, Heart, Handshake, Check, Copy, CreditCard, Building } from 'lucide-react';

const SupportContent = () => {
    const [activePlan, setActivePlan] = useState('fan');
    const [copied, setCopied] = useState('');

    const copyToClipboard = (text, label) => {
        navigator.clipboard.writeText(text);
        setCopied(label);
        setTimeout(() => setCopied(''), 2000);
    };

    const navItems = [
        { icon: Ticket, title: 'Membership', desc: 'Join the official fan club', action: 'Join Now', scroll: 'membership', accent: 'gold' },
        { icon: Heart, title: 'Donate', desc: 'Support team operations', action: 'Donate Now', scroll: 'donate', accent: 'accent-red' },
        { icon: Handshake, title: 'Partner', desc: 'Corporate sponsorship', action: 'Partner', scroll: 'sponsorship', accent: 'gold' },
    ];

    const scrollToSection = (id) => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className="pt-24 sm:pt-32 pb-16 sm:pb-20 min-h-screen">
            {/* Hero */}
            <div className="container-custom text-center mb-16 sm:mb-20">
                <span className="section-tag">Get Involved</span>
                <h1 className="section-title">Support The Army</h1>
                <p className="text-white/40 max-w-2xl mx-auto text-fluid-base">
                    Join the movement. Whether through membership, donation, or partnership, your support drives Vipawa Ladies FC forward.
                </p>
            </div>

            {/* Quick Navigation */}
            <div className="container-custom grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-24 sm:mb-32">
                {navItems.map((item, idx) => (
                    <motion.button
                        key={idx}
                        onClick={() => scrollToSection(item.scroll)}
                        whileHover={{ y: -4 }}
                        className="glass-card p-6 sm:p-8 text-center hover:border-gold/20 transition-all duration-300 cursor-pointer group text-left sm:text-center"
                        aria-label={`Go to ${item.title} section`}
                    >
                        <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-4 text-gold group-hover:scale-110 group-hover:bg-gold/20 transition-all">
                            <item.icon size={22} />
                        </div>
                        <h3 className="text-fluid-lg font-bold uppercase mb-2">{item.title}</h3>
                        <p className="text-white/40 text-fluid-sm mb-4">{item.desc}</p>
                        <span className="text-fluid-xs font-bold uppercase tracking-[0.15em] border-b border-white/10 pb-0.5 group-hover:border-gold/40 group-hover:text-gold transition-colors">{item.action}</span>
                    </motion.button>
                ))}
            </div>

            {/* Membership */}
            <section id="membership" className="container-custom mb-24 sm:mb-32 scroll-mt-24" aria-labelledby="membership-heading">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
                    <div>
                        <h2 id="membership-heading" className="text-fluid-3xl font-black uppercase mb-6 flex items-center gap-4">
                            <Ticket className="text-gold shrink-0" size={28} /> Official Membership
                        </h2>
                        <p className="text-white/50 mb-8 leading-relaxed text-fluid-sm">
                            Become an official member of Vipawa Ladies FC. Membership funds directly support player kits, travel, and meals.
                        </p>
                        <div className="space-y-4 mb-8">
                            {[
                                { id: 'fan', name: 'Fan Member', price: 'KES 500', period: '/yr', accent: 'gold', perks: ['Official Membership Card', '10% Off Merchandise'] },
                                { id: 'gold', name: 'Gold Member', price: 'KES 2,000', period: '/yr', accent: 'gold', perks: ['All Fan Benefits', 'Voting Rights (AGM)', 'Free Home Match Entry'] },
                            ].map((plan) => (
                                <button key={plan.id} onClick={() => setActivePlan(plan.id)} className={`w-full p-5 sm:p-6 rounded-2xl border text-left cursor-pointer transition-all duration-300 ${activePlan === plan.id ? 'border-gold bg-gold/[0.06]' : 'border-white/[0.06] bg-white/[0.02] hover:border-white/10'}`}>
                                    <div className="flex justify-between items-center mb-3">
                                        <h3 className={`font-bold uppercase text-fluid-base ${activePlan === plan.id ? 'text-gold' : ''}`}>{plan.name}</h3>
                                        <span className="text-gold font-black text-fluid-lg">{plan.price}<span className="text-fluid-xs text-white/40 font-normal">{plan.period}</span></span>
                                    </div>
                                    <ul className="space-y-2">
                                        {plan.perks.map((p, i) => (
                                            <li key={i} className="flex items-center gap-2 text-fluid-sm text-white/60"><Check size={14} className="text-gold shrink-0" /> {p}</li>
                                        ))}
                                    </ul>
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="glass-card-elevated p-6 sm:p-8 border-gold/10">
                        <h3 className="text-fluid-lg font-bold uppercase mb-6">Register Now</h3>
                        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="space-y-2"><label htmlFor="fname" className="text-fluid-xs uppercase font-bold tracking-[0.15em] text-white/40">First Name</label><input id="fname" type="text" className="w-full bg-black/30 border border-white/[0.08] rounded-xl p-3 text-white focus:outline-none focus:border-gold transition-colors text-sm" placeholder="Jane" required /></div>
                                <div className="space-y-2"><label htmlFor="lname" className="text-fluid-xs uppercase font-bold tracking-[0.15em] text-white/40">Last Name</label><input id="lname" type="text" className="w-full bg-black/30 border border-white/[0.08] rounded-xl p-3 text-white focus:outline-none focus:border-gold transition-colors text-sm" placeholder="Doe" required /></div>
                            </div>
                            <div className="space-y-2"><label htmlFor="email" className="text-fluid-xs uppercase font-bold tracking-[0.15em] text-white/40">Email Address</label><input id="email" type="email" className="w-full bg-black/30 border border-white/[0.08] rounded-xl p-3 text-white focus:outline-none focus:border-gold transition-colors text-sm" placeholder="jane@example.com" required /></div>
                            <div className="space-y-2"><label htmlFor="phone" className="text-fluid-xs uppercase font-bold tracking-[0.15em] text-white/40">Phone Number</label><input id="phone" type="tel" className="w-full bg-black/30 border border-white/[0.08] rounded-xl p-3 text-white focus:outline-none focus:border-gold transition-colors text-sm" placeholder="+254 7..." required /></div>
                            <button className="btn-gold w-full mt-2">Proceed to Pay</button>
                            <p className="text-fluid-xs text-center text-white/20 pt-2">Secure payment via M-Pesa or Card</p>
                        </form>
                    </div>
                </div>
            </section>

            {/* Donation */}
            <section id="donate" className="bg-surface/50 section-padding scroll-mt-20 noise relative" aria-labelledby="donate-heading">
                <div className="container-custom relative z-10">
                    <div className="text-center mb-12">
                        <div className="w-12 h-12 rounded-full bg-accent-red/10 text-accent-red flex items-center justify-center mx-auto mb-4"><Heart size={22} /></div>
                        <h2 id="donate-heading" className="text-fluid-3xl font-black uppercase mb-4">Make a Donation</h2>
                        <p className="text-white/40 max-w-xl mx-auto text-fluid-sm">Directly fund specific needs. 100% of your donation goes to the team.</p>
                    </div>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
                        <div className="glass-card p-6 sm:p-8 flex flex-col items-center text-center relative overflow-hidden"><div className="absolute top-0 left-0 w-full h-1 bg-green-500" /><div className="mb-5 bg-white p-2 rounded-lg"><span className="text-green-600 font-black text-xl tracking-tighter">M-PESA</span></div><div className="space-y-1 mb-5"><p className="text-fluid-xs uppercase font-bold text-white/40">Paybill Number</p><div className="text-2xl font-black font-mono flex items-center justify-center gap-3">247247 <Copy size={14} className={`cursor-pointer transition-colors ${copied === 'paybill' ? 'text-green-400' : 'text-white/30 hover:text-white'}`} onClick={() => copyToClipboard('247247', 'paybill')} /></div></div><div className="space-y-1"><p className="text-fluid-xs uppercase font-bold text-white/40">Account Number</p><div className="text-lg font-bold font-mono">0700 123 456</div></div></div>
                        <div className="glass-card p-6 sm:p-8 flex flex-col items-center text-center relative overflow-hidden"><div className="absolute top-0 left-0 w-full h-1 bg-accent-blue" /><CreditCard className="mb-5 text-white/60" size={36} /><div className="space-y-3 w-full"><div className="bg-white/[0.04] rounded-lg p-3"><p className="text-[10px] uppercase font-bold text-white/30 mb-1">Bank Name</p><p className="font-bold text-fluid-sm">Equity Bank</p></div><div className="bg-white/[0.04] rounded-lg p-3 relative"><p className="text-[10px] uppercase font-bold text-white/30 mb-1">Account Number</p><p className="font-bold font-mono text-fluid-sm">1234 5678 9012 34</p><Copy size={13} className={`absolute top-3 right-3 cursor-pointer transition-colors ${copied === 'bank' ? 'text-green-400' : 'text-white/30 hover:text-white'}`} onClick={() => copyToClipboard('1234 5678 9012 34', 'bank')} /></div></div></div>
                        <div className="glass-card p-6 sm:p-8 flex flex-col items-center text-center relative overflow-hidden sm:col-span-2 lg:col-span-1"><div className="absolute top-0 left-0 w-full h-1 bg-purple-500" /><Building className="mb-5 text-white/60" size={36} /><h3 className="font-bold uppercase text-fluid-base mb-2">In-Kind Support</h3><p className="text-fluid-sm text-white/40 mb-5">We accept equipment, kits, water, and transport services.</p><a href="mailto:support@vipawafc.com" className="btn-secondary w-full text-sm">Contact to Arrange</a></div>
                    </div>
                </div>
            </section>

            {/* Sponsorship */}
            <section id="sponsorship" className="container-custom section-padding scroll-mt-20" aria-labelledby="sponsor-heading">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
                    <div>
                        <h2 id="sponsor-heading" className="text-fluid-3xl font-black uppercase mb-6 flex items-center gap-4"><Handshake className="text-gold shrink-0" size={28} /> Corporate Sponsorship</h2>
                        <p className="text-white/50 mb-8 leading-relaxed text-fluid-sm">Align your brand with Nairobi's fastest-growing women's football brand. We offer jersey branding, digital media exposure, and community activation opportunities.</p>
                        <ul className="space-y-4">
                            {['Front of Shirt Branding', 'Social Media Campaigns', 'Match Day Banners'].map((item, i) => (
                                <li key={i} className="flex items-center gap-3"><span className="w-8 h-8 rounded-full bg-gold/10 flex items-center justify-center text-gold font-bold text-sm">{i + 1}</span><span className="font-bold uppercase text-fluid-sm">{item}</span></li>
                            ))}
                        </ul>
                    </div>
                    <div className="glass-card-elevated p-6 sm:p-8 border-gold/10">
                        <h3 className="text-fluid-lg font-bold uppercase mb-6">Partner Inquiry</h3>
                        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                            <div className="space-y-2"><label htmlFor="company" className="text-fluid-xs uppercase font-bold tracking-[0.15em] text-white/40">Company Name</label><input id="company" type="text" className="w-full bg-black/30 border border-white/[0.08] rounded-xl p-3 text-white focus:outline-none focus:border-gold transition-colors text-sm" placeholder="Brand Ltd" /></div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="space-y-2"><label htmlFor="contact" className="text-fluid-xs uppercase font-bold tracking-[0.15em] text-white/40">Contact Person</label><input id="contact" type="text" className="w-full bg-black/30 border border-white/[0.08] rounded-xl p-3 text-white focus:outline-none focus:border-gold transition-colors text-sm" /></div>
                                <div className="space-y-2"><label htmlFor="semail" className="text-fluid-xs uppercase font-bold tracking-[0.15em] text-white/40">Email</label><input id="semail" type="email" className="w-full bg-black/30 border border-white/[0.08] rounded-xl p-3 text-white focus:outline-none focus:border-gold transition-colors text-sm" /></div>
                            </div>
                            <div className="space-y-2"><label htmlFor="interest" className="text-fluid-xs uppercase font-bold tracking-[0.15em] text-white/40">Partnership Interest</label><select id="interest" className="w-full bg-black/30 border border-white/[0.08] rounded-xl p-3 text-white focus:outline-none focus:border-gold transition-colors text-sm"><option>Apparel Sponsorship (Kits)</option><option>Event/Match Day Sponsor</option><option>General Corporate Partner</option></select></div>
                            <button className="btn-gold w-full">Submit Proposal</button>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default SupportContent;
