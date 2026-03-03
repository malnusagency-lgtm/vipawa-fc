'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu on route change
    useEffect(() => {
        setIsMenuOpen(false);
        document.body.style.overflow = 'unset';
    }, [pathname]);

    // Lock body scroll when menu is open
    useEffect(() => {
        document.body.style.overflow = isMenuOpen ? 'hidden' : 'unset';
        return () => { document.body.style.overflow = 'unset'; };
    }, [isMenuOpen]);

    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'The Club', href: '/club' },
        { name: 'Matches', href: '/matches' },
        { name: 'News', href: '/news' },
        { name: 'Gallery', href: '/gallery' },
        { name: 'Support', href: '/support' },
    ];

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-[1000] transition-all duration-500 ${isScrolled || isMenuOpen
                    ? 'bg-primary/90 backdrop-blur-2xl border-b border-white/[0.06] py-3'
                    : 'bg-transparent py-5'
                }`}
            role="navigation"
            aria-label="Main navigation"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-3 group relative z-[1100]" aria-label="Vipawa Ladies FC Home">
                    <div className="relative h-10 w-10 md:h-11 md:w-11 transition-transform duration-300 group-hover:scale-110">
                        <Image src="/images/logo.png" alt="" fill className="object-contain" sizes="44px" priority />
                    </div>
                    <span className="font-heading font-bold text-lg tracking-tight hidden sm:block">Vipawa Ladies FC</span>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden lg:flex items-center gap-1">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={`relative px-4 py-2 font-heading text-xs font-semibold uppercase tracking-wider transition-colors rounded-full ${pathname === link.href
                                    ? 'text-gold'
                                    : 'text-white/60 hover:text-white hover:bg-white/[0.04]'
                                }`}
                        >
                            {link.name}
                            {pathname === link.href && (
                                <motion.span
                                    layoutId="navIndicator"
                                    className="absolute bottom-0 left-3 right-3 h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent"
                                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                                />
                            )}
                        </Link>
                    ))}
                    <Link href="/support" className="ml-4 px-6 py-2.5 bg-gold text-primary hover:bg-gold-light text-xs font-bold uppercase tracking-widest rounded-full transition-all duration-300 hover:shadow-glow-gold">
                        Join
                    </Link>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="lg:hidden text-white relative z-[1100] p-2 hover:bg-white/10 rounded-full transition-colors"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
                    aria-expanded={isMenuOpen}
                >
                    <AnimatePresence mode="wait">
                        {isMenuOpen ? (
                            <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                                <X size={26} />
                            </motion.div>
                        ) : (
                            <motion.div key="open" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
                                <Menu size={26} />
                            </motion.div>
                        )}
                    </AnimatePresence>
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 bg-primary/[0.98] backdrop-blur-2xl z-[1050] flex flex-col items-center justify-center noise"
                        style={{ height: '100dvh' }}
                    >
                        <nav className="flex flex-col items-center gap-5" aria-label="Mobile navigation">
                            {navLinks.map((link, idx) => (
                                <motion.div
                                    key={link.name}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 10 }}
                                    transition={{ delay: idx * 0.06 }}
                                >
                                    <Link
                                        href={link.href}
                                        onClick={() => setIsMenuOpen(false)}
                                        className={`font-heading text-3xl sm:text-4xl font-black uppercase tracking-wider transition-colors block text-center ${pathname === link.href ? 'text-gold' : 'text-white hover:text-gold'
                                            }`}
                                    >
                                        {link.name}
                                    </Link>
                                </motion.div>
                            ))}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 }}
                            >
                                <Link
                                    href="/support"
                                    onClick={() => setIsMenuOpen(false)}
                                    className="mt-6 btn-gold"
                                >
                                    Join Us
                                </Link>
                            </motion.div>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
