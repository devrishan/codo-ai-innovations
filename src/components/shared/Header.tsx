'use client';

import Link from 'next/link';
import React from 'react';
import { Menu } from 'lucide-react';
import { motion } from 'framer-motion';

const Header = () => {
    return (
        <motion.header
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        >
            <div className="container mt-4">
                {/* Theme-Agnostic Card: Uses --surface and --border variables */}
                <div className="rounded-[var(--radius)] px-6 h-[64px] flex items-center justify-between shadow-lg border border-[var(--border)] bg-[var(--surface)]/80 backdrop-blur-xl">

                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2 group">
                        <span className="text-lg md:text-xl font-bold tracking-tight text-[var(--foreground)] font-display hover:text-[var(--primary)] transition-colors">
                            CODO AI <span className="font-normal text-[var(--primary)]">INNOVATIONS</span>
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center gap-1">
                        {[
                            { name: 'Corporate', href: '/corporate' },
                            { name: 'Academy (V1)', href: '/v1' },
                            { name: 'Agency', href: '/agency' },
                            { name: 'About', href: '/about' },
                            { name: 'Contact', href: '/contact' },
                        ].map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="relative text-sm font-medium text-[var(--muted)] hover:text-[var(--foreground)] px-4 py-2 transition-colors font-display tracking-wide group"
                            >
                                {link.name}
                                <span className="absolute inset-x-0 -bottom-px h-px bg-[var(--primary)] scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                            </Link>
                        ))}
                    </nav>

                    {/* CTA Button */}
                    <div className="hidden lg:flex items-center gap-3">
                        <Link href="/contact" className="px-6 py-2 text-xs font-bold text-white bg-[var(--primary)] rounded-[var(--radius)] hover:opacity-90 transition-opacity shadow-[0_0_15px_var(--primary-glow)]">
                            Launch Project
                        </Link>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button className="lg:hidden p-2 text-[var(--muted)] hover:text-[var(--foreground)] transition-colors bg-white/5 rounded-[var(--radius)] border border-[var(--border)]" aria-label="Toggle Menu">
                        <Menu size={20} />
                    </button>
                </div>
            </div>
        </motion.header>
    );
};

export default Header;
