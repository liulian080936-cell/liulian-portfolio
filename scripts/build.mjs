import { cp, mkdir, readdir, readFile, rm } from "node:fs/promises";
import path from "node:path";

const rootDir = process.cwd();
const distDir = path.join(rootDir, "dist");
const entries = [
  "index.html",
  "posters.html",
  "project.html",
  "script.js",
  "styles.css",
  "node_modules/gsap/dist/gsap.min.js",
];
const assetSourceFiles = [
  "index.html",
  "posters.html",
  "project.html",
  "script.js",
  "styles.css",
  "assets/projects/manifest.js",
];
const assetRefPattern = /(?:\.\.\/|\.\/)?assets\/[^\s"'`<>]+\.[A-Za-z0-9]+/g;

function normalizeAssetRef(ref) {
  const cleaned = ref.replace(/^\.\//, "").replace(/^\.\.\//, "");
  return decodeURI(cleaned);
}

async function collectAssetRefs() {
  const refs = new Set();

  for (const relativePath of assetSourceFiles) {
    const absolutePath = path.join(rootDir, relativePath);
    const text = await readFile(absolutePath, "utf8");
    const matches = text.match(assetRefPattern) || [];

    for (const match of matches) {
      refs.add(normalizeAssetRef(match));
    }
  }

  return [...refs].sort((left, right) => left.localeCompare(right));
}

async function copyReferencedAssets(assetRefs) {
  for (const relativePath of assetRefs) {
    const sourcePath = path.join(rootDir, relativePath);
    const destinationPath = path.join(distDir, relativePath);

    await mkdir(path.dirname(destinationPath), { recursive: true });
    await cp(sourcePath, destinationPath, { force: true });
  }
}

async function copyWebpTree(relativeDir) {
  const sourceDir = path.join(rootDir, relativeDir);
  const destinationDir = path.join(distDir, relativeDir);

  async function walk(currentSource, currentDestination) {
    const entries = await readdir(currentSource, { withFileTypes: true });

    for (const entry of entries) {
      const sourcePath = path.join(currentSource, entry.name);
      const destinationPath = path.join(currentDestination, entry.name);

      if (entry.isDirectory()) {
        await walk(sourcePath, destinationPath);
        continue;
      }

      if (!entry.name.toLowerCase().endsWith(".webp")) continue;

      await mkdir(path.dirname(destinationPath), { recursive: true });
      await cp(sourcePath, destinationPath, { force: true });
    }
  }

  await walk(sourceDir, destinationDir);
}

await rm(distDir, { recursive: true, force: true });
await mkdir(distDir, { recursive: true });

for (const entry of entries) {
  const sourcePath = path.join(rootDir, entry);
  const destinationPath = path.join(distDir, entry);

  await mkdir(path.dirname(destinationPath), { recursive: true });
  await cp(sourcePath, destinationPath, {
    recursive: true,
    force: true,
  });
}

const assetRefs = await collectAssetRefs();
await copyReferencedAssets(assetRefs);
await copyWebpTree("assets/poster-archive");

console.log(`Built ${distDir}`);
