import React from 'react';
import PageHeader from '@/components/ui/PageHeader';
import SectionTitle from '@/components/ui/SectionTitle';
import Link from 'next/link';
import { Code, Smartphone, Brain, Globe, Database, Cloud } from 'lucide-react';

export default function ServicesPage() {
    const services = [
        {
            id: 'web-development',
            title: 'Web Application Development',
            description: 'We build scalable, secure, and high-performance web applications tailored to your business needs.',
            features: ['Custom Web Portals', 'E-commerce Solutions', 'SaaS Platforms', 'Progressive Web Apps (PWA)'],
            icon: <Globe size={40} className="text-blue-600" />
        },
        {
            id: 'mobile-apps',
            title: 'Mobile App Development',
            description: 'Native and cross-platform mobile apps that provide seamless user experiences on iOS and Android.',
            features: ['iOS App Development', 'Android App Development', 'Flutter / React Native', 'App UI/UX Design'],
            icon: <Smartphone size={40} className="text-blue-600" />
        },
        {
            id: 'ai-solutions',
            title: 'AI & Machine Learning',
            description: 'Leverage the power of Artificial Intelligence to automate processes and gain data-driven insights.',
            features: ['Predictive Analytics', 'Natural Language Processing', 'Computer Vision', 'Chatbot Development'],
            icon: <Brain size={40} className="text-blue-600" />
        },
        {
            id: 'custom-software',
            title: 'Custom Software Development',
            description: 'Tailor-made software solutions designed to address your unique business challenges and goals.',
            features: ['Enterprise Resource Planning (ERP)', 'Customer Relationship Management (CRM)', 'Workflow Automation', 'Legacy System Modernization'],
            icon: <Code size={40} className="text-blue-600" />
        }
    ];

    return (
        <div className="flex flex-col min-h-screen">
            <PageHeader title="Our Services" breadcrumb="Services" />

            {/* Services List */}
            <section className="section bg-white">
                <div className="container">
                    <div className="grid grid-cols-1 gap-12">
                        {services.map((service, index) => (
                            <div key={service.id} className={`flex flex-col md:flex-row gap-8 items-center ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                                <div className="flex-1">
                                    <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100 hover:shadow-lg transition-shadow">
                                        <div className="mb-6 w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm">
                                            {service.icon}
                                        </div>
                                        <h3 className="text-2xl font-bold text-slate-900 mb-4">{service.title}</h3>
                                        <p className="text-slate-600 mb-6 leading-relaxed">
                                            {service.description}
                                        </p>
                                        <ul className="space-y-2 mb-8">
                                            {service.features.map((feature, i) => (
                                                <li key={i} className="flex items-center gap-2 text-slate-700 font-medium">
                                                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                                                    {feature}
                                                </li>
                                            ))}
                                        </ul>
                                        <Link href={`/contact?service=${service.id}`} className="btn btn-primary rounded-full px-8">
                                            Request a Quote
                                        </Link>
                                    </div>
                                </div>
                                <div className="flex-1">
                                    {/* Placeholder for Service Image */}
                                    <div className="bg-slate-200 rounded-2xl aspect-video flex items-center justify-center text-slate-400 font-medium relative overflow-hidden group">
                                        <div className="absolute inset-0 bg-blue-900/10 group-hover:bg-blue-900/0 transition-colors"></div>
                                        [{service.title} Illustration]
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Technology Stack */}
            <section className="section bg-slate-900 text-white">
                <div className="container text-center">
                    <SectionTitle title="Technology Stack" subtitle="Tools We Use" center light />

                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 mt-12">
                        {['React', 'Next.js', 'Node.js', 'Python', 'Flutter', 'AWS', 'Docker', 'PostgreSQL', 'MongoDB', 'TensorFlow', 'Figma', 'Kubernetes'].map((tech) => (
                            <div key={tech} className="bg-slate-800 p-6 rounded-lg hover:bg-slate-700 transition-colors flex flex-col items-center justify-center gap-3 border border-slate-700 group">
                                <div className="w-12 h-12 bg-slate-900 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                                    <Code size={24} className="text-blue-400" />
                                </div>
                                <span className="font-medium text-slate-300 group-hover:text-white transition-colors">{tech}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 bg-blue-600 text-white text-center">
                <div className="container">
                    <h2 className="text-3xl font-bold mb-6">Have a project in mind?</h2>
                    <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                        Let's discuss how we can bring your ideas to life with our expert development services.
                    </p>
                    <Link href="/contact" className="btn bg-white text-blue-600 hover:bg-slate-100 px-8 py-3 rounded-full font-bold">
                        Start a Project
                    </Link>
                </div>
            </section>
        </div>
    );
}
