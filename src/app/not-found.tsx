import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[100dvh] bg-petrol-dark flex flex-col items-start justify-end relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/3 w-px h-full bg-white/[0.03]" />
        <div className="absolute top-0 left-2/3 w-px h-full bg-white/[0.03]" />
      </div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none">
        <span className="font-heading text-[16rem] md:text-[24rem] font-bold text-white/[0.03] leading-none tracking-tighter">
          404
        </span>
      </div>

      <div className="relative max-w-7xl mx-auto px-8 pb-24 pt-32 w-full">
        <div className="w-8 h-px bg-olive-light mb-6" />
        <p className="text-olive-light text-[11px] font-medium tracking-[0.3em] uppercase mb-4">
          Ruta no encontrada
        </p>
        <h1 className="font-heading text-4xl md:text-6xl font-bold text-white leading-[0.95] tracking-tight max-w-xl mb-8">
          Esta ruta no existe.
        </h1>
        <p className="text-white/60 text-sm leading-relaxed max-w-md mb-12">
          La p&aacute;gina que buscas no est&aacute; disponible. Puede que haya sido movida o que la direcci&oacute;n sea incorrecta.
        </p>
        <Link
          href="/"
          className="text-[11px] font-medium tracking-[0.2em] uppercase text-petrol-dark bg-olive-light px-8 py-4 min-h-[44px] inline-flex items-center hover:bg-olive transition-colors duration-300 active:scale-[0.97]"
        >
          Volver al inicio
        </Link>
      </div>
    </div>
  );
}
