import PageHeader from '@/components/ui/PageHeader';
import SectionTitle from '@/components/ui/SectionTitle';
import { Bot, Brain, Globe, Shield, Smartphone, Zap } from 'lucide-react';

const services = [
    { icon: Bot, title: "Autonomous Agents", desc: "Self-governing AI systems that execute complex workflows without human intervention." },
    { icon: Brain, title: "Deep Learning", desc: "Neural networks designed to recognize patterns and make data-driven predictions." },
    { icon: Globe, title: "Web 3.0 & Metaverse", desc: "Decentralized platforms and immersive virtual environments built on blockchain." },
    { icon: Smartphone, title: "Smart Interfaces", desc: "Next-gen mobile and web applications with adaptive, context-aware UI/UX." },
    { icon: Shield, title: "Cybersecurity AI", desc: "Proactive threat detection utilizing machine learning to predict attacks." },
    { icon: Zap, title: "RPA Automation", desc: "Robotic Process Automation to streamline high-volume enterprise operations." }
];

const ServicesPage = () => {
    return (
        <>
            <PageHeader title="Core Capabilities" breadcrumb="Services" />

            <section className="section bg-slate-950">
                <div className="container">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service, index) => (
                            <div key={index} className="glass-card p-8 rounded-2xl hover:bg-white/5 transition-colors group border border-slate-800 hover:border-cyan-500/50">
                                <service.icon size={40} className="text-cyan-400 mb-6 group-hover:scale-110 transition-transform group-hover:text-cyan-300" />
                                <h3 className="text-xl font-bold text-white mb-3 font-display">{service.title}</h3>
                                <p className="text-slate-400 leading-relaxed text-sm">
                                    {service.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default ServicesPage;
