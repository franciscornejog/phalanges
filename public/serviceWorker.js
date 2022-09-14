const cacheName = 'phalangesPWA-v1';
const urlsToCache = ['/', 'app.js'];

self.addEventListener('install', async event => {
    console.log('[Service Worker] Installed');
    event.waitUntil(
        caches.open(cacheName)
            .then(cache => {
                console.log('[Service Worker] Cached')
                return cache.addAll(urlsToCache);
            }));
    self.skipWaiting();
});

self.addEventListener('activate', async () => {
    console.log('[Service Worker] Activated');
});
