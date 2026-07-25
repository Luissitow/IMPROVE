import { MessageCircle, MapPin, Phone, Mail, Instagram } from "lucide-react";
import improveLogo from "@/assets/logo-improve.png";
import { WHATSAPP_URL } from "./whatsapp";

export function Footer() {
  return (
    <footer id="contacto" className="border-t border-white/10 bg-black text-white">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] lg:gap-24">
          <div>
            <p className="text-[11px] font-medium uppercase tracking-[0.35em] text-white/50">
              05 — Contacto
            </p>
            <h2 className="mt-5 font-display text-[clamp(2rem,5vw,3.75rem)] font-black uppercase leading-[0.95]">
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
              <li className="flex items-center gap-3">
                <MapPin size={16} className="text-white/40" /> Toluca, Estado de México
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-white/40" /> +52 55 0000 0000
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-white/40" /> contacto@improve.mx
              </li>
              <li className="flex items-center gap-3">
                <Instagram size={16} className="text-white/40" /> @improve.mx
              </li>
            </ul>
          </div>

          <div>
            <p className="text-[11px] font-medium uppercase tracking-[0.35em] text-white/50">
              Ubicación
            </p>
            <div className="mt-5 aspect-[4/3] w-full overflow-hidden border border-white/10 grayscale">
              <iframe
                title="Ubicación IMPROVE — Toluca"
                src="https://www.google.com/maps?q=Toluca,+Estado+de+M%C3%A9xico&output=embed"
                className="h-full w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <p className="mt-4 text-xs uppercase tracking-[0.25em] text-white/40">
              Servicio con cita previa
            </p>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-1 items-center gap-6 border-t border-white/10 pt-8 sm:grid-cols-[minmax(0,1fr)_auto]">
          <div className="flex items-center gap-4">
            <img src={improveLogo} alt="IMPROVE" width={120} height={28} className="h-6 w-auto invert" />
            <span className="text-[11px] uppercase tracking-[0.3em] text-white/40">
              Estudio Premium · MX
            </span>
          </div>
          <p className="text-[11px] uppercase tracking-[0.25em] text-white/40 sm:text-right">
            © {new Date().getFullYear()} IMPROVE. Todos los derechos reservados.
          </p>
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