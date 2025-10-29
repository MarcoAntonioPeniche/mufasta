import { Button } from "@/components/ui/button";
import { Instagram as InstagramIcon } from "lucide-react";

const Instagram = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 text-center animate-fade-in">
        <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
          Siga no Instagram
        </h2>
        <p className="text-lg text-muted-foreground mb-8">
          Acompanhe nossos trabalhos e novidades
        </p>
        
        <Button
          variant="cta"
          size="xl"
          asChild
        >
          <a
            href="https://www.instagram.com/barbeariavovogaroto?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2"
          >
            <InstagramIcon size={24} />
            @barbeariavovogaroto
          </a>
        </Button>
      </div>
    </section>
  );
};

export default Instagram;
