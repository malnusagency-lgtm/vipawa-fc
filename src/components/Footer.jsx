import Link from 'next/link';
import { Mail, Phone, MapPin, Instagram, Twitter, Facebook, Youtube } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-black/95 text-white pt-24 pb-12 overflow-hidden relative">
            {/* Background Texture */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute top-0 right-0 w-96 h-96 bg-accent-blue/10 rounded-full blur-[100px]" />
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-red/10 rounded-full blur-[100px]" />
            </div>

            <div className="container-custom relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    {/* Brand */}
                    <div className="space-y-6">
                        <Link href="/" className="flex items-center gap-3">
                            <span className="font-heading font-black text-2xl tracking-tighter uppercase">Vipawa</span>
                        </Link>
                        <p className="text-white/50 text-sm leading-relaxed max-w-xs">
                            Nurturing young women through football excellence. From the streets of Kibera to the world stage.
                        </p>
                        <div className="flex items-center gap-4">
                            {[
                                { Icon: Instagram, color: 'hover:bg-accent-blue' },
                                { Icon: Twitter, color: 'hover:bg-black' },
                                { Icon: Facebook, color: 'hover:bg-blue-600' },
                                { Icon: Youtube, color: 'hover:bg-red-600' }
                            ].map(({ Icon, color }, idx) => (
                                <a key={idx} href="#" className={`w-10 h-10 rounded-full bg-white/5 flex items-center justify-center ${color} hover:text-white transition-colors group`}>
                                    <Icon size={18} className="group-hover:scale-110 transition-transform" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-bold uppercase tracking-wider mb-6">Explore</h4>
                        <ul className="space-y-4">
                            <li><Link href="/club" className="text-white/60 hover:text-accent-blue transition-colors text-sm">The Club</Link></li>
                            <li><Link href="/matches" className="text-white/60 hover:text-accent-blue transition-colors text-sm">Matches & Results</Link></li>
                            <li><Link href="/news" className="text-white/60 hover:text-accent-blue transition-colors text-sm">News & Media</Link></li>
                            <li><Link href="/support" className="text-white/60 hover:text-accent-blue transition-colors text-sm">Membership</Link></li>
                        </ul>
                    </div>

                    {/* Legal/Support */}
                    <div>
                        <h4 className="font-bold uppercase tracking-wider mb-6">Support</h4>
                        <ul className="space-y-4">
                            <li><Link href="/support" className="text-white/60 hover:text-accent-blue transition-colors text-sm">Start Donating</Link></li>
                            <li><Link href="/support" className="text-white/60 hover:text-accent-blue transition-colors text-sm">Become a Partner</Link></li>
                            <li><Link href="/contact" className="text-white/60 hover:text-accent-blue transition-colors text-sm">Contact Us</Link></li>
                            <li><span className="text-white/30 text-xs">Privacy Policy</span></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="font-bold uppercase tracking-wider mb-6">Contact</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3 text-white/60 text-sm">
                                <MapPin size={18} className="text-accent-blue shrink-0 mt-0.5" />
                                <span>Ngong Road Grounds<br />Nairobi, Kenya</span>
                            </li>
                            <li className="flex items-center gap-3 text-white/60 text-sm">
                                <Phone size={18} className="text-accent-blue shrink-0" />
                                <span>+254 700 890 123</span>
                            </li>
                            <li className="flex items-center gap-3 text-white/60 text-sm">
                                <Mail size={18} className="text-accent-blue shrink-0" />
                                <span>info@vipawafc.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-white/30 text-xs text-center md:text-left">
                        © 2026 Vipawa Ladies FC. All rights reserved.
                    </p>
                    <p className="text-white/30 text-xs flex items-center gap-1">
                        Designed by <span className="text-white font-bold">Malnus</span>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
