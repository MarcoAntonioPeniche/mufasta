import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MapPin, Navigation } from "lucide-react";

const Location = () => {
  const locations = [
    {
      id: 1,
      name: "Unidade 1",
      address: "Rua Brás Cubas, 16 — Centro de Santos, Santos/SP",
      mapsUrl: "https://www.google.com/maps?q=Rua+Br%C3%A1s+Cubas,+16,+Centro+de+Santos,+Santos,+SP",
      embedUrl: "https://www.google.com/maps?q=Rua+Br%C3%A1s+Cubas,+16,+Centro+de+Santos,+Santos,+SP&output=embed",
      whatsapp: "https://wa.me/5513996751314"
    },
    {
      id: 2,
      name: "Unidade 2",
      address: "Avenida Bernardino de Campos, 368 A1 — Santos/SP",
      mapsUrl: "https://www.google.com/maps?q=Av.+Bernardino+de+Campos,+368+A2,+Santos,+SP",
      embedUrl: "https://www.google.com/maps?q=Av.+Bernardino+de+Campos,+368+A2,+Santos,+SP&output=embed",
      whatsapp: "https://wa.me/5513996911034"
    }
  ];

  const [selectedLocation, setSelectedLocation] = useState(locations[0]);

  return (
    <section id="location" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Endereços
          </h2>
          <p className="text-lg text-muted-foreground">
            Estamos no coração de Santos
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Location Selection */}
          <div className="space-y-4 animate-fade-in">
            {locations.map((location) => (
              <Card
                key={location.id}
                className={`p-6 cursor-pointer transition-all hover:border-primary/50 ${
                  selectedLocation.id === location.id
                    ? "border-primary bg-card/80"
                    : "bg-card border-border"
                }`}
                onClick={() => setSelectedLocation(location)}
              >
                <div className="flex items-start gap-4">
                  <MapPin
                    className={`shrink-0 mt-1 ${
                      selectedLocation.id === location.id
                        ? "text-primary"
                        : "text-muted-foreground"
                    }`}
                    size={28}
                  />
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
            ))}

            {/* Action Buttons */}
            <div className="flex justify-center pt-4">
              <Button
                variant="cta"
                size="lg"
                className="w-full max-w-md"
                asChild
              >
                <a
                  href={selectedLocation.mapsUrl}
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
              key={selectedLocation.id}
              src={selectedLocation.embedUrl}
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "400px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={`Localização da ${selectedLocation.name}`}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
