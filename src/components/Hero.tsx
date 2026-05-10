"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function Hero() {
  const containerRef = useScrollReveal();

  return (
    <section
      aria-label="Inicio"
      className="relative py-28 md:py-36 bg-petrol-dark overflow-hidden"
      ref={containerRef}
    >
      {/* Background photo with heavy overlay */}
      <div className="absolute inset-0">
        <img
          src="/ATRIANA_PRO.png"
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover object-top opacity-10 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-petrol-dark via-petrol-dark/95 to-petrol-dark/80" />
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-8">
        <div className="max-w-4xl">
          <div className="flex items-center gap-3 mb-6" data-reveal>
            <div className="w-10 h-[2px] bg-olive-light" />
            <span className="text-olive-light text-[11px] font-medium tracking-[0.25em] uppercase">
              Comunicaci&oacute;n &amp; Liderazgo
            </span>
          </div>

          <h2
            className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-[1.08] tracking-tight mb-8"
            data-reveal
            data-reveal-delay="60"
          >
            Donde la disciplina
            <br className="hidden md:block" />{" "}
            se convierte en
            <br className="hidden md:block" />{" "}
            <span className="text-olive-light">estrategia.</span>
          </h2>

          <p
            className="text-white/55 text-[15px] leading-relaxed max-w-xl mb-16"
            data-reveal
            data-reveal-delay="120"
          >
            M&aacute;s de una d&eacute;cada transformando experiencia militar e institucional
            en comunicaci&oacute;n estrat&eacute;gica, liderazgo organizacional y producci&oacute;n
            de contenidos con prop&oacute;sito.
          </p>
        </div>

        {/* Stats */}
        <div className="flex flex-wrap gap-12 md:gap-20 border-t border-white/10 pt-8" data-reveal data-reveal-delay="180">
          <div>
            <span className="font-heading text-3xl md:text-4xl font-bold text-white tracking-tight">+10</span>
            <span className="block text-[10px] tracking-[0.2em] uppercase text-white/35 mt-1">A&ntilde;os</span>
          </div>
          <div>
            <span className="font-heading text-3xl md:text-4xl font-bold text-white tracking-tight">Militar</span>
            <span className="block text-[10px] tracking-[0.2em] uppercase text-white/35 mt-1">Formaci&oacute;n</span>
          </div>
          <div>
            <span className="font-heading text-3xl md:text-4xl font-bold text-white tracking-tight">ComSoc</span>
            <span className="block text-[10px] tracking-[0.2em] uppercase text-white/35 mt-1">Comunicaci&oacute;n</span>
          </div>
        </div>
      </div>
    </section>
  );
}
