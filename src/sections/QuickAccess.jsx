'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { Ticket, Users, Trophy } from 'lucide-react';

const QuickAccess = () => {
    const cards = [
        { href: '/club', image: '/images/backgrounds/the-squad-background-image.jpeg', icon: Users, title: 'The Squad', desc: 'Meet the 2026 First Team' },
        { href: '/kits', image: '/images/merchandise/kits-collection.jpeg', icon: Trophy, title: 'New Kits', desc: 'Shop the 25/26 Collection' },
        { href: '/support', image: '/images/backgrounds/join-us-background-image.jpeg', icon: Ticket, title: 'Join Us', desc: 'Become a Member' },
    ];

    return (
        <section className="section-padding">
            <div className="container-custom">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                    className="mb-12 text-center"
                >
                    <span className="section-tag">Explore</span>
                    <h2 className="section-title">Club Hub</h2>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {cards.map((card, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 60 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.15, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                        >
                            <Link
                                href={card.href}
                                className={`group relative overflow-hidden rounded-2xl transition-all duration-500 hover:translate-y-[-4px] hover:shadow-elevated block ${card.image ? 'aspect-[4/3]' : 'aspect-[4/3] bg-gradient-to-br from-gold/10 to-transparent border border-white/[0.06] flex items-center justify-center'
                                    }`}
                            >
                                {card.image ? (
                                    <>
                                        <Image src={card.image} alt={card.title} fill className="object-cover transition-transform duration-700 group-hover:scale-110" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent group-hover:from-black/50 transition-all duration-500 p-6 sm:p-8 flex flex-col justify-end">
                                            <div className="w-10 h-10 rounded-full bg-gold/30 flex items-center justify-center mb-3 group-hover:bg-gold/40 transition-colors shadow-lg">
                                                <card.icon size={18} className="text-gold" />
                                            </div>
                                            <h3 className="text-fluid-2xl font-black uppercase mb-1 drop-shadow-lg">{card.title}</h3>
                                            <p className="text-white font-bold text-fluid-sm drop-shadow-md">{card.desc}</p>
                                        </div>
                                    </>
                                ) : (
                                    <div className="text-center p-8 relative z-10">
                                        <div className="w-16 h-16 rounded-full bg-gold/20 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:bg-gold/30 group-hover:shadow-glow-gold transition-all duration-500">
                                            <card.icon size={24} className="text-gold" />
                                        </div>
                                        <h3 className="text-fluid-2xl font-black uppercase mb-1">{card.title}</h3>
                                        <p className="text-white/50 text-fluid-sm">{card.desc}</p>
                                    </div>
                                )}
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default QuickAccess;
