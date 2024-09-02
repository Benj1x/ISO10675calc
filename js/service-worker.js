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

self.addEventListener('fetch', (e) => {
    console.log(e.request.url);
    e.respondWith(
        caches.match(e.request).then((response) => response || fetch(e.request)),
    );
});