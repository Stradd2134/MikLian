import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";

const images = [
  { src: gallery1, alt: "Grupo con remeras personalizadas" },
  { src: gallery2, alt: "Detalle de bordado personalizado" },
  { src: gallery3, alt: "Cliente con remera personalizada" },
  { src: gallery4, alt: "Packaging personalizado" },
];

const GallerySection = () => {
  return (
    <section id="galeria" className="py-24 bg-card">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="font-body text-sm uppercase tracking-[0.3em] text-primary mb-4">
            Galería
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
            Nuestros trabajos
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {images.map((img, i) => (
            <div
              key={i}
              className={`overflow-hidden rounded-2xl ${
                i === 0 ? "md:col-span-2 md:row-span-2" : ""
              }`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 aspect-square"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
