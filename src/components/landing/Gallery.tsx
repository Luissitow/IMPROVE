import { useRef, useState } from "react";
import { Play } from "lucide-react";
import porscheAmarillo from "@/assets/estudio/porsche-amarillo.jpg";
import porscheBlanco from "@/assets/estudio/porsche-blanco.jpg";
import camaroRoja from "@/assets/estudio/camaro-roja.jpg";
import pulidorasFlex from "@/assets/estudio/pulidoras-flex.jpg";
import jeepAzul from "@/assets/estudio/jeep-azul.jpg";
import shelbyFranjas from "@/assets/estudio/shelby-franjas.jpg";

type Work = {
  service: string;
  caption: string;
  poster: string;
  video: string;
};

const WORKS: Work[] = [
  {
    service: "Full Wrap",
    caption: "Jeep Gladiator · Amarillo",
    poster: porscheAmarillo,
    video: "/media/wrap.mp4",
  },
  {
    service: "Paint Protection Film",
    caption: "Aplicación de película",
    poster: porscheBlanco,
    video: "/media/ppf.mp4",
  },
  {
    service: "Recubrimiento Cerámico",
    caption: "Challenger · Sellado nano",
    poster: camaroRoja,
    video: "/media/ceramico.mp4",
  },
  {
    service: "Detailing",
    caption: "Corrección de pintura",
    poster: pulidorasFlex,
    video: "/media/detailing.mp4",
  },
  {
    service: "Lavado Técnico",
    caption: "Descontaminación con espuma",
    poster: jeepAzul,
    video: "/media/lavado.mp4",
  },
  {
    service: "Diseños & Gráficos",
    caption: "Shelby F-150 · Franjas",
    poster: shelbyFranjas,
    video: "/media/showroom.mp4",
  },
];

function WorkCard({ work }: { work: Work }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

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

  return (
    <figure
      className="group relative aspect-[3/4] overflow-hidden bg-neutral-900"
      onMouseEnter={start}
      onMouseLeave={stop}
      onFocus={start}
      onBlur={stop}
      tabIndex={0}
    >
      <img
        src={work.poster}
        alt={`${work.service} — ${work.caption}`}
        loading="lazy"
        className={`absolute inset-0 h-full w-full object-cover transition-all duration-700 ${
          playing ? "opacity-0" : "opacity-100 grayscale group-hover:grayscale-0"
        }`}
      />

      <video
        ref={videoRef}
        src={work.video}
        poster={work.poster}
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
            Pasa el cursor sobre cualquiera para ver el trabajo en movimiento.
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
