import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

const FinalCTA = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-r from-secondary to-card">
      <div className="container mx-auto px-4 text-center animate-fade-in">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold text-primary mb-6">
            Pronto para renovar o visual?
          </h2>
          <p className="text-xl text-foreground mb-10">
            Agende seu horário agora e garanta o melhor atendimento
          </p>

          <div className="flex justify-center">
            <Button
              variant="cta"
              size="xl"
              asChild
            >
              <a
                href="tel:+5513996751314"
                className="flex items-center gap-2"
              >
                <Phone size={24} />
                Ligar agora
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
