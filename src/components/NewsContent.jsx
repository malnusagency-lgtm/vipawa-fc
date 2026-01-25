'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Calendar, Tag } from 'lucide-react';
import { news } from '@/data/clubData';

const NewsContent = () => {
    return (
        <div className="pt-32 pb-20 min-h-screen">
            <div className="container-custom mb-12">
                <span className="section-tag">Media Center</span>
                <h1 className="text-4xl md:text-7xl font-black uppercase mb-6">Latest News</h1>
            </div>

            <section className="container-custom">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {news.map((item, idx) => (
                        <motion.article
                            key={item.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="group glass-card overflow-hidden hover:border-accent-blue/30 transition-colors"
                        >
                            <div className="relative h-48 overflow-hidden">
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    sizes="(max-width: 768px) 100vw, 33vw"
                                />
                                <div className="absolute top-4 left-4 bg-accent-blue text-white text-[10px] font-bold uppercase px-3 py-1 rounded-full">
                                    {item.category}
                                </div>
                            </div>

                            <div className="p-6">
                                <div className="flex items-center gap-2 text-white/40 text-xs mb-3 font-bold uppercase tracking-wider">
                                    <Calendar size={14} />
                                    <span>{item.date}</span>
                                </div>
                                <h3 className="text-xl font-bold mb-3 leading-tight group-hover:text-accent-blue-light transition-colors">
                                    {item.title}
                                </h3>
                                <p className="text-white/60 text-sm line-clamp-3 mb-6">
                                    {item.summary}
                                </p>
                                <button className="text-xs font-bold uppercase tracking-widest text-white/50 group-hover:text-white transition-colors border-b border-transparent group-hover:border-white pb-0.5">
                                    Read Article
                                </button>
                            </div>
                        </motion.article>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default NewsContent;
