import Link from 'next/link';
import { Facebook, Twitter, Linkedin, Instagram, MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-slate-900 text-slate-300 pt-16 pb-8 border-t border-slate-800">
            <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

                {/* Company Info */}
                <div className="space-y-6">
                    <div className="flex items-center gap-2">
                        <span className="text-2xl font-bold text-white tracking-tight">
                            CODO <span className="text-blue-500">ACADEMY</span>
                        </span>
                    </div>
                    <p className="text-sm leading-relaxed text-slate-400">
                        Empowering the next generation of digital innovators with verified skills in AI, Robotics, and Web Development.
                    </p>
                    <div className="flex gap-4">
                        <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all">
                            <Facebook size={18} />
                        </a>
                        <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all">
                            <Twitter size={18} />
                        </a>
                        <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all">
                            <Linkedin size={18} />
                        </a>
                        <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all">
                            <Instagram size={18} />
                        </a>
                    </div>
                </div>

                {/* Quick Links */}
                <div>
                    <h4 className="text-white font-bold text-lg mb-6 relative inline-block">
                        Quick Links
                        <span className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-blue-600"></span>
                    </h4>
                    <ul className="space-y-3 text-sm">
                        {['About Us', 'Our Team', 'Portfolio', 'Careers', 'Contact Us'].map((item) => (
                            <li key={item}>
                                <Link href={`/${item.toLowerCase().replace(' ', '-')}`} className="hover:text-blue-500 transition-colors flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
                                    {item}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Services */}
                <div>
                    <h4 className="text-white font-bold text-lg mb-6 relative inline-block">
                        Our Services
                        <span className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-blue-600"></span>
                    </h4>
                    <ul className="space-y-3 text-sm">
                        {['Web Development', 'Mobile Apps', 'AI Solutions', 'Custom Software', 'Cloud Services'].map((item) => (
                            <li key={item}>
                                <Link href={`/services`} className="hover:text-blue-500 transition-colors flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
                                    {item}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Contact Info */}
                <div>
                    <h4 className="text-white font-bold text-lg mb-6 relative inline-block">
                        Contact Us
                        <span className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-blue-600"></span>
                    </h4>
                    <ul className="space-y-4 text-sm">
                        <li className="flex items-start gap-4">
                            <MapPin className="text-blue-500 shrink-0 mt-1" size={18} />
                            <span className="text-slate-400">
                                Tech Park, Innovation City,<br />
                                Silicon Valley, CA
                            </span>
                        </li>
                        <li className="flex items-center gap-4">
                            <Phone className="text-blue-500 shrink-0" size={18} />
                            <span className="text-slate-400">+1 (555) 123-4567</span>
                        </li>
                        <li className="flex items-center gap-4">
                            <Mail className="text-blue-500 shrink-0" size={18} />
                            <span className="text-slate-400">hello@codo.ai</span>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="container pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500">
                <p>&copy; {new Date().getFullYear()} CODO AI Innovations. All rights reserved.</p>
                <div className="flex gap-6 mt-4 md:mt-0">
                    <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
                    <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
