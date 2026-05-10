"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";

const METRICAS = [
  { valor: "+10", label: "Años de experiencia" },
  { valor: "ComSoc", label: "Formación académica" },
  { valor: "IA", label: "Transformación digital" },
];

const COMPETENCIAS = [
  { area: "Liderazgo", detalle: "Coordinación de procesos y dirección de equipos bajo presión" },
  { area: "Institucional", detalle: "Comunicación estratégica, lectura y presentación de informes" },
  { area: "Visual", detalle: "Fotografía documental y producción de contenidos narrativos" },
  { area: "Digital", detalle: "IA y herramientas digitales aplicadas a comunicación" },
];

export default function Trayectoria() {
  const containerRef = useScrollReveal();

  return (
    <section
      id="trayectoria"
      aria-label="Trayectoria"
      className="bg-petrol-dark py-28 md:py-36"
      ref={containerRef}
    >
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex items-center gap-3 mb-6" data-reveal>
          <div className="w-10 h-[2px] bg-olive-light" />
          <span className="text-olive-light text-[11px] font-medium tracking-[0.25em] uppercase">
            Trayectoria
          </span>
        </div>

        <h2
          className="font-heading text-3xl md:text-4xl font-bold text-white leading-[1.08] tracking-tight mb-20 max-w-lg"
          data-reveal
          data-reveal-delay="60"
        >
          Una d&eacute;cada construyendo
          <br />
          capacidad estrat&eacute;gica
        </h2>

        {/* Top metrics — 3 key numbers, horizontal */}
        <div
          className="grid grid-cols-1 sm:grid-cols-3 gap-0 border-t border-b border-white/[0.08] mb-16"
          data-reveal
          data-reveal-delay="120"
        >
          {METRICAS.map((m, i) => (
            <div
              key={i}
              className={`py-8 ${
                i < METRICAS.length - 1 ? "sm:border-r border-b sm:border-b-0 border-white/[0.08]" : ""
              } ${i > 0 ? "sm:pl-10" : ""}`}
            >
              <span className="font-heading text-2xl md:text-3xl font-bold text-white tracking-tight block mb-1">
                {m.valor}
              </span>
              <span className="text-[13px] text-white/35">
                {m.label}
              </span>
            </div>
          ))}
        </div>

        {/* Competencies — clean 2-column list */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 lg:gap-x-24">
          {COMPETENCIAS.map((c, i) => (
            <div
              key={i}
              className="border-t border-white/[0.06] pt-5 pb-8"
              data-reveal
              data-reveal-delay={160 + i * 50}
            >
              <span className="font-heading text-[13px] font-semibold text-olive-light tracking-tight block mb-2">
                {c.area}
              </span>
              <p className="text-[15px] text-white/50 leading-relaxed">
                {c.detalle}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
