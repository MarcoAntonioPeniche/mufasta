import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Phone } from "lucide-react";
import BookingModal from "@/components/BookingModal";
import iconCorte from "@/assets/icon-corte.png";
import iconBarba from "@/assets/icon-barba.png";
import iconSobrancelha from "@/assets/icon-sobrancelha.png";
import iconPezinho from "@/assets/icon-pezinho.png";

const Services = () => {
  const [showBookingModal, setShowBookingModal] = useState(false);
  const services = [
    {
      icon: iconCorte,
      alt: "Ícone de corte de cabelo com tesoura e pente",
      title: "Corte Simples",
      price: "R$ 35,00",
      description: "Corte clássico ou moderno com acabamento profissional",
      featured: true,
    },
    {
      icon: iconBarba,
      alt: "Ícone de barba",
      title: "Barba",
      price: "R$ 30,00",
      description: "Aparar, alinhar e finalizar com navalha para contorno perfeito",
      featured: false,
    },
    {
      icon: iconSobrancelha,
      alt: "Ícone de sobrancelha",
      title: "Sobrancelha",
      price: "R$ 15,00",
      description: "Design e alinhamento das sobrancelhas",
      featured: false,
    },
    {
      icon: iconPezinho,
      alt: "Ícone de pézinho",
      title: "Pézinho",
      price: "R$ 15,00",
      description: "Acabamento preciso na nuca",
      featured: false,
    },
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Serviços
          </h2>
          <p className="text-lg text-muted-foreground">
            Qualidade e precisão em cada detalhe
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 lg:gap-6 mb-12">
          {services.map((service, index) => (
            <Card
              key={index}
              className="relative p-6 md:p-7 bg-[#161616] border border-[#2a2a2a] rounded-2xl transition-all duration-200 hover:-translate-y-0.5 hover:border-[#d6b25a] hover:shadow-[0_4px_20px_rgba(214,178,90,0.2)] animate-fade-in focus-within:ring-2 focus-within:ring-[#d6b25a]/35 group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {service.featured && (
                <div className="absolute top-3 right-3 bg-primary/80 text-primary-foreground text-xs font-bold px-2.5 py-1 rounded-full">
                  Mais pedido
                </div>
              )}
              
              <img
                src={service.icon}
                alt={service.alt}
                role="img"
                className="mb-5 transition-all duration-200 group-hover:brightness-110 group-hover:drop-shadow-[0_0_12px_rgba(214,178,90,0.5)] w-[clamp(96px,18vw,128px)] h-[clamp(96px,18vw,128px)] md:w-[clamp(112px,14vw,144px)] md:h-[clamp(112px,14vw,144px)] lg:w-[clamp(120px,10vw,160px)] lg:h-[clamp(120px,10vw,160px)] object-contain"
              />
              
              <h3 className="text-lg md:text-[1.125rem] font-extrabold text-foreground mb-3 leading-tight tracking-tight">
                {service.title}
              </h3>
              
              <p 
                className="mb-3 leading-none tracking-tight font-black tabular-nums"
                style={{
                  fontSize: 'clamp(1.9rem, 2.4vw, 2.4rem)',
                  fontWeight: 900,
                  background: 'linear-gradient(180deg, #f6e7b5 0%, #d6b25a 55%, #a98234 100%)',
                  WebkitBackgroundClip: 'text',
                  backgroundClip: 'text',
                  color: 'transparent',
                  textShadow: '0 1px 0 rgba(0,0,0,0.35), 0 10px 24px rgba(199,160,73,0.25)',
                  filter: 'drop-shadow(0 1px 0 rgba(0,0,0,0.35)) drop-shadow(0 10px 24px rgba(199,160,73,0.25))',
                }}
              >
                {service.price}
              </p>
              
              <p className="text-sm md:text-[0.95rem] text-muted-foreground leading-relaxed line-clamp-2">
                {service.description}
              </p>
            </Card>
          ))}
        </div>

        <div className="flex justify-center">
          <Button
            variant="cta"
            size="xl"
            onClick={() => setShowBookingModal(true)}
            className="flex items-center gap-2"
          >
            <Phone size={20} />
            Agendar agora pelo WhatsApp
          </Button>
        </div>

        <BookingModal open={showBookingModal} onOpenChange={setShowBookingModal} />
      </div>
    </section>
  );
};

export default Services;
