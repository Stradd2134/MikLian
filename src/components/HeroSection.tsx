import heroBanner from "@/assets/hero-banner.jpg";

const HeroSection = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroBanner}
          alt="Prendas personalizadas"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/70 to-background/30" />
      </div>

      <div className="relative container mx-auto px-6 pt-24">
        <div className="max-w-xl">
          <p className="font-body text-sm uppercase tracking-[0.3em] text-primary mb-4 animate-fade-in-up">
            Ropa personalizada con amor
          </p>
          <h1 className="font-display text-5xl md:text-7xl font-bold text-foreground leading-tight mb-6 animate-fade-in-up" style={{ animationDelay: "0.15s" }}>
            Diseñá tu prenda{" "}
            <span className="italic text-primary">soñada</span>
          </h1>
          <p className="font-body text-lg text-muted-foreground mb-8 max-w-md animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            Creamos prendas únicas que cuentan tu historia. Remeras, buzos, conjuntos y más, hechos a medida para vos.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up" style={{ animationDelay: "0.45s" }}>
            <a
              href="https://wa.me/543513711417"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground rounded-full text-base font-medium hover:opacity-90 transition-all duration-300 hover:shadow-lg"
            >
              Personalizar ahora
            </a>
            <a
              href="#productos"
              className="inline-flex items-center justify-center px-8 py-4 border border-foreground/20 text-foreground rounded-full text-base font-medium hover:bg-accent transition-all duration-300"
            >
              Ver catálogo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
