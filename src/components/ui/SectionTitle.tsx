import React from 'react';

interface SectionTitleProps {
    title: string;
    subtitle?: string;
    center?: boolean;
    light?: boolean;
}

const SectionTitle = ({ title, subtitle, center = false, light = false }: SectionTitleProps) => {
    return (
        <div className={`mb-16 ${center ? 'text-center' : 'text-left'}`}>
            {subtitle && (
                <span className={`inline-block py-1 px-3 rounded-full bg-blue-100 text-blue-700 text-sm font-bold tracking-wide mb-4 ${light ? 'bg-white/10 text-blue-300' : ''}`}>
                    {subtitle}
                </span>
            )}
            <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold relative inline-block font-heading ${light ? 'text-white' : 'text-slate-900'}`}>
                {title}
            </h2>
        </div>
    );
};

export default SectionTitle;
