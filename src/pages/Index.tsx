import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Schedule from "@/components/Schedule";
import Instagram from "@/components/Instagram";
import Gallery from "@/components/Gallery";
import Location from "@/components/Location";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <About />
      <Services />
      <Schedule />
      <Instagram />
      <Gallery />
      <Location />
      <FinalCTA />
      <Footer />
    </div>
  );
};

export default Index;
