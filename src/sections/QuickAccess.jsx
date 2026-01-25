'use client';

import { useLayoutEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Ticket } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const QuickAccess = () => {
    const sectionRef = useRef(null);
    const titleRef = useRef(null);
    const cardsRef = useRef(null);

    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        const ctx = gsap.context(() => {
            // Animate Title
            gsap.from(titleRef.current, {
                scrollTrigger: {
                    trigger: titleRef.current,
                    start: "top 80%",
                },
                y: 50,
                opacity: 0,
                duration: 1,
                ease: "power3.out"
            });

            // Animate Cards Stagger
            const cards = cardsRef.current.children;
            gsap.from(cards, {
                scrollTrigger: {
                    trigger: cardsRef.current,
                    start: "top 75%",
                },
                y: 100,
                opacity: 0,
                duration: 0.8,
                stagger: 0.2,
                ease: "back.out(1.7)"
            });

        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="py-20">
            <div className="container-custom">
                {/* Title (Optional, added for reveal demo) */}
                <div ref={titleRef} className="mb-12 text-center">
                    <span className="section-tag">Explore</span>
                    <h2 className="section-title">Club Hub</h2>
                </div>

                <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <Link href="/club" className="group relative overflow-hidden rounded-3xl aspect-[4/3]">
                        <Image
                            src="/images/gallery/gallery-5.jpeg"
                            alt="Squad"
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                            sizes="(max-width: 768px) 100vw, 33vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent p-8 flex flex-col justify-end">
                            <h3 className="text-3xl font-black uppercase mb-2">The Squad</h3>
                            <p className="text-white/60 text-sm">Meet the 2026 First Team</p>
                        </div>
                    </Link>

                    <Link href="/matches" className="group relative overflow-hidden rounded-3xl aspect-[4/3]">
                        <Image
                            src="/images/merchandise/kits-collection.jpeg"
                            alt="Shop"
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                            sizes="(max-width: 768px) 100vw, 33vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent p-8 flex flex-col justify-end">
                            <h3 className="text-3xl font-black uppercase mb-2">New Kits</h3>
                            <p className="text-white/60 text-sm">Shop the 25/26 Collection</p>
                        </div>
                    </Link>

                    <Link href="/support" className="group relative overflow-hidden rounded-3xl aspect-[4/3] bg-accent-blue/10 border border-white/5 flex items-center justify-center">
                        <div className="text-center">
                            <div className="w-16 h-16 rounded-full bg-accent-blue flex items-center justify-center mx-auto mb-6 shadow-glow-blue group-hover:scale-110 transition-transform">
                                <Ticket size={24} />
                            </div>
                            <h3 className="text-3xl font-black uppercase mb-2">Join Us</h3>
                            <p className="text-white/60 text-sm">Become a Member</p>
                        </div>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default QuickAccess;
