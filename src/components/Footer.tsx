"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function Footer() {
  const containerRef = useScrollReveal();

  return (
    <footer className="bg-petrol-dark" ref={containerRef}>
      {/* CTA */}
      <div className="border-b border-white/5">
        <div className="max-w-7xl mx-auto px-8 py-24 md:py-32">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-6" data-reveal>
              <div className="w-10 h-[2px] bg-olive-light" />
              <span className="text-olive-light text-[11px] font-medium tracking-[0.25em] uppercase">
                Contacto
              </span>
            </div>

            <h2
              className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-[1.08] tracking-tight mb-6"
              data-reveal
              data-reveal-delay="60"
            >
              Iniciemos una
              <br />
              conversaci&oacute;n<span className="text-olive-light">.</span>
            </h2>

            <p
              className="text-white/45 text-sm leading-relaxed mb-10 max-w-md"
              data-reveal
              data-reveal-delay="100"
            >
              Si buscas una visi&oacute;n estructurada, humana y profesional para procesos
              comunicativos y organizacionales.
            </p>

            <a
              href="mailto:contacto@alexistriana.com"
              className="inline-flex items-center gap-3 text-[12px] font-medium tracking-[0.1em] uppercase bg-olive-light text-petrol-dark px-8 py-4 min-h-[48px] hover:bg-olive transition-colors duration-300 active:scale-[0.97]"
              data-reveal
              data-reveal-delay="140"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
              </svg>
              contacto@alexistriana.com
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="max-w-7xl mx-auto px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-3">
        <p className="font-heading text-[13px] font-bold text-white/25 tracking-tight">
          Alexis Triana<span className="text-olive-light/40">.</span>
        </p>
        <p className="text-[10px] text-white/15 tracking-wide">
          &copy; {new Date().getFullYear()} Alexis Triana Quintana
        </p>
      </div>
    </footer>
  );
}
