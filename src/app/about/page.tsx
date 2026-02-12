import React from 'react';
import Image from 'next/image';
import PageHeader from '@/components/ui/PageHeader';
import SectionTitle from '@/components/ui/SectionTitle';
import { Target, Eye, Heart, Linkedin } from 'lucide-react';

export default function AboutPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <PageHeader title="About Us" breadcrumb="About" />

            {/* Intro Section */}
            <section className="section bg-white">
                <div className="container">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="relative">
                            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl aspect-[4/3] bg-slate-200">
                                {/* Placeholder for About Image */}
                                <div className="absolute inset-0 flex items-center justify-center text-slate-400 font-medium">
                                    [Corporate Office / Team Image]
                                </div>
                            </div>
                            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-blue-100 rounded-lg -z-0"></div>
                            <div className="absolute -top-6 -right-6 w-24 h-24 border-4 border-blue-500 rounded-full -z-0 opacity-20"></div>
                        </div>

                        <div>
                            <SectionTitle title="Who We Are" subtitle="Our Story" />
                            <p className="text-lg text-slate-700 leading-relaxed mb-6 font-medium">
                                CODO AI Innovations is a forward-thinking technology company dedicated to transforming businesses through digital excellence.
                            </p>
                            <p className="text-slate-600 leading-relaxed mb-6">
                                Established with a vision to bridge the gap between complex technology and business utility,
                                we operate as a dual-vertical ecosystem. Our **Agency** division delivers enterprise-grade software solutions,
                                while our **Academy** division nurtures the next generation of tech talent.
                            </p>
                            <p className="text-slate-600 leading-relaxed">
                                We believe in the power of **AI-driven innovation** to solve real-world problems. Our team of expert engineers,
                                designers, and strategists work collaboratively to build products that are not just functional, but transformative.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Vision, Mission, Values */}
            <section className="section bg-slate-50">
                <div className="container">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Vision */}
                        <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-shadow border-t-4 border-blue-600">
                            <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mb-6">
                                <Eye size={28} />
                            </div>
                            <h3 className="text-xl font-bold mb-4 text-slate-900">Our Vision</h3>
                            <p className="text-slate-600 leading-relaxed">
                                To be a global leader in AI-driven technology solutions, empowering businesses to achieve digital sovereignty and operational excellence.
                            </p>
                        </div>

                        {/* Mission */}
                        <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-shadow border-t-4 border-emerald-500">
                            <div className="w-14 h-14 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mb-6">
                                <Target size={28} />
                            </div>
                            <h3 className="text-xl font-bold mb-4 text-slate-900">Our Mission</h3>
                            <p className="text-slate-600 leading-relaxed">
                                To deliver high-impact digital products and foster a sustainable talent ecosystem that drives continuous innovation and industry growth.
                            </p>
                        </div>

                        {/* Values */}
                        <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-shadow border-t-4 border-amber-500">
                            <div className="w-14 h-14 bg-amber-50 text-amber-500 rounded-full flex items-center justify-center mb-6">
                                <Heart size={28} />
                            </div>
                            <h3 className="text-xl font-bold mb-4 text-slate-900">Core Values</h3>
                            <p className="text-slate-600 leading-relaxed">
                                Integrity in every line of code. Transparency in every partnership. Excellence in every delivery. Innovation in every solution.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="section bg-white">
                <div className="container">
                    <SectionTitle title="Meet The Leadership" subtitle="Our Team" center />

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[1, 2, 3, 4].map((item) => (
                            <div key={item} className="group">
                                <div className="relative overflow-hidden rounded-xl mb-4 bg-slate-100 aspect-[3/4]">
                                    {/* Placeholder for Team Image */}
                                    <div className="absolute inset-0 flex items-center justify-center text-slate-300">
                                        [Photo]
                                    </div>
                                    {/* Overlay on Hover */}
                                    <div className="absolute inset-0 bg-blue-900/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                        <a href="#" className="p-3 bg-white text-blue-600 rounded-full hover:bg-blue-600 hover:text-white transition-colors">
                                            <Linkedin size={20} />
                                        </a>
                                    </div>
                                </div>
                                <h3 className="text-lg font-bold text-slate-900 text-center">Team Member Name</h3>
                                <p className="text-blue-600 text-sm font-medium text-center">Position / Role</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

        </div>
    );
}
