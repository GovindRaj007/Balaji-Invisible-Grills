// Post-build: generate sitemap.xml from the prerendered pages and create 404.html.
//
// Every indexable page that was prerendered into dist/client is listed, so the
// sitemap can never drift out of sync with the routes again (the old hand-written
// sitemap missed all 28 service × city pages and used the non-canonical bare domain).
import { readdirSync, readFileSync, statSync, writeFileSync, copyFileSync, existsSync } from "node:fs";
import { join, relative, sep } from "node:path";

const SITE = "https://www.balajiinvisiblegrills.in";
const OUT = join(process.cwd(), "dist", "client");

function walk(dir) {
  return readdirSync(dir).flatMap((name) => {
    const p = join(dir, name);
    return statSync(p).isDirectory() ? walk(p) : [p];
  });
}

function priority(path) {
  if (path === "/") return "1.0";
  if (path.startsWith("/services/")) return "0.9";
  if (path.startsWith("/service-areas/")) return "0.8";
  if (path.startsWith("/locations/")) return "0.7";
  if (path === "/services" || path === "/locations" || path === "/contact") return "0.7";
  return "0.5";
}

const today = new Date().toISOString().slice(0, 10);
const pages = walk(OUT)
  .filter((f) => f.endsWith(`${sep}index.html`) || f === join(OUT, "index.html"))
  .map((f) => {
    const rel = relative(OUT, f).split(sep).join("/").replace(/index\.html$/, "").replace(/\/$/, "");
    return { file: f, path: rel ? `/${rel}` : "/" };
  })
  .filter(({ file }) => !/<meta name="robots" content="noindex/.test(readFileSync(file, "utf8")))
  .sort((a, b) => Number(priority(b.path)) - Number(priority(a.path)) || a.path.localeCompare(b.path));

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
  .map((p) => `  <url>\n    <loc>${SITE}${p.path}</loc>\n    <lastmod>${today}</lastmod>\n    <priority>${priority(p.path)}</priority>\n  </url>`)
  .join("\n")}
</urlset>
`;
writeFileSync(join(OUT, "sitemap.xml"), xml);
console.log(`Sitemap: ${pages.length} URLs written to dist/client/sitemap.xml`);

const notFound = join(OUT, "page-not-found", "index.html");
if (existsSync(notFound)) {
  copyFileSync(notFound, join(OUT, "404.html"));
  console.log("404.html created");
} else {
  console.warn("WARNING: /page-not-found was not prerendered — 404.html not created");
}
