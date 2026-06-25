import http from "node:http";
import { createReadStream } from "node:fs";
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
  [".mp4", "video/mp4"],
  [".gif", "image/gif"],
  [".ico", "image/x-icon"],
  [".woff2", "font/woff2"],
]);

function getContentType(filePath) {
  return mimeTypes.get(path.extname(filePath).toLowerCase()) || "application/octet-stream";
}

function parseRange(rangeHeader, size) {
  if (!rangeHeader?.startsWith("bytes=")) return null;

  const [startText, endText] = rangeHeader.replace("bytes=", "").split("-");
  const hasStart = startText !== "";
  const hasEnd = endText !== "";

  if (!hasStart && !hasEnd) return null;

  let start = hasStart ? Number(startText) : Number.NaN;
  let end = hasEnd ? Number(endText) : Number.NaN;

  if (hasStart && !Number.isInteger(start)) return null;
  if (hasEnd && !Number.isInteger(end)) return null;

  if (!hasStart) {
    const suffixLength = end;
    if (suffixLength <= 0) return null;
    start = Math.max(0, size - suffixLength);
    end = size - 1;
  } else {
    if (start < 0 || start >= size) return null;
    end = hasEnd ? Math.min(end, size - 1) : size - 1;
  }

  if (end < start) return null;

  return { start, end };
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
    const targetStat = fileStat.isDirectory() ? await stat(targetPath) : fileStat;
    const contentType = getContentType(targetPath);
    const range = parseRange(req.headers.range, targetStat.size);

    if (range) {
      const { start, end } = range;
      const chunkSize = end - start + 1;

      res.writeHead(206, {
        "Accept-Ranges": "bytes",
        "Cache-Control": "no-cache",
        "Content-Length": chunkSize,
        "Content-Range": `bytes ${start}-${end}/${targetStat.size}`,
        "Content-Type": contentType,
      });

      if (req.method === "HEAD") {
        res.end();
        return;
      }

      createReadStream(targetPath, { start, end }).pipe(res);
      return;
    }

    if (req.headers.range) {
      res.writeHead(416, {
        "Content-Range": `bytes */${targetStat.size}`,
        "Content-Type": "text/plain; charset=utf-8",
      });
      res.end("Requested range not satisfiable");
      return;
    }

    if (targetStat.size > 2 * 1024 * 1024 || contentType.startsWith("video/")) {
      res.writeHead(200, {
        "Accept-Ranges": "bytes",
        "Cache-Control": "no-cache",
        "Content-Length": targetStat.size,
        "Content-Type": contentType,
      });

      if (req.method === "HEAD") {
        res.end();
        return;
      }

      createReadStream(targetPath).pipe(res);
      return;
    }

    const body = await readFile(targetPath);

    res.writeHead(200, {
      "Accept-Ranges": "bytes",
      "Cache-Control": "no-cache",
      "Content-Length": body.length,
      "Content-Type": contentType,
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
