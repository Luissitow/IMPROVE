import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import g5 from "@/assets/gallery-5.jpg";
import g6 from "@/assets/gallery-6.jpg";

const ITEMS = [
  { src: g1, label: "Full Wrap · Sedan matte", w: 1000, h: 1400 },
  { src: g3, label: "Detailing exterior", w: 1400, h: 1000 },
  { src: g2, label: "Recubrimiento cerámico", w: 1000, h: 1000 },
  { src: g4, label: "Protección de rines", w: 1000, h: 1200 },
  { src: g5, label: "Estudio IMPROVE · Toluca", w: 1400, h: 1000 },
  { src: g6, label: "Carbon skin · PPF", w: 1000, h: 1300 },
];

export function Gallery() {
  return (
    <section id="galeria" className="border-t border-white/10 bg-black py-24 text-white sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-[minmax(0,1fr)_auto] md:items-end">
          <div>
            <p className="mb-5 text-[11px] font-medium uppercase tracking-[0.35em] text-white/50">
              03 — Galería
            </p>
            <h2 className="font-display text-[clamp(2rem,5vw,3.75rem)] font-black uppercase leading-[0.95]">
              Trabajos recientes.
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-white/60 md:text-right">
            Una selección de proyectos ejecutados en nuestro estudio. Cada imagen
            corresponde a un vehículo real intervenido por el equipo IMPROVE.
          </p>
        </div>

        <div className="mt-16 columns-1 gap-4 sm:columns-2 lg:columns-3 [column-fill:_balance]">
          {ITEMS.map((it) => (
            <figure
              key={it.label}
              className="group relative mb-4 block break-inside-avoid overflow-hidden bg-neutral-900"
            >
              <img
                src={it.src}
                alt={it.label}
                loading="lazy"
                width={it.w}
                height={it.h}
                className="h-auto w-full object-cover grayscale transition duration-700 group-hover:scale-[1.02] group-hover:grayscale-0"
              />
              <figcaption className="pointer-events-none absolute inset-x-0 bottom-0 flex items-center justify-between bg-gradient-to-t from-black/70 to-transparent p-5 text-[11px] font-medium uppercase tracking-[0.25em] text-white">
                {it.label}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}