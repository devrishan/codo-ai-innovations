import PageHeader from '@/components/ui/PageHeader';
import { Mail, MapPin, Phone } from 'lucide-react';

const ContactPage = () => {
    return (
        <>
            <PageHeader title="Initiate Contact" breadcrumb="Contact" />
            <section className="section bg-slate-950">
                <div className="container max-w-5xl">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        <div className="space-y-8">
                            <h2 className="text-3xl font-bold text-white font-display">Transmission Channels</h2>
                            <p className="text-slate-400">Reach out to our command center. Our neural networks are listening.</p>

                            <div className="space-y-6">
                                {[
                                    { icon: MapPin, text: "Cyberpark, Calicut Sector-7" },
                                    { icon: Phone, text: "+91 987 654 3210" },
                                    { icon: Mail, text: "hello@codo.ai" }
                                ].map((item, idx) => (
                                    <div key={idx} className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/5 hover:border-purple-500/50 transition-colors group">
                                        <item.icon className="text-purple-500 group-hover:text-cyan-400 transition-colors" />
                                        <span className="text-slate-300 font-mono">{item.text}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <form className="glass-card p-8 rounded-2xl border border-white/10 space-y-6">
                            <div className="grid grid-cols-2 gap-6">
                                <input type="text" placeholder="Designation (Name)" className="bg-slate-900/50 border border-slate-700 rounded-lg p-4 text-white focus:border-purple-500 outline-none transition-colors" />
                                <input type="email" placeholder="Signal Frequency (Email)" className="bg-slate-900/50 border border-slate-700 rounded-lg p-4 text-white focus:border-purple-500 outline-none transition-colors" />
                            </div>
                            <textarea rows={5} placeholder="Encrypted Message..." className="w-full bg-slate-900/50 border border-slate-700 rounded-lg p-4 text-white focus:border-purple-500 outline-none transition-colors"></textarea>
                            <button className="btn btn-primary w-full">Transmit Message</button>
                        </form>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ContactPage;
