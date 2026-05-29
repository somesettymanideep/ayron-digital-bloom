import { useEffect } from "react";

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  ogType?: string;
  ogImage?: string;
  jsonLd?: Record<string, unknown>;
  keywords?: string;
  noTrailingSlash?: boolean;
}

const SITE_NAME = "Ayron Digital Solutions";
const DEFAULT_OG_IMAGE = "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/3dc047b7-4265-484f-98cd-26d83b8b16d4/id-preview-e16652c9--d4c95d0d-ed6e-4bf0-b6ce-4cececbc864b.lovable.app-1771390921593.png";
const BASE_URL = "https://ayrondigitalsolutions.com";

const normalizeCanonicalPath = (path: string, noTrailingSlash?: boolean) => {
  if (path === "/" || noTrailingSlash) return path;
  return path.endsWith("/") ? path : `${path}/`;
};

const buildCanonicalUrl = (canonical: string | undefined, noTrailingSlash?: boolean) => {
  if (!canonical) return undefined;
  // If it's already a full URL, use it as-is
  if (canonical.startsWith("http")) {
    return canonical;
  }
  // Otherwise build it from the path
  return `${BASE_URL}${normalizeCanonicalPath(canonical, noTrailingSlash)}`;
};

const setMeta = (attr: string, key: string, content: string) => {
  let el = document.querySelector(`meta[${attr}="${key}"]`) as HTMLMetaElement | null;
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
};

const setCanonical = (href: string) => {
  let el = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", "canonical");
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
};

const SEO = ({
  title,
  description,
  canonical,
  ogType = "website",
  ogImage = DEFAULT_OG_IMAGE,
  jsonLd,
  keywords,
  noTrailingSlash,
}: SEOProps) => {
  const fullTitle = `${title} — ${SITE_NAME}`;
  const canonicalUrl = buildCanonicalUrl(canonical, noTrailingSlash);

  // Set title in render for pre-rendering
  if (typeof document !== "undefined") {
    document.title = fullTitle;
  }

  useEffect(() => {
    // Title
    document.title = fullTitle;

    // Standard meta
    setMeta("name", "description", description);
    if (keywords) {
      setMeta("name", "keywords", keywords);
    }
    setMeta("name", "author", SITE_NAME);
    setMeta("name", "robots", "index, follow");

    // Open Graph
    setMeta("property", "og:title", fullTitle);
    setMeta("property", "og:description", description);
    setMeta("property", "og:type", ogType);
    setMeta("property", "og:image", ogImage);
    setMeta("property", "og:site_name", SITE_NAME);
    if (canonicalUrl) setMeta("property", "og:url", canonicalUrl);

    // Twitter
    setMeta("name", "twitter:card", "summary_large_image");
    setMeta("name", "twitter:title", fullTitle);
    setMeta("name", "twitter:description", description);
    setMeta("name", "twitter:image", ogImage);

    // Canonical
    if (canonicalUrl) setCanonical(canonicalUrl);

    // JSON-LD
    let scriptEl: HTMLScriptElement | null = document.querySelector('script[data-seo-jsonld]');
    if (jsonLd) {
      if (!scriptEl) {
        scriptEl = document.createElement("script");
        scriptEl.setAttribute("type", "application/ld+json");
        scriptEl.setAttribute("data-seo-jsonld", "true");
        document.head.appendChild(scriptEl);
      }
      scriptEl.textContent = JSON.stringify(jsonLd);
    } else if (scriptEl) {
      scriptEl.remove();
    }

    return () => {
      // Reset title on unmount
      document.title = `${SITE_NAME} — We Grow Brands That Matter`;
    };
  }, [fullTitle, description, ogType, ogImage, canonicalUrl, jsonLd, keywords]);

  return null;
};

export default SEO;
