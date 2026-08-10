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
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] lg:gap-24">
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

            <ul className="mt-12 space-y-4 text-sm text-white/70">
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

        <div className="mt-20 grid grid-cols-1 items-center gap-6 border-t border-white/10 pt-8 sm:grid-cols-[minmax(0,1fr)_auto]">
          <div className="flex items-center gap-4">
            <img src={improveLogo} alt="IMPROVE" width={120} height={28} className="h-6 w-auto invert" />
            <span className="text-[11px] uppercase tracking-[0.3em] text-white/40">
              Estudio Premium · MX
            </span>
          </div>
          <div className="sm:text-right">
            <p className="text-[11px] uppercase tracking-[0.25em] text-white/40">
              © {new Date().getFullYear()} IMPROVE. Todos los derechos reservados.
            </p>
            <p className="mt-3 text-[10px] uppercase tracking-[0.3em] text-white/30">
              Diseñado y desarrollado por Luis Enrique Bartolo Macario · Zyber
            </p>
          </div>
        </div>
      </div>

      {/* ===== Cierre de conversión del estudio =====
          Banda aparte, centrada y con aire: quien llega hasta aquí ya recorrió
          el trabajo, así que la pieza apela al deseo antes que a la ficha
          técnica. Copy fijo, definido por el autor. */}
      <aside className="border-t border-white/10 bg-white/[0.03]">
        <div className="mx-auto flex max-w-3xl flex-col items-center px-5 py-24 text-center sm:px-8 sm:py-32">
          <h2 className="font-display uppercase leading-[1.08]">
            <span className="block text-[clamp(1.15rem,3vw,1.9rem)] font-medium tracking-[0.08em] text-white/50">
              Tu negocio merece
            </span>
            {/* Segunda línea con el peso: es la que carga el deseo */}
            <span className="mt-2 block text-[clamp(2.5rem,8vw,5rem)] font-black tracking-[-0.01em] text-white">
              verse así.
            </span>
          </h2>

          <p className="mt-8 max-w-lg text-sm leading-relaxed text-white/55 sm:text-base">
            Una presencia digital a la altura de lo que haces.
          </p>

          <a
            href={ZYBER_WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            className="mt-12 inline-flex items-center justify-center gap-3 border border-white bg-white px-9 py-5 text-[12px] font-semibold uppercase tracking-[0.25em] text-black transition-colors hover:bg-transparent hover:text-white"
          >
            Quiero mi sitio <ArrowRight size={15} />
          </a>

          <a
            href={ZYBER_URL}
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.3em] text-white/45 transition-colors hover:text-white"
          >
            {ZYBER_DOMAIN} <ArrowUpRight size={13} />
          </a>
        </div>
      </aside>

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