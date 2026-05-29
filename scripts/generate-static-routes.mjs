import { writeFileSync } from "node:fs";
import { resolve } from "node:path";

const siteUrl = "https://ayrondigitalsolutions.com";

const routes = [
  {
    path: "/",
    changefreq: "weekly",
    priority: "1.0",
  },
  {
    path: "/about",
    changefreq: "monthly",
    priority: "0.8",
  },
  {
    path: "/services",
    changefreq: "weekly",
    priority: "0.9",
  },
  {
    path: "/services/digital-marketing",
    changefreq: "monthly",
    priority: "0.8",
  },
  {
    path: "/services/website-design",
    changefreq: "monthly",
    priority: "0.8",
  },
  {
    path: "/services/brand-identity",
    changefreq: "monthly",
    priority: "0.8",
  },
  {
    path: "/services/email-marketing",
    changefreq: "monthly",
    priority: "0.8",
  },
  {
    path: "/services/influencer-marketing",
    changefreq: "monthly",
    priority: "0.8",
  },
  {
    path: "/services/ecommerce-listing",
    changefreq: "monthly",
    priority: "0.8",
  },
  {
    path: "/services/seo-optimization",
    changefreq: "monthly",
    priority: "0.8",
  },
  {
    path: "/services/product-shoot",
    changefreq: "monthly",
    priority: "0.8",
  },
  {
    path: "/blog",
    changefreq: "weekly",
    priority: "0.7",
  },
  {
    path: "/contact",
    changefreq: "monthly",
    priority: "0.7",
  },
  {
    path: "/vijayawada",
    changefreq: "monthly",
    priority: "0.9",
    noTrailingSlash: true,
  },
  {
    path: "/guntur",
    changefreq: "monthly",
    priority: "0.9",
    noTrailingSlash: true,
  },
];

const withTrailingSlash = (path, noTrailingSlash) => {
  if (noTrailingSlash || path === "/") return path;
  return `${path}/`;
};

const sitemap = [
  `<?xml version="1.0" encoding="UTF-8"?>`,
  `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
  ...routes.map((entry) => [
    `  <url>`,
    `    <loc>${siteUrl}${withTrailingSlash(entry.path, entry.noTrailingSlash)}</loc>`,
    `    <changefreq>${entry.changefreq}</changefreq>`,
    `    <priority>${entry.priority}</priority>`,
    `  </url>`,
  ].join("\n")),
  `</urlset>`,
  ``,
].join("\n");

const distDir = resolve("public");
writeFileSync(resolve(distDir, "sitemap.xml"), sitemap);

console.log(`Generated sitemap for ${routes.length} routes.`);