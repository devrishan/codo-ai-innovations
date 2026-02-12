interface SectionTitleProps {
    title: string;
    subtitle?: string;
    center?: boolean;
}

const SectionTitle = ({ title, subtitle, center = false }: SectionTitleProps) => {
    return (
        <div className={`mb-16 ${center ? 'text-center' : 'text-left'}`}>
            {subtitle && (
                <span className="inline-block py-1 px-3 rounded border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-xs font-bold tracking-[0.2em] mb-4 uppercase">
                    {subtitle}
                </span>
            )}
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold relative inline-block font-display text-white">
                {title}
                {/* Neon Underline Effect */}
                <span className={`absolute -bottom-4 ${center ? 'left-1/2 -translate-x-1/2' : 'left-0'} w-24 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full shadow-[0_0_10px_rgba(139,92,246,0.5)]`}></span>
            </h2>
        </div>
    );
};

export default SectionTitle;
