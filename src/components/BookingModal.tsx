import { Dialog, DialogContent, DialogTitle, DialogOverlay } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Phone, MapPin } from "lucide-react";
import { useEffect } from "react";

interface BookingModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const BookingModal = ({ open, onOpenChange }: BookingModalProps) => {
  // Lock body scroll when modal is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
      document.body.style.overscrollBehavior = 'contain';
    } else {
      document.body.style.overflow = '';
      document.body.style.overscrollBehavior = '';
    }
    return () => {
      document.body.style.overflow = '';
      document.body.style.overscrollBehavior = '';
    };
  }, [open]);
  const locations = [
    {
      name: "Unidade 1",
      address: "Rua Brás Cubas, 16 — Centro de Santos",
      whatsapp: "https://wa.me/5513996751314",
    },
    {
      name: "Unidade 2",
      address: "Av. Bernardino de Campos, 368 A2 — Santos",
      whatsapp: "https://wa.me/5513996911034",
    },
  ];

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogOverlay className="fixed inset-0 z-[9999] bg-black/55 data-[state=open]:animate-fade-in" style={{ height: '100dvh', overscrollBehavior: 'contain' }} />
      <DialogContent 
        className="fixed left-[50%] top-[50%] z-[9999] translate-x-[-50%] translate-y-[-50%] overflow-y-auto overflow-x-hidden p-4 border-white/20 animate-scale-in"
        style={{
          backdropFilter: "blur(15px)",
          background: "rgba(255, 255, 255, 0.08)",
          border: "1px solid rgba(255, 255, 255, 0.2)",
          borderRadius: "16px",
          boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
          transform: "translate(-50%, -50%) translateZ(0)",
          width: "min(92vw, 340px)",
          maxWidth: "340px",
          minWidth: "280px",
          maxHeight: "min(88dvh, 420px)",
          boxSizing: "border-box",
        }}
      >
        <DialogTitle className="text-lg font-bold text-primary text-center mb-2">
          Escolha a unidade
        </DialogTitle>
        
        <div className="space-y-2.5">
          {locations.map((location, index) => (
            <div
              key={index}
              className="p-3 rounded-xl border border-white/10 bg-black/35 hover:bg-white/10 transition-all"
            >
              <div className="flex items-start gap-2 mb-2.5">
                <MapPin className="text-primary shrink-0 mt-0.5" size={16} />
                <div className="min-w-0 flex-1">
                  <h3 className="font-bold text-foreground text-sm">{location.name}</h3>
                  <p className="text-xs text-muted-foreground leading-tight" style={{ overflowWrap: "anywhere", whiteSpace: "normal" }}>
                    {location.address}
                  </p>
                </div>
              </div>
              
              <Button
                variant="cta"
                size="sm"
                className="w-full min-h-[42px] text-sm font-bold whitespace-nowrap overflow-hidden text-ellipsis"
                asChild
              >
                <a
                  href={location.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2"
                  onClick={() => onOpenChange(false)}
                >
                  <Phone size={16} />
                  Agendar no WhatsApp
                </a>
              </Button>
            </div>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default BookingModal;
