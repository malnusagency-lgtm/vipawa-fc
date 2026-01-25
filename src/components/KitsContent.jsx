'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const KitsContent = () => {
    const kits = [
        { name: 'Home Kit', color: 'Red', image: '/images/merchandise/kit-red.jpeg' },
        { name: 'Away Kit', color: 'Blue', image: '/images/merchandise/kit-blue.jpeg' },
        { name: 'Third Kit', color: 'Black', image: '/images/merchandise/kit-black.jpeg' },
    ];

    return (
        <div className="pt-32 pb-20 min-h-screen">
            <div className="container-custom text-center mb-16">
                <span className="section-tag">25/26 Collection</span>
                <h1 className="section-title">Official Kits</h1>
                <p className="text-white/50 max-w-xl mx-auto">
                    Rep the colors. Our new season kits are designed for performance and style.
                </p>
            </div>

            <div className="container-custom grid md:grid-cols-3 gap-8">
                {kits.map((kit, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                        className="glass-card overflow-hidden group"
                    >
                        <div className="aspect-[3/4] relative">
                            <Image
                                src={kit.image}
                                alt={kit.name}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                                sizes="(max-width: 768px) 100vw, 33vw"
                            />
                        </div>
                        <div className="p-6 text-center">
                            <h3 className="text-xl font-bold uppercase mb-1">{kit.name}</h3>
                            <p className="text-accent-blue font-bold tracking-widest text-xs uppercase">{kit.color}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default KitsContent;
