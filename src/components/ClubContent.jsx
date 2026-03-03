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
            className={`glass-card p-4 sm:p-6 flex flex-col items-center text-center group ${isLeader ? 'border-accent-blue/30 bg-accent-blue/5' : ''}`}
        >
            <div className={`relative mb-4 sm:mb-6 rounded-full overflow-hidden border-2 ${isLeader ? 'w-28 h-28 sm:w-40 sm:h-40 border-accent-blue' : 'w-20 h-20 sm:w-24 sm:h-24 border-white/10'}`}>
                <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes={isLeader ? "(max-width: 640px) 112px, 160px" : "(max-width: 640px) 80px, 96px"}
                />
            </div>
            <h3 className={`font-black uppercase mb-1 ${isLeader ? 'text-base sm:text-xl' : 'text-sm sm:text-lg'}`}>{member.name}</h3>
            <p className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-accent-blue-light">{member.role}</p>
        </motion.div>
    );
};

const PlayerCard = ({ player }) => (
    <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="group relative bg-white/5 rounded-xl overflow-hidden hover:bg-white/10 transition-colors"
    >
        <div className="aspect-square relative">
            <Image
                src={player.image}
                alt={player.name}
                fill
                className="object-cover transition-all duration-500"
                sizes="(max-width: 640px) 45vw, (max-width: 768px) 33vw, 200px"
            />
            <div className="absolute top-2 right-2 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-black/50 backdrop-blur-md flex items-center justify-center border border-white/10">
                <span className="font-heading font-black text-[10px] sm:text-xs">{player.number}</span>
            </div>
        </div>
        <div className="p-3 sm:p-4 text-center">
            <h3 className="font-bold uppercase mb-1 text-xs sm:text-sm">{player.name}</h3>
            <div className="inline-block px-2 py-0.5 sm:py-1 bg-white/5 rounded text-[9px] sm:text-[10px] font-bold uppercase tracking-widest text-white/50">{player.position}</div>
        </div>
    </motion.div>
);

const ClubContent = ({ organization }) => {
    return (
        <div className="pt-24 sm:pt-32 pb-16 sm:pb-20 min-h-screen">
            <div className="container-custom">
                <div className="text-center mb-12 sm:mb-20">
                    <span className="section-tag text-xs sm:text-sm">Organizational Structure</span>
                    <h1 className="text-3xl sm:text-4xl md:text-7xl font-black uppercase mb-4 sm:mb-6">The Club</h1>
                    <p className="text-white/50 max-w-2xl mx-auto px-4 text-xs sm:text-sm md:text-base">
                        Built on strong leadership and professional management to ensure sustainable success on and off the pitch.
                    </p>
                </div>

                {/* Leadership */}
                <section className="mb-16 sm:mb-24 relative">
                    <div className="absolute left-1/2 -translate-x-1/2 top-0 -translate-y-1/2 text-[60px] sm:text-[100px] md:text-[180px] font-black text-white/5 whitespace-nowrap pointer-events-none select-none">LEADERSHIP</div>
                    <h2 className="text-xl sm:text-2xl font-bold uppercase text-center mb-8 sm:mb-12 relative z-10">Board & Directors</h2>
                    <div className="flex flex-wrap justify-center gap-6 sm:gap-10">
                        {organization.leadership.map((member, idx) => (
                            <HierarchyCard key={idx} member={member} type="leader" />
                        ))}
                    </div>
                </section>

                {/* Management, Communication & Technical */}
                <section className="mb-16 sm:mb-24">
                    <h2 className="text-xl sm:text-2xl font-bold uppercase text-center mb-8 sm:mb-12">Technical Staff & Management</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12 max-w-5xl mx-auto">
                        {/* Management */}
                        <div className="space-y-4 sm:space-y-6">
                            <h3 className="text-xs sm:text-sm font-bold uppercase tracking-widest text-white/30 text-center border-b border-white/5 pb-4">Management</h3>
                            {organization.management.map((member, idx) => (
                                <HierarchyCard key={idx} member={member} />
                            ))}
                        </div>

                        {/* Communication */}
                        <div className="space-y-4 sm:space-y-6">
                            <h3 className="text-xs sm:text-sm font-bold uppercase tracking-widest text-white/30 text-center border-b border-white/5 pb-4">Communication</h3>
                            {organization.communication && organization.communication.map((member, idx) => (
                                <HierarchyCard key={idx} member={member} />
                            ))}
                        </div>

                        {/* Coaching */}
                        <div className="space-y-4 sm:space-y-6 sm:col-span-2 lg:col-span-1">
                            <h3 className="text-xs sm:text-sm font-bold uppercase tracking-widest text-white/30 text-center border-b border-white/5 pb-4">Coaching</h3>
                            <div className="space-y-4">
                                {organization.technical.map((member, idx) => (
                                    <HierarchyCard key={idx} member={member} />
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* The Squad */}
                <section>
                    <div className="flex items-end justify-between mb-8 sm:mb-12 border-b border-white/5 pb-4 sm:pb-6">
                        <div>
                            <span className="text-accent-blue font-bold uppercase text-xs sm:text-sm tracking-widest">First Team</span>
                            <h2 className="text-2xl sm:text-4xl font-black uppercase">The Squad</h2>
                        </div>
                        <div className="text-right hidden sm:block">
                            <div className="text-3xl sm:text-4xl font-black text-white/10">2026</div>
                            <div className="text-[10px] sm:text-xs uppercase tracking-widest text-white/30">Season</div>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4">
                        {organization.squad.map((player) => (
                            <PlayerCard key={player.id} player={player} />
                        ))}
                    </div>
                </section>

            </div>
        </div>
    );
};

export default ClubContent;
