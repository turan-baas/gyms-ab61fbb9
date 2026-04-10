"use client";

import { useScrollReveal } from "./useScrollReveal";

export default function About() {
  useScrollReveal();

  return (
    <section id="chi-siamo" className="py-28 lg:py-36 bg-bg">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 items-center">
          {/* Text */}
          <div className="lg:col-span-3 scroll-reveal">
            <span className="text-accent text-[0.8rem] uppercase tracking-[0.15em] font-semibold">
              Chi Siamo
            </span>
            <h2 className="font-[family-name:var(--font-playfair)] text-[2rem] md:text-[2.75rem] font-semibold tracking-[-0.02em] text-text mt-4 mb-8">
              Il CrossFit nel cuore
              <br />
              del quartiere Prati
            </h2>
            <p className="text-text-muted text-[1.125rem] leading-[1.8] mb-6">
              CrossFit Prati nasce dalla passione per l&apos;allenamento funzionale e dalla
              volontà di creare uno spazio dove ogni persona, indipendentemente dal livello
              di esperienza, possa superare i propri limiti. Siamo il primo box CrossFit
              affiliato nel centro storico di Roma, a due passi dal Lungotevere.
            </p>
            <p className="text-text-muted text-[1.125rem] leading-[1.8] mb-6">
              Il nostro box non è una semplice palestra: è una community. Qui ogni WOD
              è un&apos;occasione per crescere insieme, supportati da coach certificati che
              seguono ogni atleta con attenzione e dedizione. Dalle 6 del mattino fino
              a sera, le nostre classi accolgono principianti e atleti esperti con lo
              stesso entusiasmo.
            </p>
            <p className="text-text-muted text-[1.125rem] leading-[1.8]">
              A Lungotevere Prati 21a, tra i palazzi storici del quartiere, troverai
              rig, bilancieri, kettlebell e soprattutto persone che condividono la tua
              stessa voglia di migliorarsi ogni giorno.
            </p>
          </div>

          {/* Decorative */}
          <div className="lg:col-span-2 scroll-reveal stagger-2">
            <div className="relative flex items-center justify-center min-h-[400px]">
              {/* Abstract shapes */}
              <div className="absolute w-64 h-64 rounded-full bg-accent/10" />
              <div className="absolute w-48 h-48 rounded-full bg-surface border border-accent/20 translate-x-12 -translate-y-8" />
              <div className="absolute w-32 h-32 rounded-2xl bg-primary/5 -translate-x-16 translate-y-16 rotate-12" />

              {/* Rating display */}
              <div className="relative bg-white rounded-2xl shadow-xl p-10 text-center z-10">
                <div className="font-[family-name:var(--font-playfair)] text-[5rem] font-bold text-primary leading-none">
                  4.0
                </div>
                <div className="flex justify-center gap-1 mt-3 mb-3">
                  {[1, 2, 3, 4].map((i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-accent"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                  <svg
                    className="w-5 h-5 text-text-muted/30"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
                <p className="text-text-muted text-sm">su Google</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
