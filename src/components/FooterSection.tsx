import { Instagram, Mail, Phone } from "lucide-react";

const FooterSection = () => {
  return (
    <footer className="py-16 bg-charcoal text-primary-foreground">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <p className="font-display text-3xl md:text-4xl font-bold italic mb-4">
            "No vendemos ropa, creamos recuerdos que se usan"
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="text-center md:text-left">
            <h3 className="font-display text-xl font-bold mb-4">MikLian Indumentaria</h3>
            <p className="font-body text-sm opacity-70">
              Ropa personalizada con amor. Cada prenda cuenta una historia única.
            </p>
          </div>

          <div className="text-center">
            <h3 className="font-display text-lg font-semibold mb-4">Contacto</h3>
            <div className="flex flex-col gap-3 items-center">
              <a href="mailto:hola@tuprenda.com" className="font-body text-sm opacity-70 hover:opacity-100 transition-opacity flex items-center gap-2">
                <Mail className="w-4 h-4" /> hola@tuprenda.com
              </a>
              <a href="https://wa.me/543513711417" target="_blank" rel="noopener noreferrer" className="font-body text-sm opacity-70 hover:opacity-100 transition-opacity flex items-center gap-2">
                <Phone className="w-4 h-4" /> +54 351 371-1417
              </a>
            </div>
          </div>

          <div className="text-center md:text-right">
            <h3 className="font-display text-lg font-semibold mb-4">Seguinos</h3>
            <div className="flex gap-4 justify-center md:justify-end">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-primary-foreground/20 flex items-center justify-center hover:bg-primary-foreground/10 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 pt-8 text-center">
          <p className="font-body text-xs opacity-50">
            © {new Date().getFullYear()} MikLian Indumentaria. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
