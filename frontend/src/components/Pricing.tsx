"use client";

import { useScrollReveal } from "./useScrollReveal";

const plans = [
  {
    name: "Drop-In",
    price: "20",
    period: "singola visita",
    features: [
      "Accesso a una classe a scelta",
      "Attrezzatura inclusa",
      "Coach dedicato",
      "Docce e spogliatoi",
    ],
    highlight: false,
    cta: "Prenota Drop-In",
  },
  {
    name: "Illimitato",
    price: "129",
    period: "al mese",
    features: [
      "Classi illimitate",
      "Open Box incluso",
      "Programma personalizzato",
      "Consulenza nutrizionale",
      "Community eventi",
      "Nessun vincolo contrattuale",
    ],
    highlight: true,
    cta: "Inizia Ora",
  },
  {
    name: "Pacchetto 10",
    price: "89",
    period: "10 classi",
    features: [
      "10 classi a scelta",
      "Validità 2 mesi",
      "Prenotazione prioritaria",
      "Docce e spogliatoi",
      "Opzione freeze 1 settimana",
    ],
    highlight: false,
    cta: "Acquista Pacchetto",
  },
];

const faqs = [
  {
    q: "Posso provare gratuitamente?",
    a: "Assolutamente sì! Offriamo una prima classe di prova completamente gratuita e senza impegno. Contattaci su WhatsApp o compila il form per prenotare.",
  },
  {
    q: "Devo avere esperienza con il CrossFit?",
    a: "No, accogliamo persone di tutti i livelli. I nostri coach adattano ogni esercizio al tuo livello di preparazione. Partiamo dalle basi e progrediamo insieme.",
  },
  {
    q: "Posso congelare l'abbonamento?",
    a: "Sì, con l'abbonamento Illimitato puoi congelare fino a 2 settimane al mese in caso di vacanza o necessità. Con il Pacchetto 10, puoi estendere la validità di 1 settimana.",
  },
  {
    q: "Che cosa devo portare?",
    a: "Scarpe da ginnastica (preferibilmente da CrossFit o sollevamento), abbigliamento comodo e una bottiglia d'acqua. Asciugamani e docce sono disponibili in box.",
  },
  {
    q: "C'è un contratto vincolante?",
    a: "No, i nostri abbonamenti mensili sono senza vincolo. Puoi cancellare in qualsiasi momento con un preavviso di 15 giorni.",
  },
];

export default function Pricing() {
  useScrollReveal();

  return (
    <section id="abbonamenti" className="py-28 lg:py-36 bg-surface">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20 scroll-reveal">
          <span className="text-accent text-[0.8rem] uppercase tracking-[0.15em] font-semibold">
            Abbonamenti
          </span>
          <h2 className="font-[family-name:var(--font-playfair)] text-[2rem] md:text-[2.75rem] font-semibold tracking-[-0.02em] text-text mt-4">
            Scegli il tuo piano
          </h2>
          <p className="text-text-muted text-[1.05rem] mt-4 max-w-2xl mx-auto">
            Piani flessibili, senza vincoli contrattuali. La prima classe è sempre gratuita.
          </p>
        </div>

        {/* Pricing cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-24">
          {plans.map((plan, i) => (
            <div
              key={plan.name}
              className={`scroll-reveal stagger-${i + 1} rounded-2xl p-8 lg:p-10 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl ${
                plan.highlight
                  ? "bg-primary text-white ring-2 ring-accent shadow-2xl scale-[1.02]"
                  : "bg-white border border-neutral-200"
              }`}
            >
              <div
                className={`text-sm uppercase tracking-[0.1em] font-semibold mb-4 ${
                  plan.highlight ? "text-accent" : "text-accent"
                }`}
              >
                {plan.name}
              </div>
              <div className="flex items-baseline gap-1 mb-1">
                <span
                  className={`font-[family-name:var(--font-playfair)] text-5xl font-bold ${
                    plan.highlight ? "text-white" : "text-text"
                  }`}
                >
                  &euro;{plan.price}
                </span>
              </div>
              <div
                className={`text-sm mb-8 ${
                  plan.highlight ? "text-white/60" : "text-text-muted"
                }`}
              >
                {plan.period}
              </div>
              <ul className="space-y-3 mb-8">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-[0.95rem]">
                    <svg
                      className={`w-5 h-5 mt-0.5 flex-shrink-0 ${
                        plan.highlight ? "text-accent" : "text-accent"
                      }`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className={plan.highlight ? "text-white/90" : "text-text-muted"}>
                      {f}
                    </span>
                  </li>
                ))}
              </ul>
              <a
                href="#contatti"
                className={`block text-center text-sm uppercase tracking-[0.1em] font-semibold px-6 py-3.5 rounded-full transition-all duration-300 hover:scale-[1.03] hover:shadow-lg ${
                  plan.highlight
                    ? "bg-accent text-primary"
                    : "bg-primary text-white hover:bg-accent hover:text-primary"
                }`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>

        {/* FAQ */}
        <div className="max-w-3xl mx-auto scroll-reveal">
          <h3 className="font-[family-name:var(--font-playfair)] text-2xl font-semibold text-text text-center mb-12">
            Domande Frequenti
          </h3>
          <div className="space-y-6">
            {faqs.map((faq) => (
              <div
                key={faq.q}
                className="bg-white rounded-xl border border-neutral-200 p-6"
              >
                <h4 className="font-semibold text-text mb-2">{faq.q}</h4>
                <p className="text-text-muted text-[0.95rem] leading-[1.7]">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
