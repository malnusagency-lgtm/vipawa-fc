'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const HierarchyCard = ({ member, type }) => {
    const isLeader = type === 'leader';
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`glass-card p-5 sm:p-6 flex flex-col items-center text-center group hover:translate-y-[-4px] hover:shadow-elevated transition-all duration-500 ${isLeader ? 'border-gold/20 bg-gold/[0.03]' : ''}`}
        >
            <div className={`relative mb-4 sm:mb-5 rounded-full overflow-hidden border-2 ${isLeader ? 'w-28 h-28 sm:w-36 sm:h-36 border-gold/50' : 'w-20 h-20 sm:w-24 sm:h-24 border-white/10'} transition-all duration-500 group-hover:border-gold/60`}>
                <Image src={member.image} alt={member.name} fill className="object-cover transition-transform duration-500 group-hover:scale-110" sizes={isLeader ? "144px" : "96px"} />
            </div>
            <h3 className={`font-black uppercase mb-1 ${isLeader ? 'text-fluid-lg' : 'text-fluid-base'}`}>{member.name}</h3>
            <p className="text-fluid-xs font-bold uppercase tracking-[0.15em] text-gold">{member.role}</p>
        </motion.div>
    );
};

const PlayerCard = ({ player }) => (
    <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="group relative bg-white/[0.03] rounded-xl overflow-hidden hover:bg-white/[0.06] hover:translate-y-[-4px] hover:shadow-elevated transition-all duration-500"
    >
        <div className="aspect-square relative">
            <Image src={player.image} alt={player.name} fill className="object-cover transition-transform duration-500 group-hover:scale-110" sizes="(max-width: 640px) 45vw, (max-width: 768px) 33vw, 180px" />
            <div className="absolute top-2 right-2 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-black/60 backdrop-blur-md flex items-center justify-center border border-white/10 group-hover:border-gold/30 transition-colors">
                <span className="font-heading font-black text-[10px] sm:text-xs">{player.number}</span>
            </div>
        </div>
        <div className="p-3 sm:p-4 text-center">
            <h3 className="font-bold uppercase mb-1 text-fluid-xs">{player.name}</h3>
            <div className="inline-block px-2 py-0.5 bg-gold/10 rounded text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.15em] text-gold/70">{player.position}</div>
        </div>
    </motion.div>
);

const ClubContent = ({ organization }) => {
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
                    <h2 id="leadership-heading" className="text-fluid-xl font-bold uppercase text-center mb-8 sm:mb-12 relative z-10">Board & Directors</h2>
                    <div className="flex flex-wrap justify-center gap-6 sm:gap-8">
                        {organization.leadership.map((member, idx) => (
                            <HierarchyCard key={idx} member={member} type="leader" />
                        ))}
                    </div>
                </section>

                {/* Management, Communication & Technical */}
                <section className="mb-16 sm:mb-24" aria-labelledby="staff-heading">
                    <h2 id="staff-heading" className="text-fluid-xl font-bold uppercase text-center mb-8 sm:mb-12">Technical Staff & Management</h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl mx-auto mb-10">
                        <div className="space-y-4">
                            <h3 className="text-fluid-xs font-bold uppercase tracking-[0.2em] text-white/30 text-center border-b border-white/[0.06] pb-4">Management</h3>
                            {organization.management.map((m, i) => <HierarchyCard key={i} member={m} />)}
                        </div>
                        <div className="space-y-4">
                            <h3 className="text-fluid-xs font-bold uppercase tracking-[0.2em] text-white/30 text-center border-b border-white/[0.06] pb-4">Communication</h3>
                            {organization.communication?.map((m, i) => <HierarchyCard key={i} member={m} />)}
                        </div>
                    </div>

                    <div className="max-w-5xl mx-auto">
                        <h3 className="text-fluid-xs font-bold uppercase tracking-[0.2em] text-white/30 text-center border-b border-white/[0.06] pb-4 mb-6">Coaching</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
                            {organization.technical.map((m, i) => <HierarchyCard key={i} member={m} />)}
                        </div>
                    </div>
                </section>

                {/* The Squad */}
                <section aria-labelledby="squad-heading">
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
                        const posNames = { GK: 'Goalkeepers', DEF: 'Defenders', MID: 'Midfielders', FWD: 'Forwards' };
                        const players = organization.squad.filter(p => p.position === pos);
                        if (!players.length) return null;
                        return (
                            <div key={pos} className="mb-10">
                                <h3 className="text-fluid-xs font-bold uppercase tracking-[0.2em] text-gold/60 mb-4 border-b border-white/[0.04] pb-3">{posNames[pos]}</h3>
                                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4">
                                    {players.map(player => <PlayerCard key={player.id} player={player} />)}
                                </div>
                            </div>
                        );
                    })}
                </section>
            </div>
        </div>
    );
};

export default ClubContent;
