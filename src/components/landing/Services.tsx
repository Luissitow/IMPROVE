import { ArrowUpRight, MessageCircle } from "lucide-react";
import { whatsappUrl } from "./whatsapp";

type Service = {
  id: string;
  category: string;
  title: string;
  slogan: string;
  description: string;
  featured?: boolean;
};

const SERVICES: Service[] = [
  {
    id: "01",
    category: "Mantenimiento",
    title: "Detailing",
    slogan: "El acabado de agencia, de vuelta.",
    description:
      "Recuperamos el acabado de agencia que el tiempo, los lavados agresivos y el sol le han robado a tu auto. Corrección de pintura por etapas para eliminar remolinos, marcas y opacidad.",
    featured: true,
  },
  {
    id: "02",
    category: "Protección",
    title: "Paint Protection Film (PPF)",
    slogan: "Protege tu pintura. Asegura tu inversión.",
    description:
      "Un blindaje invisible contra piedras en la carretera, insectos y rayones de estacionamiento. La película autorreparable absorbe el daño que hoy destruye tu pintura de fábrica, sin alterar el color original.",
  },
  {
    id: "03",
    category: "Personalización",
    title: "Full Wrap",
    slogan: "Otro auto, sin tocar la pintura.",
    description:
      "Renueva por completo la identidad de tu auto sin tocar la pintura original. El vinilo premium la resguarda de rayos UV, microrayones y desgaste, mientras tú disfrutas un color impecable que puedes revertir cuando quieras.",
  },
  {
    id: "04",
    category: "Protección",
    title: "Recubrimiento Cerámico",
    slogan: "Brillo que dura años, no lavados.",
    description:
      "Olvídate de la pintura opaca, manchada por lluvia ácida o quemada por el sol. El sellado nano-cerámico mantiene tu auto brillante, hidrofóbico y protegido por años, con lavados mucho más rápidos.",
  },
  {
    id: "05",
    category: "Protección",
    title: "Película de Seguridad",
    slogan: "Blinda tus cristales. Protege lo tuyo.",
    description:
      "Refuerza tus cristales frente a intentos de robo e impactos, y protege el interior del calor y los rayos UV que decoloran vestiduras y tablero.",
  },
  {
    id: "06",
    category: "Personalización",
    title: "Rotulación",
    slogan: "Tu marca, rodando por la ciudad.",
    description:
      "Proyecta tu marca o personaliza tu flotilla con rotulación de vinilo de precisión, que se retira sin dañar la pintura original.",
  },
  {
    id: "07",
    category: "Reparación",
    title: "PDR",
    slogan: "Sin abolladuras. Sin repintar.",
    description:
      "Eliminamos abolladuras leves con técnica de varillaje (PDR), sin repintar y conservando tu pintura de fábrica intacta. Ideal para granizo y topes de puerta.",
  },
  {
    id: "08",
    category: "Reparación",
    title: "Hojalatería",
    slogan: "Como si nunca hubiera pasado.",
    description:
      "Reparación de carrocería para daños mayores: reformamos el metal, aplicamos masilla y repintamos con un acabado idéntico al original.",
  },
  {
    id: "09",
    category: "Interiores",
    title: "Tapicería",
    slogan: "Tu interior, como nuevo.",
    description:
      "Renovamos, reparamos o personalizamos vestiduras y asientos con materiales de alta calidad, para que el interior luzca y se sienta como de agencia.",
  },
  {
    id: "10",
    category: "Personalización",
    title: "Diseños & Gráficos",
    slogan: "Tu auto, tu firma.",
    description:
      "Diseñamos y aplicamos gráficos, franjas y livery a la medida para darle a tu auto una identidad única, sin comprometer la carrocería.",
  },
];

export function Services() {
  return (
    <section id="servicios" className="border-t border-white/10 bg-black py-24 text-white sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-[minmax(0,1fr)_auto] md:items-end">
          <div className="max-w-2xl">
            <p className="mb-5 text-[11px] font-medium uppercase tracking-[0.35em] text-white/50">
              02 — Servicios
            </p>
            {/* leading holgado: PROTECCIÓN lleva acento en mayúscula y con
                interlínea cerrada tocaba la línea de arriba */}
            <h2 className="font-display text-[clamp(2rem,5vw,3.75rem)] font-black uppercase leading-[1.08]">
              Personalización.
              <br />
              Protección. Mantenimiento.
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-white/60 md:text-right">
            Un catálogo completo y decidido. Cada servicio se ejecuta con el mismo
            nivel de detalle, materiales certificados y garantía indefinida.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-px overflow-hidden border border-white/10 bg-white/10 md:grid-cols-3">
          {SERVICES.map((s) =>
            s.featured ? (
              // ---- Destacado: banner de ancho completo ----
              <article
                key={s.id}
                className="group relative flex flex-col justify-between gap-8 bg-black p-8 text-white transition-colors duration-300 hover:bg-white hover:text-black sm:p-10 md:col-span-3 md:flex-row md:items-end"
              >
                <div className="md:max-w-xl">
                  <div className="flex items-center gap-3">
                    <span className="text-[10px] font-medium uppercase tracking-[0.3em] text-white/50 transition-colors duration-300 group-hover:text-black/50">
                      {s.id} · {s.category}
                    </span>
                    <span className="border border-white/40 px-2 py-1 text-[9px] font-semibold uppercase tracking-[0.25em] text-white/70 transition-colors duration-300 group-hover:border-black/40 group-hover:text-black/70">
                      Insignia
                    </span>
                  </div>
                  <h3 className="mt-6 font-display text-4xl font-bold uppercase leading-tight sm:text-5xl md:text-6xl">
                    {s.title}
                  </h3>
                  <p className="mt-3 text-lg font-medium uppercase tracking-[0.08em] text-white transition-colors duration-300 group-hover:text-black">
                    {s.slogan}
                  </p>
                </div>
                <div className="md:max-w-sm">
                  <p className="text-sm leading-relaxed text-white/60 transition-colors duration-300 group-hover:text-black/60 sm:text-base">
                    {s.description}
                  </p>
                  <a
                    href={whatsappUrl(s.title)}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Cotizar ${s.title} por WhatsApp`}
                    className="mt-6 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.25em] text-white transition-all duration-300 group-hover:translate-x-1 group-hover:text-black"
                  >
                    <MessageCircle size={14} /> Cotizar por WhatsApp{" "}
                    <ArrowUpRight size={14} />
                  </a>
                </div>
              </article>
            ) : (
              // ---- Tarjeta normal (3 por fila) ----
              <article
                key={s.id}
                className="group relative flex flex-col justify-between bg-black p-8 text-white transition-colors duration-300 hover:bg-white hover:text-black sm:p-10"
              >
                <div>
                  <span className="text-[10px] font-medium uppercase tracking-[0.3em] text-white/50 transition-colors duration-300 group-hover:text-black/50">
                    {s.id} · {s.category}
                  </span>
                  <h3 className="mt-8 font-display text-2xl font-bold uppercase leading-tight sm:text-3xl">
                    {s.title}
                  </h3>
                  <p className="mt-3 text-sm font-medium uppercase tracking-[0.08em] text-white transition-colors duration-300 group-hover:text-black">
                    {s.slogan}
                  </p>
                  <p className="mt-4 max-w-md text-sm leading-relaxed text-white/60 transition-colors duration-300 group-hover:text-black/60">
                    {s.description}
                  </p>
                </div>
                <a
                  href={whatsappUrl(s.title)}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Cotizar ${s.title} por WhatsApp`}
                  className="mt-10 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.25em] text-white transition-all duration-300 group-hover:translate-x-1 group-hover:text-black"
                >
                  <MessageCircle size={14} /> Cotizar por WhatsApp{" "}
                  <ArrowUpRight size={14} />
                </a>
              </article>
            ),
          )}
        </div>
      </div>
    </section>
  );
}
