'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState, useRef } from 'react';

const CountdownUnit = ({ value, label }) => (
    <div className="text-center">
        <div className="text-2xl sm:text-3xl md:text-4xl font-black font-heading tabular-nums">{String(value).padStart(2, '0')}</div>
        <div className="text-[9px] sm:text-[10px] uppercase tracking-[0.2em] text-white/40 mt-1">{label}</div>
    </div>
);

const StatCounter = ({ end, label, suffix = '' }) => {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const counted = useRef(false);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting && !counted.current) {
                counted.current = true;
                let start = 0;
                const duration = 2000;
                const step = (timestamp) => {
                    if (!start) start = timestamp;
                    const progress = Math.min((timestamp - start) / duration, 1);
                    const eased = 1 - Math.pow(1 - progress, 3);
                    setCount(Math.floor(eased * end));
                    if (progress < 1) requestAnimationFrame(step);
                };
                requestAnimationFrame(step);
            }
        }, { threshold: 0.5 });
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, [end]);

    return (
        <div ref={ref} className="text-center">
            <div className="text-fluid-3xl font-black font-heading text-gold">{count}{suffix}</div>
            <div className="text-fluid-xs uppercase tracking-[0.2em] text-white/40 mt-1">{label}</div>
        </div>
    );
};

const Hero = () => {
    // Countdown to next match: Jan 25, 2026 15:00 EAT
    const [countdown, setCountdown] = useState({ days: 0, hours: 0, mins: 0, secs: 0 });

    useEffect(() => {
        const target = new Date('2026-01-25T15:00:00+03:00').getTime();
        const tick = () => {
            const now = Date.now();
            const diff = Math.max(0, target - now);
            setCountdown({
                days: Math.floor(diff / 86400000),
                hours: Math.floor((diff % 86400000) / 3600000),
                mins: Math.floor((diff % 3600000) / 60000),
                secs: Math.floor((diff % 60000) / 1000),
            });
        };
        tick();
        const id = setInterval(tick, 1000);
        return () => clearInterval(id);
    }, []);

    return (
        <section className="relative min-h-[100dvh] flex flex-col justify-center overflow-hidden noise" aria-label="Hero">
            {/* Background */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/40 to-transparent z-10" />
                <div className="absolute inset-0 bg-gradient-to-r from-primary/60 to-transparent z-10" />
                <Image
                    src="/images/gallery/gallery-3.jpeg"
                    alt=""
                    fill
                    priority
                    className="object-cover opacity-90"
                    sizes="100vw"
                />
            </div>

            {/* Content */}
            <div className="container-custom relative z-20 py-32">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                >
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="section-tag !mb-6"
                    >
                        Est. 2021 • Nairobi, Kenya
                    </motion.span>

                    <h1 className="text-fluid-hero font-black uppercase tracking-tighter leading-[0.9] mb-6">
                        Vipawa <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold via-gold-light to-gold">
                            Ladies CF
                        </span>
                    </h1>

                    <p className="text-fluid-lg text-white/50 font-heading max-w-lg mb-10">
                        Talent into Power. <br />Nurturing excellence since 2021.
                    </p>

                    <div className="flex flex-wrap gap-4">
                        <Link href="/club" className="btn-primary group">
                            The Club <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <Link href="/matches" className="btn-secondary">
                            Fixtures
                        </Link>
                    </div>
                </motion.div>

                {/* Stats Row */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 0.8 }}
                    className="mt-16 sm:mt-20 flex gap-8 sm:gap-12 md:gap-16"
                >
                    <StatCounter end={18} label="Players" suffix="+" />
                    <StatCounter end={26} label="Fixtures" />
                    <StatCounter end={4} label="Years" suffix="+" />
                </motion.div>

                {/* Info Strip */}
                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1, duration: 0.6 }}
                    className="mt-10 sm:mt-14 grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-xl"
                >
                    <div className="glass-card p-4 flex items-start gap-3">
                        <span className="text-gold text-lg">🕐</span>
                        <div>
                            <h4 className="font-bold text-fluid-xs uppercase tracking-wider mb-1">Training Hours</h4>
                            <p className="text-white/40 text-fluid-xs">Mon–Fri: 8:00 AM</p>
                            <p className="text-white/40 text-fluid-xs">Weekends: 9:00 AM – 6:00 PM</p>
                        </div>
                    </div>
                    <div className="glass-card p-4 flex items-start gap-3">
                        <span className="text-gold text-lg">📍</span>
                        <div>
                            <h4 className="font-bold text-fluid-xs uppercase tracking-wider mb-1">Our Grounds</h4>
                            <p className="text-white/40 text-fluid-xs">NCC – Ngong Road</p>
                            <p className="text-white/40 text-fluid-xs">Moi Girls' School Complex</p>
                            <p className="text-white/40 text-fluid-xs">Kilimani Primary Grounds</p>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Floating Next Match Card */}
            <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.2, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="absolute bottom-8 right-4 sm:right-8 md:right-16 glass-card-elevated p-5 sm:p-6 max-w-[300px] z-20"
            >
                <div className="flex items-center gap-2 mb-3">
                    <span className="w-2 h-2 rounded-full bg-accent-red animate-ping" />
                    <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-accent-red">Next Match</span>
                </div>
                <div className="flex justify-between items-center gap-4 mb-4">
                    <span className="font-black uppercase text-fluid-base">Vipawa</span>
                    <span className="text-white/20 text-xs font-heading">VS</span>
                    <span className="font-black uppercase text-fluid-base text-right">Queens</span>
                </div>
                {/* Countdown */}
                <div className="grid grid-cols-4 gap-2 pt-3 border-t border-white/[0.06]">
                    <CountdownUnit value={countdown.days} label="Days" />
                    <CountdownUnit value={countdown.hours} label="Hrs" />
                    <CountdownUnit value={countdown.mins} label="Min" />
                    <CountdownUnit value={countdown.secs} label="Sec" />
                </div>
                <p className="text-[10px] text-white/30 mt-3 text-center tracking-wider">Jan 25 • 3:00 PM • Ngong Road</p>
            </motion.div>
        </section>
    );
};

export default Hero;
