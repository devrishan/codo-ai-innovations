import Header from "@/components/shared/Header";
import HeroSection from "@/components/shared/HeroSection";
import ServicesSection from "@/components/shared/ServicesSection";

export default function Theme1Page() {
    return (
        <main className="min-h-screen bg-[var(--background)] overflow-x-hidden">
            <Header />
            <HeroSection />
            <ServicesSection />
        </main>
    );
}
