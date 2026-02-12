import HeroSection from '@/components/home/HeroSection';
import ServicesSection from '@/components/home/ServicesSection';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesSection />

      {/* Quick CTA / Banner Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/40 to-slate-900/40 z-0"></div>
        <div className="container relative z-10 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 font-display">
            Ready to <span className="text-cyan-400">Architect</span> the Future?
          </h2>
          <Link href="/contact" className="btn btn-primary rounded-full px-12 py-5 text-lg shadow-2xl shadow-purple-900/50">
            Start Your Project
          </Link>
        </div>
      </section>
    </>
  );
}
