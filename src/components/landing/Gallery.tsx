import { useEffect, useRef, useState } from "react";
import { Play } from "lucide-react";

type Work = {
  /** Nombre base en public/media: usa "<slug>.jpg" como portada y "<slug>.mp4" al pasar el cursor. */
  slug: string;
  service: string;
  caption: string;
};

const WORKS: Work[] = [
  { slug: "wrap", service: "Full Wrap", caption: "Jeep Gladiator · Amarillo" },
  {
    slug: "ppf",
    service: "Paint Protection Film",
    caption: "Lexus IS · Película de protección",
  },
  {
    slug: "ceramico",
    service: "Recubrimiento Cerámico",
    caption: "Challenger · Sellado nano",
  },
  { slug: "detailing", service: "Detailing", caption: "Corrección de pintura" },
  {
    slug: "lavado",
    service: "Lavado Técnico",
    caption: "BMW X2 · Descontaminación con espuma",
  },
  {
    slug: "graficos",
    service: "Diseños & Gráficos",
    caption: "Shelby F-150 · Líneas centrales en vinil",
  },
];

function WorkCard({ work }: { work: Work }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  // En pantallas táctiles no existe el hover: ahí el video responde al toque.
  // Se resuelve después del montaje para que el HTML del servidor y el del
  // cliente coincidan.
  const [canHover, setCanHover] = useState(true);
  useEffect(() => {
    setCanHover(window.matchMedia("(hover: hover)").matches);
  }, []);

  const poster = `/media/${work.slug}.jpg`;
  const video = `/media/${work.slug}.mp4`;

  const start = () => {
    const v = videoRef.current;
    if (!v) return;
    // play() rechaza si el navegador bloquea la reproducción; el poster se queda.
    void v.play().then(() => setPlaying(true)).catch(() => setPlaying(false));
  };

  const stop = () => {
    const v = videoRef.current;
    if (!v) return;
    v.pause();
    v.currentTime = 0;
    setPlaying(false);
  };

  const toggle = () => (playing ? stop() : start());

  return (
    <figure
      className="group relative aspect-[3/4] cursor-pointer overflow-hidden bg-neutral-900"
      onMouseEnter={canHover ? start : undefined}
      onMouseLeave={canHover ? stop : undefined}
      onFocus={canHover ? start : undefined}
      onBlur={canHover ? stop : undefined}
      onClick={toggle}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          toggle();
        }
      }}
      role="button"
      aria-pressed={playing}
      aria-label={`${work.service}. ${playing ? "Detener" : "Reproducir"} video`}
      tabIndex={0}
    >
      <img
        src={poster}
        alt={`${work.service} — ${work.caption}`}
        loading="lazy"
        className={`absolute inset-0 h-full w-full object-cover transition-all duration-700 ${
          playing ? "opacity-0" : "opacity-100 grayscale group-hover:grayscale-0"
        }`}
      />

      <video
        ref={videoRef}
        src={video}
        poster={poster}
        muted
        loop
        playsInline
        preload="none"
        aria-label={`Video de ${work.service}`}
        className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ${
          playing ? "opacity-100" : "opacity-0"
        }`}
      />

      {/* Indicador de que la tarjeta tiene video, se oculta al reproducir */}
      <span
        className={`pointer-events-none absolute right-4 top-4 z-10 inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/40 bg-black/40 text-white backdrop-blur-sm transition-opacity duration-300 ${
          playing ? "opacity-0" : "opacity-100"
        }`}
      >
        <Play size={13} fill="currentColor" />
      </span>

      <figcaption className="pointer-events-none absolute inset-x-0 bottom-0 z-10 bg-gradient-to-t from-black/85 via-black/40 to-transparent p-5 pt-16">
        <p className="font-display text-lg font-bold uppercase leading-tight text-white sm:text-xl">
          {work.service}
        </p>
        <p className="mt-1 text-[11px] font-medium uppercase tracking-[0.25em] text-white/60">
          {work.caption}
        </p>
      </figcaption>
    </figure>
  );
}

export function Gallery() {
  return (
    <section id="galeria" className="border-t border-white/10 bg-black py-24 text-white sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-[minmax(0,1fr)_auto] md:items-end">
          <div>
            <p className="mb-5 text-[11px] font-medium uppercase tracking-[0.35em] text-white/50">
              04 — Galería
            </p>
            <h2 className="font-display text-[clamp(2rem,5vw,3.75rem)] font-black uppercase leading-[0.95]">
              Trabajos recientes.
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-white/60 md:text-right">
            Cada pieza corresponde a un vehículo real intervenido en nuestro estudio.
            Toca o pasa el cursor sobre cualquiera para verlo en movimiento.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {WORKS.map((w) => (
            <WorkCard key={w.service} work={w} />
          ))}
        </div>
      </div>
    </section>
  );
}
