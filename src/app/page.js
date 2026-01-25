import Hero from '@/sections/Hero';
import QuickAccess from '@/sections/QuickAccess';
import SocialProof from '@/sections/SocialProof';

export const metadata = {
  title: "Home | Vipawa Ladies FC",
  description: "Join the movement. Talented young women playing professional football in Nairobi.",
};

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <QuickAccess />
      <SocialProof />
    </main>
  );
}
