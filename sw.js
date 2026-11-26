// Minimal Service Worker to enable PWA "Add to Home Screen / Desktop" installability.
// Always uses the network so school data and updates stay fresh.
self.addEventListener('install', () => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', (event) => {
  event.respondWith(fetch(event.request));
});
