import { useEffect, useRef, useState } from "react";
import { Play, Pause, SkipForward, Volume2, VolumeX } from "lucide-react";

const PHRASE = "Esto es lo que pasa aquí dentro .";
const WORDS = PHRASE.split(" ");

// Altura extra (en vh) que dura el pin: cuánto scroll se necesita para
// revelar la frase completa antes de que el video tome la pantalla.
const SCROLL_VH = 190;
// Punto del recorrido en el que la frase termina y entra el video.
const REVEAL_AT = 0.62;

const clamp = (n: number, min: number, max: number) => Math.min(Math.max(n, min), max);

type CommercialProps = {
  /** Se llama al entrar y salir del tramo fijo, para que el header se retire. */
  onImmersiveChange?: (immersive: boolean) => void;
};

export function Commercial({ onImmersiveChange }: CommercialProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const [progress, setProgress] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(true);

  useEffect(() => {
    let frame = 0;

    const onScroll = () => {
      // Un solo cálculo por frame: el listener de scroll dispara muy seguido.
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        const el = wrapperRef.current;
        if (!el) return;
        const total = el.offsetHeight - window.innerHeight;
        if (total <= 0) return;
        const scrolled = clamp(-el.getBoundingClientRect().top, 0, total);
        setProgress(scrolled / total);
      });
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  const revealed = progress >= REVEAL_AT;

  // El video solo se descarga cuando el visitante ya empezó a recorrer la sección.
  const armed = progress > 0.02;

  // "Inmersivo" mientras la sección está fija: desde que empieza a pinearse
  // hasta que el scroll la libera. Fuera de ese rango el header vuelve.
  const immersive = progress > 0.02 && progress < 0.99;

  useEffect(() => {
    onImmersiveChange?.(immersive);
  }, [immersive, onImmersiveChange]);

  // Al desmontar, devuelve el header a su estado normal.
  useEffect(() => () => onImmersiveChange?.(false), [onImmersiveChange]);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    if (revealed) {
      void v.play().then(() => setPlaying(true)).catch(() => setPlaying(false));
    } else if (!v.paused) {
      v.pause();
      setPlaying(false);
    }
  }, [revealed]);

  const togglePlay = () => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) {
      void v.play().then(() => setPlaying(true)).catch(() => setPlaying(false));
    } else {
      v.pause();
      setPlaying(false);
    }
  };

  const toggleMute = () => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = !v.muted;
    setMuted(v.muted);
  };

  const skip = () => {
    const v = videoRef.current;
    if (v) {
      v.pause();
      setPlaying(false);
    }
    document.getElementById("servicios")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      ref={wrapperRef}
      id="estudio"
      style={{ height: `${100 + SCROLL_VH}vh` }}
      className="relative bg-black"
    >
      <section className="sticky top-0 h-[100svh] w-full overflow-hidden bg-black text-white">
        {/* El material está grabado en vertical. En móvil llena la pantalla y se
            ve completo; en escritorio, recortarlo a 16:9 dejaba una franja central
            estirada y borrosa, así que se muestra entero sobre el mismo cuadro
            desenfocado. */}
        <div
          aria-hidden="true"
          className="absolute inset-0 hidden scale-110 bg-cover bg-center blur-2xl transition-opacity duration-700 md:block"
          style={{
            backgroundImage: "url(/media/comercial-poster.jpg)",
            opacity: revealed ? 0.5 : 0,
          }}
        />

        <video
          ref={videoRef}
          src="/media/comercial.mp4"
          poster="/media/comercial-poster.jpg"
          muted={muted}
          loop
          playsInline
          preload={armed ? "auto" : "none"}
          aria-label="Video del estudio IMPROVE"
          className="absolute inset-0 h-full w-full object-cover transition-opacity duration-700 md:object-contain"
          style={{ opacity: revealed ? 1 : 0 }}
        />

        {/* Velo: opaco durante la frase, translúcido cuando corre el video */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-black transition-opacity duration-700"
          style={{ opacity: revealed ? 0.45 : 1 }}
        />

        {/* Frase revelada palabra por palabra según el avance del scroll */}
        <div
          className="absolute inset-0 flex items-center justify-center px-6 transition-opacity duration-500"
          style={{ opacity: revealed ? 0 : 1, pointerEvents: "none" }}
        >
          <p className="max-w-4xl text-center font-display text-[clamp(1.5rem,5.5vw,4rem)] font-black uppercase leading-[1.08] tracking-[0.06em]">
            {WORDS.map((word, i) => {
              // Cada palabra ocupa un tramo del recorrido y se enciende al pasarlo.
              const step = (progress / REVEAL_AT) * WORDS.length - i;
              const t = clamp(step, 0, 1);
              return (
                <span
                  key={`${word}-${i}`}
                  className="inline-block"
                  style={{
                    opacity: 0.12 + 0.88 * t,
                    transform: `translateY(${(1 - t) * 14}px)`,
                    filter: `blur(${(1 - t) * 5}px)`,
                    transition: "opacity 120ms linear, transform 120ms linear",
                  }}
                >
                  {word}
                  {i < WORDS.length - 1 ? " " : ""}
                </span>
              );
            })}
          </p>
        </div>

        {/* Barra de avance del pin, para que se entienda que hay recorrido */}
        <div
          aria-hidden="true"
          className="absolute inset-x-0 bottom-0 h-0.5 bg-white/10"
          style={{ opacity: revealed ? 0 : 1 }}
        >
          <div
            className="h-full bg-white"
            style={{ width: `${clamp(progress / REVEAL_AT, 0, 1) * 100}%` }}
          />
        </div>

        {/* Título y controles, ya con el video corriendo */}
        <div
          className="absolute inset-0 flex flex-col justify-between p-5 transition-opacity duration-700 sm:p-8"
          style={{ opacity: revealed ? 1 : 0, pointerEvents: revealed ? "auto" : "none" }}
        >
          <div className="flex items-start justify-between gap-4">
            <p className="text-[11px] font-medium uppercase tracking-[0.35em] text-white/70">
              01 — El estudio
            </p>

            <button
              type="button"
              onClick={skip}
              className="inline-flex items-center gap-2 border border-white/50 bg-black/40 px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.25em] text-white backdrop-blur-sm transition-colors hover:border-white hover:bg-white hover:text-black"
            >
              Saltar <SkipForward size={14} />
            </button>
          </div>

          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-xl">
              <h2 className="font-display text-[clamp(1.75rem,5vw,3.5rem)] font-black uppercase leading-[0.95]">
                Personalización
                <br />y protección real.
              </h2>
              <p className="mt-4 max-w-md text-sm leading-relaxed text-white/70">
                Procesos controlados, herramienta profesional y gente que trata cada
                auto como si fuera suyo.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={togglePlay}
                aria-label={playing ? "Pausar video" : "Reproducir video"}
                className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/50 bg-black/40 text-white backdrop-blur-sm transition-colors hover:bg-white hover:text-black"
              >
                {playing ? (
                  <Pause size={18} fill="currentColor" />
                ) : (
                  <Play size={18} fill="currentColor" className="ml-0.5" />
                )}
              </button>
              <button
                type="button"
                onClick={toggleMute}
                aria-label={muted ? "Activar sonido" : "Silenciar"}
                className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/50 bg-black/40 text-white backdrop-blur-sm transition-colors hover:bg-white hover:text-black"
              >
                {muted ? <VolumeX size={18} /> : <Volume2 size={18} />}
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
