export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <div className="font-[family-name:var(--font-playfair)] text-2xl font-bold mb-4">
              CrossFit <span className="text-accent">Prati</span>
            </div>
            <p className="text-white/50 text-sm leading-relaxed max-w-xs">
              Il primo box CrossFit affiliato nel centro storico di Roma.
              Allenamento funzionale, community e coaching d&apos;eccellenza.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-sm uppercase tracking-[0.15em] font-semibold text-accent mb-6">
              Navigazione
            </h4>
            <nav className="space-y-3">
              {[
                { href: "#home", label: "Home" },
                { href: "#chi-siamo", label: "Chi Siamo" },
                { href: "#servizi", label: "Servizi" },
                { href: "#orari", label: "Orari" },
                { href: "#abbonamenti", label: "Abbonamenti" },
                { href: "#contatti", label: "Contatti" },
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block text-white/50 text-sm hover:text-accent transition-colors duration-300"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm uppercase tracking-[0.15em] font-semibold text-accent mb-6">
              Contatti
            </h4>
            <div className="space-y-3 text-white/50 text-sm">
              <a
                href="tel:+393339038865"
                className="block hover:text-accent transition-colors duration-300"
              >
                +39 333 903 8865
              </a>
              <p>
                Lungotevere Prati, 21a
                <br />
                00193 Roma RM, Italia
              </p>
              <a
                href="https://wa.me/393339038865"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-green-400 hover:text-green-300 transition-colors duration-300"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* Divider + copyright */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/30 text-sm">
            &copy; 2026 CrossFit Prati. Tutti i diritti riservati.
          </p>
          <p className="text-white/20 text-xs">
            Lungotevere Prati, 21a — Roma
          </p>
        </div>
      </div>
    </footer>
  );
}
