'use client';

import { useState, useCallback, useEffect } from 'react';
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
        const newIdx = direction === 'next'
            ? (currentIdx >= maxIdx ? 0 : currentIdx + 1)
            : (currentIdx <= 0 ? maxIdx : currentIdx - 1);
        setSelectedImage(galleryImages[newIdx]);
    }, [selectedImage, visibleCount]);

    useEffect(() => {
        if (!selectedImage) return;
        const handleKey = (e) => {
            if (e.key === 'Escape') closeLightbox();
            if (e.key === 'ArrowRight') navigateImage('next');
            if (e.key === 'ArrowLeft') navigateImage('prev');
        };
        window.addEventListener('keydown', handleKey);
        return () => window.removeEventListener('keydown', handleKey);
    }, [selectedImage, closeLightbox, navigateImage]);

    const loadMore = () => setVisibleCount(prev => Math.min(prev + 24, galleryImages.length));
    const displayed = galleryImages.slice(0, visibleCount);

    return (
        <div className="pt-24 sm:pt-32 pb-16 sm:pb-20 min-h-screen">
            <div className="container-custom">
                <div className="text-center mb-10 sm:mb-14">
                    <span className="section-tag">Photo Gallery</span>
                    <h1 className="section-title">Gallery</h1>
                    <p className="text-white/40 max-w-2xl mx-auto text-fluid-sm">
                        Relive the moments — from match days to community events.
                    </p>
                    <div className="mt-2 text-fluid-xs text-white/20 uppercase tracking-[0.2em]">
                        {galleryImages.length} Photos
                    </div>
                </div>

                {/* Tight, uniform grid — no masonry gaps */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-1.5 sm:gap-2">
                    {displayed.map((image, idx) => (
                        <motion.div
                            key={image.id}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: Math.min(idx * 0.015, 0.3) }}
                            className="relative cursor-pointer group overflow-hidden rounded-lg bg-surface aspect-square"
                            onClick={() => openLightbox(image)}
                            role="button"
                            tabIndex={0}
                            aria-label={`View photo ${image.id}`}
                            onKeyDown={(e) => e.key === 'Enter' && openLightbox(image)}
                        >
                            <Image
                                src={image.src}
                                alt={image.alt}
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-110"
                                sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 20vw"
                                loading={idx < 10 ? 'eager' : 'lazy'}
                            />
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                                <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity text-fluid-xs font-bold uppercase tracking-wider">View</span>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {visibleCount < galleryImages.length && (
                    <div className="flex justify-center mt-10">
                        <button onClick={loadMore} className="btn-secondary">
                            Load More ({galleryImages.length - visibleCount} remaining)
                        </button>
                    </div>
                )}
            </div>

            {/* Lightbox */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/95 z-[2000] flex items-center justify-center"
                        onClick={closeLightbox}
                        role="dialog"
                        aria-label="Image lightbox"
                        aria-modal="true"
                    >
                        <button className="absolute top-6 right-6 z-[2010] p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors" onClick={closeLightbox} aria-label="Close lightbox">
                            <X size={24} />
                        </button>
                        <button className="absolute left-3 sm:left-6 z-[2010] p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors" onClick={(e) => { e.stopPropagation(); navigateImage('prev'); }} aria-label="Previous image">
                            <ChevronLeft size={24} />
                        </button>
                        <button className="absolute right-3 sm:right-6 z-[2010] p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors" onClick={(e) => { e.stopPropagation(); navigateImage('next'); }} aria-label="Next image">
                            <ChevronRight size={24} />
                        </button>
                        <motion.div key={selectedImage.id} initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.95, opacity: 0 }} transition={{ duration: 0.2 }} className="relative w-[90vw] h-[80vh] max-w-5xl" onClick={(e) => e.stopPropagation()}>
                            <Image src={selectedImage.src} alt={selectedImage.alt} fill className="object-contain" sizes="90vw" priority />
                        </motion.div>
                        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/40 text-fluid-xs font-bold uppercase tracking-[0.2em]">
                            {selectedImage.id} / {galleryImages.length}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default GalleryContent;
