import PageHeader from '@/components/ui/PageHeader';
import SectionTitle from '@/components/ui/SectionTitle';

const AboutPage = () => {
    return (
        <>
            <PageHeader title="About Codo AI" breadcrumb="About Us" />

            <section className="section bg-slate-950">
                <div className="container">
                    <SectionTitle title="Pioneering the Future" subtitle="Our Vision" />

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="glass-card p-8 rounded-2xl border-l-4 border-l-purple-500">
                            <h3 className="text-2xl font-bold text-white mb-4">The Architect of Intelligence</h3>
                            <p className="text-slate-400 mb-6 leading-relaxed">
                                At Codo AI, we don't just predict the future; we code it. We are a collective of visionaries, engineers, and creatives dedicated to pushing the boundaries of artificial intelligence.
                            </p>
                            <p className="text-slate-400 leading-relaxed">
                                Our mission is to democratize access to advanced AI technologies, empowering businesses to automate the mundane and innovate the extraordinary.
                            </p>
                        </div>

                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-cyan-500 blur-3xl opacity-20 animate-pulse"></div>
                            <div className="glass-card aspect-video rounded-2xl flex items-center justify-center border border-white/10 relative z-10">
                                <span className="text-slate-500 font-mono text-sm">[ Holographic Presentation Placeholder ]</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section bg-slate-900 border-t border-slate-800">
                <div className="container">
                    <SectionTitle title="The Neural Network" subtitle="Our Team" center />

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[1, 2, 3, 4].map((item) => (
                            <div key={item} className="group relative">
                                <div className="aspect-[4/5] bg-slate-800 rounded-xl overflow-hidden mb-4 relative">
                                    <div className="absolute inset-0 bg-gradient-to-t from-purple-900/80 to-transparent opacity-60"></div>
                                    {/* Fallback Avatar */}
                                    <div className="w-full h-full flex items-center justify-center text-slate-600 bg-slate-900">
                                        User {item}
                                    </div>
                                </div>
                                <h3 className="text-xl font-bold text-white">Agent {item}</h3>
                                <p className="text-purple-400 text-sm font-mono">Lead Engineer</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default AboutPage;
