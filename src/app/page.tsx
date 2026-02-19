
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function Home() {
    return (
        <div className="min-h-screen bg-neutral-950 text-neutral-100 flex flex-col items-center justify-center p-8">
            <main className="max-w-2xl w-full space-y-8">
                <div className="text-center space-y-4">
                    <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">
                        Codo AI Innovations
                    </h1>
                    <p className="text-neutral-400 text-lg">
                        Select a design model to view the portfolio.
                    </p>
                </div>

                <div className="grid gap-4">
                    <Link
                        href="/model-1"
                        className="group flex items-center justify-between p-6 rounded-xl border border-neutral-800 bg-neutral-900/50 hover:bg-neutral-900 hover:border-neutral-700 transition-all duration-300"
                    >
                        <div className="space-y-1">
                            <h2 className="text-xl font-semibold text-white group-hover:text-blue-400 transition-colors">
                                Model 1: Premium
                            </h2>
                            <p className="text-sm text-neutral-500">
                                High-end, modern aesthetic with dark theme and glassmorphism.
                            </p>
                        </div>
                        <ArrowRight className="w-5 h-5 text-neutral-600 group-hover:text-blue-400 group-hover:translate-x-1 transition-all" />
                    </Link>


                    <Link
                        href="/model-2"
                        className="group flex items-center justify-between p-6 rounded-xl border border-neutral-800 bg-neutral-900/50 hover:bg-neutral-900 hover:border-neutral-700 transition-all duration-300"
                    >
                        <div className="space-y-1">
                            <h2 className="text-xl font-semibold text-white group-hover:text-purple-400 transition-colors">
                                Model 2: Agency
                            </h2>
                            <p className="text-sm text-neutral-500">
                                Creative, colorful, and dynamic agency aesthetic.
                            </p>
                        </div>
                        <ArrowRight className="w-5 h-5 text-neutral-600 group-hover:text-purple-400 group-hover:translate-x-1 transition-all" />
                    </Link>

                    <Link
                        href="/model-3"
                        className="group flex items-center justify-between p-6 rounded-xl border border-neutral-800 bg-neutral-900/50 hover:bg-neutral-900 hover:border-neutral-700 transition-all duration-300"
                    >
                        <div className="space-y-1">
                            <h2 className="text-xl font-semibold text-white group-hover:text-emerald-400 transition-colors">
                                Model 3: Minimal
                            </h2>
                            <p className="text-sm text-neutral-500">
                                Structured, typographic, and ultra-clean design.
                            </p>
                        </div>
                        <ArrowRight className="w-5 h-5 text-neutral-600 group-hover:text-emerald-400 group-hover:translate-x-1 transition-all" />
                    </Link>

                </div>
            </main>
        </div>
    );
}
