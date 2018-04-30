const cacheVersion = 'v1';
const filesToCache = [
   'index.html',
  'register_sw.js',
  
];
self.addEventListener('install', event => {
  console.log('[ServiceWorker] Install');
});
self.addEventListener('activate', event => {
  event.waitUntil(clients.claim());
});
self.addEventListener('fetch', event => {
  console.log('[ServiceWorker] fetch', event.request);
});
toolbox.router.get('/*', toolbox.networkFirst, {
  networkTimeoutSeconds: 5
});