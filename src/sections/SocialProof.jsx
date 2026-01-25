const SocialProof = () => {
    const slogans = ['Kick Like A Queen', 'Talent Into Power', 'Nairobi to the World', 'Empower a Girl', 'Inspire a Generation'];

    return (
        <section className="border-y border-white/5 bg-white/5 py-8 md:py-12 overflow-hidden">
            <div className="container-custom flex">
                <div className="flex gap-10 md:gap-20 animate-marquee whitespace-nowrap">
                    {slogans.map((slogan, i) => (
                        <span key={i} className="text-2xl md:text-4xl font-black uppercase text-white/10">{slogan}</span>
                    ))}
                    {slogans.map((slogan, i) => (
                        <span key={`dup-${i}`} className="text-2xl md:text-4xl font-black uppercase text-white/10">{slogan}</span>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SocialProof;
