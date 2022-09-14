const cacheName = 'phalangesPWA-v1';
const urlsToCache = ['/', 'app.js'];

self.addEventListener('install', (e) => {
    console.log('[Service Worker] Installed');
    e.waitUntil(
        caches.open(cacheName)
            .then(cache => {
                console.log('[Service Worker] Cached')
                return cache.addAll(urlsToCache);
            }));
});

self.addEventListener('activate', async () => {
    console.log('Service worker activated');
});

console.log('Hello, this message is sent by a service worker');

