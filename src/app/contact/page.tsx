'use client';

import React from 'react';
import PageHeader from '@/components/ui/PageHeader';
import SectionTitle from '@/components/ui/SectionTitle';
import { MapPin, Phone, Mail, Send } from 'lucide-react';

export default function ContactPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <PageHeader title="Contact Us" breadcrumb="Contact" />

            <section className="section bg-white">
                <div className="container">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

                        {/* Contact Info */}
                        <div>
                            <SectionTitle title="Get in Touch" subtitle="Contact Info" />
                            <p className="text-slate-600 mb-10 leading-relaxed">
                                Have a question or want to discuss a project? Reach out to us through any of the channels below, or fill out the form.
                            </p>

                            <div className="space-y-8">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center shrink-0">
                                        <MapPin size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-900 mb-1">Our Location</h4>
                                        <p className="text-slate-600">
                                            123 Innovation Dr,<br />
                                            Tech Park, Silicon Valley, CA 94025
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center shrink-0">
                                        <Phone size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-900 mb-1">Phone Number</h4>
                                        <p className="text-slate-600 mb-1">+1 (555) 123-4567</p>
                                        <p className="text-slate-500 text-sm">Mon - Fri, 9am - 6pm</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-amber-50 text-amber-600 rounded-full flex items-center justify-center shrink-0">
                                        <Mail size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-900 mb-1">Email Address</h4>
                                        <p className="text-slate-600">hello@codo.ai</p>
                                        <p className="text-slate-600">support@codo.ai</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 shadow-sm">
                            <h3 className="text-2xl font-bold text-slate-900 mb-6">Send us a Message</h3>
                            <form className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">Full Name</label>
                                        <input type="text" id="name" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all" placeholder="John Doe" />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">Email Address</label>
                                        <input type="email" id="email" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all" placeholder="john@example.com" />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-2">Phone Number</label>
                                        <input type="tel" id="phone" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all" placeholder="+1 (555) 000-0000" />
                                    </div>
                                    <div>
                                        <label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-2">Subject</label>
                                        <select id="subject" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all bg-white">
                                            <option>General Inquiry</option>
                                            <option>Project Quote</option>
                                            <option>Careers</option>
                                            <option>Partnership</option>
                                        </select>
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">Message</label>
                                    <textarea id="message" rows={5} className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all" placeholder="How can we help you?"></textarea>
                                </div>

                                <button type="submit" className="w-full btn btn-primary py-4 rounded-lg flex items-center justify-center gap-2 text-base shadow-lg hover:shadow-xl">
                                    Send Message <Send size={18} />
                                </button>
                            </form>
                        </div>

                    </div>
                </div>
            </section>

            {/* Map Section */}
            <section className="h-[400px] bg-slate-200 relative">
                <div className="absolute inset-0 flex items-center justify-center text-slate-500 font-bold text-xl">
                    [Google Map Embed Placeholder]
                </div>
            </section>
        </div>
    );
}
