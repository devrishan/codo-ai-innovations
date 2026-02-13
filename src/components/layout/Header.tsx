'use client';

import Link from 'next/link';
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
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
                <div className="glass-card rounded-2xl px-6 h-[64px] flex items-center justify-between shadow-[0_4px_30px_rgba(0,0,0,0.1)] border border-white/10 bg-black/40 backdrop-blur-xl">

                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2 group">
                        {/* Corporate Logo */}
                        <span className="text-lg md:text-xl font-bold tracking-tight group-hover:text-blue-400 transition-colors font-display text-white">
                            CODO AI <span className="font-normal text-blue-500">INNOVATIONS</span>
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
                                className="relative text-sm font-medium text-slate-300 hover:text-white px-4 py-2 transition-colors font-display tracking-wide group"
                            >
                                {link.name}
                                <span className="absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                            </Link>
                        ))}
                    </nav>

                    {/* CTA Button */}
                    <div className="hidden lg:flex items-center gap-3">
                        <Link href="/contact" className="btn btn-primary rounded-lg px-6 py-2 text-xs shadow-blue-500/20">
                            Launch Project
                        </Link>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button className="lg:hidden p-2 text-slate-300 hover:text-white transition-colors bg-white/5 rounded-lg border border-white/10" aria-label="Toggle Menu">
                        <Menu size={20} />
                    </button>
                </div>
            </div>
        </motion.header>
    );
};

export default Header;
