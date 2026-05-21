import { copyFileSync, existsSync, mkdirSync } from "node:fs";
import { dirname, resolve } from "node:path";

const distDir = resolve("dist");
const indexFile = resolve(distDir, "index.html");

const routes = [
  "/about",
  "/services",
  "/services/digital-marketing",
  "/services/website-design",
  "/services/brand-identity",
  "/services/email-marketing",
  "/services/influencer-marketing",
  "/services/ecommerce-listing",
  "/services/seo-optimization",
  "/services/product-shoot",
  "/blog",
  "/contact",
  "/vijayawada",
  "/guntur",
];

if (!existsSync(indexFile)) {
  throw new Error("dist/index.html not found. Run this script after vite build.");
}

for (const route of routes) {
  const outputFile = resolve(distDir, route.replace(/^\//, ""), "index.html");
  mkdirSync(dirname(outputFile), { recursive: true });
  copyFileSync(indexFile, outputFile);
}

console.log(`Generated static HTML fallbacks for ${routes.length} routes.`);