import React from 'react';

interface SectionTitleProps {
    title: string;
    subtitle?: string;
    center?: boolean;
    light?: boolean;
}

const SectionTitle = ({ title, subtitle, center = false, light = false }: SectionTitleProps) => {
    return (
        <div className={`mb-12 ${center ? 'text-center' : 'text-left'}`}>
            {subtitle && (
                <span className={`block uppercase tracking-widest text-sm font-bold mb-2 ${light ? 'text-blue-400' : 'text-blue-600'}`}>
                    {subtitle}
                </span>
            )}
            <h2 className={`text-3xl md:text-4xl font-bold relative inline-block ${light ? 'text-white' : 'text-slate-900'}`}>
                {title}
                {/* Underline Decoration */}
                <span className={`absolute -bottom-3 ${center ? 'left-1/2 -translate-x-1/2' : 'left-0'} w-12 h-1 bg-blue-600 rounded-full`}></span>
            </h2>
        </div>
    );
};

export default SectionTitle;
