import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

interface PageHeaderProps {
    title: string;
    breadcrumb: string;
}

const PageHeader = ({ title, breadcrumb }: PageHeaderProps) => {
    return (
        <section className="relative bg-slate-900 pt-32 pb-24 text-white overflow-hidden">
            {/* Background with overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-slate-900 opacity-90 z-0"></div>
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-20 mix-blend-overlay z-0"></div>

            <div className="container relative z-10 text-center">
                <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight font-heading">{title}</h1>

                <div className="flex items-center justify-center gap-2 text-base font-medium text-slate-300">
                    <Link href="/" className="hover:text-white transition-colors">Home</Link>
                    <ChevronRight size={16} />
                    <span className="text-blue-400">{breadcrumb}</span>
                </div>
            </div>
        </section>
    );
};

export default PageHeader;
