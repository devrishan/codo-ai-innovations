
"use client";

import { motion } from 'framer-motion';
import { ArrowRight, Globe, Layers, Zap } from 'lucide-react';
import React from 'react';

// --- Components for Model 1 ---

const Navbar = () => (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-black/50 backdrop-blur-xl">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
            <div className="text-xl font-bold tracking-tighter text-white">
                CODO AI <span className="text-blue-500">INNOVATIONS</span>
            </div>
            <div className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-400">
                <a href="#" className="hover:text-white transition-colors">Services</a>
                <a href="#" className="hover:text-white transition-colors">Work</a>
                <a href="#" className="hover:text-white transition-colors">About</a>
                <a href="#" className="px-4 py-2 rounded-full border border-white/10 hover:bg-white hover:text-black transition-all">
                    Contact Us
                </a>
            </div>
        </div>
    </nav>
);

const Hero = () => (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-neutral-950 to-neutral-950" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[100px] animate-pulse" />

        <div className="container mx-auto px-6 relative z-10 text-center">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-blue-400 mb-8">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
                    PREMIUM MODEL V1
                </div>
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/40">
                    Digital Reality,<br />
                    Reimagined.
                </h1>
                <p className="text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto mb-10 leading-relaxed">
                    We craft high-end digital experiences that define the future of interaction.
                    Minimalist perfection meets cutting-edge technology.
                </p>
                <div className="flex items-center justify-center gap-4">
                    <button className="px-8 py-4 rounded-full bg-white text-black font-semibold hover:bg-neutral-200 transition-colors flex items-center gap-2">
                        Explore Portfolio <ArrowRight className="w-4 h-4" />
                    </button>
                    <button className="px-8 py-4 rounded-full border border-white/10 hover:bg-white/5 transition-colors text-white font-semibold">
                        Our Process
                    </button>
                </div>
            </motion.div>
        </div>
    </section>
);

const Features = () => (
    <section className="py-32 border-t border-white/5 bg-neutral-950/50">
        <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-3 gap-8">
                {[
                    { icon: Globe, title: "Global Reach", desc: "Digital solutions that scale across borders with localized optimization." },
                    { icon: Layers, title: "Multi-layered UX", desc: "Depth in design providing intuitive and engaging user journeys." },
                    { icon: Zap, title: "Lightning Performance", desc: "Optimized for speed, ensuring instant load times and fluid interactions." }
                ].map((feature, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="p-8 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] transition-colors group"
                    >
                        <feature.icon className="w-10 h-10 text-blue-500 mb-6 group-hover:scale-110 transition-transform" />
                        <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                        <p className="text-neutral-400">{feature.desc}</p>
                    </motion.div>
                ))}
            </div>
        </div>
    </section>
)

export default function Model1Page() {
    return (
        <div className="flex flex-col">
            <Navbar />
            <Hero />
            <Features />

            {/* Footer Placeholder for visual completeness */}
            <footer className="py-12 border-t border-white/5 text-center text-neutral-500 text-sm">
                <p>&copy; 2024 Codo AI Innovations. All rights reserved.</p>
            </footer>
        </div>
    );
}
