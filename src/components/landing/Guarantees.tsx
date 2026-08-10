import { ShieldCheck, Award, Timer } from "lucide-react";
import { WHATSAPP_URL } from "./whatsapp";

const PILLARS = [
  {
    icon: ShieldCheck,
    title: "Garantía indefinida",
    description:
      "Respaldamos la instalación y ejecución de cada servicio por tiempo indefinido, mientras el vehículo permanezca bajo cuidado adecuado.",
  },
  {
    icon: Award,
    title: "Materiales certificados",
    description:
      "Trabajamos únicamente con marcas líderes en vinilos, PPF y cerámicos, con soporte técnico y trazabilidad de origen.",
  },
  {
    icon: Timer,
    title: "Ejecución sin prisa",
    description:
      "Agenda controlada por vehículo. No aceleramos procesos: cada auto recibe el tiempo que su acabado exige.",
  },
];

export function Guarantees() {
  return (
    <section id="garantias" className="border-t border-border bg-white py-24 text-neutral-900 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] lg:gap-24">
          <div>
            <p className="mb-5 text-[11px] font-medium uppercase tracking-[0.35em] text-neutral-500">
              05 — Confianza
            </p>
            <h2 className="font-display text-[clamp(2rem,5vw,4rem)] font-black uppercase leading-[0.95]">
              Un compromiso
              <br />
              sin fecha de caducidad.
            </h2>
            <p className="mt-8 max-w-xl text-base leading-relaxed text-neutral-600 sm:text-lg">
              En IMPROVE creemos que la calidad no se mide en años, sino en resultados.
              Por eso ofrecemos <strong className="text-neutral-900">garantía indefinida</strong>{" "}
              sobre la instalación de nuestros servicios y trabajamos exclusivamente con
              materiales de máxima calidad, seleccionados por su desempeño real en cada
              vehículo que entra a nuestro estudio.
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="mt-10 inline-flex items-center justify-center border border-neutral-900 bg-neutral-900 px-8 py-4 text-[12px] font-semibold uppercase tracking-[0.25em] text-white transition-colors hover:bg-transparent hover:text-neutral-900"
            >
              Solicitar cotización
            </a>
          </div>

          <ul className="flex flex-col divide-y divide-neutral-200 border-y border-neutral-200">
            {PILLARS.map((p) => {
              const Icon = p.icon;
              return (
                <li key={p.title} className="grid grid-cols-[auto_minmax(0,1fr)] items-start gap-6 py-8">
                  <Icon size={28} strokeWidth={1.25} className="shrink-0 text-neutral-900" />
                  <div className="min-w-0">
                    <h3 className="font-display text-lg font-bold uppercase tracking-wide">
                      {p.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                      {p.description}
                    </p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}