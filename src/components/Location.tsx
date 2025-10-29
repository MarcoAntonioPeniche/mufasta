import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MapPin, Navigation } from "lucide-react";

const Location = () => {
  const location = {
    name: "Mustafa Barber's Shop",
    address: "Rua Antônio Rocha Camargo, 139 — Vila Domingues, Votorantim/SP",
    mapsUrl: "https://www.google.com/maps?q=Rua+Ant%C3%B4nio+Rocha+Camargo,+139,+Vila+Domingues,+Votorantim,+SP",
    embedUrl: "https://www.google.com/maps?q=Rua+Ant%C3%B4nio+Rocha+Camargo,+139,+Vila+Domingues,+Votorantim,+SP&output=embed",
    whatsapp: "https://wa.me/5515992844348"
  };

  return (
    <section id="location" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Endereço
          </h2>
          <p className="text-lg text-muted-foreground">
            Estamos em Votorantim, SP
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Location Info */}
          <div className="space-y-4 animate-fade-in">
            <Card className="p-6 border-primary bg-card/80">
              <div className="flex items-start gap-4">
                <MapPin className="shrink-0 mt-1 text-primary" size={28} />
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {location.name}
                  </h3>
                  <p className="text-muted-foreground">
                    {location.address}
                  </p>
                </div>
              </div>
            </Card>

            {/* Action Button */}
            <div className="flex justify-center pt-4">
              <Button
                variant="cta"
                size="lg"
                className="w-full max-w-md"
                asChild
              >
                <a
                  href={location.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2"
                >
                  <Navigation size={20} />
                  Traçar rota no Google Maps
                </a>
              </Button>
            </div>
          </div>

          {/* Map */}
          <div className="rounded-lg overflow-hidden shadow-[var(--shadow-smooth)] animate-scale-in h-[400px] lg:h-auto">
            <iframe
              src={location.embedUrl}
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "400px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={`Localização da ${location.name}`}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
