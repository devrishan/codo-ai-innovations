import Link from 'next/link';
import React from 'react';

const Header = () => {
    return (
        <header className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-md border-b border-gray-100 z-50 h-[80px] flex items-center">
            <div className="container flex justify-between items-center">
                {/* Logo */}
                <Link href="/" className="text-2xl font-bold text-slate-900 tracking-tight">
                    CODO <span className="text-blue-600">AI</span>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-8">
                    <Link href="/" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">
                        Home
                    </Link>
                    <Link href="/about" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">
                        About
                    </Link>
                    <Link href="/services" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">
                        Services
                    </Link>
                    <Link href="/portfolio" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">
                        Portfolio
                    </Link>
                    <Link href="/contact" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">
                        Contact
                    </Link>
                </nav>

                {/* CTA Button */}
                <div className="hidden md:block">
                    <Link href="/contact" className="btn btn-primary">
                        Partner With Us
                    </Link>
                </div>

                {/* Mobile Menu Toggle (Placeholder) */}
                <button className="md:hidden p-2 text-slate-600" aria-label="Toggle Menu">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="3" y1="12" x2="21" y2="12"></line>
                        <line x1="3" y1="6" x2="21" y2="6"></line>
                        <line x1="3" y1="18" x2="21" y2="18"></line>
                    </svg>
                </button>
            </div>
        </header>
    );
};

export default Header;
