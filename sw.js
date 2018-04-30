// sw.js ¤å¥ó


self.addEventListener('install', function (e) {
  
});


self.addEventListener('activate', function (e) {
  
});


self.addEventLisener('fetch', function (e) {
    e.respondWith(caches.match(e.request)
        .then(function (response) {
            if (response) {
                return response;
            }
         
            return fetchAndCache(e.request);
        })
    );
});