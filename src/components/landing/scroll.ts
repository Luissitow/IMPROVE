/**
 * Desplazamiento suave con duración propia.
 *
 * El `scroll-behavior: smooth` del navegador resuelve cualquier distancia casi
 * en el mismo tiempo, así que saltar hasta una sección lejana se sentía
 * instantáneo. Aquí el recorrido dura lo suficiente para que se vea la página
 * de paso, y se alarga un poco cuando el trayecto es largo.
 */

const BASE_MS = 900;
const MAX_MS = 2200;
/** Milisegundos extra por cada 1000 px de recorrido. */
const MS_PER_1000PX = 260;

const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// Suave al arrancar y al frenar, sin rebote.
const easeInOutCubic = (t: number) =>
  t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

let activeAnimation = 0;

export function smoothScrollTo(targetY: number, duration?: number) {
  if (typeof window === "undefined") return;

  const maxY = document.documentElement.scrollHeight - window.innerHeight;
  const to = Math.max(0, Math.min(targetY, maxY));
  const from = window.scrollY;
  const distance = to - from;

  // Si el usuario pidió menos movimiento, o el salto es mínimo, va directo.
  if (prefersReducedMotion() || Math.abs(distance) < 8) {
    window.scrollTo(0, to);
    return;
  }

  const ms =
    duration ??
    Math.min(MAX_MS, BASE_MS + (Math.abs(distance) / 1000) * MS_PER_1000PX);

  // Cancela un recorrido anterior para que dos clics seguidos no se peleen.
  if (activeAnimation) cancelAnimationFrame(activeAnimation);

  const start = performance.now();

  // Si el usuario toma el control (dedo, rueda o teclas), la animación cede:
  // seguir moviendo la página bajo su gesto se siente como un tirón.
  const cancel = () => {
    if (activeAnimation) cancelAnimationFrame(activeAnimation);
    activeAnimation = 0;
    detach();
  };

  const detach = () => {
    window.removeEventListener("wheel", cancel);
    window.removeEventListener("touchstart", cancel);
    window.removeEventListener("keydown", cancel);
  };

  window.addEventListener("wheel", cancel, { passive: true });
  window.addEventListener("touchstart", cancel, { passive: true });
  window.addEventListener("keydown", cancel);

  const step = (now: number) => {
    const t = Math.min(1, (now - start) / ms);
    window.scrollTo(0, from + distance * easeInOutCubic(t));
    if (t < 1) {
      activeAnimation = requestAnimationFrame(step);
    } else {
      activeAnimation = 0;
      detach();
    }
  };

  activeAnimation = requestAnimationFrame(step);
}

/** Lleva la vista al elemento con ese id, dejando aire para el header fijo. */
export function scrollToId(id: string, offset = 0, duration?: number) {
  if (typeof document === "undefined") return;
  const el = document.getElementById(id);
  if (!el) return;
  smoothScrollTo(el.getBoundingClientRect().top + window.scrollY - offset, duration);
}
