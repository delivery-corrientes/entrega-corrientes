const CACHE_NAME = "delivery-corrientes-v1";

const urlsToCache = [
  "/",
  "/index.html",
  "/style.css",
  "/manifest.json",
  "/img/icono.png"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
