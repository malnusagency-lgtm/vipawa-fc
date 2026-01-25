'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Hero = () => {
    return (
        <section className="relative h-[85vh] flex flex-col justify-center px-6 overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 z-[-1]">
                <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/60 to-transparent z-10" />
                <Image
                    src="/images/gallery/gallery-3.jpeg"
                    alt="Hero Background"
                    fill
                    priority
                    className="object-cover opacity-60 scale-105 animate-pulse-slow"
                    sizes="100vw"
                />
            </div>

            <div className="container-custom relative z-20">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="text-5xl sm:text-7xl md:text-9xl font-black uppercase tracking-tighter leading-[0.9] mb-6">
                        Vipawa <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-blue via-white to-accent-blue animate-gradient-x">
                            Ladies FC
                        </span>
                    </h1>
                    <p className="text-xl md:text-2xl text-white/60 font-heading max-w-lg mb-10">
                        Talent into Power. <br /> Since 2021.
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
            </div>

            {/* Floating Next Match Pulse */}
            <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1, duration: 0.8 }}
                className="absolute bottom-10 right-6 md:right-20 glass-card p-6 border-l-4 border-l-accent-blue max-w-[300px]"
            >
                <div className="flex items-center gap-2 mb-2">
                    <span className="w-2 h-2 rounded-full bg-accent-red animate-ping" />
                    <span className="text-[10px] font-bold uppercase tracking-widest text-accent-red">Next Match</span>
                </div>
                <div className="flex justify-between items-center gap-4">
                    <span className="font-bold uppercase text-lg">Vipawa</span>
                    <span className="text-white/30 text-xs">VS</span>
                    <span className="font-bold uppercase text-lg text-right">Queens</span>
                </div>
                <p className="text-xs text-white/50 mt-2 font-heading">Jan 25 • 3:00 PM • Ngong Road</p>
            </motion.div>
        </section>
    );
};

export default Hero;
