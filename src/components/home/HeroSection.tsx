'use client';

import Link from 'next/link';
import { ArrowRight, Cpu, Sparkles } from 'lucide-react';

const HeroSection = () => {
    return (
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20">
            {/* Abstract Background Elements */}
            <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[120px] animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-[100px] animate-pulse delay-1000"></div>

            {/* Grid Pattern Overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_80%)]"></div>

            <div className="container relative z-10 px-4 text-center">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-cyan-400 text-sm font-medium mb-8 backdrop-blur-sm animate-in fade-in slide-in-from-bottom-4 duration-700">
                    <Sparkles size={16} />
                    <span className="tracking-widest uppercase">The Future of Intelligence</span>
                </div>

                <h1 className="heading-xl mb-8 max-w-5xl mx-auto animate-in fade-in slide-in-from-bottom-8 duration-1000">
                    Build the <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 text-glow">Impossible</span> with AI
                </h1>

                <p className="text-xl md:text-2xl text-slate-400 mb-12 max-w-3xl mx-auto leading-relaxed animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-200">
                    We engineer autonomous systems, immersive digital experiences, and next-gen software solutions that redefine what's possible.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-6 animate-in fade-in slide-in-from-bottom-16 duration-1000 delay-300">
                    <Link href="/contact" className="btn btn-primary group">
                        Start Innovation <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <Link href="/services" className="btn btn-outline group">
                        Explore Solutions
                    </Link>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-slate-500">
                <div className="w-6 h-10 border-2 border-slate-700 rounded-full flex justify-center pt-2">
                    <div className="w-1 h-2 bg-purple-500 rounded-full animate-pulse"></div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
