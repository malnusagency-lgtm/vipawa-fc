'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const HierarchyCard = ({ member, type }) => {
    const isLeader = type === 'leader';
    const initials = member.name.split(' ').map(n => n[0]).join('').toUpperCase();
    
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`glass-card p-5 sm:p-6 flex flex-col items-center text-center group hover:translate-y-[-4px] hover:shadow-elevated transition-all duration-500 ${isLeader ? 'border-gold/20 bg-gold/[0.03]' : ''}`}
        >
            <div className={`relative mb-4 sm:mb-5 rounded-full overflow-hidden border-2 flex items-center justify-center ${isLeader ? 'w-28 h-28 sm:w-36 sm:h-36 border-gold/50' : 'w-20 h-20 sm:w-24 sm:h-24 border-white/10'} transition-all duration-500 group-hover:border-gold/60 bg-surface`}>
                {member.image ? (
                    <Image src={member.image} alt={member.name} fill className="object-cover object-[center_15%] transition-transform duration-500 group-hover:scale-110" sizes={isLeader ? "144px" : "96px"} />
                ) : (
                    <span className={`font-black tracking-tighter text-gold/40 ${isLeader ? 'text-4xl' : 'text-2xl'}`}>{initials}</span>
                )}
            </div>
            <h3 className={`font-black uppercase mb-1 ${isLeader ? 'text-fluid-lg' : 'text-fluid-base'}`}>{member.name}</h3>
            <p className="text-fluid-xs font-bold uppercase tracking-[0.15em] text-gold">{member.role}</p>
        </motion.div>
    );
};

const PlayerGalleryCard = ({ player }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="group relative rounded-2xl overflow-hidden bg-surface hover:shadow-elevated transition-all duration-500"
    >
        {/* Image — taller aspect ratio for gallery feel */}
        <div className="aspect-[3/4] relative">
            <Image
                src={player.image}
                alt={player.name}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 640px) 45vw, (max-width: 768px) 30vw, (max-width: 1024px) 22vw, 200px"
            />
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

            {/* Jersey number badge */}
            <div className="absolute top-3 right-3 w-9 h-9 rounded-full bg-gold/90 text-primary flex items-center justify-center font-heading font-black text-sm shadow-lg">
                {player.number}
            </div>

            {/* Player info overlay at bottom */}
            <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4">
                <h3 className="font-black uppercase text-sm sm:text-base leading-tight mb-1 drop-shadow-lg">{player.name}</h3>
                <span className="inline-block px-2.5 py-1 bg-gold/20 backdrop-blur-sm rounded-full text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.15em] text-gold border border-gold/20">
                    {player.position === 'GK' ? 'Goalkeeper' : player.position === 'DEF' ? 'Defender' : player.position === 'MID' ? 'Midfielder' : 'Forward'}
                </span>
            </div>
        </div>
    </motion.div>
);

const ClubContent = ({ organization }) => {
    const posNames = { GK: 'Goalkeepers', DEF: 'Defenders', MID: 'Midfielders', FWD: 'Forwards' };

    return (
        <div className="pt-24 sm:pt-32 pb-16 sm:pb-20 min-h-screen">
            <div className="container-custom">
                <div className="text-center mb-12 sm:mb-16">
                    <span className="section-tag">Organizational Structure</span>
                    <h1 className="section-title">The Club</h1>
                    <p className="text-white/40 max-w-2xl mx-auto text-fluid-sm">
                        Built on strong leadership and professional management to ensure sustainable success on and off the pitch.
                    </p>
                </div>

                {/* Leadership */}
                <section className="mb-16 sm:mb-24 relative" aria-labelledby="leadership-heading">
                    <div className="absolute left-1/2 -translate-x-1/2 top-0 -translate-y-1/2 text-[50px] sm:text-[80px] md:text-[140px] font-black text-white/[0.03] whitespace-nowrap pointer-events-none select-none" aria-hidden="true">LEADERSHIP</div>
                    <h2 id="leadership-heading" className="text-fluid-xl font-bold uppercase text-center mb-8 sm:mb-12 relative z-10">Club Leadership</h2>
                    <div className="flex flex-wrap justify-center gap-6 sm:gap-8">
                        {organization.leadership.map((member, idx) => (
                            <HierarchyCard key={idx} member={member} type="leader" />
                        ))}
                    </div>
                </section>
 
                {/* Management & Technical */}
                <section className="mb-16 sm:mb-24" aria-labelledby="staff-heading">
                    <h2 id="staff-heading" className="text-fluid-xl font-bold uppercase text-center mb-12 sm:mb-16">Club Management & Technical Staff</h2>
 
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto mb-16">
                        <div className="space-y-6">
                            <h3 className="text-fluid-xs font-bold uppercase tracking-[0.2em] text-white/30 text-center border-b border-white/[0.06] pb-4">Executive Management</h3>
                            <div className="grid gap-6">
                                {organization.management.map((m, i) => <HierarchyCard key={i} member={m} />)}
                                {organization.communication?.map((m, i) => <HierarchyCard key={i} member={m} />)}
                            </div>
                        </div>
                        <div className="space-y-6">
                            <h3 className="text-fluid-xs font-bold uppercase tracking-[0.2em] text-white/30 text-center border-b border-white/[0.06] pb-4">Coaching Team</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                {organization.technical.map((m, i) => <HierarchyCard key={i} member={m} />)}
                            </div>
                        </div>
                    </div>
                </section>

                {/* The Squad — Gallery Format */}
                <section className="relative -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 py-16 sm:py-24 overflow-hidden" aria-labelledby="squad-heading">
                    {/* Fixed Background Layer */}
                    <div className="absolute inset-0 z-0 overflow-hidden" style={{ clipPath: 'inset(0 0 0 0)' }}>
                        <div className="fixed inset-0 w-full h-full will-change-transform" style={{ transform: 'translateZ(0)' }}>
                            <Image 
                                src="/images/backgrounds/the-squad-background-image.jpeg" 
                                alt="The Squad" 
                                fill 
                                className="object-cover" 
                                sizes="100vw"
                                quality={75}
                            />
                        </div>
                    </div>
                    <div className="absolute inset-0 bg-primary/90 z-[1]" />

                    <div className="relative z-10">
                        <div className="flex items-end justify-between mb-8 sm:mb-12 border-b border-white/[0.06] pb-4 sm:pb-6">
                            <div>
                                <span className="section-tag !mb-1">First Team</span>
                                <h2 id="squad-heading" className="text-fluid-3xl font-black uppercase">The Squad</h2>
                            </div>
                            <div className="text-right hidden sm:block">
                                <div className="text-fluid-3xl font-black text-white/[0.06]">2026</div>
                                <div className="text-fluid-xs uppercase tracking-[0.2em] text-white/30">Season</div>
                            </div>
                        </div>

                        {['GK', 'DEF', 'MID', 'FWD'].map((pos) => {
                            const players = organization.squad.filter(p => p.position === pos);
                            if (!players.length) return null;
                            return (
                                <div key={pos} className="mb-12">
                                    <h3 className="text-fluid-sm font-bold uppercase tracking-[0.2em] text-gold mb-5 flex items-center gap-3">
                                        <span className="w-8 h-8 rounded-full bg-gold/10 flex items-center justify-center text-gold text-xs font-black">{players.length}</span>
                                        {posNames[pos]}
                                    </h3>
                                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4">
                                        {players.map(player => <PlayerGalleryCard key={player.id} player={player} />)}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </section>
            </div>
        </div>
    );
};

export default ClubContent;
