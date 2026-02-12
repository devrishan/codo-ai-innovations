import React from 'react';
import { Users, Briefcase, Award, Globe } from 'lucide-react';

const stats = [
    { id: 1, label: 'Years Experience', value: '10+', icon: <Briefcase size={32} /> },
    { id: 2, label: 'Projects Completed', value: '500+', icon: <Award size={32} /> },
    { id: 3, label: 'Team Members', value: '50+', icon: <Users size={32} /> },
    { id: 4, label: 'Global Clients', value: '200+', icon: <Globe size={32} /> },
];

const StatsSection = () => {
    return (
        <section className="py-20 bg-blue-600 text-white relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute inset-0 bg-blue-700/50 skew-y-3 transform origin-bottom-left -z-0"></div>

            <div className="container relative z-10">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                    {stats.map((stat) => (
                        <div key={stat.id} className="p-6">
                            <div className="mb-4 flex justify-center text-blue-200">
                                {stat.icon}
                            </div>
                            <div className="text-4xl md:text-5xl font-bold mb-2 text-white">
                                {stat.value}
                            </div>
                            <div className="text-blue-100 font-medium tracking-wide uppercase text-sm">
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default StatsSection;
