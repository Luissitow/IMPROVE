import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import react from "@vitejs/plugin-react";

/**
 * El sitio se publica en hosting compartido (Hostinger), que sirve archivos
 * pero no ejecuta Node. El build compila con el preset `node-server` y luego
 * `scripts/build-static.mjs` levanta ese servidor, captura el HTML de cada
 * ruta y arma `build/` con todo lo que se sube por FTP.
 *
 * El preset `static` de nitro haría esto solo, pero su prerenderizador
 * devuelve 404 en esta combinación de versiones.
 */
export default defineConfig(async ({ command }) => {
  const plugins = [
    tailwindcss(),
    tsconfigPaths({ projects: ["./tsconfig.json"] }),
    // Redirige el server entry a src/server.ts (nuestro wrapper de errores SSR).
    tanstackStart({ server: { entry: "server" } }),
  ];

  if (command === "build") {
    const { nitro } = await import("nitro/vite");
    plugins.push(nitro({ preset: "node-server" }));
  }

  // react() va al final: el plugin de TanStack Router debe transformar las rutas antes que JSX.
  plugins.push(react());

  return { plugins };
});
