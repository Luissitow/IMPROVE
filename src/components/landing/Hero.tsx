import { ArrowDown } from "lucide-react";
import { WHATSAPP_URL } from "./whatsapp";

export function Hero() {
  return (
    <section id="top" className="relative w-full bg-white">
      <div className="mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-end px-5 pb-20 pt-32 sm:px-8 sm:pb-28">
        <div className="max-w-3xl">
          <p className="mb-6 text-[11px] font-medium uppercase tracking-[0.4em] text-neutral-500">
            Estudio Premium · Toluca, Estado de México
          </p>
          <h1 className="font-display text-[clamp(2.5rem,7vw,5.5rem)] font-black uppercase leading-[0.95] text-neutral-900">
            Personaliza y protege
            <br />
            tu auto.
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-neutral-600 sm:text-lg">
            En IMPROVE transformamos y blindamos autos: personalización a tu
            medida y protección de primer nivel, para que el tuyo se vea —y se conserve—
            como recién salido de la agencia.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center border border-neutral-900 bg-neutral-900 px-8 py-4 text-[12px] font-semibold uppercase tracking-[0.25em] text-white transition-colors hover:bg-transparent hover:text-neutral-900"
            >
              Cotizar por WhatsApp
            </a>
            <a
              href="#servicios"
              className="inline-flex items-center justify-center gap-2 border border-neutral-300 px-8 py-4 text-[12px] font-semibold uppercase tracking-[0.25em] text-neutral-900 transition-colors hover:border-neutral-900"
            >
              Ver servicios
            </a>
          </div>
        </div>

        <a
          href="#servicios"
          className="mt-16 inline-flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.35em] text-neutral-500 transition-colors hover:text-neutral-900"
        >
          <span className="h-px w-10 bg-neutral-400" /> Descubre
          <ArrowDown size={14} />
        </a>
      </div>
    </section>
  );
}