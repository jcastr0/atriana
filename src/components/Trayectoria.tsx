"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";

const HITOS = [
  { etiqueta: "2014–Presente", dato: "+10 años en entornos militares y organizacionales" },
  { etiqueta: "Formación", dato: "Comunicación Social, Producción de Contenidos Informativos" },
  { etiqueta: "Liderazgo", dato: "Coordinación de procesos y dirección de equipos bajo presión" },
  { etiqueta: "Digital", dato: "IA y transformación digital aplicada a comunicación" },
  { etiqueta: "Institucional", dato: "Comunicación estratégica, lectura y presentación de informes" },
  { etiqueta: "Visual", dato: "Fotografía documental y producción de contenidos narrativos" },
];

export default function Trayectoria() {
  const containerRef = useScrollReveal();

  return (
    <section
      id="trayectoria"
      aria-label="Trayectoria"
      className="bg-petrol-dark py-28 md:py-36 relative overflow-hidden"
      ref={containerRef}
    >
      {/* Large background number */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 pointer-events-none select-none hidden lg:block">
        <span className="font-heading text-[20rem] font-bold text-white/[0.02] leading-none tracking-tighter">
          10+
        </span>
      </div>

      <div className="relative max-w-7xl mx-auto px-8">
        <div className="flex items-center gap-3 mb-6" data-reveal>
          <div className="w-10 h-[2px] bg-olive-light" />
          <span className="text-olive-light text-[11px] font-medium tracking-[0.25em] uppercase">
            Trayectoria
          </span>
        </div>

        <h2
          className="font-heading text-3xl md:text-4xl font-bold text-white leading-[1.08] tracking-tight mb-16 max-w-lg"
          data-reveal
          data-reveal-delay="60"
        >
          Una d&eacute;cada construyendo
          <br />
          capacidad estrat&eacute;gica
        </h2>

        {/* Data rows — clean, no cards */}
        <div>
          {HITOS.map((h, i) => (
            <div
              key={i}
              className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-2 md:gap-8 py-6 border-t border-white/[0.06]"
              data-reveal
              data-reveal-delay={i * 60}
            >
              <span className="font-heading text-[13px] font-semibold text-olive-light tracking-tight">
                {h.etiqueta}
              </span>
              <p className="text-[15px] text-white/60 leading-relaxed">
                {h.dato}
              </p>
            </div>
          ))}
          <div className="border-t border-white/[0.06]" />
        </div>
      </div>
    </section>
  );
}
