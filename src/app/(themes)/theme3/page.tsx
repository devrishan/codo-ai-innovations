import Header from "@/components/shared/Header";
import HeroSection from "@/components/shared/HeroSection";
import ServicesSection from "@/components/shared/ServicesSection";
import Footer from "@/components/shared/Footer";

export default function Theme3Page() {
    return (
        <main className="min-h-screen bg-[var(--background)] overflow-x-hidden">
            <Header />
            <HeroSection />
            <ServicesSection />
            <Footer />
        </main>
    );
}
