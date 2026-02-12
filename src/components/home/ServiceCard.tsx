import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface ServiceCardProps {
    title: string;
    description: string;
    icon: React.ReactNode;
    link: string;
}

const ServiceCard = ({ title, description, icon, link }: ServiceCardProps) => {
    return (
        <div className="group bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 hover:border-blue-200 hover:-translate-y-2 relative overflow-hidden h-full flex flex-col">
            {/* Hover Background Accent */}
            <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>

            <div className="mb-6 text-blue-600 p-4 bg-blue-50 rounded-2xl w-16 h-16 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300 shadow-sm group-hover:shadow-blue-500/30">
                {icon}
            </div>

            <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors font-heading">
                {title}
            </h3>

            <p className="text-slate-600 mb-6 text-base leading-relaxed flex-grow">
                {description}
            </p>

            <Link href={link} className="inline-flex items-center text-sm font-bold text-blue-600 hover:text-blue-700 transition-colors group/link mt-auto">
                Learn More
                <ArrowRight size={16} className="ml-2 transform group-hover/link:translate-x-1 transition-transform" />
            </Link>
        </div>
    );
};

export default ServiceCard;
