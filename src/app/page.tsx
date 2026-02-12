import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* 6.1.1 Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center bg-slate-900 text-white overflow-hidden">
        {/* Background Overlay or Image Placeholder */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 opacity-90 z-0"></div>

        <div className="container relative z-10 text-center px-4">
          <span className="inline-block py-1 px-3 rounded-full bg-blue-500/20 border border-blue-500/30 text-blue-300 text-xs font-semibold tracking-wider mb-6 uppercase">
            Corporate Digital Headquarters
          </span>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight leading-tight">
            Future-Ready <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
              Technology Ecosystem
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto mb-10 font-light">
            Positioning CODO AI Innovations as a premium, AI-driven technology organization delivering enterprise-grade solutions and fostering future-ready talent.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/services" className="btn btn-primary text-lg px-8 py-4">
              Explore Our Agency
            </Link>
            <Link href="/academy" className="btn btn-secondary text-lg px-8 py-4 border-slate-500 text-slate-300 hover:text-white hover:border-white hover:bg-white/10">
              Discover Academy
            </Link>
          </div>
        </div>
      </section>

      {/* 6.1.2 About CODO (Brief) */}
      <section className="section bg-white text-center">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900">
              Driving Innovation Through Intelligence
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-8">
              At CODO AI Innovations, we don't just adapt to the future; we build it.
              As a central strategic entity, we govern a dual-vertical ecosystem focused on
              **technological leadership** and **AI-driven transformation**.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="p-6 bg-slate-50 rounded-lg">
                <div className="text-blue-600 text-4xl mb-4 font-bold">01</div>
                <h3 className="text-xl font-bold mb-2">Innovation</h3>
                <p className="text-slate-500 text-sm">Pioneering AI solutions that redefine industry standards.</p>
              </div>
              <div className="p-6 bg-slate-50 rounded-lg">
                <div className="text-blue-600 text-4xl mb-4 font-bold">02</div>
                <h3 className="text-xl font-bold mb-2">Transformation</h3>
                <p className="text-slate-500 text-sm">Empowering enterprises to navigate digital complexity.</p>
              </div>
              <div className="p-6 bg-slate-50 rounded-lg">
                <div className="text-blue-600 text-4xl mb-4 font-bold">03</div>
                <h3 className="text-xl font-bold mb-2">Leadership</h3>
                <p className="text-slate-500 text-sm">Setting benchmarks in quality, ethics, and performance.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6.1.3 Our Ecosystem (Split Layout) */}
      <section className="flex flex-col md:flex-row">
        {/* Academy Side */}
        <div className="flex-1 bg-slate-50 py-24 px-8 md:px-16 flex flex-col justify-center items-start border-b md:border-b-0 md:border-r border-slate-200">
          <span className="text-blue-600 font-bold tracking-widest uppercase mb-4 text-sm">Education Vertical</span>
          <h2 className="text-4xl font-bold text-slate-900 mb-6">CODO Academy</h2>
          <p className="text-slate-600 mb-8 max-w-md text-lg">
            Shaping the next generation of tech leaders through world-class training programs, internships, and skill development pathways.
          </p>
          <ul className="space-y-3 mb-10 text-slate-700 font-medium">
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-blue-500 rounded-full"></span> Professional Training
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-blue-500 rounded-full"></span> Skill Development
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-blue-500 rounded-full"></span> Industry Internships
            </li>
          </ul>
          <Link href="/academy" className="btn btn-secondary border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white">
            Visit Academy Website
          </Link>
        </div>

        {/* Agency Side */}
        <div className="flex-1 bg-slate-900 py-24 px-8 md:px-16 flex flex-col justify-center items-start text-white">
          <span className="text-emerald-400 font-bold tracking-widest uppercase mb-4 text-sm">Services Vertical</span>
          <h2 className="text-4xl font-bold text-white mb-6">CODO Agency</h2>
          <p className="text-slate-400 mb-8 max-w-md text-lg">
            Delivering custom web solutions, software engineering, and AI systems for startups and enterprises.
          </p>
          <ul className="space-y-3 mb-10 text-slate-300 font-medium">
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-emerald-500 rounded-full"></span> Custom Development
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-emerald-500 rounded-full"></span> AI & Automation
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-emerald-500 rounded-full"></span> Enterprise Software
            </li>
          </ul>
          <Link href="/portfolio" className="btn btn-primary bg-emerald-600 hover:bg-emerald-700 border-none">
            View Our Portfolio
          </Link>
        </div>
      </section>

      {/* 6.1.4 Services Overview */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Expertise</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Scalable, secure, and intelligent solutions tailored for your business growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Web Development", desc: "High-performance websites and web applications with modern architectures." },
              { title: "Software Engineering", desc: "Robust custom software solutions built to solve complex business challenges." },
              { title: "Mobile Apps", desc: "Native and cross-platform mobile applications for iOS and Android." },
              { title: "AI Solutions", desc: "Intelligent automation and data-driven systems powering the future." }
            ].map((service, index) => (
              <div key={index} className="p-8 border border-slate-100 rounded-xl hover:shadow-lg transition-shadow bg-slate-50/50">
                <h3 className="text-xl font-bold mb-3 text-slate-900">{service.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{service.desc}</p>
                <Link href="/services" className="inline-block mt-4 text-sm font-semibold text-blue-600 hover:underline">
                  Learn more &rarr;
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6.1.8 Final CTA Section */}
      <section className="section bg-blue-900 text-white text-center">
        <div className="container">
          <h2 className="text-4xl font-bold mb-6">Ready to Innovate?</h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-10">
            Partner with CODO AI Innovations today and transform your digital future.
          </p>
          <Link href="/contact" className="btn btn-primary bg-white text-blue-900 hover:bg-slate-100">
            Partner With CODO AI
          </Link>
        </div>
      </section>
    </div>
  );
}
