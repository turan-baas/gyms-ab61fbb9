"use client";

import { useScrollReveal } from "./useScrollReveal";

const services = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
    title: "Classi di Gruppo",
    desc: "Le nostre classi WOD da 60 minuti combinano forza, resistenza e mobilità in un ambiente motivante. Ogni sessione è guidata da un coach certificato che adatta gli esercizi al tuo livello, dal principiante all'atleta avanzato.",
    image: "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Classe di CrossFit di gruppo in azione",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
      </svg>
    ),
    title: "Personal Training",
    desc: "Programmi individuali studiati su misura per i tuoi obiettivi specifici. Che tu voglia migliorare la tecnica di sollevamento, prepararti per una competizione o tornare in forma dopo un infortunio, il tuo coach personale ti guiderà passo dopo passo.",
    image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Personal training con coach dedicato",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
      </svg>
    ),
    title: "Nutrizione e Benessere",
    desc: "Un approccio olistico al fitness che va oltre l'allenamento. Offriamo consulenze nutrizionali personalizzate, piani alimentari e supporto continuo per ottimizzare la tua performance e il tuo benessere quotidiano.",
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Alimentazione sana e nutrizione sportiva",
  },
];

export default function Services() {
  useScrollReveal();

  return (
    <section id="servizi" className="py-28 lg:py-36 bg-surface">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20 scroll-reveal">
          <span className="text-accent text-[0.8rem] uppercase tracking-[0.15em] font-semibold">
            I Nostri Servizi
          </span>
          <h2 className="font-[family-name:var(--font-playfair)] text-[2rem] md:text-[2.75rem] font-semibold tracking-[-0.02em] text-text mt-4">
            Cosa offriamo
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <div
              key={s.title}
              className={`scroll-reveal stagger-${i + 1} bg-white border border-neutral-200 rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:border-accent`}
            >
              <div className="relative h-52 overflow-hidden">
                <img
                  src={s.image}
                  alt={s.imageAlt}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                <div className="absolute bottom-4 left-4 w-12 h-12 rounded-full bg-accent/90 flex items-center justify-center text-primary">
                  {s.icon}
                </div>
              </div>
              <div className="p-8 lg:p-10">
                <h3 className="font-semibold text-lg text-text mb-3">
                  {s.title}
                </h3>
                <p className="text-text-muted text-[1.05rem] leading-[1.8]">
                  {s.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16 scroll-reveal">
          <a
            href="#contatti"
            className="inline-block bg-accent text-primary text-sm uppercase tracking-[0.15em] font-semibold px-10 py-4 rounded-full hover:scale-[1.03] hover:shadow-2xl hover:brightness-110 transition-all duration-300"
          >
            Scopri di Più
          </a>
        </div>
      </div>
    </section>
  );
}
