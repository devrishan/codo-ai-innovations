'use client';

import Link from 'next/link';
import React, { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';

const Header = () => {
    // Mobile menu state (basic implementation without state for now to keep simple, 
    // but ideally would use useState if full interactivity needed. 
    // keeping it purely presentational + standard next/link for SEO/Navigation)

    return (
        <header className="fixed top-0 left-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50 h-[80px] flex items-center transition-all duration-300">
            <div className="container flex justify-between items-center h-full">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 group">
                    {/* Placeholder for Logo Image if needed, text for now */}
                    <span className="text-2xl font-bold text-slate-900 tracking-tight group-hover:text-blue-700 transition-colors">
                        CODO <span className="text-blue-600">AI</span>
                    </span>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden lg:flex items-center gap-8">
                    {[
                        { name: 'Home', href: '/' },
                        { name: 'About Us', href: '/about' },
                        { name: 'Services', href: '/services' },
                        { name: 'Portfolio', href: '/portfolio' },
                        { name: 'Career', href: '/careers' },
                        { name: 'Contact', href: '/contact' },
                    ].map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-[15px] font-medium text-slate-600 hover:text-blue-600 transition-colors relative group py-2"
                        >
                            {link.name}
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                        </Link>
                    ))}
                </nav>

                {/* CTA Button */}
                <div className="hidden lg:flex items-center gap-4">
                    <a href="tel:+15551234567" className="flex items-center gap-2 text-slate-600 hover:text-blue-600 text-sm font-semibold transition-colors">
                        <Phone size={18} />
                        <span>+1 (555) 123-4567</span>
                    </a>
                    <Link href="/contact" className="btn btn-primary rounded-full px-6 py-2.5 text-sm font-bold uppercase tracking-wide">
                        Get A Quote
                    </Link>
                </div>

                {/* Mobile Menu Toggle */}
                <button className="lg:hidden p-2 text-slate-700 hover:text-blue-600 transition-colors" aria-label="Toggle Menu">
                    <Menu size={28} />
                </button>
            </div>
        </header>
    );
};

export default Header;
