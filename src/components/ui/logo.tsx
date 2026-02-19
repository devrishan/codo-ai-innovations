
import Link from 'next/link';
import React from 'react';

export const Logo = () => {
    return (
        <Link href="/" className="flex items-center gap-2 group">
            <span className="text-lg md:text-xl font-bold tracking-tight text-white font-display hover:text-blue-400 transition-colors">
                CODO AI <span className="font-normal text-blue-400">INNOVATIONS</span>
            </span>
        </Link>
    );
};
