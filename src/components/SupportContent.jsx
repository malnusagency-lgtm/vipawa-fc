'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Ticket, Heart, Handshake, Check, Copy, Award, Star, Medal, Users } from 'lucide-react';
import Image from 'next/image';

const SupportContent = () => {
    const [activePlan, setActivePlan] = useState('fan');
    const [copied, setCopied] = useState('');

    const copyToClipboard = (text, label) => {
        navigator.clipboard.writeText(text);
        setCopied(label);
        setTimeout(() => setCopied(''), 2000);
    };

    const scrollToSection = (id) => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    };

    const sponsorTiers = [
        { icon: Award, name: 'Gold Sponsor', price: 'KES 50,000+', color: 'from-gold to-gold-light', perks: ['Front Jersey Branding', 'All Social Media Features', 'VIP Match Day Access', 'Quarterly Reports'] },
        { icon: Star, name: 'Silver Sponsor', price: 'KES 20,000+', color: 'from-gray-300 to-gray-400', perks: ['Sleeve Branding', 'Social Media Mentions', 'Match Day Access'] },
        { icon: Medal, name: 'Bronze Sponsor', price: 'KES 5,000+', color: 'from-amber-700 to-amber-600', perks: ['Website Logo Placement', 'Social Media Mention'] },
        { icon: Users, name: 'Friend of the Team', price: 'Any Amount', color: 'from-accent-blue to-accent-blue-glow', perks: ['Official Thank You', 'Updates & Reports'] },
    ];

    return (
        <div className="pt-24 sm:pt-32 pb-16 sm:pb-20 min-h-screen">
            {/* Hero */}
            <div className="container-custom text-center mb-16 sm:mb-20">
                <span className="section-tag">Get Involved</span>
                <h1 className="section-title">Support The Army</h1>
                <p className="text-white/80 max-w-2xl mx-auto text-fluid-base font-medium">
                    Join the movement. Whether through membership, donation, or sponsorship — your support drives Vipawa Ladies CF forward.
                </p>
            </div>

            {/* Quick Navigation */}
            <div className="container-custom grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-24 sm:mb-32">
                {[
                    { icon: Ticket, title: 'Membership', desc: 'Join the official fan club', action: 'Join Now', scroll: 'membership' },
                    { icon: Heart, title: 'Donate', desc: 'Send financial support', action: 'Donate Now', scroll: 'donate' },
                    { icon: Handshake, title: 'Sponsor', desc: 'Become a sponsor', action: 'Sponsor Us', scroll: 'sponsorship' },
                ].map((item, idx) => (
                    <motion.button
                        key={idx}
                        onClick={() => scrollToSection(item.scroll)}
                        whileHover={{ y: -4 }}
                        className="glass-card p-6 sm:p-8 text-center hover:border-gold/20 transition-all duration-300 cursor-pointer group"
                        aria-label={`Go to ${item.title} section`}
                    >
                        <div className="w-14 h-14 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-5 text-gold group-hover:scale-110 group-hover:bg-gold/20 group-hover:shadow-glow-gold transition-all duration-500">
                            <item.icon size={24} />
                        </div>
                        <h3 className="text-fluid-lg font-bold uppercase mb-2">{item.title}</h3>
                        <p className="text-white/70 text-fluid-sm mb-5 font-medium">{item.desc}</p>
                        <span className="btn-gold !py-2.5 !px-6 text-xs">{item.action}</span>
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
                            Become an official member of Vipawa Ladies CF. Membership funds directly support player kits, travel, and meals.
                        </p>
                        <div className="space-y-4 mb-8">
                            {[
                                { id: 'fan', name: 'Fan Member', price: 'KES 500', period: '/yr', perks: ['Official Membership Card', '10% Off Merchandise'] },
                                { id: 'gold', name: 'Gold Member', price: 'KES 2,000', period: '/yr', perks: ['All Fan Benefits', 'Voting Rights (AGM)', 'Free Home Match Entry'] },
                            ].map((plan) => (
                                <button key={plan.id} onClick={() => setActivePlan(plan.id)} className={`w-full p-5 sm:p-6 rounded-2xl border text-left cursor-pointer transition-all duration-300 ${activePlan === plan.id ? 'border-gold bg-gold/[0.06] shadow-glow-gold/20' : 'border-white/[0.06] bg-white/[0.02] hover:border-white/10'}`}>
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

            {/* Sponsorship Tiers */}
            <section id="sponsorship" className="section-padding scroll-mt-20 relative overflow-hidden" aria-labelledby="sponsor-heading">
                {/* Fixed Background Layer */}
                <div className="absolute inset-0 z-0 overflow-hidden" style={{ clipPath: 'inset(0 0 0 0)' }}>
                    <div className="fixed inset-0 w-full h-full will-change-transform" style={{ transform: 'translateZ(0)' }}>
                        <Image 
                            src="/images/backgrounds/join-us-background-image.jpeg" 
                            alt="Join Us" 
                            fill 
                            className="object-cover" 
                            sizes="100vw"
                            quality={75}
                        />
                    </div>
                </div>
                <div className="absolute inset-0 bg-primary/90 z-[1]" />

                <div className="container-custom relative z-10">
                    <div className="text-center mb-12">
                        <div className="w-14 h-14 rounded-full bg-gold/10 text-gold flex items-center justify-center mx-auto mb-5 group-hover:shadow-glow-gold transition-all duration-500"><Handshake size={26} /></div>
                        <h2 id="sponsor-heading" className="text-fluid-3xl font-black uppercase mb-4">Become a Sponsor</h2>
                        <p className="text-white/40 max-w-xl mx-auto text-fluid-sm">Support the team at different levels. Every contribution drives our mission forward.</p>
                    </div>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
                        {sponsorTiers.map((tier, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className={`glass-card p-6 flex flex-col text-center relative overflow-hidden group hover:translate-y-[-4px] hover:shadow-elevated transition-all duration-500 ${idx === 0 ? 'border-gold/30 bg-gold/[0.04]' : ''}`}
                            >
                                <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${tier.color}`} />
                                <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${tier.color} flex items-center justify-center mx-auto mb-4 text-primary`}>
                                    <tier.icon size={20} />
                                </div>
                                <h3 className="font-bold uppercase text-fluid-base mb-1">{tier.name}</h3>
                                <p className="text-gold font-black text-fluid-xl mb-4">{tier.price}</p>
                                <ul className="space-y-2 mb-6 text-left flex-1">
                                    {tier.perks.map((p, i) => (
                                        <li key={i} className="flex items-center gap-2 text-fluid-sm text-white/50"><Check size={13} className="text-gold shrink-0" /> {p}</li>
                                    ))}
                                </ul>
                                <a href="mailto:vipawaladiescfk@gmail.com" className={`btn-secondary w-full text-xs !py-2.5 ${idx === 0 ? '!bg-gold/20 !border-gold/30 hover:!bg-gold hover:!text-primary' : ''}`}>
                                    Get Started
                                </a>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Donation */}
            <section id="donate" className="container-custom section-padding scroll-mt-20" aria-labelledby="donate-heading">
                <div className="max-w-3xl mx-auto">
                    <div className="text-center mb-12">
                        <div className="w-14 h-14 rounded-full bg-accent-red/10 text-accent-red flex items-center justify-center mx-auto mb-5"><Heart size={26} /></div>
                        <h2 id="donate-heading" className="text-fluid-3xl font-black uppercase mb-4">Donate to Support</h2>
                        <p className="text-white/40 max-w-xl mx-auto text-fluid-sm">You can send financial support using the payment details below. 100% goes directly to the team.</p>
                    </div>

                    <div className="glass-card-elevated p-8 sm:p-10 relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-green-500 via-green-400 to-green-600" />
                        <div className="flex items-center justify-center gap-3 mb-8">
                            <div className="bg-white px-4 py-2 rounded-lg">
                                <span className="text-green-600 font-black text-2xl tracking-tighter">M-PESA</span>
                            </div>
                        </div>

                        <div className="grid sm:grid-cols-2 gap-6 mb-8">
                            <div className="bg-white/[0.04] rounded-xl p-5 text-center group hover:bg-white/[0.06] transition-colors">
                                <p className="text-fluid-xs uppercase font-bold text-white/30 mb-2 tracking-[0.2em]">Paybill Number</p>
                                <div className="flex items-center justify-center gap-3">
                                    <span className="text-3xl sm:text-4xl font-black font-mono text-gold">522533</span>
                                    <button onClick={() => copyToClipboard('522533', 'paybill')} className={`p-2 rounded-lg transition-all ${copied === 'paybill' ? 'bg-green-500/20 text-green-400' : 'bg-white/[0.06] text-white/30 hover:text-white hover:bg-white/10'}`} aria-label="Copy paybill number">
                                        <Copy size={16} />
                                    </button>
                                </div>
                                {copied === 'paybill' && <p className="text-green-400 text-fluid-xs mt-2 font-bold">Copied!</p>}
                            </div>

                            <div className="bg-white/[0.04] rounded-xl p-5 text-center group hover:bg-white/[0.06] transition-colors">
                                <p className="text-fluid-xs uppercase font-bold text-white/30 mb-2 tracking-[0.2em]">Account Number</p>
                                <div className="flex items-center justify-center gap-3">
                                    <span className="text-3xl sm:text-4xl font-black font-mono">8012739</span>
                                    <button onClick={() => copyToClipboard('8012739', 'account')} className={`p-2 rounded-lg transition-all ${copied === 'account' ? 'bg-green-500/20 text-green-400' : 'bg-white/[0.06] text-white/30 hover:text-white hover:bg-white/10'}`} aria-label="Copy account number">
                                        <Copy size={16} />
                                    </button>
                                </div>
                                {copied === 'account' && <p className="text-green-400 text-fluid-xs mt-2 font-bold">Copied!</p>}
                            </div>
                        </div>

                        <div className="text-center pt-6 border-t border-white/[0.06]">
                            <p className="text-white/30 text-fluid-sm mb-1">Every shilling counts. Thank you for supporting the team! 🙏</p>
                            <p className="text-white/20 text-fluid-xs">For inquiries: <a href="mailto:vipawaladiescfk@gmail.com" className="text-gold hover:underline">vipawaladiescfk@gmail.com</a></p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default SupportContent;
