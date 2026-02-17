import { ShoppingBag, Send, Palette, Package } from "lucide-react";

const steps = [
  { icon: ShoppingBag, step: "01", title: "Elegís tu prenda", desc: "Remera, buzo, conjunto o lo que necesites" },
  { icon: Send, step: "02", title: "Enviás tu idea", desc: "Compartinos tu diseño, frase o inspiración" },
  { icon: Palette, step: "03", title: "Creamos tu prenda", desc: "La diseñamos y producimos con dedicación" },
  { icon: Package, step: "04", title: "Recibís algo único", desc: "Una prenda hecha especialmente para vos" },
];

const HowItWorksSection = () => {
  return (
    <section id="como-funciona" className="py-24 bg-rose-soft/40">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="font-body text-sm uppercase tracking-[0.3em] text-primary mb-4">
            Proceso
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
            ¿Cómo funciona?
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {steps.map((s, i) => (
            <div key={s.step} className="text-center group">
              <div className="relative mb-6">
                <div className="w-20 h-20 rounded-full bg-card border-2 border-primary/20 flex items-center justify-center mx-auto group-hover:border-primary group-hover:bg-primary/5 transition-all duration-300">
                  <s.icon className="w-8 h-8 text-primary" />
                </div>
                <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary text-primary-foreground text-xs font-bold flex items-center justify-center font-body">
                  {s.step}
                </span>
                {i < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 left-full w-full h-px bg-border -translate-y-1/2" />
                )}
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-2">{s.title}</h3>
              <p className="font-body text-sm text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
