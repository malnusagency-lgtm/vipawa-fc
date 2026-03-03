'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Calendar } from 'lucide-react';
import { news } from '@/data/clubData';

const NewsContent = () => {
    return (
        <div className="pt-24 sm:pt-32 pb-16 sm:pb-20 min-h-screen">
            <div className="container-custom mb-12">
                <span className="section-tag">Media Center</span>
                <h1 className="section-title">Latest News</h1>
            </div>

            <section className="container-custom" aria-label="News articles">
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {news.map((item, idx) => (
                        <motion.article
                            key={item.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="group glass-card overflow-hidden hover:border-gold/20 hover:translate-y-[-4px] hover:shadow-elevated transition-all duration-500"
                        >
                            <div className="relative h-48 overflow-hidden">
                                <Image src={item.image} alt="" fill className="object-cover transition-transform duration-700 group-hover:scale-110" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" />
                                <div className="absolute top-4 left-4 bg-gold text-primary text-[10px] font-bold uppercase px-3 py-1 rounded-full tracking-wider">{item.category}</div>
                            </div>
                            <div className="p-5 sm:p-6">
                                <div className="flex items-center gap-2 text-white/30 text-fluid-xs mb-3 font-bold uppercase tracking-wider">
                                    <Calendar size={13} aria-hidden="true" /><span>{item.date}</span>
                                </div>
                                <h3 className="text-fluid-lg font-bold mb-3 leading-tight group-hover:text-gold transition-colors">{item.title}</h3>
                                <p className="text-white/50 text-fluid-sm line-clamp-3 mb-5">{item.summary}</p>
                                <span className="text-fluid-xs font-bold uppercase tracking-[0.15em] text-white/40 group-hover:text-gold transition-colors border-b border-transparent group-hover:border-gold/30 pb-0.5">Read Article</span>
                            </div>
                        </motion.article>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default NewsContent;
