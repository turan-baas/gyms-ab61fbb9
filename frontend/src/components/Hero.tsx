"use client";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-primary"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1920&q=80"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/65" />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 20% 50%, rgba(232,168,56,0.12) 0%, transparent 50%), radial-gradient(ellipse at 80% 20%, rgba(232,168,56,0.08) 0%, transparent 40%)",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <div
          className="inline-block mb-6 px-5 py-2 border border-accent/30 rounded-full"
          style={{ animation: "fadeInUp 0.8s ease-out forwards" }}
        >
          <span className="text-accent text-[0.75rem] uppercase tracking-[0.2em] font-medium">
            Il Primo CrossFit nel Cuore di Roma
          </span>
        </div>

        <h1
          className="font-[family-name:var(--font-playfair)] text-[2.75rem] md:text-[4rem] lg:text-[5rem] font-bold text-white tracking-[-0.03em] leading-[1.05] mb-8"
          style={{ animation: "fadeInUp 0.8s ease-out 0.2s both" }}
        >
          CrossFit
          <br />
          <span className="text-accent">Prati</span>
        </h1>

        <p
          className="max-w-xl mx-auto text-white/70 text-lg md:text-xl font-[family-name:var(--font-inter)] font-normal leading-relaxed mb-12"
          style={{ animation: "fadeInUp 0.8s ease-out 0.4s both" }}
        >
          Allenamento funzionale, community autentica e coaching d&apos;eccellenza
          nel quartiere Prati di Roma.
        </p>

        <div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          style={{ animation: "fadeInUp 0.8s ease-out 0.6s both" }}
        >
          <a
            href="#abbonamenti"
            className="inline-block bg-accent text-primary text-sm uppercase tracking-[0.15em] font-semibold px-10 py-4 rounded-full hover:scale-[1.03] hover:shadow-2xl hover:brightness-110 transition-all duration-300"
          >
            Prova Gratuita
          </a>
          <a
            href="#orari"
            className="inline-block border border-white/30 text-white text-sm uppercase tracking-[0.15em] font-medium px-10 py-4 rounded-full hover:border-accent hover:text-accent transition-all duration-300"
          >
            Vedi Orari
          </a>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-bg to-transparent" />
    </section>
  );
}
