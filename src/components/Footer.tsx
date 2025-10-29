import { MapPin, Phone, Instagram } from "lucide-react";
import logo from "@/assets/logo-vovo-garoto.png";

const Footer = () => {
  return (
    <footer className="bg-secondary border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12 mb-8">
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <img src={logo} alt="Barbearia Vovô Garoto" className="h-20 md:h-24 lg:h-28 w-auto mb-4" />
            <p className="text-muted-foreground max-w-xs">
              Tradição e qualidade em barbearia desde sempre
            </p>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col items-center text-center">
            <h4 className="text-xl font-bold text-primary mb-6">Contatos</h4>
            <div className="space-y-6 w-full max-w-xs">
              {/* Unidade 1 */}
              <div className="space-y-3 p-4 bg-card/30 rounded-lg border border-border">
                <h5 className="text-base font-bold text-primary">Unidade 1</h5>
                <a
                  href="tel:+5513996751314"
                  className="flex items-center justify-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                >
                  <Phone size={18} />
                  <span className="text-base">(13) 99675-1314</span>
                </a>
              </div>

              {/* Unidade 2 */}
              <div className="space-y-3 p-4 bg-card/30 rounded-lg border border-border">
                <h5 className="text-base font-bold text-primary">Unidade 2</h5>
                <a
                  href="tel:+5513996911034"
                  className="flex items-center justify-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                >
                  <Phone size={18} />
                  <span className="text-base">(13) 99691-1034</span>
                </a>
              </div>

              {/* Instagram */}
              <div className="pt-4 border-t border-border">
                <a
                  href="https://www.instagram.com/barbeariavovogaroto?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                >
                  <Instagram size={20} />
                  <span className="text-base">@barbeariavovogaroto</span>
                </a>
              </div>
            </div>
          </div>

          {/* Address */}
          <div className="flex flex-col items-center text-center">
            <h4 className="text-xl font-bold text-primary mb-6">Endereços</h4>
            <div className="space-y-6 w-full max-w-xs">
              {/* Unidade 1 */}
              <div className="p-4 bg-card/30 rounded-lg border border-border">
                <h5 className="text-base font-bold text-primary mb-3">Unidade 1</h5>
                <div className="flex items-start justify-center gap-2 text-muted-foreground">
                  <MapPin size={18} className="shrink-0 mt-1" />
                  <p className="text-sm leading-relaxed">
                    Rua Brás Cubas, 16<br />
                    Centro de Santos<br />
                    Santos/SP
                  </p>
                </div>
              </div>

              {/* Unidade 2 */}
              <div className="p-4 bg-card/30 rounded-lg border border-border">
                <h5 className="text-base font-bold text-primary mb-3">Unidade 2</h5>
                <div className="flex items-start justify-center gap-2 text-muted-foreground">
                  <MapPin size={18} className="shrink-0 mt-1" />
                  <p className="text-sm leading-relaxed">
                    Avenida Bernardino de Campos, 368<br />
                    Canal 2<br />
                    Santos/SP
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border text-center">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Barbearia Vovô Garoto. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
