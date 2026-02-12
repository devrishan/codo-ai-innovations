'use client';

import Link from 'next/link';
import React, { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';

const Header = () => {
    // Mobile menu state (basic implementation without state for now to keep simple, 
    // but ideally would use useState if full interactivity needed. 
    // keeping it purely presentational + standard next/link for SEO/Navigation)

    return (
        <header className="fixed top-4 left-0 right-0 z-50 transition-all duration-300">
            <div className="container">
                <div className="bg-white/90 backdrop-blur-md shadow-lg shadow-blue-900/5 rounded-2xl px-6 h-[72px] flex items-center justify-between border border-white/50">

                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2 group">
                        {/* Text Logo with Academy styling */}
                        <span className="text-2xl font-bold text-slate-900 tracking-tight group-hover:text-blue-600 transition-colors">
                            CODO <span className="text-blue-600">ACADEMY</span>
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
                                className="text-sm font-semibold text-slate-600 hover:text-blue-600 hover:bg-blue-50 px-4 py-2 rounded-lg transition-all"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </nav>

                    {/* CTA Button */}
                    <div className="hidden lg:flex items-center gap-3">
                        <Link href="/contact" className="btn btn-primary rounded-xl px-6 py-2.5 text-sm font-bold shadow-md shadow-blue-500/20 hover:shadow-blue-500/30">
                            Get Started
                        </Link>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button className="lg:hidden p-2 text-slate-700 hover:text-blue-600 transition-colors bg-slate-50 rounded-lg" aria-label="Toggle Menu">
                        <Menu size={24} />
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;
