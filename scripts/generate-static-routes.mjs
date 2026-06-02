import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";

const distDir = resolve("dist");
const indexFile = resolve(distDir, "index.html");
const publicDir = resolve("public");
const siteUrl = "https://ayrondigitalsolutions.com";

const routes = [
  {
    path: "/about",
    title: "About | Best Digital Marketing Company in Vijayawada | Ayron Digital Solutions",
    description: "Ayron Digital Solutions is the best digital marketing company in Vijayawada — a full-service agency helping 200+ brands grow with SEO, branding, websites and paid campaigns.",
    keywords: "best digital marketing company in vijayawada, best digital marketing agency in vijayawada, digital marketing company vijayawada, top digital marketing agency vijayawada, digital marketing services vijayawada, ayron digital solutions",
    changefreq: "monthly",
    priority: "0.8",
  },
  {
    path: "/services",
    title: "Digital Marketing Services | Ayron Digital Solutions",
    description: "Explore SEO, website design, branding, email marketing, influencer campaigns, ecommerce listing, product shoots and digital marketing services.",
    changefreq: "weekly",
    priority: "0.9",
  },
  {
    path: "/services/digital-marketing",
    title: "Digital Marketing Service | Ayron Digital Solutions",
    description: "Performance-driven digital marketing services with Google Ads, Meta Ads, social media, analytics and conversion strategy for measurable growth.",
    changefreq: "monthly",
    priority: "0.8",
  },
  {
    path: "/services/website-design",
    title: "Best Website Development Company in Vijayawada | Ayron Digital Solutions",
    description: "Ayron Digital Solutions is the best website development company in Vijayawada — building fast, mobile-first, SEO-ready websites that convert visitors into customers.",
    keywords: "best website development company in vijayawada, best website design company in vijayawada, website developers in vijayawada, custom website development vijayawada, ecommerce website vijayawada, responsive web design vijayawada, web design agency vijayawada",
    changefreq: "monthly",
    priority: "0.8",
  },
  {
    path: "/services/brand-identity",
    title: "Brand Identity Service | Ayron Digital Solutions",
    description: "Build a memorable brand identity with logo design, visual systems, brand guidelines, positioning and creative assets from Ayron Digital Solutions.",
    changefreq: "monthly",
    priority: "0.8",
  },
  {
    path: "/services/email-marketing",
    title: "Email Marketing Service | Ayron Digital Solutions",
    description: "Email marketing services with automated campaigns, segmentation, templates, deliverability optimization and reporting for stronger customer retention.",
    changefreq: "monthly",
    priority: "0.8",
  },
  {
    path: "/services/influencer-marketing",
    title: "Influencer Marketing Service | Ayron Digital Solutions",
    description: "Influencer marketing campaigns with creator discovery, outreach, content coordination and performance tracking for brand awareness and sales.",
    changefreq: "monthly",
    priority: "0.8",
  },
  {
    path: "/services/ecommerce-listing",
    title: "Ecommerce Listing Service | Ayron Digital Solutions",
    description: "Ecommerce listing services for Amazon, Flipkart, Shopify and marketplaces with optimized product content, images and conversion-focused setup.",
    changefreq: "monthly",
    priority: "0.8",
  },
  {
    path: "/services/seo-optimization",
    title: "SEO Optimization Service | Ayron Digital Solutions",
    description: "SEO optimization services including audits, keyword research, technical SEO, on-page improvements, content strategy and local SEO growth.",
    changefreq: "monthly",
    priority: "0.8",
  },
  {
    path: "/services/product-shoot",
    title: "Product Shoot Service | Ayron Digital Solutions",
    description: "Professional product shoot services for ecommerce, social media and ads with high-converting visuals that help brands look premium online.",
    changefreq: "monthly",
    priority: "0.8",
  },
  {
    path: "/services/podcast-production",
    title: "Best Podcast Production Services in Vijayawada | Ayron Digital Solutions",
    description: "Top podcast production services in Vijayawada offering end-to-end recording, sound design, scripting, editing and distribution to build brand authority.",
    keywords: "podcast production in vijayawada, best podcast production services in vijayawada, podcast editing vijayawada, podcast studio vijayawada, podcast recording vijayawada, audio production vijayawada",
    changefreq: "monthly",
    priority: "0.8",
  },
  {
    path: "/services/performance-marketing",
    title: "Best Performance Marketing Agency in Vijayawada | Ayron Digital Solutions",
    description: "High-ROI performance marketing services in Vijayawada — Google Ads, Meta Ads and paid campaigns built to generate leads and scale sales profitably.",
    keywords: "performance marketing in vijayawada, best performance marketing agency in vijayawada, google ads agency vijayawada, meta ads agency vijayawada, paid marketing vijayawada, ROAS optimization vijayawada",
    changefreq: "monthly",
    priority: "0.8",
  },
  {
    path: "/services/qcommerce",
    title: "Best Q-Commerce Management Agency in Vijayawada | Ayron Digital Solutions",
    description: "Top quick commerce management services in Vijayawada for Zepto, Blinkit, Instamart and BigBasket — catalog, ads, and stock management to scale sales.",
    keywords: "q-commerce management in vijayawada, best quick commerce agency in vijayawada, blinkit seller vijayawada, zepto seller vijayawada, instamart seller vijayawada, qcommerce ads vijayawada",
    changefreq: "monthly",
    priority: "0.8",
  },
  {
    path: "/services/product-shoot-vijayawada",
    title: "Best Product Shoot Services in Vijayawada | Professional Photography",
    description: "Capture stunning product visuals with creative photography services for brands, eCommerce stores, and businesses in Vijayawada.",
    keywords: "best product shoot services in vijayawada, best product shoot photography in vijayawada",
    changefreq: "monthly",
    priority: "0.85",
  },
  {
    path: "/blog",
    title: "Digital Marketing Blog | Ayron Digital Solutions",
    description: "Read digital marketing strategies, SEO insights, email marketing tips, influencer marketing guides and growth ideas from Ayron Digital Solutions.",
    changefreq: "weekly",
    priority: "0.7",
  },
  {
    path: "/blog/shopify-vs-wordpress",
    title: "Shopify vs. WordPress: Which Ecommerce Platform Fits Your Business?",
    description: "Shopify vs. WordPress comparison for ecommerce website development. Analyze woocommerce shopify and wordpress shopify to choose the best shopify website development company.",
    keywords: "shopify and wordpress, woocommerce shopify, wordpress shopify, shopify ecommerce website, shopify website development, shopify development company, shopify web development company, shopify website development company, Shopify vs. WordPress, which Ecommerce Platform Fits Your Business",
    changefreq: "weekly",
    priority: "0.85",
  },
  {
    path: "/contact",
    title: "Contact Ayron Digital Solutions | Digital Marketing Agency",
    description: "Contact Ayron Digital Solutions to discuss SEO, website design, branding, social media and digital marketing campaigns for your business.",
    changefreq: "monthly",
    priority: "0.7",
  },
  {
    path: "/vijayawada",
    title: "Digital Marketing Agency in Vijayawada | Ayron Digital Solutions",
    description: "Ayron Digital Solutions is a digital marketing agency in Vijayawada offering SEO, social media, branding, web design and influencer marketing.",
    keywords: "best digital marketing agency in vijayawada, digital marketing agency in vijayawada, digital marketing company vijayawada, SEO agency vijayawada, social media marketing vijayawada, branding agency vijayawada",
    changefreq: "monthly",
    priority: "0.9",
    noTrailingSlash: true,
  },
  {
    path: "/guntur",
    title: "Digital Marketing Agency in Guntur | Ayron Digital Solutions",
    description: "Ayron Digital Solutions is a digital marketing agency in Guntur offering SEO, social media, branding, website design and performance marketing.",
    keywords: "best digital marketing agency in guntur, digital marketing agency in guntur, digital marketing company guntur, SEO agency guntur, social media marketing guntur, branding agency guntur",
    changefreq: "monthly",
    priority: "0.9",
    noTrailingSlash: true,
  },
];

if (!existsSync(indexFile)) {
  throw new Error("dist/index.html not found. Run this script after vite build.");
}

const escapeHtml = (value) =>
  value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/\"/g, "&quot;");

const withTrailingSlash = (path, noTrailingSlash) => {
  if (noTrailingSlash || path === "/") return path;
  return `${path}/`;
};

const setMeta = (html, attr, key, content) =>
  html.replace(new RegExp(`<meta ${attr}="${key}" content="[^"]*" ?/?>`, "i"), `<meta ${attr}="${key}" content="${escapeHtml(content)}" />`);

const baseHtml = readFileSync(indexFile, "utf8");

for (const route of routes) {
  const canonicalUrl = `${siteUrl}${withTrailingSlash(route.path, route.noTrailingSlash)}`;
  const outputFile = resolve(distDir, route.path.replace(/^\//, "") || ".", "index.html");
  
  let html = baseHtml
    .replace(/<title>.*?<\/title>/s, `<title>${escapeHtml(route.title)}</title>`)
    .replace(/<link rel="canonical" href="[^"]*" ?\/?>/i, `<link rel="canonical" href="${canonicalUrl}" />`);

  html = setMeta(html, "name", "description", route.description);
  if (route.keywords) {
    html = setMeta(html, "name", "keywords", route.keywords);
  }
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
    `    <loc>${siteUrl}${withTrailingSlash(entry.path, entry.noTrailingSlash)}</loc>`,
    `    <changefreq>${entry.changefreq}</changefreq>`,
    `    <priority>${entry.priority}</priority>`,
    `  </url>`,
  ].join("\n")),
  `</urlset>`,
  ``,
].join("\n");

writeFileSync(resolve(distDir, "sitemap.xml"), sitemap);
writeFileSync(resolve(publicDir, "sitemap.xml"), sitemap);

console.log(`Generated route-specific HTML and sitemap for ${routes.length} routes.`);