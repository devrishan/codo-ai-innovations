import React from 'react';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

interface PageHeaderProps {
    title: string;
    breadcrumb: string;
}

const PageHeader = ({ title, breadcrumb }: PageHeaderProps) => {
    return (
        <section className="relative pt-32 pb-20 overflow-hidden">
            {/* Dynamic Background */}
            <div className="absolute inset-0 bg-slate-950 z-0">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-900/20 rounded-full blur-[100px] animate-pulse"></div>
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cyan-900/20 rounded-full blur-[100px] animate-pulse delay-700"></div>
            </div>

            {/* Grid Overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:30px_30px] z-10"></div>

            <div className="container relative z-20 text-center">
                <h1 className="heading-xl mb-6 animate-in fade-in slide-in-from-bottom-8 duration-700">{title}</h1>

                <div className="inline-flex items-center justify-center gap-3 px-6 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm animate-in fade-in slide-in-from-bottom-10 duration-700 delay-100">
                    <Link href="/" className="text-slate-400 hover:text-white transition-colors text-sm font-medium">Home</Link>
                    <ChevronRight size={14} className="text-slate-600" />
                    <span className="text-purple-400 font-medium text-sm tracking-wide">{breadcrumb}</span>
                </div>
            </div>
        </section>
    );
};

export default PageHeader;
