'use client';

import PageHeader from '@/components/ui/PageHeader';
import SectionTitle from '@/components/ui/SectionTitle';

const projects = [
    { id: 1, title: 'Project Nexus', category: 'AI', image: 'bg-purple-900' },
    { id: 2, title: 'Cyber Vault', category: 'Web3', image: 'bg-cyan-900' },
    { id: 3, title: 'Auto Bot', category: 'Robotics', image: 'bg-slate-800' },
    { id: 4, title: 'Neural Net', category: 'AI', image: 'bg-indigo-900' },
    { id: 5, title: 'Meta Space', category: 'VR', image: 'bg-pink-900' },
    { id: 6, title: 'Smart Grid', category: 'IoT', image: 'bg-green-900' },
];

const PortfolioPage = () => {
    return (
        <>
            <PageHeader title="Innovation Gallery" breadcrumb="Portfolio" />

            <section className="section bg-slate-950">
                <div className="container">
                    {/* Filter Tabs */}
                    <div className="flex flex-wrap justify-center gap-4 mb-12">
                        {['All', 'AI Solutions', 'Robotics', 'Web 3.0'].map((tab) => (
                            <button key={tab} className="px-6 py-2 rounded-full border border-slate-800 text-slate-400 hover:text-white hover:border-purple-500 hover:bg-purple-500/10 transition-all text-sm font-bold uppercase tracking-wider">
                                {tab}
                            </button>
                        ))}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.map((project) => (
                            <div key={project.id} className="group relative rounded-xl overflow-hidden aspect-[4/3] cursor-pointer">
                                {/* Image Placeholder */}
                                <div className={`absolute inset-0 ${project.image} opacity-50 transition-transform duration-500 group-hover:scale-110`}></div>

                                {/* Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>

                                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-2 group-hover:translate-y-0 transition-transform">
                                    <div className="text-cyan-400 text-xs font-bold uppercase tracking-widest mb-2">{project.category}</div>
                                    <h3 className="text-2xl font-bold text-white font-display">{project.title}</h3>
                                </div>

                                {/* Hover Border Effect */}
                                <div className="absolute inset-0 border-2 border-transparent group-hover:border-purple-500/50 rounded-xl transition-colors pointer-events-none"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default PortfolioPage;
