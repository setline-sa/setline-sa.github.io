/* =========================================================
   SETLINE app — service worker (offline support)
   Change VERSION whenever you publish an update so users get it.
   ========================================================= */
const VERSION = "setline-v10";
const CORE = [
  "./",
  "./index.html",
  "./styles.css?v=10",
  "./data.js?v=10",
  "./map-data.js?v=10",
  "./app.js?v=10",
  "./manifest.webmanifest",
  "./assets/brand/mark-dark.png",
  "./assets/brand/symbol.png",
  "./assets/icons/icon-192.png",
  "./assets/icons/favicon-48.png"
];

// Install: save the core files so the app opens offline
self.addEventListener("install", (e) => {
  e.waitUntil(caches.open(VERSION).then((c) => c.addAll(CORE)).then(() => self.skipWaiting()));
});

// Activate: remove caches from older versions
self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== VERSION).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (e) => {
  const req = e.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);

  // Pages, CSS and JS: try the network first (fresh content), fall back to cache offline
  if (req.mode === "navigate" || /\.(css|js|webmanifest)$/.test(url.pathname)) {
    // cache: "no-cache" = always check GitHub for a newer version (never use a stale browser copy)
    e.respondWith(
      fetch(req, { cache: "no-cache" })
        .then((res) => { const copy = res.clone(); caches.open(VERSION).then((c) => c.put(req, copy)); return res; })
        .catch(() => caches.match(req).then((r) => r || caches.match("./index.html")))
    );
    return;
  }

  // Images and fonts: serve from cache first (fast), and save new ones as they are viewed
  if (req.destination === "image" || req.destination === "font" || url.hostname.includes("fonts.g")) {
    e.respondWith(
      caches.match(req).then((cached) => cached || fetch(req).then((res) => {
        if (res.ok || res.type === "opaque") { const copy = res.clone(); caches.open(VERSION).then((c) => c.put(req, copy)); }
        return res;
      }))
    );
  }
});
