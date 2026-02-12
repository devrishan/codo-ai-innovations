'use client'

import React, { useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { ChevronRight, ChevronLeft } from 'lucide-react'
import Link from 'next/link'

const HeroSlider = () => {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 5000 })])

    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev()
    }, [emblaApi])

    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext()
    }, [emblaApi])

    const slides = [
        {
            id: 1,
            title: "Transforming Ideas into Digital Reality",
            subtitle: "Custom Web & Mobile App Development Solutions",
            bgClass: "bg-gradient-to-r from-blue-900 to-slate-900", // Placeholder for image
            cta: "Explore Services",
            link: "/services"
        },
        {
            id: 2,
            title: "AI-Driven Innovation for Enterprise",
            subtitle: "Future-Ready Technology & Automation",
            bgClass: "bg-gradient-to-r from-emerald-900 to-slate-900", // Placeholder for image
            cta: "Our Solutions",
            link: "/solutions"
        },
        {
            id: 3,
            title: "Empowering the Next Generation",
            subtitle: "Join CODO Academy for Professional Training",
            bgClass: "bg-gradient-to-r from-indigo-900 to-slate-900", // Placeholder for image
            cta: "Tain with Us",
            link: "/academy"
        }
    ]

    return (
        <div className="relative h-[600px] md:h-[700px] w-full overflow-hidden group">
            <div className="overflow-hidden h-full" ref={emblaRef}>
                <div className="flex h-full">
                    {slides.map((slide) => (
                        <div className="relative flex-[0_0_100%] h-full" key={slide.id}>
                            {/* Background */}
                            <div className={`absolute inset-0 ${slide.bgClass} flex items-center justify-center`}>
                                {/* Overlay Pattern could go here */}
                                <div className="absolute inset-0 bg-black/40"></div>
                            </div>

                            {/* Content */}
                            <div className="relative z-10 container h-full flex flex-col justify-center items-start text-white px-4 md:px-12">
                                <div className="max-w-3xl animate-in fade-in slide-in-from-bottom-8 duration-1000">
                                    <span className="inline-block py-2 px-4 rounded-full bg-blue-600/20 backdrop-blur-sm text-sm font-bold tracking-wider mb-6 border border-blue-400/30 text-blue-300">
                                        CODO ACADEMY
                                    </span>
                                    <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight tracking-tight font-heading">
                                        {slide.title}
                                    </h1>
                                    <p className="text-xl md:text-2xl text-slate-300 mb-10 max-w-2xl font-light leading-relaxed">
                                        {slide.subtitle}
                                    </p>
                                    <Link
                                        href={slide.link}
                                        className="btn btn-primary rounded-full px-10 py-4 text-lg font-bold hover:scale-105 transition-transform"
                                    >
                                        {slide.cta} <ChevronRight size={20} className="ml-2" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Navigation Buttons */}
            <button
                onClick={scrollPrev}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/30 p-3 rounded-full text-white backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100 disabled:opacity-50"
                aria-label="Previous Slide"
            >
                <ChevronLeft size={32} />
            </button>
            <button
                onClick={scrollNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/30 p-3 rounded-full text-white backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100 disabled:opacity-50"
                aria-label="Next Slide"
            >
                <ChevronRight size={32} />
            </button>
        </div>
    )
}

export default HeroSlider
