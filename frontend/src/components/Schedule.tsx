"use client";

import { useState } from "react";
import { useScrollReveal } from "./useScrollReveal";

const days = ["Lunedì", "Martedì", "Mercoledì", "Giovedì", "Venerdì", "Sabato"];

const schedule: Record<
  string,
  { time: string; name: string; coach: string; level: string; spots: number }[]
> = {
  Lunedì: [
    { time: "06:30", name: "WOD Mattutino", coach: "Marco", level: "Tutti", spots: 4 },
    { time: "09:00", name: "Open Box", coach: "Sara", level: "Intermedio", spots: 8 },
    { time: "12:30", name: "WOD Pausa Pranzo", coach: "Marco", level: "Tutti", spots: 6 },
    { time: "17:30", name: "Strength & Conditioning", coach: "Luca", level: "Avanzato", spots: 3 },
    { time: "19:00", name: "WOD Serale", coach: "Sara", level: "Tutti", spots: 2 },
  ],
  Martedì: [
    { time: "06:30", name: "WOD Mattutino", coach: "Luca", level: "Tutti", spots: 5 },
    { time: "09:00", name: "Mobility & Recovery", coach: "Sara", level: "Principiante", spots: 10 },
    { time: "12:30", name: "WOD Pausa Pranzo", coach: "Marco", level: "Tutti", spots: 7 },
    { time: "18:00", name: "Olympic Lifting", coach: "Luca", level: "Intermedio", spots: 4 },
    { time: "19:30", name: "WOD Serale", coach: "Marco", level: "Tutti", spots: 1 },
  ],
  Mercoledì: [
    { time: "06:30", name: "WOD Mattutino", coach: "Sara", level: "Tutti", spots: 6 },
    { time: "09:00", name: "Open Box", coach: "Marco", level: "Intermedio", spots: 8 },
    { time: "12:30", name: "WOD Pausa Pranzo", coach: "Luca", level: "Tutti", spots: 5 },
    { time: "17:30", name: "Endurance", coach: "Sara", level: "Avanzato", spots: 3 },
    { time: "19:00", name: "WOD Serale", coach: "Marco", level: "Tutti", spots: 4 },
  ],
  Giovedì: [
    { time: "06:30", name: "WOD Mattutino", coach: "Marco", level: "Tutti", spots: 3 },
    { time: "09:00", name: "Mobility & Recovery", coach: "Sara", level: "Principiante", spots: 10 },
    { time: "12:30", name: "WOD Pausa Pranzo", coach: "Luca", level: "Tutti", spots: 6 },
    { time: "18:00", name: "Strength & Conditioning", coach: "Luca", level: "Avanzato", spots: 5 },
    { time: "19:30", name: "WOD Serale", coach: "Sara", level: "Tutti", spots: 2 },
  ],
  Venerdì: [
    { time: "06:30", name: "WOD Mattutino", coach: "Luca", level: "Tutti", spots: 7 },
    { time: "09:00", name: "Open Box", coach: "Marco", level: "Tutti", spots: 8 },
    { time: "12:30", name: "WOD Pausa Pranzo", coach: "Sara", level: "Tutti", spots: 4 },
    { time: "17:30", name: "Olympic Lifting", coach: "Luca", level: "Intermedio", spots: 3 },
    { time: "19:00", name: "WOD Serale + Social", coach: "Marco", level: "Tutti", spots: 5 },
  ],
  Sabato: [
    { time: "09:00", name: "WOD Weekend", coach: "Marco", level: "Tutti", spots: 8 },
    { time: "10:30", name: "Team WOD", coach: "Sara", level: "Tutti", spots: 6 },
    { time: "12:00", name: "Open Box", coach: "Luca", level: "Tutti", spots: 10 },
  ],
};

function getLevelColor(level: string) {
  switch (level) {
    case "Principiante":
      return "bg-green-100 text-green-700";
    case "Intermedio":
      return "bg-amber-100 text-amber-700";
    case "Avanzato":
      return "bg-red-100 text-red-700";
    default:
      return "bg-blue-100 text-blue-700";
  }
}

export default function Schedule() {
  const [activeDay, setActiveDay] = useState("Lunedì");
  useScrollReveal();

  return (
    <section id="orari" className="py-28 lg:py-36 bg-bg">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16 scroll-reveal">
          <span className="text-accent text-[0.8rem] uppercase tracking-[0.15em] font-semibold">
            Orari delle Classi
          </span>
          <h2 className="font-[family-name:var(--font-playfair)] text-[2rem] md:text-[2.75rem] font-semibold tracking-[-0.02em] text-text mt-4">
            Prenota la tua classe
          </h2>
          <p className="text-text-muted text-[1.05rem] mt-4 max-w-2xl mx-auto">
            Scegli il giorno e l&apos;orario che preferisci. I posti sono limitati per
            garantire la massima attenzione del coach.
          </p>
        </div>

        {/* Day tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12 scroll-reveal">
          {days.map((day) => (
            <button
              key={day}
              onClick={() => setActiveDay(day)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium tracking-wide transition-all duration-300 ${
                activeDay === day
                  ? "bg-accent text-primary shadow-lg"
                  : "bg-white text-text-muted hover:text-text border border-neutral-200"
              }`}
            >
              {day}
            </button>
          ))}
        </div>

        {/* Class list */}
        <div className="max-w-3xl mx-auto space-y-4 scroll-reveal">
          {schedule[activeDay].map((cls, i) => (
            <div
              key={`${activeDay}-${i}`}
              className="bg-white rounded-xl border border-neutral-200 p-6 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 hover:shadow-lg hover:border-accent/30 transition-all duration-300"
            >
              <div className="text-2xl font-semibold text-primary min-w-[70px] font-[family-name:var(--font-playfair)]">
                {cls.time}
              </div>
              <div className="flex-1">
                <div className="font-semibold text-text">{cls.name}</div>
                <div className="text-text-muted text-sm mt-1">
                  Coach {cls.coach}
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span
                  className={`text-xs font-medium px-3 py-1 rounded-full ${getLevelColor(
                    cls.level
                  )}`}
                >
                  {cls.level}
                </span>
                <span
                  className={`text-xs font-medium ${
                    cls.spots <= 2 ? "text-red-500" : "text-text-muted"
                  }`}
                >
                  {cls.spots} posti
                </span>
              </div>
              <button className="bg-primary text-white text-xs uppercase tracking-[0.1em] font-medium px-5 py-2.5 rounded-full hover:bg-accent hover:text-primary transition-all duration-300">
                Prenota
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
