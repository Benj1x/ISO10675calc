self.addEventListener('install', event => {
    event.waitUntil(
        caches.open('IsoCalcCache').then(cache => {
            return cache.addAll([
                'https://benj1x.github.io/ISO10675calc/index.html',
                'https://benj1x.github.io/ISO10675calc/results.html',
                'https://benj1x.github.io/ISO10675calc/index.css',
                'https://benj1x.github.io/ISO10675calc/js/frontend.js',
                'https://benj1x.github.io/ISO10675calc/js/results.js',
                'https://benj1x.github.io/ISO10675calc/js/GradeB.js',
                'https://benj1x.github.io/ISO10675calc/js/GradeC.js',
                'https://benj1x.github.io/ISO10675calc/js/GradeD.js',
                'https://benj1x.github.io/ISO10675calc/imgs/logo.png',
                'https://benj1x.github.io/ISO10675calc/imgs/LinkedInLogo.png',
                'https://benj1x.github.io/ISO10675calc/imgs/githubLogo.png'
            ]);
        })
    );
});

// Activate event
self.addEventListener('activate', event => {
    const cacheWhitelist = ['IsoCalcCache'];
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cacheName => {
                    if (!cacheWhitelist.includes(cacheName)) {
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});

// Fetch event
self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request).then(response => {
            return response || fetch(event.request);
        })
    );
});

// Listen for messages from the client
self.addEventListener('message', event => {
    if (event.data.action === 'skipWaiting') {
        self.skipWaiting();
    }
});

// Check for updates and notify the client
self.addEventListener('message', event => {
    if (event.data.action === 'checkForUpdates') {
        fetch('/').then(response => {
            if (response.status === 200) {
                self.clients.matchAll().then(clients => {
                    clients.forEach(client => {
                        client.postMessage({ action: 'updateAvailable' });
                    });
                });
            }
        });
    }
});
