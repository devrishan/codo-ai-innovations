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
        <div className="group bg-white p-8 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 hover:border-blue-100 hover:-translate-y-2 relative overflow-hidden">
            {/* Hover Background Accent */}
            <div className="absolute top-0 left-0 w-1 h-full bg-blue-600 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top"></div>

            <div className="mb-6 text-blue-600 p-4 bg-blue-50 rounded-lg w-16 h-16 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                {icon}
            </div>

            <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                {title}
            </h3>

            <p className="text-slate-600 mb-6 text-sm leading-relaxed">
                {description}
            </p>

            <Link href={link} className="inline-flex items-center text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors group/link">
                Read More
                <ArrowRight size={16} className="ml-2 transform group-hover/link:translate-x-1 transition-transform" />
            </Link>
        </div>
    );
};

export default ServiceCard;
