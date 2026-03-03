'use client';

import { motion } from 'framer-motion';
import { Calendar, MapPin, Trophy } from 'lucide-react';
import { matches, standings, fixtures } from '@/data/clubData';

const MatchesContent = () => {
    const upcoming = matches.find(m => m.type === 'upcoming');
    const recent = matches.filter(m => m.type === 'recent');

    const today = new Date();
    const isPast = (dateStr) => {
        const parts = dateStr.split('/');
        return new Date(`${parts[2]}-${parts[1]}-${parts[0]}`) < today;
    };

    return (
        <div className="pt-24 sm:pt-28 pb-16 sm:pb-20 min-h-screen">
            {/* Match Center */}
            <section className="section-padding" aria-labelledby="matches-heading">
                <div className="container-custom">
                    <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                        {/* Next Match */}
                        <div className="lg:col-span-8">
                            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="relative overflow-hidden glass-card-elevated p-1">
                                <div className="bg-primary-900/50 backdrop-blur-2xl rounded-xl p-6 sm:p-8 md:p-12 relative z-10">
                                    <div className="flex items-center gap-3 text-gold mb-8">
                                        <div className="w-1.5 h-8 bg-gold rounded-full" />
                                        <span id="matches-heading" className="font-heading font-bold uppercase tracking-[0.15em] text-fluid-lg">Next Match</span>
                                    </div>
                                    <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12 mb-8 md:mb-12">
                                        <div className="flex-1 text-center md:text-right">
                                            <h3 className="text-fluid-3xl font-extrabold mb-1">VIPAWA LADIES</h3>
                                            <p className="text-white/30 font-heading text-fluid-xs uppercase tracking-wider">Home</p>
                                        </div>
                                        <div className="flex flex-col items-center gap-3">
                                            <div className="text-fluid-4xl font-extrabold text-white/[0.08]">VS</div>
                                            <div className="px-4 py-1 bg-gold text-primary text-xs font-bold rounded-full">3:00 PM</div>
                                        </div>
                                        <div className="flex-1 text-center md:text-left">
                                            <h3 className="text-fluid-3xl font-extrabold mb-1 uppercase">{upcoming.opponent}</h3>
                                            <p className="text-white/30 font-heading text-fluid-xs uppercase tracking-wider">Away</p>
                                        </div>
                                    </div>
                                    <div className="grid sm:grid-cols-3 gap-4 sm:gap-6 pt-8 border-t border-white/[0.06]">
                                        <div className="flex items-center gap-3 text-white/40 text-fluid-sm"><Calendar className="text-gold shrink-0" size={18} /><span>{upcoming.date}</span></div>
                                        <div className="flex items-center gap-3 text-white/40 text-fluid-sm"><MapPin className="text-gold shrink-0" size={18} /><span>{upcoming.venue}</span></div>
                                        <div className="flex items-center gap-3 text-white/40 text-fluid-sm"><Trophy className="text-gold shrink-0" size={18} /><span>{upcoming.competition}</span></div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>

                        {/* Recent Results */}
                        <div className="lg:col-span-4">
                            <span className="section-tag">Match History</span>
                            <h2 className="text-fluid-2xl font-bold mb-6">Recent Results</h2>
                            <div className="space-y-3">
                                {recent.map((match, idx) => (
                                    <motion.div key={idx} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }}
                                        className="glass-card hover:border-gold/20 p-4 group cursor-pointer transition-all duration-300 hover:translate-y-[-2px]"
                                    >
                                        <div className="flex justify-between items-center mb-2 text-[10px] text-white/30 font-bold uppercase tracking-wider"><span>{match.competition}</span><span>{match.date}</span></div>
                                        <div className="flex items-center justify-between gap-3">
                                            <div className="flex-1 text-fluid-xs font-bold uppercase truncate">{match.home ? 'Vipawa Ladies' : match.opponent}</div>
                                            <div className="flex items-center justify-center min-w-[70px] h-9 bg-surface rounded-lg group-hover:bg-gold/10 transition-colors">
                                                <span className="text-lg font-extrabold tracking-widest">{match.result}</span>
                                            </div>
                                            <div className="flex-1 text-fluid-xs font-bold uppercase text-right truncate">{match.home ? match.opponent : 'Vipawa Ladies'}</div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Standings */}
            <section className="section-padding" aria-labelledby="standings-heading">
                <div className="container-custom">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                            <span className="section-tag">League Standings</span>
                            <h2 id="standings-heading" className="section-title">Regional Women Zone 1</h2>
                            <div className="glass-card overflow-hidden">
                                <table className="w-full text-left text-sm">
                                    <thead><tr className="bg-white/[0.04] font-heading font-bold uppercase tracking-wider text-[10px]"><th className="p-3 sm:p-4">POS</th><th className="p-3 sm:p-4">TEAM</th><th className="p-3 sm:p-4 text-center">P</th><th className="p-3 sm:p-4 text-center hidden sm:table-cell">W</th><th className="p-3 sm:p-4 text-center hidden sm:table-cell">D</th><th className="p-3 sm:p-4 text-center hidden sm:table-cell">L</th><th className="p-3 sm:p-4 text-right">PTS</th></tr></thead>
                                    <tbody className="divide-y divide-white/[0.04]">
                                        {standings.map((team, idx) => (
                                            <tr key={idx} className={`hover:bg-white/[0.03] transition-colors ${team.team === 'Vipawa Ladies FC' ? 'bg-gold/[0.06]' : ''}`}>
                                                <td className="p-3 sm:p-4 font-bold">{team.pos}</td><td className="p-3 sm:p-4 font-bold text-fluid-xs">{team.team}</td><td className="p-3 sm:p-4 text-center text-white/50">{team.played}</td><td className="p-3 sm:p-4 text-center text-white/50 hidden sm:table-cell">{team.won}</td><td className="p-3 sm:p-4 text-center text-white/50 hidden sm:table-cell">{team.drawn}</td><td className="p-3 sm:p-4 text-center text-white/50 hidden sm:table-cell">{team.lost}</td><td className="p-3 sm:p-4 text-right font-black text-gold">{team.points}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </motion.div>

                        <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                            <span className="section-tag">About the Club</span>
                            <h2 className="text-fluid-3xl font-extrabold mb-6">Nurturing Talent since 2021</h2>
                            <p className="text-white/50 leading-relaxed mb-8 text-fluid-sm">Based along Ngong Road, Nairobi, <strong className="text-white">Vipawa Ladies Football Club</strong> is dedicated to identifying and elevating young female footballers. The name <em>Vipawa</em> captures our core mission: nurturing raw talent into professional excellence.</p>
                            <div className="grid grid-cols-2 gap-4 sm:gap-6 mb-8">
                                <div className="p-5 glass-card group hover:bg-gold/[0.04] transition-colors"><div className="text-2xl font-black text-white/[0.04] font-heading group-hover:text-gold/10 transition-colors">01</div><h4 className="font-bold uppercase mb-1 text-fluid-sm">Identification</h4><p className="text-fluid-xs text-white/40">Finding talent at the grassroots level.</p></div>
                                <div className="p-5 glass-card group hover:bg-accent-red/[0.04] transition-colors"><div className="text-2xl font-black text-white/[0.04] font-heading group-hover:text-accent-red/10 transition-colors">02</div><h4 className="font-bold uppercase mb-1 text-fluid-sm">Development</h4><p className="text-fluid-xs text-white/40">Professional training and mentorship.</p></div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Fixtures */}
            <section className="section-padding" aria-labelledby="fixtures-heading">
                <div className="container-custom">
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                        <div className="text-center mb-10"><span className="section-tag">Season Schedule</span><h2 id="fixtures-heading" className="section-title">2025/26 Fixtures</h2></div>
                        <div className="glass-card overflow-hidden overflow-x-auto">
                            <table className="w-full text-left text-sm min-w-[550px]">
                                <thead><tr className="bg-white/[0.04] font-heading font-bold uppercase tracking-wider text-[10px]"><th className="p-3 sm:p-4 text-center">MW</th><th className="p-3 sm:p-4">DATE</th><th className="p-3 sm:p-4">DAY</th><th className="p-3 sm:p-4">TIME</th><th className="p-3 sm:p-4">VENUE</th><th className="p-3 sm:p-4">OPPONENT</th></tr></thead>
                                <tbody className="divide-y divide-white/[0.04]">
                                    {fixtures.map((fix, idx) => {
                                        const past = isPast(fix.date);
                                        return (
                                            <tr key={idx} className={`transition-colors hover:bg-white/[0.03] ${past ? 'text-white/30' : 'text-white/80'}`}>
                                                <td className="p-3 sm:p-4 text-center font-bold">{fix.no}</td>
                                                <td className="p-3 sm:p-4 font-mono text-fluid-xs">{fix.date}</td>
                                                <td className="p-3 sm:p-4 text-fluid-xs">{fix.day}</td>
                                                <td className="p-3 sm:p-4"><span className={`px-2 py-0.5 rounded text-[10px] font-bold ${past ? 'bg-white/[0.04]' : 'bg-gold/15 text-gold'}`}>{fix.time}</span></td>
                                                <td className="p-3 sm:p-4 text-fluid-xs">{fix.venue}</td>
                                                <td className="p-3 sm:p-4 font-bold uppercase text-fluid-xs">{fix.opponent}</td>
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default MatchesContent;
