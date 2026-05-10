"use client";

export default function Diferencial() {
  return (
    <section
      id="diferencial"
      aria-label="Diferencial"
      className="relative min-h-[100dvh] overflow-hidden"
    >
      {/* Full-bleed military photo — object-top to show Alexis's face */}
      <div className="absolute inset-0">
        <img
          src="/atriana_militar.png"
          alt="Alexis Triana en operación estratégica con equipo militar"
          className="w-full h-full object-cover object-[center_35%]"
        />
        {/* Gradient from bottom-left for text legibility while keeping face visible */}
        <div className="absolute inset-0 bg-gradient-to-t from-petrol-dark via-petrol-dark/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-petrol-dark/80 via-petrol-dark/40 to-transparent" />
      </div>

      {/* Content pinned to bottom */}
      <div className="relative min-h-[100dvh] flex flex-col justify-end max-w-7xl mx-auto px-8">
        <div className="pb-16 pt-28 max-w-xl">
          <div className="flex items-center gap-3 mb-8 animate-[fadeUp_0.7s_cubic-bezier(0.25,1,0.5,1)_0.1s_both]">
            <div className="w-10 h-[2px] bg-olive-light" />
            <span className="text-olive-light text-[11px] font-medium tracking-[0.25em] uppercase">
              Diferencial
            </span>
          </div>

          <h1
            className="font-heading text-[clamp(2.5rem,6vw,5.5rem)] font-bold text-white leading-[1.02] tracking-[-0.02em] mb-8 animate-[fadeUp_0.8s_cubic-bezier(0.25,1,0.5,1)_0.2s_both]"
          >
            No es experiencia
            <br className="hidden md:block" />{" "}
            militar. Es visi&oacute;n
            <br className="hidden md:block" />{" "}
            <span className="text-olive-light">estrat&eacute;gica.</span>
          </h1>

          <p
            className="text-white/65 text-base md:text-lg leading-relaxed max-w-md mb-10 animate-[fadeUp_0.8s_cubic-bezier(0.25,1,0.5,1)_0.35s_both]"
          >
            M&aacute;s de diez a&ntilde;os en entornos de m&aacute;xima exigencia no forman solo
            disciplina. Forman la capacidad de leer contextos, coordinar equipos bajo presi&oacute;n
            y comunicar con precisi&oacute;n cuando importa.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-10 gap-y-3 animate-[fadeUp_0.8s_cubic-bezier(0.25,1,0.5,1)_0.5s_both]">
            {[
              "Comunicación estratégica",
              "Liderazgo bajo presión",
              "Análisis de contextos",
              "Gestión operativa",
              "Producción de contenidos",
              "Adaptación continua",
            ].map((item, i) => (
              <p key={i} className="text-[13px] text-white/50 flex items-center gap-2.5">
                <span className="w-1 h-1 bg-olive-light shrink-0" />
                {item}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
