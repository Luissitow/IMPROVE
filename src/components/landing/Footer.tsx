import {
  MessageCircle,
  MapPin,
  Phone,
  Clock,
  Facebook,
  Instagram,
  ArrowUpRight,
  ArrowRight,
} from "lucide-react";
import improveLogo from "@/assets/logo-improve.png";
import {
  ADDRESS,
  FACEBOOK_URL,
  INSTAGRAM_URL,
  MAPS_EMBED_URL,
  MAPS_LINK,
  PHONE_DISPLAY,
  WHATSAPP_NUMBER,
  WHATSAPP_URL,
  ZYBER_DOMAIN,
  ZYBER_URL,
  ZYBER_WHATSAPP_URL,
} from "./whatsapp";

export function Footer() {
  return (
    <footer id="contacto" className="border-t border-white/10 bg-black text-white">
      <div className="mx-auto max-w-7xl px-5 pb-8 pt-14 sm:px-8 sm:pb-10 sm:pt-20">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] lg:gap-20">
          <div>
            <p className="text-[11px] font-medium uppercase tracking-[0.35em] text-white/50">
              06 — Contacto
            </p>
            <h2 className="mt-5 font-display text-[clamp(2rem,5vw,3.75rem)] font-black uppercase leading-[1.15]">
              Hablemos
              <br />
              de tu vehículo.
            </h2>
            <p className="mt-6 max-w-xl text-sm leading-relaxed text-white/60 sm:text-base">
              Toda cotización y agenda de servicio se coordina directamente por WhatsApp.
              Respondemos con propuesta clara y tiempos reales.
            </p>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="mt-10 inline-flex items-center gap-3 border border-white bg-white px-8 py-4 text-[12px] font-semibold uppercase tracking-[0.25em] text-black transition-colors hover:bg-transparent hover:text-white"
            >
              <MessageCircle size={16} /> Escribir por WhatsApp
            </a>

            <ul className="mt-10 space-y-3 text-sm text-white/70">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="mt-0.5 shrink-0 text-white/40" />
                <a
                  href={MAPS_LINK}
                  target="_blank"
                  rel="noreferrer"
                  className="transition-colors hover:text-white"
                >
                  {ADDRESS}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="shrink-0 text-white/40" />
                <a
                  href={`tel:+${WHATSAPP_NUMBER}`}
                  className="transition-colors hover:text-white"
                >
                  {PHONE_DISPLAY}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock size={16} className="mt-0.5 shrink-0 text-white/40" />
                <span>
                  Lunes a viernes · 9:30 a.m. – 7:00 p.m.
                  <br />
                  Sábado · 9:30 a.m. – 2:00 p.m.
                  <br />
                  <span className="text-white/45">Domingo · Cerrado</span>
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Instagram size={16} className="shrink-0 text-white/40" />
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="transition-colors hover:text-white"
                >
                  @improvewrap
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Facebook size={16} className="shrink-0 text-white/40" />
                <a
                  href={FACEBOOK_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="transition-colors hover:text-white"
                >
                  Improve Wrap
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-[11px] font-medium uppercase tracking-[0.35em] text-white/50">
              Ubicación
            </p>
            <div className="mt-5 aspect-[4/3] w-full overflow-hidden border border-white/10 grayscale">
              <iframe
                title="Ubicación IMPROVE — Av. Lerdo Pte. 906, Toluca"
                src={MAPS_EMBED_URL}
                className="h-full w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <div className="mt-4 flex flex-wrap items-center justify-between gap-4">
              <p className="text-xs uppercase tracking-[0.25em] text-white/40">
                Servicio con cita previa
              </p>
              <a
                href={MAPS_LINK}
                target="_blank"
                rel="noreferrer"
                className="text-xs font-semibold uppercase tracking-[0.25em] text-white/70 underline underline-offset-4 transition-colors hover:text-white"
              >
                Cómo llegar
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 items-center gap-5 border-t border-white/10 pt-6 md:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] md:gap-8">
          {/* Izquierda: marca, con el copyright colgando del logo */}
          <div>
            <div className="flex items-center gap-4">
              <img src={improveLogo} alt="IMPROVE" width={120} height={28} className="h-6 w-auto invert" />
              <span className="text-[11px] uppercase tracking-[0.3em] text-white/40">
                Estudio Premium · MX
              </span>
            </div>
            <p className="mt-2 text-[10px] uppercase tracking-[0.25em] text-white/30">
              © {new Date().getFullYear()} IMPROVE. Todos los derechos reservados.
            </p>
          </div>

          {/* Centro: el claim, que es el remate de la página */}
          <div className="md:text-center">
            <p className="font-display uppercase leading-[1.2]">
              <span className="block text-[11px] font-medium tracking-[0.18em] text-white/35">
                Tu negocio merece
              </span>
              {/* La segunda línea carga el peso, en una escala contenida */}
              <span className="block text-[15px] font-black tracking-[0.01em] text-white/90 sm:text-base">
                verse así.
              </span>
            </p>
          </div>

          {/* Derecha: accesos del estudio que construyó el sitio */}
          <div className="flex flex-wrap items-center gap-x-7 gap-y-3 md:justify-end">
            <a
              href={ZYBER_WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-2 border-b border-white/25 pb-1 text-[11px] font-semibold uppercase tracking-[0.25em] text-white/75 transition-colors hover:border-white hover:text-white"
            >
              Quiero mi sitio
              <ArrowRight
                size={13}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>
            <a
              href={ZYBER_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-[10px] font-medium uppercase tracking-[0.3em] text-white/30 transition-colors hover:text-white/70"
            >
              {ZYBER_DOMAIN} <ArrowUpRight size={11} />
            </a>
          </div>
        </div>
      </div>

      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noreferrer"
        aria-label="Chatear por WhatsApp"
        className="fixed bottom-5 right-5 z-40 inline-flex h-14 w-14 items-center justify-center rounded-full border border-white bg-white text-black shadow-2xl transition-transform hover:scale-105"
      >
        <MessageCircle size={22} />
      </a>
    </footer>
  );
}