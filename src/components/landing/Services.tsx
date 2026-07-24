import { ArrowUpRight } from "lucide-react";
import { WHATSAPP_URL } from "./whatsapp";

type Service = {
  id: string;
  category: string;
  title: string;
  description: string;
  featured?: boolean;
};

const SERVICES: Service[] = [
  {
    id: "01",
    category: "Personalización",
    title: "Full Wrap",
    description:
      "Renueva por completo la identidad de tu auto sin tocar la pintura original. El vinilo premium la resguarda de rayos UV, microrayones y desgaste, mientras tú disfrutas un color impecable que puedes revertir cuando quieras.",
    featured: true,
  },
  {
    id: "02",
    category: "Protección",
    title: "Paint Protection Film (PPF)",
    description:
      "Un blindaje invisible contra piedras en la carretera, insectos y rayones de estacionamiento. La película autorreparable absorbe el daño que hoy destruye tu pintura de fábrica, sin alterar el color original.",
  },
  {
    id: "03",
    category: "Protección",
    title: "Recubrimiento Cerámico",
    description:
      "Olvídate de la pintura opaca, manchada por lluvia ácida o quemada por el sol. El sellado nano-cerámico mantiene tu auto brillante, hidrofóbico y protegido por años, con lavados mucho más rápidos.",
  },
  {
    id: "04",
    category: "Mantenimiento",
    title: "Detailing",
    description:
      "Recuperamos el acabado de agencia que el tiempo, los lavados agresivos y el sol le han robado a tu auto. Corrección de pintura por etapas para eliminar remolinos, marcas y opacidad.",
  },
  {
    id: "05",
    category: "Protección",
    title: "Película de Seguridad",
    description:
      "Refuerza tus cristales frente a intentos de robo e impactos, y protege el interior del calor y los rayos UV que decoloran vestiduras y tablero.",
  },
  {
    id: "06",
    category: "Personalización",
    title: "Rotulación & PDR",
    description:
      "Elimina abolladuras sin repintar y conserva la pintura original intacta, o proyecta tu marca con rotulación de precisión que no daña la carrocería al retirarse.",
  },
];

export function Services() {
  return (
    <section id="servicios" className="border-t border-white/10 bg-black py-24 text-white sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-[minmax(0,1fr)_auto] md:items-end">
          <div className="max-w-2xl">
            <p className="mb-5 text-[11px] font-medium uppercase tracking-[0.35em] text-white/50">
              01 — Servicios
            </p>
            <h2 className="font-display text-[clamp(2rem,5vw,3.75rem)] font-black uppercase leading-[0.95]">
              Personalización.
              <br />
              Protección. Mantenimiento.
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-white/60 md:text-right">
            Un catálogo compacto y decidido. Cada servicio se ejecuta con el mismo
            nivel de detalle, materiales certificados y garantía indefinida.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-px overflow-hidden border border-white/10 bg-white/10 md:grid-cols-6">
          {SERVICES.map((s) => (
            <article
              key={s.id}
              className={`group relative flex flex-col justify-between bg-black p-8 transition-colors hover:bg-white/[0.03] sm:p-10 ${
                s.featured ? "md:col-span-4 md:row-span-2 bg-white text-black hover:bg-white" : "md:col-span-2"
              }`}
            >
              <div>
                <div className="flex items-center justify-between">
                  <span
                    className={`text-[10px] font-medium uppercase tracking-[0.3em] ${
                      s.featured ? "text-black/60" : "text-white/50"
                    }`}
                  >
                    {s.id} · {s.category}
                  </span>
                  {s.featured ? (
                    <span className="border border-black/40 px-2 py-1 text-[9px] font-semibold uppercase tracking-[0.25em] text-black/70">
                      Insignia
                    </span>
                  ) : null}
                </div>
                <h3
                  className={`mt-8 font-display font-bold uppercase leading-tight ${
                    s.featured ? "text-4xl sm:text-5xl md:text-6xl" : "text-2xl sm:text-3xl"
                  }`}
                >
                  {s.title}
                </h3>
                <p
                  className={`mt-5 max-w-md text-sm leading-relaxed ${
                    s.featured ? "text-black/70 sm:text-base" : "text-white/60"
                  }`}
                >
                  {s.description}
                </p>
              </div>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer"
                aria-label={`Cotizar ${s.title}`}
                className={`mt-10 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.25em] transition-transform group-hover:translate-x-1 ${
                  s.featured ? "text-black" : "text-white"
                }`}
              >
                Cotizar servicio <ArrowUpRight size={14} />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}