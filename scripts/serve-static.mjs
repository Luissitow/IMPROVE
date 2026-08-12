/**
 * Sirve `build/` como lo haría un hosting compartido: solo archivos, sin Node
 * detrás. Útil para revisar el sitio exactamente como quedará en Hostinger
 * antes de subirlo.
 *
 *   pnpm preview:static   →   http://localhost:4180
 */

import { createServer } from "node:http";
import { createReadStream } from "node:fs";
import { stat } from "node:fs/promises";
import { join, extname, normalize } from "node:path";

const BUILD_DIR = join(process.cwd(), "build");
const PORT = Number(process.env.PORT ?? 4180);

const MIME = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".mjs": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".ico": "image/x-icon",
  ".mp4": "video/mp4",
  ".webm": "video/webm",
  ".woff2": "font/woff2",
};

async function resolveFile(urlPath) {
  // normalize corta los "../" que podrían salir del directorio servido.
  const safe = normalize(decodeURIComponent(urlPath)).replace(/^(\.\.[/\\])+/, "");
  const candidates = [
    join(BUILD_DIR, safe),
    join(BUILD_DIR, safe, "index.html"),
    // Igual que el fallback del .htaccess: el router resuelve la ruta.
    join(BUILD_DIR, "index.html"),
  ];

  for (const candidate of candidates) {
    if (!candidate.startsWith(BUILD_DIR)) continue;
    try {
      const info = await stat(candidate);
      if (info.isFile()) return { path: candidate, size: info.size };
    } catch {
      // Siguiente candidato.
    }
  }
  return null;
}

createServer(async (req, res) => {
  const urlPath = (req.url ?? "/").split("?")[0];
  const file = await resolveFile(urlPath);

  if (!file) {
    res.writeHead(404, { "content-type": "text/plain; charset=utf-8" });
    res.end("No encontrado");
    return;
  }

  res.writeHead(200, {
    "content-type": MIME[extname(file.path).toLowerCase()] ?? "application/octet-stream",
    "content-length": file.size,
  });
  createReadStream(file.path).pipe(res);
}).listen(PORT, () => {
  console.log(`build/ servido en http://localhost:${PORT}`);
});
