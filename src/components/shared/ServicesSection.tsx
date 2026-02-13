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
    },
    {
        id: 2,
        title: 'Web 3.0 & Blockchain',
        description: 'Decentralized applications, smart contracts, and secure digital asset management systems.',
        icon: <Database size={32} />,
    },
    {
        id: 3,
        title: 'Immersive Web Exp',
        description: 'High-performance 3D web applications using WebGL and Three.js for next-level engagement.',
        icon: <Globe size={32} />,
    }
];

const ServicesSection = () => {
    return (
        <section className="py-20 bg-[var(--surface-highlight)]/20 relative">
            <div className="container">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 font-display text-[var(--foreground)]">
                        Core <span className="text-[var(--primary)]">Capabilities</span>
                    </h2>
                    <p className="text-[var(--muted)] max-w-2xl mx-auto">
                        Leveraging cutting-edge technologies to solve complex challenges.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service) => (
                        <SpotlightCard key={service.id} className="p-8 h-full bg-[var(--surface)] border-[var(--border)] rounded-[var(--radius)]">
                            <div className="w-16 h-16 rounded-[var(--radius)] bg-[var(--primary)]/10 flex items-center justify-center text-[var(--primary)] mb-6">
                                {service.icon}
                            </div>

                            <h3 className="text-2xl font-bold text-[var(--foreground)] mb-4 font-display group-hover:text-[var(--primary)] transition-colors">
                                {service.title}
                            </h3>

                            <p className="text-[var(--muted)] leading-relaxed mb-6">
                                {service.description}
                            </p>

                            <Link href="/services" className="inline-flex items-center text-sm font-bold text-[var(--primary)] transition-colors uppercase tracking-widest">
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
