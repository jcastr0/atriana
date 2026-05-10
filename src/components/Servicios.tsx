"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";

const SERVICIOS = [
  {
    titulo: "Comunicación institucional",
    descripcion:
      "Desarrollo y transmisión de mensajes claros, organizados y estratégicos para procesos internos y organizacionales.",
  },
  {
    titulo: "Producción de contenidos",
    descripcion:
      "Creación y estructuración de contenidos informativos con narrativa estratégica, intención y propósito.",
  },
  {
    titulo: "Cobertura fotográfica",
    descripcion:
      "Registro visual de eventos, actividades y espacios institucionales. Fotografía documental con enfoque humano.",
  },
  {
    titulo: "Gestión estratégica",
    descripcion:
      "Coordinación de procesos, manejo eficiente de responsabilidades, disciplina, productividad y organización.",
  },
  {
    titulo: "Presentación de informes",
    descripcion:
      "Comunicación oral estructurada para escenarios institucionales. Transmisión clara de datos y resultados.",
  },
];

export default function Servicios() {
  const containerRef = useScrollReveal();

  return (
    <section
      id="servicios"
      aria-label="Servicios"
      className="bg-smoke py-28 md:py-36"
      ref={containerRef}
    >
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex items-center gap-3 mb-6" data-reveal>
          <div className="w-10 h-[2px] bg-olive" />
          <span className="text-olive text-[11px] font-medium tracking-[0.25em] uppercase">
            Servicios
          </span>
        </div>

        <h2
          className="font-heading text-3xl md:text-4xl font-bold text-petrol-dark leading-[1.08] tracking-tight mb-20 max-w-md"
          data-reveal
          data-reveal-delay="60"
        >
          Lo que puedo hacer
          <br />
          por tu organizaci&oacute;n
        </h2>

        {/* 2-column grid, not 5 identical columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 lg:gap-x-24">
          {SERVICIOS.map((s, i) => (
            <div
              key={i}
              className={`group border-t border-graphite/10 pt-6 pb-10 ${
                i === SERVICIOS.length - 1 && SERVICIOS.length % 2 !== 0
                  ? "md:col-span-1"
                  : ""
              }`}
              data-reveal
              data-reveal-delay={i * 50}
            >
              <h3 className="font-heading text-[17px] font-semibold text-petrol-dark tracking-tight mb-3 group-hover:text-olive-dark transition-colors duration-300">
                {s.titulo}
              </h3>
              <p className="text-[14px] text-graphite/50 leading-[1.75] max-w-sm">
                {s.descripcion}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
