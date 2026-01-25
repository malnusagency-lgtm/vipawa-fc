const SocialProof = () => {
    const slogans = ['Kick Like A Queen', 'Talent Into Power', 'Nairobi to the World', 'Empower a Girl', 'Inspire a Generation'];

    return (
        <section className="border-y border-white/5 bg-white/5 py-12">
            <div className="container-custom flex overflow-hidden">
                <div className="flex gap-20 animate-marquee whitespace-nowrap">
                    {slogans.map((slogan, i) => (
                        <span key={i} className="text-4xl font-black uppercase text-white/5">{slogan}</span>
                    ))}
                    {slogans.map((slogan, i) => (
                        <span key={`dup-${i}`} className="text-4xl font-black uppercase text-white/5">{slogan}</span>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SocialProof;
