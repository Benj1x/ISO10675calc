self.addEventListener('install', event => {
    event.waitUntil(
        caches.open('IsoCalcCache').then(cache => {
            return Promise.all([
                cache.add('../index.html').catch(error => console.error('Failed to cache index.html:', error)),
                cache.add('../results.html').catch(error => console.error('Failed to cache results.html:', error)),
                cache.add('../index.css').catch(error => console.error('Failed to cache index.css:', error)),
                cache.add('../js/frontend.js').catch(error => console.error('Failed to cache frontend.js:', error)),
                cache.add('../js/results.js').catch(error => console.error('Failed to cache results.js:', error)),
                cache.add('../js/GradeB.js').catch(error => console.error('Failed to cache GradeB.js:', error)),
                cache.add('../js/GradeC.js').catch(error => console.error('Failed to cache GradeC.js:', error)),
                cache.add('../js/GradeD.js').catch(error => console.error('Failed to cache GradeD.js:', error)),
                cache.add('../imgs/logo.png').catch(error => console.error('Failed to cache logo.png:', error)),
                cache.add('../imgs/LinkedInLogo.png').catch(error => console.error('Failed to cache LinkedInLogo.png:', error)),
                cache.add('../imgs/githubLogo.png').catch(error => console.error('Failed to cache githubLogo.png:', error))
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
