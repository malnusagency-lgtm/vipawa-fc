import Link from 'next/link';

export const metadata = {
    title: 'Page Not Found | Vipawa Ladies CF',
};

export default function NotFound() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center text-center px-4 relative overflow-hidden">
            {/* Background glow */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gold/[0.04] blur-3xl" />
            </div>

            {/* Giant 404 */}
            <div className="text-[clamp(100px,25vw,220px)] font-black leading-none text-transparent bg-clip-text bg-gradient-to-b from-gold/30 to-transparent select-none pointer-events-none" aria-hidden="true">
                404
            </div>

            <div className="-mt-8 relative z-10">
                <span className="section-tag">Lost on the Pitch</span>
                <h1 className="text-fluid-3xl font-black uppercase mt-4 mb-4">
                    Page Not Found
                </h1>
                <p className="text-white/60 font-medium text-fluid-base max-w-md mx-auto mb-10">
                    Looks like this page took a wrong turn. Let's get you back to the game.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Link href="/" className="btn-gold">
                        Back to Home
                    </Link>
                    <Link href="/matches" className="btn-secondary">
                        View Matches
                    </Link>
                </div>
            </div>

            {/* Decorative line */}
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
        </div>
    );
}
