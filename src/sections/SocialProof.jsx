'use client';

import { Mail } from 'lucide-react';

const SocialProof = () => {
    const slogans = ['Kick Like A Queen', 'Talent Into Power', 'Nairobi to the World', 'Empower a Girl', 'Inspire a Generation'];

    return (
        <>
            {/* Marquee */}
            <section className="border-y border-white/[0.04] bg-surface/50 py-6 md:py-8 overflow-hidden" aria-label="Club slogans">
                <div className="relative">
                    {/* Fade edges */}
                    <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-primary to-transparent z-10 pointer-events-none" />
                    <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-primary to-transparent z-10 pointer-events-none" />

                    <div className="flex animate-marquee whitespace-nowrap">
                        {[...slogans, ...slogans, ...slogans, ...slogans].map((slogan, i) => (
                            <span key={i} className="flex items-center">
                                <span className="text-fluid-2xl font-black uppercase text-gold/80 px-4 sm:px-6">{slogan}</span>
                                <span className="w-2 h-2 rounded-full bg-gold/70 shrink-0 mx-2" aria-hidden="true" />
                            </span>
                        ))}
                    </div>
                </div>
            </section>

            {/* Newsletter CTA */}
            <section className="section-padding relative overflow-hidden" aria-label="Newsletter signup">
                <div className="absolute inset-0 z-0 overflow-hidden" style={{ clipPath: 'inset(0 0 0 0)' }}>
                    <div 
                        className="fixed inset-0 w-full h-full bg-[url('/images/backgrounds/stay%20updated%20section%20background.jpeg')] bg-cover bg-center will-change-transform"
                        style={{ transform: 'translateZ(0)' }}
                    />
                </div>
                <div className="absolute inset-0 bg-primary/7 z-[1]" />

                <div className="container-custom relative z-10">
                    <div className="max-w-2xl mx-auto text-center">
                        <span className="section-tag">Stay Updated</span>
                        <h2 className="text-fluid-3xl font-black uppercase mb-4">Join the Vipawa Army</h2>
                        <p className="text-white/80 text-fluid-sm mb-8 max-w-md mx-auto">
                            Get match updates, news, and exclusive content delivered to your inbox.
                        </p>
                        <form
                            className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
                            onSubmit={(e) => e.preventDefault()}
                        >
                            <label htmlFor="newsletter-email" className="sr-only">Email address</label>
                            <div className="flex-1 relative">
                                <Mail size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30" aria-hidden="true" />
                                <input
                                    id="newsletter-email"
                                    type="email"
                                    placeholder="your@email.com"
                                    className="w-full bg-white/[0.04] border border-white/[0.08] rounded-full pl-10 pr-4 py-3.5 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-gold transition-colors font-bold"
                                    required
                                />
                            </div>
                            <button type="submit" className="btn-gold !py-3.5 !px-8 whitespace-nowrap">
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        </>
    );
};

export default SocialProof;
