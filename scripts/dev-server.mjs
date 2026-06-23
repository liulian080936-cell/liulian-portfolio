import http from "node:http";
import { readFile, stat } from "node:fs/promises";
import path from "node:path";

const args = process.argv.slice(2);
let rootDir = process.cwd();
let port = 4173;

for (let i = 0; i < args.length; i += 1) {
  const arg = args[i];
  if (arg === "--root" && args[i + 1]) {
    rootDir = path.resolve(args[i + 1]);
    i += 1;
  } else if (arg === "--port" && args[i + 1]) {
    const nextPort = Number(args[i + 1]);
    if (Number.isFinite(nextPort) && nextPort > 0) {
      port = nextPort;
    }
    i += 1;
  }
}

const mimeTypes = new Map([
  [".html", "text/html; charset=utf-8"],
  [".css", "text/css; charset=utf-8"],
  [".js", "text/javascript; charset=utf-8"],
  [".mjs", "text/javascript; charset=utf-8"],
  [".json", "application/json; charset=utf-8"],
  [".svg", "image/svg+xml"],
  [".png", "image/png"],
  [".jpg", "image/jpeg"],
  [".jpeg", "image/jpeg"],
  [".webp", "image/webp"],
  [".gif", "image/gif"],
  [".ico", "image/x-icon"],
  [".woff2", "font/woff2"],
]);

function getContentType(filePath) {
  return mimeTypes.get(path.extname(filePath).toLowerCase()) || "application/octet-stream";
}

function resolveRequestPath(root, requestPath) {
  const rootAbs = path.resolve(root);
  const requestTarget = requestPath === "/" ? "/index.html" : requestPath;
  const resolved = path.resolve(rootAbs, `.${requestTarget}`);
  const relative = path.relative(rootAbs, resolved);

  if (relative.startsWith("..") || path.isAbsolute(relative)) {
    return null;
  }

  return resolved;
}

const server = http.createServer(async (req, res) => {
  if (!req.url) {
    res.writeHead(400, { "Content-Type": "text/plain; charset=utf-8" });
    res.end("Bad request");
    return;
  }

  const url = new URL(req.url, "http://localhost");
  const filePath = resolveRequestPath(rootDir, decodeURIComponent(url.pathname));

  if (!filePath) {
    res.writeHead(403, { "Content-Type": "text/plain; charset=utf-8" });
    res.end("Forbidden");
    return;
  }

  try {
    const fileStat = await stat(filePath);
    const targetPath = fileStat.isDirectory() ? path.join(filePath, "index.html") : filePath;
    const body = await readFile(targetPath);

    res.writeHead(200, {
      "Content-Type": getContentType(targetPath),
      "Cache-Control": "no-cache",
    });
    res.end(body);
  } catch {
    res.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
    res.end("Not found");
  }
});

server.listen(port, "127.0.0.1", () => {
  console.log(`Serving ${rootDir} at http://127.0.0.1:${port}`);
});
