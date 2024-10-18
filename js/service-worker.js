// Install event
self.addEventListener('install', event => {
    event.waitUntil(
        caches.open('IsoCalcCache').then(async cache => {
            const filesToCache = [
                '/index.html',
                '/results.html',
                '/js/frontend.js',
                '/js/results.js',
                '/js/GradeB.js',
                '/js/GradeC.js',
                '/js/GradeD.js',
                '/imgs/logo.png',
                '/imgs/LinkedInLogo.png',
                '/imgs/githubLogo.png'
            ];

            for (const file of filesToCache) {
                try {
                    await cache.add(file);
                    console.log(`Successfully cached ${file}`);
                } catch (error) {
                    console.error(`Failed to cache ${file}: `, error);
                }
            }
        }).catch(error => {
            console.error("Caching failed during install: ", error);
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

// Fetch event with fallback strategy for iOS
self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request).then(response => {
            // Try cache first, then fetch, and handle fetch errors
            return response || fetch(event.request).catch(error => {
                console.error('Fetch failed; returning offline fallback.', error);
                // Provide a fallback for requests
                if (event.request.mode === 'navigate') {
                    return caches.match('/index.html');
                }
            });
        })
    );
});

// Listen for messages from the client
self.addEventListener('message', event => {
    if (event.data.action === 'skipWaiting') {
        self.skipWaiting();
    } else if (event.data.action === 'checkForUpdates') {
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
