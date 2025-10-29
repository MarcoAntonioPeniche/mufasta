import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Phone, ArrowDown } from "lucide-react";
import heroImage from "@/assets/hero-barbershop.jpg";
import BookingModal from "@/components/BookingModal";

const Hero = () => {
  const [showBookingModal, setShowBookingModal] = useState(false);

  const scrollToServices = () => {
    const element = document.getElementById("services");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Ferramentas clássicas de barbearia"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/70 to-background/90" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10 text-center animate-fade-in-up">
        <h1 className="text-5xl md:text-7xl font-bold text-primary mb-6 tracking-tight">
          Seu estilo, sua confiança.
        </h1>
        <p className="text-xl md:text-2xl text-foreground mb-12 max-w-2xl mx-auto">
          Cortes precisos e acabamento impecável, no Centro de Santos.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            variant="hero"
            size="xl"
            onClick={() => setShowBookingModal(true)}
            className="flex items-center gap-2"
          >
            <Phone size={20} />
            Agendar no WhatsApp
          </Button>
          <Button
            variant="outline"
            size="xl"
            onClick={scrollToServices}
            className="flex items-center gap-2"
          >
            Ver Serviços
            <ArrowDown size={20} />
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="text-primary" size={32} />
      </div>

      <BookingModal open={showBookingModal} onOpenChange={setShowBookingModal} />
    </section>
  );
};

export default Hero;
