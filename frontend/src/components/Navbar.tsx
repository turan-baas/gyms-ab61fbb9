"use client";

import { useState, useEffect } from "react";

const links = [
  { href: "#home", label: "Home" },
  { href: "#chi-siamo", label: "Chi Siamo" },
  { href: "#servizi", label: "Servizi" },
  { href: "#orari", label: "Orari" },
  { href: "#abbonamenti", label: "Abbonamenti" },
  { href: "#coach", label: "Coach" },
  { href: "#recensioni", label: "Recensioni" },
  { href: "#contatti", label: "Contatti" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/95 shadow-lg backdrop-blur-[12px]"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between h-20">
        <a
          href="#home"
          className="font-[family-name:var(--font-playfair)] text-xl font-bold tracking-tight"
        >
          <span className={scrolled ? "text-primary" : "text-white"}>
            CrossFit{" "}
          </span>
          <span className="text-accent">Prati</span>
        </a>

        <div className="hidden lg:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`relative text-[0.8rem] uppercase tracking-[0.15em] font-medium transition-colors duration-300 group ${
                scrolled
                  ? "text-primary hover:text-accent"
                  : "text-white/90 hover:text-white"
              }`}
            >
              {link.label}
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-accent transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
          <a
            href="#contatti"
            className="ml-4 bg-accent text-primary text-[0.8rem] uppercase tracking-[0.15em] font-medium px-6 py-2.5 rounded-full hover:bg-accent-dark hover:scale-[1.03] hover:shadow-xl transition-all duration-300"
          >
            Contattaci
          </a>
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden relative w-8 h-8 flex flex-col items-center justify-center gap-1.5 z-50"
          aria-label="Menu"
        >
          <span
            className={`block w-6 h-[2px] transition-all duration-300 ${
              mobileOpen
                ? "rotate-45 translate-y-[5px] bg-white"
                : scrolled
                ? "bg-primary"
                : "bg-white"
            }`}
          />
          <span
            className={`block w-6 h-[2px] transition-all duration-300 ${
              mobileOpen
                ? "opacity-0"
                : scrolled
                ? "bg-primary"
                : "bg-white"
            }`}
          />
          <span
            className={`block w-6 h-[2px] transition-all duration-300 ${
              mobileOpen
                ? "-rotate-45 -translate-y-[5px] bg-white"
                : scrolled
                ? "bg-primary"
                : "bg-white"
            }`}
          />
        </button>
      </nav>

      <div
        className={`fixed inset-0 bg-primary/95 backdrop-blur-md flex items-center justify-center transition-all duration-500 lg:hidden ${
          mobileOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col items-center gap-8">
          {links.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="text-white text-2xl font-[family-name:var(--font-playfair)] font-semibold tracking-wide transition-all duration-300 hover:text-accent"
              style={{
                transitionDelay: mobileOpen ? `${i * 80}ms` : "0ms",
                opacity: mobileOpen ? 1 : 0,
                transform: mobileOpen
                  ? "translateY(0)"
                  : "translateY(20px)",
              }}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}
