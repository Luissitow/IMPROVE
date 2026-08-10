# Changelog

Todos los cambios relevantes de este proyecto se documentan en este archivo.

El formato sigue [Keep a Changelog](https://keepachangelog.com/es-ES/1.1.0/)
y el versionado se adhiere a [Versionado Semántico](https://semver.org/lang/es/).

## [1.1.0] - 2026-08-10

Segunda versión: el sitio pasa de fotos de stock a material real del estudio
y suma la pieza de video.

### Añadido

- Sección inmersiva del estudio entre el hero y los servicios: al hacer scroll
  la frase se revela palabra por palabra con la sección fija, y al completarse
  entra el video a pantalla completa, con botón para saltarla.
- Galería con material real: cada tarjeta muestra la foto del servicio y
  reproduce su video al pasar el cursor o al tocarla.
- Recorrido animado entre secciones, con duración proporcional a la distancia,
  usado por el menú, el hero y el comercial.
- Los pasos del proceso son pulsables y llevan al punto del recorrido donde
  ese paso queda activo, conservando la animación de la sección.
- Icono del sitio derivado del logotipo, en SVG con respaldo en PNG.
- Instagram y Facebook del estudio, y banda de cierre del estudio que
  construyó el sitio.

### Cambiado

- Horarios reales: lunes a viernes de 9:30 a 19:00, sábado hasta las 14:00 y
  domingo cerrado.
- Detailing deja de ser la única tarjeta blanca del catálogo.
- Interlínea holgada donde una mayúscula acentuada abre línea.

### Corregido

- En móvil los videos de la galería no se reproducían: dependían del hover.
- El clip de Full Wrap empezaba en un tramo de pulido y parecía otro servicio.
- El head apuntaba a un favicon inexistente.

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
