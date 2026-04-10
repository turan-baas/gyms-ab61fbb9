"use client";

import { useScrollReveal } from "./useScrollReveal";

const reviews = [
  {
    text: "Da quando mi alleno a CrossFit Prati la mia vita è cambiata. I coach sono incredibili, la community ti spinge a dare sempre il massimo. Non tornerei mai in una palestra tradizionale.",
    name: "Alessandro R.",
    label: "Google Review",
  },
  {
    text: "Ho iniziato come principiante assoluto e dopo sei mesi riesco a fare cose che non avrei mai immaginato. L'ambiente è accogliente e i coach adattano tutto al tuo livello. Consigliatissimo.",
    name: "Giulia M.",
    label: "Google Review",
  },
  {
    text: "Il box è attrezzatissimo e la posizione in centro è perfetta. Vengo prima del lavoro alle 6:30 e la classe mattutina mi dà l'energia per tutta la giornata. Coach Marco è il top.",
    name: "Federico T.",
    label: "Google Review",
  },
];

export default function Reviews() {
  useScrollReveal();

  return (
    <section id="recensioni" className="py-28 lg:py-36 bg-surface">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16 scroll-reveal">
          <span className="text-accent text-[0.8rem] uppercase tracking-[0.15em] font-semibold">
            Recensioni
          </span>

          <div className="mt-6 flex flex-col items-center">
            <div className="font-[family-name:var(--font-playfair)] text-[6rem] font-bold text-primary leading-none">
              4
            </div>
            <div className="flex gap-1 mt-2">
              {[1, 2, 3, 4].map((i) => (
                <svg
                  key={i}
                  className="w-6 h-6 text-accent"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
              <svg className="w-6 h-6 text-text-muted/30" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            </div>
            <p className="text-text-muted text-sm mt-2">su Google</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, i) => (
            <div
              key={review.name}
              className={`scroll-reveal stagger-${i + 1} bg-white rounded-2xl shadow-sm p-8 relative`}
            >
              {/* Quote mark */}
              <svg
                className="absolute top-6 right-6 w-10 h-10 text-accent opacity-20"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.731-9.57 8.983-10.609L9.978 5.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H0z" />
              </svg>

              <p className="text-text-muted text-[1rem] leading-[1.8] italic mb-6 relative z-10">
                &ldquo;{review.text}&rdquo;
              </p>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                  <span className="text-accent text-sm font-semibold">
                    {review.name[0]}
                  </span>
                </div>
                <div>
                  <div className="font-semibold text-text text-sm">
                    {review.name}
                  </div>
                  <div className="text-text-muted text-xs">{review.label}</div>
                </div>
                <div className="ml-auto flex gap-0.5">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <svg
                      key={s}
                      className="w-3.5 h-3.5 text-accent"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
