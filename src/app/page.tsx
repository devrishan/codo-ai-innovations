import HeroSlider from '@/components/home/HeroSlider';
import ServiceCard from '@/components/home/ServiceCard';
import StatsSection from '@/components/home/StatsSection';
import ClientCarousel from '@/components/home/ClientCarousel';
import { Code, Smartphone, Brain, Globe, CheckCircle2, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  const services = [
    {
      title: "Web Development",
      description: "Custom websites and web applications built with modern technologies for speed, security, and scalability.",
      icon: <Globe size={32} />,
      link: "/services/web-development"
    },
    {
      title: "Mobile App Development",
      description: "Native and cross-platform mobile apps that deliver seamless user experiences on iOS and Android.",
      icon: <Smartphone size={32} />,
      link: "/services/mobile-apps"
    },
    {
      title: "AI & Machine Learning",
      description: "Intelligent solutions that automate processes and provide data-driven insights for your business.",
      icon: <Brain size={32} />,
      link: "/services/ai-solutions"
    },
    {
      title: "Custom Software",
      description: "Tailored software solutions designed to address your unique business challenges and goals.",
      icon: <Code size={32} />,
      link: "/services/software"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">

      {/* 1. Hero Slider */}
      <HeroSlider />

      {/* 2. About Section (Welcome) */}
      <section className="section bg-white">
        <div className="container">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="flex-1">
              <span className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-2 block">Who We Are</span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 leading-tigher">
                We Build Digital <span className="text-blue-600">Future</span> For Your Business
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-6">
                CODO AI Innovations is a leading technology partner for startups and enterprises.
                We combine strategic thinking with expert engineering to deliver solutions that drive growth.
              </p>
              <p className="text-slate-600 leading-relaxed mb-8">
                From initial concept to final deployment, we work closely with our clients to ensure
                that every digital product we build is aligned with their business goals.
              </p>
              <Link href="/about" className="btn btn-outline rounded-full px-8 border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white">
                Learn More About Us
              </Link>
            </div>
            <div className="flex-1 relative">
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
                {/* Placeholder for About Image */}
                <div className="bg-slate-200 aspect-video flex items-center justify-center text-slate-400">
                  [About Image Placeholder]
                </div>
              </div>
              {/* Decorative Elements */}
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-blue-100 rounded-full -z-0"></div>
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-slate-50 rounded-full -z-0"></div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Services Section */}
      <section className="section bg-slate-50">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-2 block">Our Expertise</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Solutions We Provide
            </h2>
            <p className="text-slate-600">
              Transforming businesses with cutting-edge technology and innovative strategies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/services" className="btn btn-primary rounded-full px-8">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* 4. Stats Section */}
      <StatsSection />

      {/* 5. Why Choose Us */}
      <section className="section bg-white">
        <div className="container">
          <div className="flex flex-col md:flex-row-reverse gap-16 items-center">
            <div className="flex-1">
              <span className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-2 block">Why Choose Us</span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                Why We Are The Best Choice For Your Next Project
              </h2>
              <p className="text-slate-600 mb-8">
                We deliver more than just code. We deliver results, reliability, and specific expertise that ensures your project succeeds.
              </p>

              <ul className="space-y-4">
                {[
                  "Agile Development Methodology",
                  "Expert Team of Developers",
                  "Transparent Communication",
                  "On-Time Delivery",
                  "Continuous Support & Maintenance"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="text-blue-600 shrink-0 mt-1" size={20} />
                    <span className="text-slate-700 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex-1">
              {/* Placeholder for Why Choose Us Image */}
              <div className="bg-slate-100 rounded-2xl aspect-square flex items-center justify-center text-slate-400 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-slate-100"></div>
                [Why Us Illustration]
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Clients */}
      <ClientCarousel />

      {/* 7. CTA / Newsletter */}
      <section className="py-20 bg-slate-900 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-blue-900/20"></div>
        <div className="container relative z-10 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
          <p className="text-slate-300 mb-10 text-lg">
            Contact us today for a free consultation and let's discuss how we can help your business grow.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn btn-primary bg-white text-blue-900 hover:bg-blue-50 hover:text-blue-900 text-lg px-8 py-4 rounded-full font-bold">
              Get A Quote
            </Link>
            <Link href="/portfolio" className="btn btn-outline border-slate-600 text-slate-300 hover:border-white hover:text-white rounded-full px-8 py-4">
              View Our Work
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
