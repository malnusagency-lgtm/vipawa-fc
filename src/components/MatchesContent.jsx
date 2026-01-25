'use client';

import { motion } from 'framer-motion';
import { Calendar, MapPin, Trophy, ArrowRight } from 'lucide-react';
import { matches, standings } from '@/data/clubData';

const MatchesContent = () => {
    const upcoming = matches.find(m => m.type === 'upcoming');
    const recent = matches.filter(m => m.type === 'recent');

    return (
        <div className="pt-24 pb-20 min-h-screen">
            {/* Match Center Section */}
            <section id="matches" className="section">
                <div className="container-custom">
                    <div className="grid lg:grid-cols-12 gap-12 items-start">

                        {/* Next Match Column */}
                        <div className="lg:col-span-8">
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="relative overflow-hidden glass-card p-1">
                                <div className="bg-primary-900/50 backdrop-blur-2xl rounded-xl p-8 md:p-12 relative z-10">
                                    <div className="flex items-center gap-3 text-accent-blue-light mb-8">
                                        <div className="w-2 h-10 bg-accent-blue rounded-full" />
                                        <span className="font-heading font-bold uppercase tracking-widest text-xl">Next Match</span>
                                    </div>

                                    <div className="flex flex-col md:flex-row items-center justify-between gap-12 mb-12">
                                        <div className="flex-1 text-center md:text-right">
                                            <h3 className="text-3xl md:text-5xl font-extrabold mb-2">VIPAWA LADIES</h3>
                                            <p className="text-white/40 font-heading">HOME</p>
                                        </div>

                                        <div className="flex flex-col items-center gap-4">
                                            <div className="text-5xl md:text-7xl font-extrabold text-white/10">VS</div>
                                            <div className="px-4 py-1 bg-accent-blue text-xs font-bold rounded-full">3:00 PM</div>
                                        </div>

                                        <div className="flex-1 text-center md:text-left">
                                            <h3 className="text-3xl md:text-5xl font-extrabold mb-2 uppercase">{upcoming.opponent}</h3>
                                            <p className="text-white/40 font-heading">AWAY</p>
                                        </div>
                                    </div>

                                    <div className="grid md:grid-cols-3 gap-6 pt-12 border-t border-white/5">
                                        <div className="flex items-center gap-3 text-white/50">
                                            <Calendar className="text-accent-blue" size={20} />
                                            <span>{upcoming.date}</span>
                                        </div>
                                        <div className="flex items-center gap-3 text-white/50">
                                            <MapPin className="text-accent-blue" size={20} />
                                            <span>{upcoming.venue}</span>
                                        </div>
                                        <div className="flex items-center gap-3 text-white/50">
                                            <Trophy className="text-accent-blue" size={20} />
                                            <span>{upcoming.competition}</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Bg Glow */}
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-accent-blue/5 blur-[120px] pointer-events-none" />
                            </motion.div>
                        </div>

                        {/* Recent Results Column */}
                        <div className="lg:col-span-4">
                            <span className="section-tag">Match History</span>
                            <h2 className="text-3xl font-bold mb-8">Recent Results</h2>
                            <div className="space-y-4">
                                {recent.map((match, idx) => (
                                    <motion.div
                                        key={idx}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: idx * 0.1 }}
                                        className="glass-card hover:border-accent-blue/30 p-5 group cursor-pointer"
                                    >
                                        <div className="flex justify-between items-center mb-3 text-[10px] text-white/40 font-bold uppercase tracking-widest">
                                            <span>{match.competition}</span>
                                            <span>{match.date}</span>
                                        </div>
                                        <div className="flex items-center justify-between gap-4">
                                            <div className="flex-1 text-sm font-bold uppercase truncate">
                                                {match.home ? 'Vipawa Ladies' : match.opponent}
                                            </div>
                                            <div className="flex items-center justify-center min-w-[80px] h-10 bg-primary-900 rounded-lg group-hover:bg-accent-blue/20 transition-colors">
                                                <span className="text-xl font-extrabold tracking-widest leading-none">
                                                    {match.result}
                                                </span>
                                            </div>
                                            <div className="flex-1 text-sm font-bold uppercase text-right truncate">
                                                {match.home ? match.opponent : 'Vipawa Ladies'}
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Standings Section */}
            <section id="about" className="section pt-20">
                <div className="container-custom">
                    <div className="grid lg:grid-cols-2 gap-20 items-center">

                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="relative"
                        >
                            <span className="section-tag">League Standings</span>
                            <h2 className="section-title">Regional Women Zone 1</h2>

                            <div className="glass-card overflow-hidden">
                                <table className="w-full text-left text-sm">
                                    <thead>
                                        <tr className="bg-white/5 font-heading font-bold uppercase tracking-widest text-[10px]">
                                            <th className="p-4">POS</th>
                                            <th className="p-4">TEAM</th>
                                            <th className="p-4 text-center">P</th>
                                            <th className="p-4 text-center">W</th>
                                            <th className="p-4 text-center">D</th>
                                            <th className="p-4 text-center">L</th>
                                            <th className="p-4 text-right">PTS</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-white/5">
                                        {standings.map((team, idx) => (
                                            <tr key={idx} className={`hover:bg-white/5 transition-colors ${team.team === 'Vipawa Ladies FC' ? 'bg-accent-blue/10' : ''}`}>
                                                <td className="p-4 font-bold">{team.pos}</td>
                                                <td className="p-4 font-bold">{team.team}</td>
                                                <td className="p-4 text-center text-white/60">{team.played}</td>
                                                <td className="p-4 text-center text-white/60">{team.won}</td>
                                                <td className="p-4 text-center text-white/60">{team.drawn}</td>
                                                <td className="p-4 text-center text-white/60">{team.lost}</td>
                                                <td className="p-4 text-right font-black text-accent-blue-light">{team.points}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                                <div className="p-4 bg-white/5 text-[10px] text-white/30 font-bold uppercase flex gap-4">
                                    <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-accent-blue" /> Qualification</span>
                                    <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-red-500" /> Relegation</span>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <span className="section-tag">About the Club</span>
                            <h2 className="text-4xl font-extrabold mb-8">Nurturing Talent since 2021</h2>
                            <p className="text-white/60 leading-relaxed mb-8">
                                Based along Ngong Road, Nairobi, <strong>Vipawa Ladies Football Club</strong> is dedicated to identifying and elevating young female footballers.
                                The name <em>Vipawa</em> captures our core mission: nurturing raw Swahili talent into professional excellence.
                            </p>

                            <div className="grid grid-cols-2 gap-6 mb-10">
                                <div className="p-6 glass-card group hover:bg-accent-blue/5">
                                    <div className="text-3xl font-black text-white/5 font-heading group-hover:text-accent-blue/20 transition-colors">01</div>
                                    <h4 className="font-bold uppercase mb-2">Identification</h4>
                                    <p className="text-xs text-white/40">Finding talent at the grassroots level across Nairobi.</p>
                                </div>
                                <div className="p-6 glass-card group hover:bg-accent-red/5">
                                    <div className="text-3xl font-black text-white/5 font-heading group-hover:text-accent-red/20 transition-colors">02</div>
                                    <h4 className="font-bold uppercase mb-2">Development</h4>
                                    <p className="text-xs text-white/40">Professional training and mentorship for long-term growth.</p>
                                </div>
                            </div>

                            <a href="#mission" className="btn-secondary">Read Our Story</a>
                        </motion.div>

                    </div>
                </div>
            </section>
        </div>
    );
};

export default MatchesContent;
