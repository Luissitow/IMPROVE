import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import react from "@vitejs/plugin-react";

export default defineConfig(async ({ command }) => {
  const plugins = [
    tailwindcss(),
    tsconfigPaths({ projects: ["./tsconfig.json"] }),
    // Redirige el server entry de TanStack Start a src/server.ts (nuestro wrapper de errores SSR).
    tanstackStart({ server: { entry: "server" } }),
  ];

  // Nitro solo participa en el build: genera el bundle de Cloudflare Workers en .output/.
  if (command === "build") {
    const { nitro } = await import("nitro/vite");
    plugins.push(nitro({ preset: "cloudflare-module" }));
  }

  // react() va al final: el plugin de TanStack Router debe transformar las rutas antes que JSX.
  plugins.push(react());

  return { plugins };
});
