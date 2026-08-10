import { useEffect, useRef, useState } from "react";
import { Droplets, Wrench, Sparkles, ClipboardCheck } from "lucide-react";
import { smoothScrollTo } from "./scroll";

const STEPS = [
  {
    icon: Droplets,
    title: "Descontaminación exterior",
    description:
      "Lavado técnico, descontaminación química y mecánica para preparar cada superficie sin comprometer el acabado original.",
  },
  {
    icon: Wrench,
    title: "Desarmado cuidadoso",
    description:
      "Retiro milimétrico de piezas para acceder a áreas críticas. Documentamos cada componente para un armado perfecto.",
  },
  {
    icon: Sparkles,
    title: "Ejecución del servicio",
    description:
      "Instalación técnica con materiales certificados, ambiente controlado y protocolos rigurosos de calidad.",
  },
  {
    icon: ClipboardCheck,
    title: "Armado y revisión final",
    description:
      "Reensamblado, verificación multipunto y entrega documentada. Nada sale del estudio sin nuestra aprobación total.",
  },
];

// Distancia de scroll (en vh) que dura resaltado cada paso mientras la sección está fija.
const STEP_VH = 42;

export function Process() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const activeRef = useRef(0);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const el = wrapperRef.current;
      if (!el) return;
      const total = el.offsetHeight - window.innerHeight;
      if (total <= 0) return;
      const scrolled = Math.min(Math.max(-el.getBoundingClientRect().top, 0), total);
      const progress = scrolled / total; // 0 → 1 mientras la sección está fija
      const idx = Math.min(STEPS.length - 1, Math.floor(progress * STEPS.length));
      if (idx !== activeRef.current) {
        activeRef.current = idx;
        setActive(idx);
      }
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  // Al pulsar un paso, lleva el scroll al punto del recorrido donde ese paso
  // queda activo. El resaltado lo sigue calculando onScroll, así que la
  // animación de la sección se conserva igual que al desplazarse a mano.
  const goToStep = (index: number) => {
    const el = wrapperRef.current;
    if (!el) return;
    const total = el.offsetHeight - window.innerHeight;
    if (total <= 0) return;
    const top = el.getBoundingClientRect().top + window.scrollY;
    // El centro del tramo del paso, para no quedar en el límite con el vecino.
    const progress = (index + 0.5) / STEPS.length;
    smoothScrollTo(top + progress * total);
  };

  return (
    <section id="proceso" className="relative border-t border-border bg-white text-neutral-900">
      {/* ===== Desktop: sección fija con pasos que se resaltan al hacer scroll ===== */}
      <div
        ref={wrapperRef}
        className="hidden md:block"
        style={{ height: `${100 + STEPS.length * STEP_VH}vh` }}
      >
        <div className="sticky top-0 flex h-screen flex-col justify-center overflow-hidden py-12">
          <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
            <div className="flex items-end justify-between gap-8">
              <div className="max-w-2xl">
                <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.35em] text-neutral-500">
                  03 — Proceso
                </p>
                <h2 className="font-display text-[clamp(2rem,4.5vw,3.5rem)] font-black uppercase leading-[0.95]">
                  Un protocolo,
                  <br />
                  cuatro etapas.
                </h2>
              </div>
              <div className="hidden shrink-0 items-baseline gap-2 font-display lg:flex">
                <span className="text-6xl font-black leading-none tabular-nums">
                  {String(active + 1).padStart(2, "0")}
                </span>
                <span className="text-xl font-bold text-neutral-400">
                  / {String(STEPS.length).padStart(2, "0")}
                </span>
              </div>
            </div>

            {/* barra de progreso segmentada */}
            <div className="mt-8 grid grid-cols-4 gap-2">
              {STEPS.map((_, i) => (
                <span
                  key={i}
                  className={`h-0.5 w-full transition-colors duration-500 ${
                    i <= active ? "bg-neutral-900" : "bg-neutral-200"
                  }`}
                />
              ))}
            </div>

            {/* pasos */}
            <ol className="mt-10 grid grid-cols-4 gap-4">
              {STEPS.map((step, i) => {
                const Icon = step.icon;
                const isActive = i === active;
                return (
                  <li key={step.title} className="contents">
                    <button
                      type="button"
                      onClick={() => goToStep(i)}
                      aria-label={`Ir al paso ${i + 1}: ${step.title}`}
                      aria-current={isActive ? "step" : undefined}
                      className={`flex cursor-pointer flex-col justify-between rounded-sm p-6 text-left transition-all duration-500 hover:opacity-100 lg:p-8 ${
                        isActive
                          ? "scale-[1.03] bg-neutral-900 text-white shadow-2xl"
                          : "bg-neutral-50 text-neutral-900 opacity-40"
                      }`}
                    >
                    <div>
                      <div className="flex items-center justify-between">
                        <span
                          className={`text-[11px] font-semibold uppercase tracking-[0.3em] ${
                            isActive ? "text-white/60" : "text-neutral-400"
                          }`}
                        >
                          Paso {String(i + 1).padStart(2, "0")}
                        </span>
                        <Icon
                          size={22}
                          strokeWidth={1.25}
                          className={isActive ? "text-white" : "text-neutral-700"}
                        />
                      </div>
                      <h3 className="mt-8 font-display text-xl font-bold uppercase leading-tight lg:text-2xl">
                        {step.title}
                      </h3>
                      <p
                        className={`mt-4 text-sm leading-relaxed ${
                          isActive ? "text-white/70" : "text-neutral-600"
                        }`}
                      >
                        {step.description}
                      </p>
                    </div>
                      <div
                        className={`mt-10 h-px transition-all duration-500 ${
                          isActive ? "w-16 bg-white/70" : "w-8 bg-neutral-400"
                        }`}
                      />
                    </button>
                  </li>
                );
              })}
            </ol>
          </div>
        </div>
      </div>

      {/* ===== Móvil: grid estático ===== */}
      <div className="md:hidden">
        <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8">
          <div className="max-w-2xl">
            <p className="mb-5 text-[11px] font-medium uppercase tracking-[0.35em] text-neutral-500">
              03 — Proceso
            </p>
            <h2 className="font-display text-[clamp(2rem,7vw,3rem)] font-black uppercase leading-[0.95]">
              Un protocolo,
              <br />
              cuatro etapas.
            </h2>
            <p className="mt-6 text-sm leading-relaxed text-neutral-600">
              Cada vehículo recorre el mismo camino, sin atajos. Así garantizamos
              consistencia, trazabilidad y un acabado impecable.
            </p>
          </div>
          <ol className="mt-12 grid grid-cols-1 gap-px overflow-hidden border border-neutral-200 bg-neutral-200 sm:grid-cols-2">
            {STEPS.map((step, i) => {
              const Icon = step.icon;
              return (
                <li key={step.title} className="flex flex-col justify-between bg-white p-8">
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-semibold uppercase tracking-[0.3em] text-neutral-400">
                        Paso {String(i + 1).padStart(2, "0")}
                      </span>
                      <Icon size={22} strokeWidth={1.25} className="text-neutral-700" />
                    </div>
                    <h3 className="mt-10 font-display text-2xl font-bold uppercase leading-tight">
                      {step.title}
                    </h3>
                    <p className="mt-4 text-sm leading-relaxed text-neutral-600">
                      {step.description}
                    </p>
                  </div>
                  <div className="mt-12 h-px w-8 bg-neutral-400" />
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
