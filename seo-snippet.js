// Single-file SEO snippet (CONFIG + META_DATA + LD_DATA + runtime)

(function () {
  "use strict";


  const CONFIG = {
    baseUrlFallback: "https://www.actsinc-corp.com",
    googleSiteVerification: ""
  };

  // === DATA (from your previous meta-tags.js) ===
  const META_DATA = {"meta_tags_list":[{"page_url":"https://www.actsinc-corp.com/","title_tag":"Construction Company Hill Country | Available Construction","meta_description":"Construction Company in Texas Hill Country specializing in Asphalt Paving, Site Work, Land Clearing, Chip Seal, Fill Materials, Transport and roadways in Blanco County."},{"page_url":"https://www.actsinc-corp.com/about","title_tag":"Construction Company Hill Country | About Available","meta_description":"Learn about Available Construction & Transport Service Inc., a family-owned Construction Company in the Texas Hill Country building Texas commercial and private roadways."},{"page_url":"https://www.actsinc-corp.com/services","title_tag":"Asphalt Paving Blanco County | Available Construction","meta_description":"Asphalt Paving Blanco County, Chip Seal Services Texas, Land Clearing Blanco County, Site Work Services Texas, Fill Materials Blanco County and Transport Services Texas."},{"page_url":"https://www.actsinc-corp.com/contact","title_tag":"Construction Company Hill Country | Contact Available","meta_description":"Contact our Construction Company in the Texas Hill Country for Asphalt Paving, Chip Seal, Site Work Services, Land Clearing, Fill Materials, Transport and roadway construction."}],"keywords":["asphalt paving blanco county","site work services texas","land clearing blanco county","construction company hill country","chip seal services texas","fill materials blanco county","transport services texas","residential construction blanco county","commercial paving texas","roadway construction blanco county"]};

  // === DATA (from your previous LD.js) ===
  const LD_DATA = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://www.actsinc-corp.com/#localbusiness",
  "name": "Available Construction & Transport Service, Inc.",
  "url": "https://www.actsinc-corp.com/",
  "image": [
    "https://static.wixstatic.com/media/911224_7617fb1632234ab0bf4a2aee28092a5b~mv2.jpg/v1/fill/w_855,h_395,al_c,q_80,enc_avif,quality_auto/ACTSINC_1_5x.jpg",
    "https://static.wixstatic.com/media/911224_7617fb1632234ab0bf4a2aee28092a5b%7Emv2.jpg/v1/fill/w_192%2Ch_192%2Clg_1%2Cusm_0.66_1.00_0.01/911224_7617fb1632234ab0bf4a2aee28092a5b%7Emv2.jpg"
  ],
  "description": "Available Construction & Transport Service, Inc. is a family-operated construction company founded in 2012, specializing in paving, chip seal, land clearing, site work, fill materials, and equipment transport services throughout the Texas Hill Country.",
  "foundingDate": "2012",
  "founder": {
    "@type": "Person",
    "name": "Darrel Wagner"
  },
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "226 Riba Ranch Rd.",
    "addressRegion": "TX",
    "addressCountry": "US"
  },
  "telephone": "+1-210-669-8932",
  "email": "mailto:daddydwags@yahoo.com",
  "areaServed": [
    {
      "@type": "AdministrativeArea",
      "name": "Blanco County"
    },
    {
      "@type": "AdministrativeArea",
      "name": "Texas Hill Country"
    }
  ],
  "sameAs": [
    "https://www.facebook.com"
  ],
  "serviceArea": {
    "@type": "AdministrativeArea",
    "name": "Texas Hill Country"
  },
  "department": [
    {
      "@type": "LocalBusiness",
      "name": "Asphalt Paving Services",
      "url": "https://www.actsinc-corp.com/services"
    },
    {
      "@type": "LocalBusiness",
      "name": "Chip Seal Services",
      "url": "https://www.actsinc-corp.com/services"
    },
    {
      "@type": "LocalBusiness",
      "name": "Land Clearing Services",
      "url": "https://www.actsinc-corp.com/services"
    },
    {
      "@type": "LocalBusiness",
      "name": "Site Work Services",
      "url": "https://www.actsinc-corp.com/services"
    },
    {
      "@type": "LocalBusiness",
      "name": "Fill Materials Supply",
      "url": "https://www.actsinc-corp.com/services"
    },
    {
      "@type": "LocalBusiness",
      "name": "Equipment Transport Services",
      "url": "https://www.actsinc-corp.com/services"
    }
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Construction and Transport Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Asphalt Paving",
          "description": "Residential and commercial asphalt paving using quality materials for durable surfaces."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Chip Seal",
          "description": "Chip seal services for refinishing existing roads or constructing new ones using quality gravel and granite."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Land Clearing",
          "description": "Efficient land clearing and debris hauling for construction projects."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Site Work",
          "description": "Comprehensive site work for foundations, parking lots, subdivisions, and stone wall construction."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Fill Materials",
          "description": "Supply of black dirt, base, rip rap, and large rock for landscaping and erosion control."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Equipment Transport",
          "description": "Transport of heavy equipment to job sites with optional operator for hire."
        }
      }
    ]
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+1-210-669-8932",
    "contactType": "customer service",
    "email": "mailto:daddydwags@yahoo.com"
  }
};

  /* ===== Helpers ===== */
  function clamp(str, max) {
    if (typeof str !== "string") str = String(str ?? "");
    return str.length <= max ? str : str.slice(0, Math.max(0, max - 1)) + "…";
  }

  function stripTrailingSlash(p) {
    if (!p) return "/";
    return p.length > 1 && p.endsWith("/") ? p.slice(0, -1) : p;
  }

  function normalizePathFromUrl(url) {
    try {
      const u = new URL(url);
      return stripTrailingSlash(u.pathname || "/");
    } catch {
      const m = String(url || "").match(/^https?:\/\/[^/]+(\/[^?#]*)?/i);
      return stripTrailingSlash((m && m[1]) || "/");
    }
  }

  function removeLangPrefix(pathname) {
    const m = String(pathname || "/").match(
      /^\/([a-z]{2}(?:-[A-Z]{2})?)(?=\/|$)(.*)$/
    );
    if (!m) return pathname || "/";
    const rest = stripTrailingSlash(m[2] || "/");
    return rest || "/";
  }

  function currentPagePath() {
    const path = window.location.pathname || "/";
    return stripTrailingSlash(path || "/");
  }

  function currentKeyCandidates() {
    const path = currentPagePath();
    const origin = (window.location.origin || "").replace(/\/$/, "");
    const full = origin + path;

    if (path === "/") {
      return [full, "/"];
    }

    const noLang = removeLangPrefix(path);
    return [full, path, stripTrailingSlash(path), noLang, stripTrailingSlash(noLang)];
  }

  function buildIndex(metaJson) {
    const list = (metaJson && metaJson.meta_tags_list) || [];
    const index = {};
    for (const item of list) {
      const path = normalizePathFromUrl(item.page_url);
      let origin = "";
      try {
        origin = new URL(item.page_url).origin;
      } catch {
        origin = "";
      }
      const full = origin ? origin.replace(/\/$/, "") + path : "";

      const entry = {
        title: item.title_tag || "",
        description: item.meta_description || "",
      };

      index[path] = entry;
      index[stripTrailingSlash(path)] = entry;
      if (full) index[full] = entry;
    }
    return index;
  }

  function _stripQuotes(s) {
    return String(s ?? "")
      .replace(/["'“”‘’„«»]/g, "")
      .replace(/\s+/g, " ")
      .replace(/^[\s\-–—·,;:]+|[\s\-–—·,;:]+$/g, "")
      .trim();
  }

  function normalizeKeywordsList(input, opts) {
    const { maxKeywords = 20 } = opts || {};
    if (input == null) return [];
    let items = Array.isArray(input)
      ? input.slice()
      : typeof input === "string"
      ? input.split(",")
      : [];
    const seen = new Set();
    return items
      .map(_stripQuotes)
      .filter((s) => s && s.length >= 2)
      .filter((s) => {
        const k = s.toLowerCase();
        if (seen.has(k)) return false;
        seen.add(k);
        return true;
      })
      .slice(0, maxKeywords);
  }

  function normalizeKeywords(input, opts) {
    const { maxKeywords = 20, maxLength = 280 } = opts || {};
    const list = normalizeKeywordsList(input, { maxKeywords });
    const content = list.join(", ");
    return content.length > maxLength ? content.slice(0, maxLength) : content;
  }

  function applyAltFallbacks(keywordsPool) {
    if (!Array.isArray(keywordsPool) || keywordsPool.length === 0) return;
    try {
      const images = Array.from(document.querySelectorAll("img"));
      let i = 0;
      images.forEach((img) => {
        const curAlt = (img.getAttribute("alt") || "").trim().toLowerCase();
        const shouldReplace =
          !curAlt ||
          curAlt.endsWith(".jpg") ||
          curAlt.endsWith(".png") ||
          curAlt === "image" ||
          curAlt === "img";
        if (shouldReplace) {
          img.setAttribute("alt", keywordsPool[i % keywordsPool.length]);
          i++;
        }
      });
    } catch {
      /* ignore */
    }
  }

  function optimizeImages() {
    try {
      const images = Array.from(document.querySelectorAll("img"));
      if ("IntersectionObserver" in window) {
        const io = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const img = entry.target;
              io.unobserve(img);
              // hook for tracking / lazy work if needed
            }
          });
        });
        images.forEach((img, index) => {
          if (index > 0) io.observe(img);
        });
      }
    } catch (err) {
      console.error("Image optimization error:", err);
    }
  }

  function upsertMeta(nameOrProperty, content, useProperty) {
    const selector = useProperty
      ? `meta[property="${nameOrProperty}"]`
      : `meta[name="${nameOrProperty}"]`;
    let el = document.head.querySelector(selector);
    if (!el) {
      el = document.createElement("meta");
      if (useProperty) el.setAttribute("property", nameOrProperty);
      else el.setAttribute("name", nameOrProperty);
      document.head.appendChild(el);
    }
    el.setAttribute("content", content);
  }

  function upsertLink(rel, href) {
    let link = document.head.querySelector(`link[rel="${rel}"]`);
    if (!link) {
      link = document.createElement("link");
      link.setAttribute("rel", rel);
      document.head.appendChild(link);
    }
    link.setAttribute("href", href);
  }

  function injectJsonLd(ldObject) {
    if (!ldObject) return;
    try {
      const existing = Array.from(
        document.head.querySelectorAll('script[type="application/ld+json"]')
      );
      existing.forEach((el) => {
        el.parentNode.removeChild(el);
      });

      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.textContent = JSON.stringify(ldObject);
      document.head.appendChild(script);
    } catch (err) {
      console.error("Error injecting JSON-LD:", err);
    }
  }

  function applyJsonLd() {
    injectJsonLd(LD_DATA);
  }

  function applySeoFromJson() {
    try {
      const metaJson = META_DATA;
      const index = buildIndex(metaJson);

      const path = currentPagePath();
      const isHome = path === "/";

      const fallbackBase =
        (CONFIG && CONFIG.baseUrlFallback) ? CONFIG.baseUrlFallback : "";
      const baseUrl = (window.location.origin || fallbackBase).replace(/\/$/, "");
      const canonicalUrl = baseUrl + path;

      const keys = currentKeyCandidates();
      let entry = null;
      for (const k of keys) {
        if (index[k]) {
          entry = index[k];
          break;
        }
      }

      if (!entry) {
        return normalizeKeywordsList(metaJson.keywords, { maxKeywords: 25 });
      }

      const title = clamp(entry.title, 60);
      const desc = clamp(entry.description, 185);

      document.title = title;

      const metaList = [
        { type: "name", key: "description", content: desc },
        { type: "property", key: "og:url", content: canonicalUrl },
        { type: "name", key: "resource-hints", content: "preload" },
        { type: "name", key: "format-detection", content: "telephone=yes" },
        { type: "name", key: "mobile-web-app-capable", content: "yes" },
        { type: "name", key: "apple-mobile-web-app-capable", content: "yes" },
      ];

      // opcjonalnie dodaj google-site-verification, jeśli jest w CONFIG
      if (CONFIG && CONFIG.googleSiteVerification) {
        metaList.push({
          type: "name",
          key: "google-site-verification",
          content: CONFIG.googleSiteVerification
        });
      }

      if (isHome && metaJson && metaJson.keywords) {
        const kwContent = normalizeKeywords(metaJson.keywords, {
          maxKeywords: 25,
          maxLength: 512,
        });
        if (kwContent) {
          metaList.push({ type: "name", key: "keywords", content: kwContent });
        }
      }

      metaList.forEach((m) => {
        upsertMeta(m.key, m.content, m.type === "property");
      });

      upsertLink("canonical", canonicalUrl);

      return normalizeKeywordsList(metaJson.keywords, { maxKeywords: 25 });
    } catch (err) {
      console.error("Error meta settings:", err);
      return [];
    }
  }

  function initSnippetSEO() {
    const keywordsPool = applySeoFromJson();
    const path = currentPagePath();
    if (path === "/") {
      applyJsonLd();
    }
    optimizeImages();
    applyAltFallbacks(keywordsPool);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initSnippetSEO);
  } else {
    initSnippetSEO();
  }
})();
