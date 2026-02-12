import React from 'react';
import PageHeader from '@/components/ui/PageHeader';
import SectionTitle from '@/components/ui/SectionTitle';
import Link from 'next/link';
import { Briefcase, MapPin, Clock, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function CareersPage() {
    const benefits = [
        'Competitive Salary & Equity',
        'Health & Wellness Support',
        'Flexible Work Hours',
        'Remote-First Culture',
        'Learning & Development Budget',
        'Modern Tech Stack',
    ];

    const jobs = [
        {
            id: 1,
            title: 'Senior Full Stack Engineer',
            department: 'Engineering',
            location: 'Remote / Hybrid',
            type: 'Full-time',
        },
        {
            id: 2,
            title: 'AI Research Scientist',
            department: 'Data Science',
            location: 'Silicon Valley, CA',
            type: 'Full-time',
        },
        {
            id: 3,
            title: 'UI/UX Designer',
            department: 'Design',
            location: 'Remote',
            type: 'Contract',
        },
        {
            id: 4,
            title: 'Product Manager',
            department: 'Product',
            location: 'New York, NY',
            type: 'Full-time',
        },
    ];

    return (
        <div className="flex flex-col min-h-screen">
            <PageHeader title="Careers" breadcrumb="Careers" />

            {/* Intro / Culture */}
            <section className="section bg-white">
                <div className="container">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <SectionTitle title="Join Our Team" subtitle="Life at CODO" />
                            <p className="text-lg text-slate-700 leading-relaxed mb-6">
                                We are always looking for passionate people to help us build the future of technology.
                                At CODO AI Innovations, work is more than just a job — it's a calling to solve complex challenges.
                            </p>
                            <p className="text-slate-600 leading-relaxed mb-8">
                                Whether you are a developer, designer, or strategist, we offer an environment that fosters growth,
                                creativity, and collaboration.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {benefits.map((benefit, index) => (
                                    <div key={index} className="flex items-center gap-3">
                                        <CheckCircle2 className="text-emerald-500 shrink-0" size={20} />
                                        <span className="text-slate-700 font-medium">{benefit}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="relative">
                            {/* Placeholder for Culture Image */}
                            <div className="bg-slate-100 rounded-2xl aspect-[4/3] flex items-center justify-center text-slate-400 font-medium relative overflow-hidden">
                                <div className="absolute inset-0 bg-blue-900/5"></div>
                                [Office/Culture Photo]
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Open Positions */}
            <section className="section bg-slate-50">
                <div className="container">
                    <SectionTitle title="Open Positions" subtitle="We're Hiring" center />

                    <div className="max-w-4xl mx-auto grid gap-6">
                        {jobs.map((job) => (
                            <div key={job.id} className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex flex-col md:flex-row items-start md:items-center justify-between gap-6 group">
                                <div>
                                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors mb-2">
                                        {job.title}
                                    </h3>
                                    <div className="flex flex-wrap gap-4 text-sm text-slate-500">
                                        <span className="flex items-center gap-1">
                                            <Briefcase size={16} /> {job.department}
                                        </span>
                                        <span className="flex items-center gap-1">
                                            <MapPin size={16} /> {job.location}
                                        </span>
                                        <span className="flex items-center gap-1">
                                            <Clock size={16} /> {job.type}
                                        </span>
                                    </div>
                                </div>

                                <Link href={`/careers/${job.id}`} className="btn btn-outline border-slate-200 text-slate-600 hover:border-blue-600 hover:bg-blue-600 hover:text-white rounded-full px-6 flex items-center gap-2 whitespace-nowrap">
                                    Apply Now <ArrowRight size={16} />
                                </Link>
                            </div>
                        ))}
                    </div>

                    <div className="mt-12 text-center">
                        <p className="text-slate-600">
                            Don't see a role that fits?
                            <Link href="/contact" className="text-blue-600 font-semibold hover:underline ml-1">
                                Contact us
                            </Link>
                            {' '}and tell us how you can make a difference.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}
