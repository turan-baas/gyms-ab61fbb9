"use client";

import { useScrollReveal } from "./useScrollReveal";

const coaches = [
  {
    name: "Marco Ferretti",
    role: "Head Coach & Fondatore",
    specializations: ["Forza", "Olympic Lifting", "Competizione"],
    certifications: "CrossFit L3, UISP, NSCA-CPT",
    years: 12,
    bio: "Atleta e coach con oltre 12 anni di esperienza nel functional fitness. Ha fondato CrossFit Prati con la missione di portare il CrossFit nel cuore di Roma.",
    instagram: "@marco_cfprati",
    initials: "MF",
    photo: "https://images.unsplash.com/photo-1567013127542-490d757e51fc?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Sara Moretti",
    role: "Coach & Nutrizionista",
    specializations: ["Mobilità", "Endurance", "Nutrizione"],
    certifications: "CrossFit L2, Precision Nutrition L1",
    years: 8,
    bio: "Specializzata in recupero funzionale e nutrizione sportiva. Sara aiuta ogni atleta a trovare il perfetto equilibrio tra performance e benessere.",
    instagram: "@sara_cfprati",
    initials: "SM",
    photo: "https://images.unsplash.com/photo-1609899464926-209991af498c?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Luca Bianchi",
    role: "Coach & Strength Specialist",
    specializations: ["Powerlifting", "Strength", "Conditioning"],
    certifications: "CrossFit L2, ISSA Strength Coach",
    years: 6,
    bio: "Ex atleta di powerlifting, Luca porta un approccio scientifico all'allenamento della forza. Le sue classi di S&C sono tra le più richieste del box.",
    instagram: "@luca_cfprati",
    initials: "LB",
    photo: "https://images.unsplash.com/photo-1583468982228-19f19164aee2?auto=format&fit=crop&w=400&q=80",
  },
];

export default function Coaches() {
  useScrollReveal();

  return (
    <section id="coach" className="py-28 lg:py-36 bg-bg">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20 scroll-reveal">
          <span className="text-accent text-[0.8rem] uppercase tracking-[0.15em] font-semibold">
            Il Nostro Team
          </span>
          <h2 className="font-[family-name:var(--font-playfair)] text-[2rem] md:text-[2.75rem] font-semibold tracking-[-0.02em] text-text mt-4">
            I Coach
          </h2>
          <p className="text-text-muted text-[1.05rem] mt-4 max-w-2xl mx-auto">
            Coach certificati e appassionati, pronti a guidarti in ogni passo del tuo percorso.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {coaches.map((coach, i) => (
            <div
              key={coach.name}
              className={`scroll-reveal stagger-${i + 1} bg-white rounded-2xl border border-neutral-200 p-8 lg:p-10 text-center hover:-translate-y-1.5 hover:shadow-xl hover:border-accent/30 transition-all duration-300`}
            >
              <div className="w-28 h-28 rounded-full mx-auto mb-6 overflow-hidden ring-4 ring-accent/20">
                <img
                  src={coach.photo}
                  alt={coach.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <h3 className="font-[family-name:var(--font-playfair)] text-xl font-semibold text-text">
                {coach.name}
              </h3>
              <p className="text-accent text-sm font-medium mt-1 mb-4">
                {coach.role}
              </p>

              <p className="text-text-muted text-[0.95rem] leading-[1.7] mb-5">
                {coach.bio}
              </p>

              <div className="flex flex-wrap justify-center gap-2 mb-4">
                {coach.specializations.map((s) => (
                  <span
                    key={s}
                    className="text-xs bg-surface text-text-muted px-3 py-1 rounded-full"
                  >
                    {s}
                  </span>
                ))}
              </div>

              <div className="text-xs text-text-muted mb-3">
                {coach.certifications}
              </div>
              <div className="text-xs text-text-muted">
                {coach.years} anni di esperienza
              </div>

              <div className="mt-5 pt-5 border-t border-neutral-100">
                <span className="text-sm text-accent font-medium">
                  {coach.instagram}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
