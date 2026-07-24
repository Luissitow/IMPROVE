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

```bash
# Instalar dependencias
npm install

# Servidor de desarrollo (http://localhost:8080)
npm run dev

# Compilar para producción
npm run build

# Previsualizar el build
npm run preview
```

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

---

<sub>© IMPROVE — Todos los derechos reservados.</sub>
