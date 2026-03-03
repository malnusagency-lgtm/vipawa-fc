'use client';

import { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { galleryImages } from '@/data/clubData';

const GalleryContent = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [visibleCount, setVisibleCount] = useState(24);

    const openLightbox = useCallback((image) => {
        setSelectedImage(image);
        document.body.style.overflow = 'hidden';
    }, []);

    const closeLightbox = useCallback(() => {
        setSelectedImage(null);
        document.body.style.overflow = 'unset';
    }, []);

    const navigateImage = useCallback((direction) => {
        if (!selectedImage) return;
        const currentIdx = galleryImages.findIndex(img => img.id === selectedImage.id);
        const maxIdx = Math.min(visibleCount, galleryImages.length) - 1;
        let newIdx;
        if (direction === 'next') {
            newIdx = currentIdx >= maxIdx ? 0 : currentIdx + 1;
        } else {
            newIdx = currentIdx <= 0 ? maxIdx : currentIdx - 1;
        }
        setSelectedImage(galleryImages[newIdx]);
    }, [selectedImage, visibleCount]);

    const loadMore = () => {
        setVisibleCount(prev => Math.min(prev + 24, galleryImages.length));
    };

    const displayed = galleryImages.slice(0, visibleCount);

    return (
        <div className="pt-32 pb-20 min-h-screen">
            <div className="container-custom">
                {/* Header */}
                <div className="text-center mb-16">
                    <span className="section-tag">Photo Gallery</span>
                    <h1 className="text-4xl md:text-7xl font-black uppercase mb-6">Gallery</h1>
                    <p className="text-white/50 max-w-2xl mx-auto px-4 text-sm md:text-base">
                        Relive the moments — from match days to community events. The heart of Vipawa captured in pictures.
                    </p>
                    <div className="mt-4 text-xs text-white/30 uppercase tracking-widest">
                        {galleryImages.length} Photos
                    </div>
                </div>

                {/* Gallery Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-4">
                    {displayed.map((image, idx) => (
                        <motion.div
                            key={image.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: Math.min(idx * 0.03, 0.5) }}
                            className={`relative cursor-pointer group overflow-hidden rounded-xl bg-white/5 ${idx % 7 === 0 ? 'row-span-2 aspect-[3/4]' : 'aspect-square'
                                }`}
                            onClick={() => openLightbox(image)}
                        >
                            <Image
                                src={image.src}
                                alt={image.alt}
                                fill
                                className="object-cover transition-all duration-500 group-hover:scale-110"
                                sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 20vw"
                                loading={idx < 10 ? 'eager' : 'lazy'}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            <div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <span className="text-xs font-bold uppercase tracking-widest text-white/70">#{image.id}</span>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Load More */}
                {visibleCount < galleryImages.length && (
                    <div className="flex justify-center mt-12">
                        <button
                            onClick={loadMore}
                            className="px-10 py-4 bg-white/5 hover:bg-accent-blue/20 border border-white/10 hover:border-accent-blue/50 rounded-full font-bold uppercase text-sm tracking-widest transition-all duration-300"
                        >
                            Load More ({galleryImages.length - visibleCount} remaining)
                        </button>
                    </div>
                )}
            </div>

            {/* Lightbox Overlay */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/95 z-[2000] flex items-center justify-center"
                        onClick={closeLightbox}
                    >
                        {/* Close Button */}
                        <button
                            className="absolute top-6 right-6 z-[2010] p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
                            onClick={closeLightbox}
                        >
                            <X size={24} />
                        </button>

                        {/* Nav Buttons */}
                        <button
                            className="absolute left-4 md:left-8 z-[2010] p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
                            onClick={(e) => { e.stopPropagation(); navigateImage('prev'); }}
                        >
                            <ChevronLeft size={28} />
                        </button>
                        <button
                            className="absolute right-4 md:right-8 z-[2010] p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
                            onClick={(e) => { e.stopPropagation(); navigateImage('next'); }}
                        >
                            <ChevronRight size={28} />
                        </button>

                        {/* Image */}
                        <motion.div
                            key={selectedImage.id}
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                            className="relative w-[90vw] h-[80vh] max-w-5xl"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <Image
                                src={selectedImage.src}
                                alt={selectedImage.alt}
                                fill
                                className="object-contain"
                                sizes="90vw"
                                priority
                            />
                        </motion.div>

                        {/* Image Counter */}
                        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/50 text-sm font-bold uppercase tracking-widest">
                            {selectedImage.id} / {galleryImages.length}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default GalleryContent;
