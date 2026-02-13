'use client';

import Link from 'next/link';
import { ArrowRight, Sparkles, GraduationCap, Briefcase } from 'lucide-react';
import { motion } from 'framer-motion';
import { SpotlightCard } from '@/components/ui/SpotlightCard';

const HeroSection = () => {
    return (
        <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-24 pb-12">

            {/* Dynamic Background Glows - Colors controlled by --primary and --secondary */}
            <motion.div
                animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.3, 0.2] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-[var(--primary)]/20 rounded-full blur-[120px]"
            />
            <motion.div
                animate={{ scale: [1, 1.5, 1], opacity: [0.1, 0.3, 0.1] }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-[var(--secondary)]/10 rounded-full blur-[100px]"
            />

            <div className="container relative z-10 px-4">

                {/* Hero Header */}
                <div className="text-center mb-16 max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--primary)]/10 border border-[var(--primary)]/20 text-[var(--primary)] text-sm font-medium mb-6 backdrop-blur-sm"
                    >
                        <Sparkles size={16} />
                        <span className="tracking-widest uppercase">Innovation Ecosystem</span>
                    </motion.div>

                    <h1 className="text-5xl md:text-7xl font-bold mb-6 font-display text-[var(--foreground)] tracking-tight">
                        CODO AI <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)]">INNOVATIONS</span>
                    </h1>

                    <p className="text-xl text-[var(--muted)] mb-8 max-w-2xl mx-auto leading-relaxed font-body">
                        Pioneering the future through education and enterprise solutions.
                        We are the parent ecosystem empowering the next generation of talent and building autonomous digital systems.
                    </p>
                </div>

                {/* Ecosystem Split Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">

                    {/* Academy Card */}
                    <SpotlightCard spotlightColor="rgba(var(--primary), 0.2)" className="h-full p-8 md:p-12 text-center group border-[var(--border)] bg-[var(--surface)]/50 rounded-[var(--radius)]">
                        <div className="w-20 h-20 mx-auto bg-[var(--primary)]/10 rounded-[var(--radius)] flex items-center justify-center mb-6 group-hover:bg-[var(--primary)]/20 transition-colors">
                            <GraduationCap size={40} className="text-[var(--primary)]" />
                        </div>
                        <h2 className="text-3xl font-bold text-[var(--foreground)] mb-4 font-display">CODO Academy</h2>
                        <p className="text-[var(--muted)] mb-8 leading-relaxed">
                            Premier tech education and training. We shape the innovators of tomorrow with industry-aligned curriculum and mentorship.
                        </p>
                        <Link href="/theme1" className="flex items-center justify-between px-6 py-3 rounded-[var(--radius)] border border-[var(--primary)] text-[var(--primary)] hover:bg-[var(--primary)] hover:text-white transition-all">
                            Visit Academy <ArrowRight size={18} />
                        </Link>
                    </SpotlightCard>

                    {/* Agency Card */}
                    <SpotlightCard spotlightColor="rgba(var(--secondary), 0.2)" className="h-full p-8 md:p-12 text-center group border-[var(--border)] bg-[var(--surface)]/50 rounded-[var(--radius)]">
                        <div className="w-20 h-20 mx-auto bg-[var(--secondary)]/10 rounded-[var(--radius)] flex items-center justify-center mb-6 group-hover:bg-[var(--secondary)]/20 transition-colors">
                            <Briefcase size={40} className="text-[var(--secondary)]" />
                        </div>
                        <h2 className="text-3xl font-bold text-[var(--foreground)] mb-4 font-display">CODO Agency</h2>
                        <p className="text-[var(--muted)] mb-8 leading-relaxed">
                            Enterprise-grade digital solutions. We engineer custom software, AI systems, and mobile applications for global brands.
                        </p>
                        <Link href="/theme2" className="flex items-center justify-between px-6 py-3 rounded-[var(--radius)] bg-[var(--primary)] text-white shadow-[0_0_15px_var(--primary-glow)] hover:opacity-90 transition-all">
                            Explore Services <ArrowRight size={18} />
                        </Link>
                    </SpotlightCard>

                </div>

            </div>
        </section>
    );
};

export default HeroSection;
