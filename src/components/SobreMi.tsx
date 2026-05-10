"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function SobreMi() {
  const containerRef = useScrollReveal();

  return (
    <section
      id="perfil"
      aria-label="Perfil"
      className="bg-smoke-light py-28 md:py-36"
      ref={containerRef}
    >
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_0.6fr] gap-16 lg:gap-24 items-start">
          {/* Text dominant column */}
          <div>
            <div className="flex items-center gap-3 mb-6" data-reveal>
              <div className="w-10 h-[2px] bg-olive" />
              <span className="text-olive text-[11px] font-medium tracking-[0.25em] uppercase">
                Perfil
              </span>
            </div>

            <h2
              className="font-heading text-3xl md:text-4xl font-bold text-petrol-dark leading-[1.08] tracking-tight mb-3"
              data-reveal
              data-reveal-delay="60"
            >
              Alexis Triana Quintana
            </h2>

            <p
              className="text-olive text-[12px] font-medium tracking-[0.1em] uppercase mb-10"
              data-reveal
              data-reveal-delay="90"
            >
              Productor de contenidos &amp; Comunicador Social
            </p>

            <div
              className="space-y-5 text-[15px] text-graphite/70 leading-[1.9] max-w-2xl"
              data-reveal
              data-reveal-delay="120"
            >
              <p>
                A lo largo de m&aacute;s de diez a&ntilde;os en entornos militares y
                organizacionales, he fortalecido habilidades relacionadas con disciplina,
                responsabilidad, gesti&oacute;n operativa y trabajo bajo presi&oacute;n.
              </p>
              <p>
                Me caracterizo por mantener una visi&oacute;n estructurada frente a los retos,
                priorizando la organizaci&oacute;n, la claridad y la b&uacute;squeda de
                soluciones pr&aacute;cticas. Creo en el valor de la comunicaci&oacute;n clara,
                el liderazgo responsable y la capacidad de generar confianza a trav&eacute;s de
                la disciplina y el compromiso.
              </p>
              <p>
                Mi objetivo es consolidarme profesionalmente en comunicaci&oacute;n institucional,
                medios organizacionales y producci&oacute;n de contenidos informativos, aportando
                liderazgo y capacidad estrat&eacute;gica a proyectos con prop&oacute;sito.
              </p>
            </div>

            {/* Skills as inline tags */}
            <div className="mt-12 flex flex-wrap gap-2" data-reveal data-reveal-delay="180">
              {[
                "Comunicación institucional",
                "Liderazgo",
                "Análisis estratégico",
                "Gestión del tiempo",
                "Producción de contenidos",
                "Fotografía documental",
              ].map((skill) => (
                <span
                  key={skill}
                  className="text-[11px] tracking-[0.05em] text-petrol/70 border border-petrol/15 px-4 py-2"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Photo column — smaller, portrait */}
          <div className="lg:sticky lg:top-28" data-reveal data-reveal-delay="100">
            <div className="relative">
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src="/ATRIANA_PRO.png"
                  alt="Alexis Triana Quintana"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              {/* Bottom caption */}
              <div className="mt-4 flex items-center justify-between">
                <p className="text-[10px] tracking-[0.2em] uppercase text-graphite/35">
                  Comunicador &middot; L&iacute;der &middot; Estratega
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
