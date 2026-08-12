/**
 * Arma `build/`: el sitio como archivos estáticos, listo para subir por FTP a
 * Hostinger (o cualquier hosting que solo sirva archivos).
 *
 * Por qué existe este script: el prerenderizador que trae nitro devuelve 404
 * en esta combinación de versiones, así que en vez de depender de él se levanta
 * el servidor ya compilado, se piden las rutas por HTTP y se guarda el HTML
 * resultante. Es el mismo HTML que vería un visitante, solo que capturado
 * durante el build.
 *
 * Se ejecuta después de `vite build`, que deja el servidor en `.output/server`
 * y los assets en `.output/public`.
 */

import { spawn } from "node:child_process";
import { cp, mkdir, readFile, rm, writeFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import { join, dirname } from "node:path";

const ROOT = process.cwd();
const OUTPUT_DIR = join(ROOT, ".output");
const SERVER_ENTRY = join(OUTPUT_DIR, "server", "index.mjs");
const PUBLIC_DIR = join(OUTPUT_DIR, "public");
const BUILD_DIR = join(ROOT, "build");

const PORT = Number(process.env.PRERENDER_PORT ?? 4178);
const ORIGIN = `http://127.0.0.1:${PORT}`;

/** Rutas a prerenderizar. Al agregar páginas nuevas, súmalas aquí. */
const ROUTES = ["/"];

const log = (msg) => console.log(`[build-static] ${msg}`);

async function waitForServer(timeoutMs = 30_000) {
  const deadline = Date.now() + timeoutMs;
  while (Date.now() < deadline) {
    try {
      const res = await fetch(ORIGIN, { signal: AbortSignal.timeout(2000) });
      if (res.ok) return;
    } catch {
      // El servidor todavía no acepta conexiones; se reintenta.
    }
    await new Promise((r) => setTimeout(r, 300));
  }
  throw new Error(`El servidor no respondió en ${timeoutMs / 1000}s`);
}

/** Archivo destino para una ruta: "/" → index.html, "/x" → x/index.html */
function outputPathFor(route) {
  const clean = route.replace(/^\/+|\/+$/g, "");
  return clean ? join(BUILD_DIR, clean, "index.html") : join(BUILD_DIR, "index.html");
}

const HTACCESS = `# Generado por scripts/build-static.mjs

# El sitio es una sola página con rutas del lado del cliente: cualquier URL que
# no corresponda a un archivo real se sirve con index.html para que el router
# la resuelva, en vez de devolver el 404 de Apache.
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteCond %{REQUEST_FILENAME} -f [OR]
  RewriteCond %{REQUEST_FILENAME} -d
  RewriteRule ^ - [L]
  RewriteRule . /index.html [L]
</IfModule>

# Los archivos de /assets llevan un hash en el nombre: si cambian, cambia la
# URL, así que se pueden cachear indefinidamente. El HTML no.
<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType text/html "access plus 0 seconds"
  ExpiresByType text/css "access plus 1 year"
  ExpiresByType application/javascript "access plus 1 year"
  ExpiresByType image/jpeg "access plus 6 months"
  ExpiresByType image/png "access plus 6 months"
  ExpiresByType image/svg+xml "access plus 6 months"
  ExpiresByType video/mp4 "access plus 6 months"
</IfModule>

<IfModule mod_headers.c>
  <FilesMatch "\\.(js|css)$">
    Header set Cache-Control "public, max-age=31536000, immutable"
  </FilesMatch>
  <FilesMatch "\\.html$">
    Header set Cache-Control "no-cache"
  </FilesMatch>
</IfModule>

<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/html text/css application/javascript image/svg+xml
</IfModule>

# Algunos servidores no traen el tipo MIME de video configurado y el navegador
# se niega a reproducir el archivo.
<IfModule mod_mime.c>
  AddType video/mp4 .mp4
  AddType image/svg+xml .svg
</IfModule>
`;

async function main() {
  if (!existsSync(SERVER_ENTRY)) {
    throw new Error(
      `No existe ${SERVER_ENTRY}. Corre "vite build" antes que este script.`,
    );
  }

  await rm(BUILD_DIR, { recursive: true, force: true });
  await mkdir(BUILD_DIR, { recursive: true });

  log("copiando assets estáticos…");
  await cp(PUBLIC_DIR, BUILD_DIR, {
    recursive: true,
    // macOS siembra .DS_Store en cualquier carpeta que se abra en Finder.
    filter: (src) => !src.endsWith(".DS_Store"),
  });

  log(`levantando el servidor compilado en ${ORIGIN}…`);
  const server = spawn(process.execPath, [SERVER_ENTRY], {
    env: { ...process.env, PORT: String(PORT), HOST: "127.0.0.1" },
    stdio: ["ignore", "pipe", "pipe"],
  });

  let serverLog = "";
  server.stdout.on("data", (d) => (serverLog += d));
  server.stderr.on("data", (d) => (serverLog += d));

  try {
    await waitForServer();

    for (const route of ROUTES) {
      const res = await fetch(`${ORIGIN}${route}`);
      if (!res.ok) {
        throw new Error(`La ruta ${route} respondió ${res.status}`);
      }
      const html = await res.text();

      // Un HTML demasiado corto casi siempre significa que la página falló al
      // renderizar y se guardó una cáscara vacía.
      if (html.length < 1000) {
        throw new Error(`La ruta ${route} devolvió un HTML sospechosamente corto`);
      }

      const dest = outputPathFor(route);
      await mkdir(dirname(dest), { recursive: true });
      await writeFile(dest, html, "utf8");
      log(`${route} → ${dest.replace(ROOT + "/", "")} (${(html.length / 1024).toFixed(1)} kB)`);
    }
  } catch (error) {
    if (serverLog.trim()) console.error(serverLog);
    throw error;
  } finally {
    server.kill("SIGTERM");
  }

  await writeFile(join(BUILD_DIR, ".htaccess"), HTACCESS, "utf8");
  log(".htaccess escrito");

  // El bundle del servidor no se sube: en hosting compartido no se ejecuta.
  const indexHtml = await readFile(join(BUILD_DIR, "index.html"), "utf8");
  if (!indexHtml.includes("<div id=") && !indexHtml.includes("<body")) {
    throw new Error("El index.html generado no parece una página completa");
  }

  log("listo: sube el contenido de build/ a public_html");
}

main().catch((error) => {
  console.error(`[build-static] ${error.message}`);
  process.exit(1);
});
