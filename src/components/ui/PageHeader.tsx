import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

interface PageHeaderProps {
    title: string;
    breadcrumb: string;
}

const PageHeader = ({ title, breadcrumb }: PageHeaderProps) => {
    return (
        <section className="relative bg-slate-900 py-20 text-white overflow-hidden">
            {/* Background with overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-slate-900 opacity-90 z-0"></div>
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-20 mix-blend-overlay z-0"></div>

            <div className="container relative z-10 text-center">
                <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">{title}</h1>

                <div className="flex items-center justify-center gap-2 text-sm md:text-base text-slate-300">
                    <Link href="/" className="hover:text-white transition-colors">Home</Link>
                    <ChevronRight size={16} />
                    <span className="text-blue-400 font-medium">{breadcrumb}</span>
                </div>
            </div>
        </section>
    );
};

export default PageHeader;
