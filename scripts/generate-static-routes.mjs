import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";

const distDir = resolve("dist");
const indexFile = resolve(distDir, "index.html");
const siteUrl = "https://ayrondigitalsolutions.com";
const siteName = "Ayron Digital Solutions";

const routes = [
  {
    path: "/about",
    title: `About ${siteName}`,
    description: "Learn about Ayron Digital Solutions, a digital marketing agency helping 200+ brands grow with SEO, branding, websites and performance campaigns.",
    changefreq: "monthly",
    priority: "0.8",
  },
  {
    path: "/services",
    title: `Digital Marketing Services | ${siteName}`,
    description: "Explore SEO, website design, branding, email marketing, influencer campaigns, ecommerce listing, product shoots and digital marketing services.",
    changefreq: "weekly",
    priority: "0.9",
  },
  {
    path: "/services/digital-marketing",
    title: `Digital Marketing Service | ${siteName}`,
    description: "Performance-driven digital marketing services with Google Ads, Meta Ads, social media, analytics and conversion strategy for measurable growth.",
    changefreq: "monthly",
    priority: "0.8",
  },
  {
    path: "/services/website-design",
    title: `Website Design Service | ${siteName}`,
    description: "Mobile-first website design services built for speed, SEO, trust and conversions for growing brands in Vijayawada, Guntur and across India.",
    changefreq: "monthly",
    priority: "0.8",
  },
  {
    path: "/services/brand-identity",
    title: `Brand Identity Service | ${siteName}`,
    description: "Build a memorable brand identity with logo design, visual systems, brand guidelines, positioning and creative assets from Ayron Digital Solutions.",
    changefreq: "monthly",
    priority: "0.8",
  },
  {
    path: "/services/email-marketing",
    title: `Email Marketing Service | ${siteName}`,
    description: "Email marketing services with automated campaigns, segmentation, templates, deliverability optimization and reporting for stronger customer retention.",
    changefreq: "monthly",
    priority: "0.8",
  },
  {
    path: "/services/influencer-marketing",
    title: `Influencer Marketing Service | ${siteName}`,
    description: "Influencer marketing campaigns with creator discovery, outreach, content coordination and performance tracking for brand awareness and sales.",
    changefreq: "monthly",
    priority: "0.8",
  },
  {
    path: "/services/ecommerce-listing",
    title: `Ecommerce Listing Service | ${siteName}`,
    description: "Ecommerce listing services for Amazon, Flipkart, Shopify and marketplaces with optimized product content, images and conversion-focused setup.",
    changefreq: "monthly",
    priority: "0.8",
  },
  {
    path: "/services/seo-optimization",
    title: `SEO Optimization Service | ${siteName}`,
    description: "SEO optimization services including audits, keyword research, technical SEO, on-page improvements, content strategy and local SEO growth.",
    changefreq: "monthly",
    priority: "0.8",
  },
  {
    path: "/services/product-shoot",
    title: `Product Shoot Service | ${siteName}`,
    description: "Professional product shoot services for ecommerce, social media and ads with high-converting visuals that help brands look premium online.",
    changefreq: "monthly",
    priority: "0.8",
  },
  {
    path: "/blog",
    title: `Digital Marketing Blog | ${siteName}`,
    description: "Read digital marketing strategies, SEO insights, email marketing tips, influencer marketing guides and growth ideas from Ayron Digital Solutions.",
    changefreq: "weekly",
    priority: "0.7",
  },
  {
    path: "/contact",
    title: `Contact ${siteName}`,
    description: "Contact Ayron Digital Solutions to discuss SEO, website design, branding, social media and digital marketing campaigns for your business.",
    changefreq: "monthly",
    priority: "0.7",
  },
  {
    path: "/vijayawada",
    title: `Digital Marketing Agency in Vijayawada | ${siteName}`,
    description: "Ayron Digital Solutions is a digital marketing agency in Vijayawada offering SEO, social media, branding, web design and influencer marketing.",
    changefreq: "monthly",
    priority: "0.9",
  },
  {
    path: "/guntur",
    title: `Digital Marketing Agency in Guntur | ${siteName}`,
    description: "Ayron Digital Solutions is a digital marketing agency in Guntur offering SEO, social media, branding, website design and performance marketing.",
    changefreq: "monthly",
    priority: "0.9",
  },
];

if (!existsSync(indexFile)) {
  throw new Error("dist/index.html not found. Run this script after vite build.");
}

const escapeHtml = (value) =>
  value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/\"/g, "&quot;");

const withTrailingSlash = (path) => (path === "/" ? "/" : `${path}/`);

const setMeta = (html, attr, key, content) =>
  html.replace(new RegExp(`<meta ${attr}="${key}" content="[^"]*" ?/?>`, "i"), `<meta ${attr}="${key}" content="${escapeHtml(content)}" />`);

const baseHtml = readFileSync(indexFile, "utf8");

for (const route of routes) {
  const canonicalUrl = `${siteUrl}${withTrailingSlash(route.path)}`;
  const outputFile = resolve(distDir, route.path.replace(/^\//, ""), "index.html");
  let html = baseHtml
    .replace(/<title>.*?<\/title>/s, `<title>${escapeHtml(route.title)}</title>`)
    .replace(/<link rel="canonical" href="[^"]*" ?\/?>/i, `<link rel="canonical" href="${canonicalUrl}" />`);

  html = setMeta(html, "name", "description", route.description);
  html = setMeta(html, "property", "og:title", route.title);
  html = setMeta(html, "property", "og:description", route.description);
  html = setMeta(html, "property", "og:url", canonicalUrl);
  html = setMeta(html, "name", "twitter:title", route.title);
  html = setMeta(html, "name", "twitter:description", route.description);

  mkdirSync(dirname(outputFile), { recursive: true });
  writeFileSync(outputFile, html);
}

const sitemapEntries = [
  { path: "/", changefreq: "weekly", priority: "1.0" },
  ...routes,
];

const sitemap = [
  `<?xml version="1.0" encoding="UTF-8"?>`,
  `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
  ...sitemapEntries.map((entry) => [
    `  <url>`,
    `    <loc>${siteUrl}${withTrailingSlash(entry.path)}</loc>`,
    `    <changefreq>${entry.changefreq}</changefreq>`,
    `    <priority>${entry.priority}</priority>`,
    `  </url>`,
  ].join("\n")),
  `</urlset>`,
  ``,
].join("\n");

writeFileSync(resolve(distDir, "sitemap.xml"), sitemap);

console.log(`Generated route-specific HTML and sitemap for ${routes.length} routes.`);