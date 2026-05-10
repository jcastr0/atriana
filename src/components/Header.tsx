"use client";

import { useState, useEffect } from "react";

const NAV_LINKS = [
  { href: "#diferencial", label: "Diferencial" },
  { href: "#servicios", label: "Servicios" },
  { href: "#trayectoria", label: "Trayectoria" },
  { href: "#perfil", label: "Perfil" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(`#${entry.target.id}`);
        });
      },
      { threshold: 0.25, rootMargin: "-80px 0px -35% 0px" }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-petrol-dark/95 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      {/* Top accent line */}
      <div className="h-[2px] bg-olive-light" />

      <div className="max-w-7xl mx-auto px-8 flex items-center justify-between h-16">
        <a href="#" className="font-heading text-[15px] font-bold tracking-[-0.01em] text-white">
          Alexis Triana<span className="text-olive-light">.</span>
        </a>

        <nav className="hidden lg:flex items-center gap-8" aria-label="Principal">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-[12px] font-medium tracking-[0.05em] transition-colors duration-300 ${
                activeSection === link.href
                  ? "text-olive-light"
                  : "text-white/45 hover:text-white"
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="mailto:contacto@alexistriana.com"
            className="text-[11px] font-medium tracking-[0.1em] uppercase bg-olive-light text-petrol-dark px-5 py-2 hover:bg-olive transition-colors duration-300 ml-2"
          >
            Contacto
          </a>
        </nav>

        <button
          className="lg:hidden text-white w-10 h-10 flex items-center justify-center"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-expanded={menuOpen}
          aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
        >
          <div className="relative w-5 h-3.5 flex flex-col justify-between">
            <span className={`block w-full h-px bg-white transition-all duration-300 origin-center ${menuOpen ? "rotate-45 translate-y-[6px]" : ""}`} />
            <span className={`block w-full h-px bg-white transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block w-full h-px bg-white transition-all duration-300 origin-center ${menuOpen ? "-rotate-45 -translate-y-[6px]" : ""}`} />
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`fixed inset-0 top-[calc(2px+4rem)] bg-petrol-dark/98 backdrop-blur-lg z-40 transition-opacity duration-400 lg:hidden ${menuOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
        <nav className="max-w-7xl mx-auto px-8 pt-12">
          <ul className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={`block py-4 border-b border-white/5 text-lg font-heading tracking-tight transition-colors ${
                    activeSection === link.href ? "text-olive-light" : "text-white/60"
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="mailto:contacto@alexistriana.com"
            onClick={() => setMenuOpen(false)}
            className="inline-block mt-8 text-[11px] font-medium tracking-[0.15em] uppercase bg-olive-light text-petrol-dark px-8 py-4 min-h-[44px]"
          >
            Contacto
          </a>
        </nav>
      </div>
    </header>
  );
}
