'use client';

import { Bot, Database, Globe } from 'lucide-react';
import Link from 'next/link';
import { SpotlightCard } from '@/components/ui/SpotlightCard';

const services = [
    {
        id: 1,
        title: 'AI & Machine Learning',
        description: 'Custom neural networks, predictive analytics, and autonomous agents tailored for enterprise scale.',
        icon: <Bot size={32} />,
        color: 'from-purple-500 to-pink-500',
        spotlight: 'rgba(168, 85, 247, 0.25)' // Purple
    },
    {
        id: 2,
        title: 'Web 3.0 & Blockchain',
        description: 'Decentralized applications, smart contracts, and secure digital asset management systems.',
        icon: <Database size={32} />,
        color: 'from-cyan-500 to-blue-500',
        spotlight: 'rgba(6, 182, 212, 0.25)' // Cyan
    },
    {
        id: 3,
        title: 'Immersive Web Exp',
        description: 'High-performance 3D web applications using WebGL and Three.js for next-level engagement.',
        icon: <Globe size={32} />,
        color: 'from-emerald-400 to-cyan-500',
        spotlight: 'rgba(52, 211, 153, 0.25)' // Emerald
    }
];

const ServicesSection = () => {
    return (
        <section className="section relative">
            <div className="container">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 font-display text-white">
                        Core <span className="text-purple-500">Capabilities</span>
                    </h2>
                    <p className="text-slate-400 max-w-2xl mx-auto">
                        Leveraging cutting-edge technologies to solve complex challenges.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service) => (
                        <SpotlightCard key={service.id} spotlightColor={service.spotlight} className="p-8 h-full">
                            <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.color} p-[1px] mb-6 relative z-10`}>
                                <div className="w-full h-full bg-slate-900 rounded-xl flex items-center justify-center text-white">
                                    {service.icon}
                                </div>
                            </div>

                            <h3 className="text-2xl font-bold text-white mb-4 font-display relative z-10 group-hover:text-purple-300 transition-colors">
                                {service.title}
                            </h3>

                            <p className="text-slate-400 leading-relaxed mb-6 relative z-10 group-hover:text-slate-300 transition-colors">
                                {service.description}
                            </p>

                            <Link href="/services" className="inline-flex items-center text-sm font-bold text-white/50 group-hover:text-white transition-colors uppercase tracking-widest relative z-10">
                                Learn More <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                            </Link>
                        </SpotlightCard>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;
