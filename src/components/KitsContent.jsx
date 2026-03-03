'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const KitsContent = () => {
    const kits = [
        { name: 'Home Kit', color: 'Red', image: '/images/merchandise/kit-red.jpeg' },
        { name: 'Away Kit', color: 'Blue', image: '/images/merchandise/kit-blue.jpeg' },
        { name: 'Third Kit', color: 'Black', image: '/images/merchandise/kit-black.jpeg' },
    ];

    return (
        <div className="pt-24 sm:pt-32 pb-16 sm:pb-20 min-h-screen">
            <div className="container-custom text-center mb-12 sm:mb-16">
                <span className="section-tag">25/26 Collection</span>
                <h1 className="section-title">Official Kits</h1>
                <p className="text-white/40 max-w-xl mx-auto text-fluid-sm">
                    Rep the colors. Our new season kits are designed for performance and style.
                </p>
            </div>

            <div className="container-custom grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {kits.map((kit, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                        className="glass-card overflow-hidden group hover:translate-y-[-4px] hover:shadow-elevated transition-all duration-500"
                    >
                        <div className="aspect-[3/4] relative overflow-hidden">
                            <Image
                                src={kit.image}
                                alt={`${kit.name} - ${kit.color}`}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                            />
                            {/* Hover Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center pb-8">
                                <Link href="/support" className="btn-gold !py-3 !px-6 text-xs">
                                    Order Now
                                </Link>
                            </div>
                        </div>
                        <div className="p-5 text-center">
                            <h3 className="text-fluid-lg font-bold uppercase mb-1">{kit.name}</h3>
                            <p className="text-gold font-bold tracking-[0.15em] text-fluid-xs uppercase">{kit.color}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default KitsContent;
