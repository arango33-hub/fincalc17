/* FinCalc 17 · service worker
   Para publicar una versión nueva basta con cambiar VERSION (y subir el index.html nuevo). */
const VERSION = 'fincalc17-v19';
const FILES = ['./', './index.html', './manifest.json',
  './icons/icon-192.png', './icons/icon-512.png', './icons/icon-maskable-512.png'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(VERSION).then(c => c.addAll(FILES.map(f => new Request(f, { cache: 'reload' })))));
});
self.addEventListener('message', e => { if (e.data === 'activar') self.skipWaiting(); });
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys()
    .then(ks => Promise.all(ks.filter(k => k !== VERSION && k !== 'fincalc17-fuentes').map(k => caches.delete(k))))
    .then(() => self.clients.claim()));
});
self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  /* Fuentes de Google: se guardan la primera vez para usarlas sin conexión */
  if (url.hostname === 'fonts.googleapis.com' || url.hostname === 'fonts.gstatic.com'){
    e.respondWith(caches.open('fincalc17-fuentes').then(async c => {
      const hit = await c.match(req); if (hit) return hit;
      try { const r = await fetch(req); c.put(req, r.clone()); return r; } catch(_){ return Response.error(); }
    }));
    return;
  }
  if (url.origin !== location.origin) return;
  /* La app: siempre desde el teléfono (rápida y sin conexión) */
  e.respondWith(caches.match(req, { ignoreSearch: true }).then(hit =>
    hit || fetch(req).catch(() => req.mode === 'navigate' ? caches.match('./index.html') : Response.error())));
});
