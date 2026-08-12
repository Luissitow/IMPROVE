# IMPROVE

**Estudio premium de personalización y protección automotriz — Toluca, Estado de México.**

Landing page de alto impacto para un estudio especializado en _full wrap_, PPF (Paint Protection Film), recubrimiento cerámico y detailing para vehículos de alta gama.

---

## Características

- **Diseño editorial premium** en blanco y negro, tipografía de gran escala y micro-interacciones.
- **Preloader animado** con secuencia de frases que culmina en el logotipo IMPROVE.
- **Secciones**: Hero, Servicios, Proceso, Galería, Garantías y Footer con contacto.
- **CTA directo a WhatsApp** para cotización inmediata.
- **SSR** (renderizado en servidor) para carga rápida y buen SEO.
- **100% responsive** y accesible.

##  Stack

| Área | Tecnología |
|------|------------|
| Framework | [TanStack Start](https://tanstack.com/start) (React + SSR) |
| Build tool | [Vite 8](https://vite.dev) |
| Estilos | [Tailwind CSS v4](https://tailwindcss.com) |
| Componentes | [shadcn/ui](https://ui.shadcn.com) + [Radix UI](https://www.radix-ui.com) |
| Iconos | [lucide-react](https://lucide.dev) |
| Lenguaje | TypeScript |

##  Puesta en marcha

El gestor de paquetes del proyecto es **pnpm**.

```bash
# Instalar dependencias
pnpm install

# Servidor de desarrollo
pnpm dev

# Compilar el sitio estático en build/
pnpm build

# Revisar build/ tal como lo servirá el hosting (http://localhost:4180)
pnpm preview:static
```

##  Despliegue en Hostinger

`pnpm build` deja en **`build/`** el sitio completo como archivos estáticos:
`index.html`, los assets con hash, las fotos y videos, los iconos y un
`.htaccess` ya configurado. No hay nada que ejecutar en el servidor.

1. Corre `pnpm build`.
2. Entra a hPanel → **Administrador de archivos** (o conéctate por FTP).
3. Sube **el contenido** de `build/` dentro de `public_html`, no la carpeta en sí.
   En `public_html` deben quedar `index.html`, `assets/`, `media/` y `.htaccess`
   al mismo nivel.
4. Si el administrador de archivos oculta `.htaccess`, activa «mostrar archivos
   ocultos»: ese archivo hace que las rutas del sitio no devuelvan 404 y define
   el cacheo de los assets.

Para revisar antes de subir, `pnpm preview:static` sirve `build/` solo como
archivos, igual que el hosting.

> El build compila primero un servidor temporal en `.output/` únicamente para
> capturar el HTML ya renderizado; ese servidor **no** se sube.

##  Estructura

```
src/
├─ assets/               Imágenes (galería, hero, logo)
├─ components/
│  ├─ landing/           Secciones de la página (Hero, Services, Gallery…)
│  └─ ui/                Componentes shadcn/ui reutilizables
├─ hooks/                Hooks personalizados
├─ lib/                  Utilidades y manejo de errores
├─ routes/               Rutas (TanStack Router)
└─ styles.css            Tema y tokens de diseño (Tailwind v4)
```

##  Contacto

Cotizaciones y citas a través del botón de **WhatsApp** integrado en el sitio.

Estudio: Av. Sebastián Lerdo de Tejada Pte. 906, Electricistas Locales, 50080 Toluca de Lerdo, Méx.
Teléfono: +52 722 551 8621

##  Autoría

Diseñado y desarrollado por **Luis Enrique Bartolo Macario — Zyber**.

---

<sub>© IMPROVE — Todos los derechos reservados.</sub>
