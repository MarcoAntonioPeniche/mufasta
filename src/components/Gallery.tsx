import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";

const Gallery = () => {
  const images = [
    { src: gallery1, alt: "Cliente com corte moderno na Barbearia Vovô Garoto" },
    { src: gallery2, alt: "Corte masculino em frente ao letreiro neon da Unidade 2" },
    { src: gallery3, alt: "Barbeiro aplicando técnica de barbearia profissional" },
    { src: gallery4, alt: "Corte social masculino com degradê perfeito" },
    { src: gallery5, alt: "Corte infantil estiloso na Barbearia Vovô Garoto" },
    { src: gallery6, alt: "Corte moderno com fade e estilo único" },
  ];

  return (
    <section id="gallery" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Galeria
          </h2>
          <p className="text-lg text-muted-foreground">
            Nosso trabalho em detalhes
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-lg aspect-square group animate-scale-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
