'use client';

import React, { useState } from 'react';
import PageHeader from '@/components/ui/PageHeader';
import { ExternalLink, ArrowRight } from 'lucide-react';
import Image from 'next/image';

const projects = [
    { id: 1, title: 'E-Commerce Platform', category: 'web', image: 'bg-blue-100', description: 'A scalable online store with real-time inventory management.' },
    { id: 2, title: 'FinTech Dashboard', category: 'web', image: 'bg-emerald-100', description: 'Data visualization and analytics for financial institutions.' },
    { id: 3, title: 'Healthcare App', category: 'mobile', image: 'bg-rose-100', description: 'Telemedicine application connecting patients with doctors.' },
    { id: 4, title: 'AI Chatbot', category: 'ai', image: 'bg-purple-100', description: 'Customer support automation using Natural Language Processing.' },
    { id: 5, title: 'Logistics Tracker', category: 'mobile', image: 'bg-amber-100', description: 'Real-time fleet tracking and efficient route optimization.' },
    { id: 6, title: 'Smart Home System', category: 'ai', image: 'bg-cyan-100', description: 'IoT integration with predictive maintenance capabilities.' },
];

const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'web', label: 'Web Development' },
    { id: 'mobile', label: 'Mobile Apps' },
    { id: 'ai', label: 'AI Solutions' },
];

export default function PortfolioPage() {
    const [filter, setFilter] = useState('all');

    const filteredProjects = filter === 'all'
        ? projects
        : projects.filter(p => p.category === filter);

    return (
        <div className="flex flex-col min-h-screen">
            <PageHeader title="Our Portfolio" breadcrumb="Portfolio" />

            <section className="section bg-white">
                <div className="container">

                    {/* Filter Buttons */}
                    <div className="flex flex-wrap justify-center gap-4 mb-12">
                        {categories.map((cat) => (
                            <button
                                key={cat.id}
                                onClick={() => setFilter(cat.id)}
                                className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${filter === cat.id
                                        ? 'bg-blue-600 text-white shadow-md'
                                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                                    }`}
                            >
                                {cat.label}
                            </button>
                        ))}
                    </div>

                    {/* Projects Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredProjects.map((project) => (
                            <div key={project.id} className="group relative bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100">
                                {/* Image Placeholder */}
                                <div className={`aspect-[4/3] ${project.image} flex items-center justify-center text-slate-400 font-medium relative overflow-hidden`}>
                                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-6 text-center">
                                        <p className="text-white translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                                            {project.description}
                                        </p>
                                    </div>
                                    <span className="group-hover:opacity-0 transition-opacity">{[project.title]}</span>
                                </div>

                                <div className="p-6">
                                    <div className="flex justify-between items-start mb-2">
                                        <div>
                                            <span className="text-xs font-bold uppercase tracking-wider text-blue-600 mb-1 block">
                                                {categories.find(c => c.id === project.category)?.label}
                                            </span>
                                            <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                                                {project.title}
                                            </h3>
                                        </div>
                                        <a href="#" className="p-2 bg-slate-50 rounded-full text-slate-400 hover:bg-blue-600 hover:text-white transition-colors">
                                            <ExternalLink size={18} />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {filteredProjects.length === 0 && (
                        <div className="text-center py-20 text-slate-500">
                            No projects found in this category.
                        </div>
                    )}

                    <div className="mt-16 text-center">
                        <p className="text-slate-600 mb-6">Want to see more of our work?</p>
                        <a href="/contact" className="btn btn-outline border-slate-300 text-slate-600 hover:border-slate-900 hover:text-slate-900 px-8">
                            Contact Us for Case Studies
                        </a>
                    </div>

                </div>
            </section>
        </div>
    );
}
