self.addEventListener('install', event => {
    event.waitUntil(
      caches.open('IsoCalcCache').then(cache => {
        return cache.addAll([
          '/',
          '/index.html',
          '/results.html',
          '/index.css',
          '/js/frontend.js',
          '/js/results.js',
          '/js/GradeB.js',
          '/js/GradeC.js',
          '/js/GradeD.js',
          '/imgs/logo.png',
          '/imgs/LinkedInLogo.png',
          '/imgs/githubLogo.png'
        ]);
      })
    );
  });
  
  self.addEventListener('fetch', event => {
    event.respondWith(
      caches.match(event.request).then(response => {
        return response || fetch(event.request);
      })
    );
  });