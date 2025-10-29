import { MapPin, Phone, Instagram } from "lucide-react";
import logo from "@/assets/logo-mustafa.png";

const Footer = () => {
  return (
    <footer className="bg-secondary border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12 mb-8">
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <img src={logo} alt="Mustafa Barber's Shop" className="h-20 md:h-24 lg:h-28 w-auto mb-4" />
            <p className="text-muted-foreground max-w-xs">
              Tradição e qualidade em barbearia desde sempre
            </p>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col items-center text-center">
            <h4 className="text-xl font-bold text-primary mb-6">Contato</h4>
            <div className="space-y-4 w-full max-w-xs">
              <a
                href="tel:+5515992844348"
                className="flex items-center justify-center gap-2 text-muted-foreground hover:text-primary transition-colors p-4 bg-card/30 rounded-lg border border-border"
              >
                <Phone size={20} />
                <span className="text-base">(15) 99284-4348</span>
              </a>

              <a
                href="https://www.instagram.com/mustafabarbersshop"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 text-muted-foreground hover:text-primary transition-colors p-4 bg-card/30 rounded-lg border border-border"
              >
                <Instagram size={20} />
                <span className="text-base">@mustafabarbersshop</span>
              </a>
            </div>
          </div>

          {/* Address */}
          <div className="flex flex-col items-center text-center">
            <h4 className="text-xl font-bold text-primary mb-6">Endereço</h4>
            <div className="p-4 bg-card/30 rounded-lg border border-border w-full max-w-xs">
              <div className="flex items-start justify-center gap-2 text-muted-foreground">
                <MapPin size={18} className="shrink-0 mt-1" />
                <p className="text-sm leading-relaxed">
                  Rua Antônio Rocha Camargo, 139<br />
                  Vila Domingues<br />
                  Votorantim/SP
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border text-center">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Mustafa Barber's Shop. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
