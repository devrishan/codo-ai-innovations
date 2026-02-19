
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Model 1 | Codo AI Innovations',
    description: 'Premium High-End Design Model',
};

export default function Model1Layout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className={`${inter.className} min-h-screen bg-neutral-950 text-white selection:bg-blue-500/30`}>
            {children}
        </div>
    );
}
