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
            className={`glass-card p-6 flex flex-col items-center text-center group ${isLeader ? 'border-accent-blue/30 bg-accent-blue/5' : ''}`}
        >
            <div className={`relative mb-6 rounded-full overflow-hidden border-2 ${isLeader ? 'w-40 h-40 border-accent-blue' : 'w-24 h-24 border-white/10'}`}>
                <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110 grayscale group-hover:grayscale-0"
                    sizes={isLeader ? "160px" : "96px"}
                />
            </div>
            <h3 className={`font-black uppercase mb-1 ${isLeader ? 'text-xl' : 'text-lg'}`}>{member.name}</h3>
            <p className="text-xs font-bold uppercase tracking-widest text-accent-blue-light">{member.role}</p>
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
                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                sizes="(max-width: 768px) 50vw, 200px"
            />
            <div className="absolute top-2 right-2 w-8 h-8 rounded-full bg-black/50 backdrop-blur-md flex items-center justify-center border border-white/10">
                <span className="font-heading font-black text-xs">{player.number}</span>
            </div>
        </div>
        <div className="p-4 text-center">
            <h3 className="font-bold uppercase mb-1">{player.name}</h3>
            <div className="inline-block px-2 py-1 bg-white/5 rounded text-[10px] font-bold uppercase tracking-widest text-white/50">{player.position}</div>
        </div>
    </motion.div>
);

const ClubContent = ({ organization }) => {
    return (
        <div className="pt-32 pb-20 min-h-screen">
            <div className="container-custom">
                <div className="text-center mb-20">
                    <span className="section-tag">Organizational Structure</span>
                    <h1 className="section-title">The Club</h1>
                    <p className="text-white/50 max-w-2xl mx-auto">
                        Built on strong leadership and professional management to ensure sustainable success on and off the pitch.
                    </p>
                </div>

                {/* Leadership */}
                <section className="mb-24 relative">
                    <div className="absolute left-1/2 -translate-x-1/2 top-0 -translate-y-1/2 text-[100px] md:text-[180px] font-black text-white/5 whitespace-nowrap pointer-events-none select-none">LEADERSHIP</div>
                    <h2 className="text-2xl font-bold uppercase text-center mb-12 relative z-10">Board & Directors</h2>
                    <div className="flex flex-wrap justify-center gap-10">
                        {organization.leadership.map((member, idx) => (
                            <HierarchyCard key={idx} member={member} type="leader" />
                        ))}
                    </div>
                </section>

                {/* Management & Technical - Tree View */}
                <section className="mb-24">
                    <h2 className="text-2xl font-bold uppercase text-center mb-12">Technical Staff</h2>
                    <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
                        <div className="space-y-6">
                            <h3 className="text-sm font-bold uppercase tracking-widest text-white/30 text-center border-b border-white/5 pb-4">Management</h3>
                            {organization.management.map((member, idx) => (
                                <HierarchyCard key={idx} member={member} />
                            ))}
                        </div>
                        <div className="space-y-6">
                            <h3 className="text-sm font-bold uppercase tracking-widest text-white/30 text-center border-b border-white/5 pb-4">Coaching</h3>
                            <div className="grid grid-cols-2 gap-4">
                                {organization.technical.map((member, idx) => (
                                    <HierarchyCard key={idx} member={member} />
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* The Squad */}
                <section>
                    <div className="flex items-end justify-between mb-12 border-b border-white/5 pb-6">
                        <div>
                            <span className="text-accent-blue font-bold uppercase text-sm tracking-widest">First Team</span>
                            <h2 className="text-4xl font-black uppercase">The Squad</h2>
                        </div>
                        <div className="text-right hidden md:block">
                            <div className="text-4xl font-black text-white/10">2026</div>
                            <div className="text-xs uppercase tracking-widest text-white/30">Season</div>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4">
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
