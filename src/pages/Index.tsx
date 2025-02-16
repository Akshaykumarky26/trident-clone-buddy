
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import OffersSection from "@/components/OffersSection";
import RoomsSection from "@/components/RoomsSection";
import DiningSection from "@/components/DiningSection";
import ExperiencesSection from "@/components/ExperiencesSection";
import BookingSection from "@/components/BookingSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <OffersSection />
      <RoomsSection />
      <DiningSection />
      <ExperiencesSection />
      <BookingSection />
      <Footer />
    </div>
  );
};

export default Index;
