'use client';

import Link from 'next/link';
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
            <div className="container mt-4">
                <div className="glass-card rounded-2xl px-6 h-[72px] flex items-center justify-between shadow-[0_4px_30px_rgba(0,0,0,0.1)] border border-white/10 bg-black/40 backdrop-blur-md">

                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2 group">
                        {/* Neon Text Logo */}
                        <span className="text-2xl font-bold tracking-tight group-hover:text-purple-400 transition-colors font-display text-white">
                            CODO <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 animate-pulse">AI</span>
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center gap-1">
                        {[
                            { name: 'Home', href: '/' },
                            { name: 'About', href: '/about' },
                            { name: 'Services', href: '/services' },
                            { name: 'Portfolio', href: '/portfolio' },
                            { name: 'Careers', href: '/careers' },
                            { name: 'Contact', href: '/contact' },
                        ].map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-sm font-medium text-slate-300 hover:text-white hover:bg-white/10 px-4 py-2 rounded-lg transition-all border border-transparent hover:border-white/5 font-display tracking-wide"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </nav>

                    {/* CTA Button */}
                    <div className="hidden lg:flex items-center gap-3">
                        <Link href="/contact" className="btn btn-primary rounded-lg px-6 py-2 text-sm shadow-[0_0_15px_rgba(139,92,246,0.3)]">
                            Launch Project
                        </Link>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button className="lg:hidden p-2 text-slate-300 hover:text-white transition-colors bg-white/5 rounded-lg border border-white/10" aria-label="Toggle Menu">
                        <Menu size={24} />
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;
