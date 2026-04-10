"use client";

import { useState, type FormEvent } from "react";
import { useScrollReveal } from "./useScrollReveal";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  useScrollReveal();

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/contact`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(form),
        }
      );
      if (!res.ok) throw new Error("Errore nell'invio");
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contatti" className="py-28 lg:py-36 bg-bg">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16 scroll-reveal">
          <span className="text-accent text-[0.8rem] uppercase tracking-[0.15em] font-semibold">
            Contatti
          </span>
          <h2 className="font-[family-name:var(--font-playfair)] text-[2rem] md:text-[2.75rem] font-semibold tracking-[-0.02em] text-text mt-4">
            Vieni a trovarci
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left — info + form */}
          <div className="scroll-reveal">
            <div className="space-y-6 mb-12">
              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                </div>
                <div>
                  <div className="font-semibold text-text text-sm">Telefono</div>
                  <a
                    href="tel:+393339038865"
                    className="text-text-muted hover:text-accent transition-colors"
                  >
                    +39 333 903 8865
                  </a>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                </div>
                <div>
                  <div className="font-semibold text-text text-sm">Indirizzo</div>
                  <p className="text-text-muted">
                    Lungotevere Prati, 21a
                    <br />
                    00193 Roma RM, Italia
                  </p>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </div>
                <div>
                  <div className="font-semibold text-text text-sm">WhatsApp</div>
                  <a
                    href="https://wa.me/393339038865"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-600 hover:text-green-700 font-medium transition-colors"
                  >
                    Scrivici su WhatsApp
                  </a>
                </div>
              </div>

              <a
                href="https://www.google.com/maps/search/?api=1&query=Lungotevere+Prati+21a+00193+Roma"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-primary text-white text-sm uppercase tracking-[0.1em] font-medium px-6 py-3 rounded-full hover:bg-accent hover:text-primary transition-all duration-300 mt-2"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
                Apri in Google Maps
              </a>
            </div>

            {/* Contact form */}
            {status === "success" ? (
              <div className="bg-green-50 border border-green-200 rounded-2xl p-10 text-center">
                <svg className="w-12 h-12 text-green-500 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h3 className="font-[family-name:var(--font-playfair)] text-xl font-semibold text-text mb-2">
                  Messaggio inviato!
                </h3>
                <p className="text-text-muted">
                  Ti risponderemo il prima possibile. Grazie per averci contattato!
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <input
                    type="text"
                    required
                    placeholder="Nome completo"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full bg-white border border-neutral-200 rounded-xl px-5 py-3.5 text-text placeholder:text-text-muted/50 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all"
                  />
                  <input
                    type="email"
                    required
                    placeholder="Email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full bg-white border border-neutral-200 rounded-xl px-5 py-3.5 text-text placeholder:text-text-muted/50 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all"
                  />
                </div>
                <input
                  type="tel"
                  placeholder="Telefono"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="w-full bg-white border border-neutral-200 rounded-xl px-5 py-3.5 text-text placeholder:text-text-muted/50 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all"
                />
                <textarea
                  required
                  rows={4}
                  placeholder="Il tuo messaggio..."
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full bg-white border border-neutral-200 rounded-xl px-5 py-3.5 text-text placeholder:text-text-muted/50 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all resize-none"
                />
                {status === "error" && (
                  <p className="text-red-500 text-sm">
                    Si è verificato un errore. Riprova o contattaci su WhatsApp.
                  </p>
                )}
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full bg-accent text-primary text-sm uppercase tracking-[0.15em] font-semibold px-10 py-4 rounded-full hover:scale-[1.02] hover:shadow-xl hover:brightness-110 transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {status === "loading" ? "Invio in corso..." : "Invia Messaggio"}
                </button>
              </form>
            )}
          </div>

          {/* Right — map placeholder */}
          <div className="scroll-reveal stagger-2">
            <div className="relative bg-primary rounded-2xl overflow-hidden h-full min-h-[500px] border-2 border-accent/20">
              {/* Grid texture */}
              <div
                className="absolute inset-0 opacity-[0.05]"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
                  backgroundSize: "40px 40px",
                }}
              />

              {/* Map pin illustration */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative">
                  <div className="w-32 h-32 rounded-full bg-accent/10 flex items-center justify-center">
                    <div className="w-20 h-20 rounded-full bg-accent/20 flex items-center justify-center">
                      <svg
                        className="w-10 h-10 text-accent"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fillRule="evenodd"
                          d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                  {/* Pulse */}
                  <div className="absolute inset-0 w-32 h-32 rounded-full bg-accent/10 animate-ping" style={{ animationDuration: "3s" }} />
                </div>
              </div>

              {/* Address overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-primary via-primary/90 to-transparent p-8 pt-16">
                <h3 className="font-[family-name:var(--font-playfair)] text-white text-xl font-semibold mb-2">
                  CrossFit Prati
                </h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  Lungotevere Prati, 21a
                  <br />
                  00193 Roma RM, Italia
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
