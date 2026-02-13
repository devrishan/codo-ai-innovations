'use client';

import Link from 'next/link';
import { Facebook, Twitter, Linkedin, Instagram, MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-[var(--background)] text-[var(--muted)] pt-24 pb-8 border-t border-[var(--border)] relative overflow-hidden transition-colors duration-300">
            {/* Glow Effects - Controlled by CSS variables */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-[var(--primary)]/5 rounded-full blur-[100px] pointer-events-none"></div>
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[var(--secondary)]/5 rounded-full blur-[100px] pointer-events-none"></div>

            <div className="container relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand Column */}
                    <div className="space-y-6">
                        <div className="flex items-center gap-2">
                            <span className="text-2xl font-bold tracking-tight font-display text-[var(--foreground)]">
                                CODO <span className="text-[var(--primary)]">AI</span>
                            </span>
                        </div>
                        <p className="text-sm leading-relaxed text-[var(--muted)]">
                            Pioneering the future of digital intelligence. We build autonomous systems, immersive web experiences, and AI-driven solutions for the next generation of business.
                        </p>
                        <div className="flex gap-4">
                            {[Facebook, Twitter, Linkedin, Instagram].map((Icon, index) => (
                                <a key={index} href="#" className="w-10 h-10 rounded-[var(--radius)] bg-[var(--surface)] border border-[var(--border)] flex items-center justify-center hover:bg-[var(--primary)] hover:border-[var(--primary)] hover:text-white transition-all duration-300 group">
                                    <Icon size={18} className="group-hover:scale-110 transition-transform" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-[var(--foreground)] font-bold mb-6 font-display tracking-wide">Explore</h4>
                        <ul className="space-y-3">
                            {['About Us', 'Services', 'Our Work', 'Careers', 'Contact'].map((item) => (
                                <li key={item}>
                                    <Link href={`/${item.toLowerCase().replace(' ', '-')}`} className="text-[var(--muted)] hover:text-[var(--primary)] transition-colors flex items-center gap-2 group">
                                        <span className="w-1 h-1 bg-[var(--primary)] rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="text-[var(--foreground)] font-bold mb-6 font-display tracking-wide">Solutions</h4>
                        <ul className="space-y-3">
                            {['AI Development', 'Web Applications', 'Digital Marketing', 'Robotics Process Automation', 'Consulting'].map((item) => (
                                <li key={item}>
                                    <Link href="/services" className="text-[var(--muted)] hover:text-[var(--secondary)] transition-colors flex items-center gap-2 group">
                                        <span className="w-1 h-1 bg-[var(--secondary)] rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-[var(--foreground)] font-bold mb-6 font-display tracking-wide">Contact</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <MapPin className="text-[var(--primary)] mt-1 shrink-0" size={18} />
                                <span className="text-[var(--muted)]">
                                    Level 2, Cyberpark<br />
                                    Calicut, Kerala 673001
                                </span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="text-[var(--primary)] shrink-0" size={18} />
                                <span className="text-[var(--muted)]">+91 987 654 3210</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="text-[var(--primary)] shrink-0" size={18} />
                                <span className="text-[var(--muted)]">hello@codo.ai</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-[var(--border)] flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-[var(--muted)]">
                    <p>&copy; {new Date().getFullYear()} CODO AI Innovations. All rights reserved.</p>
                    <div className="flex gap-6">
                        <a href="#" className="hover:text-[var(--foreground)] transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-[var(--foreground)] transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
