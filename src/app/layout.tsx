
import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
    title: 'Codo AI Innovations - Multi-Model Showcase',
    description: 'Portfolio of design models for Codo AI Innovations.',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className="antialiased">
                {children}
            </body>
        </html>
    );
}
