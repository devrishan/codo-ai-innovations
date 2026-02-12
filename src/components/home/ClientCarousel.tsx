'use client'

import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'

// Placeholder logos - replace with real assets later
const clients = [
    { id: 1, name: 'Client 1' },
    { id: 2, name: 'Client 2' },
    { id: 3, name: 'Client 3' },
    { id: 4, name: 'Client 4' },
    { id: 5, name: 'Client 5' },
    { id: 6, name: 'Client 6' },
]

const ClientCarousel = () => {
    const [emblaRef] = useEmblaCarousel({ loop: true, align: 'start' }, [Autoplay({ delay: 3000 })])

    return (
        <section className="py-16 bg-slate-50 border-t border-slate-100">
            <div className="container">
                <div className="text-center mb-10">
                    <h2 className="text-2xl font-bold text-slate-900">Trusted By Industry Leaders</h2>
                </div>

                <div className="overflow-hidden" ref={emblaRef}>
                    <div className="flex gap-8 md:gap-12">
                        {[...clients, ...clients].map((client, index) => (
                            // Duplicating for infinite scroll effect visual
                            <div className="flex-[0_0_150px] md:flex-[0_0_200px] min-w-0" key={`${client.id}-${index}`}>
                                <div className="h-20 bg-white rounded-lg border border-slate-200 flex items-center justify-center grayscale hover:grayscale-0 transition-all opacity-60 hover:opacity-100">
                                    <span className="text-slate-400 font-bold text-lg">{client.name}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ClientCarousel
