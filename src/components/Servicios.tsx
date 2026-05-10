"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";

const SERVICIOS = [
  {
    num: "01",
    titulo: "Comunicación institucional",
    descripcion:
      "Apoyo en procesos comunicativos internos y organizacionales. Desarrollo y transmisión de mensajes claros, organizados y estratégicos.",
  },
  {
    num: "02",
    titulo: "Producción de contenidos",
    descripcion:
      "Creación y estructuración de contenidos informativos con narrativa estratégica. Intención, estructura y propósito en cada pieza.",
  },
  {
    num: "03",
    titulo: "Cobertura fotográfica",
    descripcion:
      "Registro visual de eventos, actividades y espacios institucionales. Fotografía documental con enfoque humano y contextual.",
  },
  {
    num: "04",
    titulo: "Gestión estratégica",
    descripcion:
      "Coordinación de procesos, manejo eficiente de responsabilidades y formación en disciplina, productividad y organización.",
  },
  {
    num: "05",
    titulo: "Presentación de informes",
    descripcion:
      "Comunicación oral estructurada para escenarios institucionales. Transmisión clara de datos, análisis y resultados.",
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

        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
          <h2
            className="font-heading text-3xl md:text-4xl font-bold text-petrol-dark leading-[1.08] tracking-tight max-w-md"
            data-reveal
            data-reveal-delay="60"
          >
            Lo que puedo hacer
            <br />
            por tu organizaci&oacute;n
          </h2>
          <p
            className="text-graphite/55 text-sm leading-relaxed max-w-sm"
            data-reveal
            data-reveal-delay="100"
          >
            Capacidades desarrolladas en la intersecci&oacute;n entre formaci&oacute;n militar,
            comunicaci&oacute;n acad&eacute;mica y experiencia operativa real.
          </p>
        </div>

        {/* Services — horizontal cards that stack on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-0" data-reveal data-reveal-delay="160">
          {SERVICIOS.map((s, i) => (
            <div
              key={i}
              className="group relative border-t-[2px] border-olive/20 hover:border-olive transition-colors duration-400 pt-6 pb-10 md:pr-6 md:last:pr-0"
            >
              <span className="font-heading text-[11px] font-bold text-olive/40 tracking-wide mb-4 block">
                {s.num}
              </span>
              <h3 className="font-heading text-[15px] font-semibold text-petrol-dark tracking-tight mb-3 group-hover:text-olive-dark transition-colors duration-400">
                {s.titulo}
              </h3>
              <p className="text-[13px] text-graphite/55 leading-relaxed">
                {s.descripcion}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
