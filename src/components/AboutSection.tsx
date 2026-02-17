import { Heart, Sparkles, Star } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="nosotros" className="py-24 bg-card">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-body text-sm uppercase tracking-[0.3em] text-primary mb-4">
            Sobre nosotros
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-8">
            Transformamos ideas en{" "}
            <span className="italic text-primary">prendas únicas</span>
          </h2>
          <p className="font-body text-lg text-muted-foreground leading-relaxed mb-12">
            Somos un emprendimiento creativo que nació de la pasión por el diseño y la moda personalizada.
            Cada prenda que creamos es única, pensada y hecha a medida para cada cliente.
            Creemos que la ropa es una forma de expresión, y por eso nos dedicamos a convertir tus ideas
            en piezas que podés llevar con orgullo.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Heart, title: "Hecho con amor", desc: "Cada detalle importa, cada prenda tiene alma" },
              { icon: Sparkles, title: "100% personalizado", desc: "Tu idea, tu diseño, tu estilo único" },
              { icon: Star, title: "Calidad premium", desc: "Materiales de primera para que dure siempre" },
            ].map((item) => (
              <div key={item.title} className="p-6 rounded-2xl bg-rose-soft/50 group hover:bg-rose-soft transition-colors duration-300">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="font-body text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
