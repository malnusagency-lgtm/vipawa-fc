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
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Lock body scroll when menu is open
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isMenuOpen]);

    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'The Club', href: '/club' },
        { name: 'Matches', href: '/matches' },
        { name: 'News', href: '/news' },
        { name: 'Support', href: '/support' },
    ];

    const menuVariants = {
        hidden: { opacity: 0, y: '-100%' },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: 'tween',
                ease: 'circOut',
                duration: 0.5,
                when: "beforeChildren",
                staggerChildren: 0.1
            }
        },
        exit: {
            opacity: 0,
            y: '-100%',
            transition: {
                type: 'tween',
                ease: 'circIn',
                duration: 0.4,
                when: "afterChildren",
                staggerChildren: 0.05,
                staggerDirection: -1
            }
        }
    };

    const linkVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: 20 }
    };

    return (
        <nav className={`fixed top-0 left-0 right-0 z-[1000] transition-all duration-500 ${isScrolled || isMenuOpen ? 'bg-primary border-b border-white/10 py-3' : 'bg-transparent py-5'}`}>
            <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-3 group relative z-[1002]" onClick={() => setIsMenuOpen(false)}>
                    <div className="relative h-10 w-10 md:h-12 md:w-12 transition-transform duration-300 group-hover:scale-110">
                        <Image
                            src="/images/logo.png"
                            alt="Vipawa Ladies FC Logo"
                            fill
                            className="object-contain"
                            sizes="(max-width: 768px) 40px, 48px"
                        />
                    </div>
                    <span className="font-heading font-bold text-lg md:text-xl tracking-tight hidden sm:block">Vipawa Ladies FC</span>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={`font-heading text-sm font-medium uppercase tracking-wider hover:text-white relative group transition-colors ${pathname === link.href ? 'text-accent-blue' : 'text-white/70'}`}
                        >
                            {link.name}
                            <span className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-accent-blue to-accent-red transition-all duration-300 ${pathname === link.href ? 'w-full' : 'w-0 group-hover:w-full'}`} />
                        </Link>
                    ))}
                    <Link href="/support" className="px-6 py-2 bg-white text-primary hover:bg-white/90 text-xs font-bold uppercase tracking-widest rounded-full transition-all">
                        Join
                    </Link>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden text-white relative z-[1100] p-2 hover:bg-white/10 rounded-full transition-colors"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Toggle Menu"
                >
                    {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        variants={menuVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        className="fixed inset-0 bg-primary z-[1050] flex flex-col items-center justify-center gap-8 pointer-events-auto h-screen w-screen"
                    >
                        {navLinks.map((link) => (
                            <motion.div key={link.name} variants={linkVariants}>
                                <Link
                                    href={link.href}
                                    onClick={() => setIsMenuOpen(false)}
                                    className={`font-heading text-4xl font-black uppercase tracking-widest hover:text-accent-blue transition-colors ${pathname === link.href ? 'text-accent-blue' : 'text-white'}`}
                                >
                                    {link.name}
                                </Link>
                            </motion.div>
                        ))}
                        <motion.div variants={linkVariants}>
                            <Link
                                href="/support"
                                onClick={() => setIsMenuOpen(false)}
                                className="mt-8 px-12 py-4 bg-accent-blue text-white font-bold uppercase tracking-widest rounded-full shadow-glow-blue inline-block"
                            >
                                Join Us
                            </Link>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
