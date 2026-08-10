# Changelog

Todos los cambios relevantes de este proyecto se documentan en este archivo.

El formato sigue [Keep a Changelog](https://keepachangelog.com/es-ES/1.1.0/)
y el versionado se adhiere a [Versionado Semántico](https://semver.org/lang/es/).

## [1.0.0] - 2026-08-09

Primera versión pública de la landing de IMPROVE.
Diseñada y desarrollada por Luis Enrique Bartolo Macario — Zyber.

### Añadido

- Landing page completa con Hero, Servicios, Proceso, Galería, Garantías y Footer.
- Catálogo de 10 servicios (Detailing, PPF, Full Wrap, Recubrimiento Cerámico,
  Película de Seguridad, Rotulación, PDR, Hojalatería, Tapicería y Diseños & Gráficos).
- Botón de cotización por WhatsApp en cada servicio, con mensaje prellenado que
  menciona el servicio correspondiente.
- Datos reales de contacto y ubicación del estudio en Toluca, con mapa embebido
  y enlace directo a indicaciones.
- Preloader animado con secuencia de frases que culmina en el logotipo.
- Renderizado en servidor (SSR) con TanStack Start y despliegue a Cloudflare Workers.
- Diseño responsive para escritorio y móvil.

### Cambiado

- La configuración de Vite pasó a escribirse directamente en el proyecto, con los
  plugins estándar (Tailwind, tsconfig-paths, TanStack Start, Nitro y React) en
  lugar de un envoltorio de terceros.
- pnpm queda como único gestor de paquetes del proyecto.

### Eliminado

- Dependencia `@lovable.dev/vite-tanstack-config` y su módulo de reporte de errores.
- Lockfiles y configuración de gestores de paquetes alternos (`bun.lock`,
  `package-lock.json`, `bunfig.toml`).
