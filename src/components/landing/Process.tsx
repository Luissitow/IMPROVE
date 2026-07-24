import { Droplets, Wrench, Sparkles, ClipboardCheck } from "lucide-react";

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

export function Process() {
  return (
    <section
      id="proceso"
      className="relative overflow-hidden border-t border-border bg-white py-24 text-neutral-900 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="max-w-2xl">
          <p className="mb-5 text-[11px] font-medium uppercase tracking-[0.35em] text-neutral-500">
            02 — Proceso
          </p>
          <h2 className="font-display text-[clamp(2rem,5vw,3.75rem)] font-black uppercase leading-[0.95]">
            Un protocolo,
            <br />
            cuatro etapas.
          </h2>
          <p className="mt-6 max-w-xl text-sm leading-relaxed text-neutral-600 sm:text-base">
            Cada vehículo recorre el mismo camino, sin atajos. Así garantizamos
            consistencia, trazabilidad y un acabado impecable.
          </p>
        </div>

        <ol className="mt-16 grid grid-cols-1 gap-px overflow-hidden border border-neutral-200 bg-neutral-200 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((step, i) => {
            const Icon = step.icon;
            return (
              <li
                key={step.title}
                className="flex flex-col justify-between bg-white p-8 transition-colors hover:bg-neutral-50 sm:p-10"
              >
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
    </section>
  );
}