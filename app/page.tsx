import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import TreatmentSection from '@/components/TreatmentSection';
import PriceSection from '@/components/PriceSection';
import AccessSection from '@/components/AccessSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <TreatmentSection />
        <PriceSection />
        <AccessSection />
      </main>
      <Footer />
    </>
  );
}
