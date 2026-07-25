import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import improveLogo from "@/assets/logo-improve.png";
import { WHATSAPP_URL } from "./whatsapp";

const NAV = [
  { href: "#servicios", label: "Servicios" },
  { href: "#proceso", label: "Proceso" },
  { href: "#galeria", label: "Galería" },
  { href: "#garantias", label: "Garantías" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(true);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(true);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? "border-b border-border bg-background/90 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:h-20 sm:px-8">
        <a href="#top" className="flex items-center gap-2">
          <img
            src={improveLogo}
            alt="IMPROVE"
            className={`h-7 w-auto transition ${scrolled || open ? "" : "invert"}`}
            width={140}
            height={32}
          />
        </a>

        <nav className="hidden items-center gap-9 md:flex">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`text-[13px] font-medium uppercase tracking-[0.18em] transition-colors ${
                scrolled ? "text-foreground/70 hover:text-foreground" : "text-white/80 hover:text-white"
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            className={`hidden text-[12px] font-semibold uppercase tracking-[0.2em] transition-all sm:inline-flex ${
              scrolled || open
                ? "border border-foreground bg-foreground px-5 py-3 text-background hover:bg-transparent hover:text-foreground"
                : "border border-white bg-white px-5 py-3 text-black hover:bg-transparent hover:text-white"
            }`}
          >
            Cotizar por WhatsApp
          </a>
          <button
            type="button"
            aria-label="Menú"
            onClick={() => setOpen((v) => !v)}
            className={`inline-flex h-10 w-10 items-center justify-center md:hidden ${
              scrolled || open ? "text-foreground" : "text-white"
            }`}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {open ? (
        <div className="border-t border-border bg-background md:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col px-5 py-4">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="border-b border-border py-4 text-sm font-medium uppercase tracking-[0.18em] text-foreground/80"
              >
                {item.label}
              </a>
            ))}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-flex items-center justify-center bg-foreground px-5 py-4 text-[12px] font-semibold uppercase tracking-[0.2em] text-background"
            >
              Cotizar por WhatsApp
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}