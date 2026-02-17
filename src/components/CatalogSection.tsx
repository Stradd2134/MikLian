import productRemera from "@/assets/product-remera.jpg";
import productBuzo from "@/assets/product-buzo.jpg";
import productParejas from "@/assets/product-parejas.jpg";
import productUniformes from "@/assets/product-uniformes.jpg";
import productEventos from "@/assets/product-eventos.jpg";

const products = [
  { name: "Remeras personalizadas", image: productRemera, desc: "Tu diseño en algodón premium" },
  { name: "Buzos personalizados", image: productBuzo, desc: "Calidez con tu estilo único" },
  { name: "Conjuntos para parejas", image: productParejas, desc: "Combiná con tu persona favorita" },
  { name: "Uniformes de trabajo", image: productUniformes, desc: "Profesionalismo a tu medida" },
  { name: "Prendas para eventos", image: productEventos, desc: "Cumpleaños, egresados y más" },
];

const CatalogSection = () => {
  return (
    <section id="productos" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="font-body text-sm uppercase tracking-[0.3em] text-primary mb-4">
            Catálogo
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
            Nuestros productos
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div
              key={product.name}
              className="group relative overflow-hidden rounded-2xl bg-card border border-border hover:shadow-xl transition-all duration-500"
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl font-semibold text-foreground mb-1">
                  {product.name}
                </h3>
                <p className="font-body text-sm text-muted-foreground mb-4">
                  {product.desc}
                </p>
                <a
                  href="https://wa.me/543513711417"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-5 py-2.5 bg-primary text-primary-foreground rounded-full text-sm font-medium hover:opacity-90 transition-opacity"
                >
                  Quiero el mío
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CatalogSection;
