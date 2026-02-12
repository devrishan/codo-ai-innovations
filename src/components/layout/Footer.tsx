import Link from 'next/link';
import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-slate-900 text-slate-300 py-16">
            <div className="container grid grid-cols-1 md:grid-cols-4 gap-12">

                {/* Company Info */}
                <div className="space-y-4">
                    <h3 className="text-xl font-bold text-white">CODO AI Innovations</h3>
                    <p className="text-sm leading-relaxed text-slate-400">
                        Empowering enterprises with AI-driven digital solutions. Your strategic partner for future-ready technology.
                    </p>
                </div>

                {/* Quick Links */}
                <div className="space-y-4">
                    <h4 className="text-white font-semibold">Quick Links</h4>
                    <ul className="space-y-2 text-sm">
                        <li><Link href="/about" className="hover:text-blue-400 transition-colors">About Us</Link></li>
                        <li><Link href="/services" className="hover:text-blue-400 transition-colors">Our Services</Link></li>
                        <li><Link href="/portfolio" className="hover:text-blue-400 transition-colors">Portfolio</Link></li>
                        <li><Link href="/careers" className="hover:text-blue-400 transition-colors">Careers</Link></li>
                    </ul>
                </div>

                {/* Services */}
                <div className="space-y-4">
                    <h4 className="text-white font-semibold">Services</h4>
                    <ul className="space-y-2 text-sm">
                        <li><Link href="/services/web-development" className="hover:text-blue-400 transition-colors">Web Development</Link></li>
                        <li><Link href="/services/ai-solutions" className="hover:text-blue-400 transition-colors">AI Solutions</Link></li>
                        <li><Link href="/services/mobile-apps" className="hover:text-blue-400 transition-colors">Mobile Apps</Link></li>
                        <li><Link href="/services/software" className="hover:text-blue-400 transition-colors">Custom Software</Link></li>
                    </ul>
                </div>

                {/* Contact */}
                <div className="space-y-4">
                    <h4 className="text-white font-semibold">Contact</h4>
                    <ul className="space-y-2 text-sm text-slate-400">
                        <li>Email: hello@codo.ai</li>
                        <li>Phone: +1 (555) 123-4567</li>
                        <li>Location: Tech Park, Innovation City</li>
                    </ul>
                </div>
            </div>

            <div className="container mt-12 pt-8 border-t border-slate-800 text-center text-xs text-slate-500">
                <p>&copy; {new Date().getFullYear()} CODO AI Innovations. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
