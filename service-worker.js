var cacheTimestamp = '1489783800354';
var cacheName = 'andy-dev-shell-v' + cacheTimestamp;
var dataCacheName = 'andy-dev-data-v' + cacheTimestamp;
var filesToCache = [
 '/',
 '/about/index.html',
 '/resume/index.html',
 '/work/index.html',
 '/contact/index.html',
 '/manifest.json',
 '/static/css/app.1f427a887a4979c7a968fe87fdf6b9ca.css',
 '/static/js/app.3fa33988893b5147c8d2.js',
 '/static/js/manifest.2ec51811dbf3fa36e901.js',
 '/static/js/vendor.07737b8a393e6c89b3df.js',
];

self.addEventListener('install', function(e) {
	console.log('[Service Worker] Install');
	e.waitUntil(
		caches.open(cacheName).then(function(cache) {
			console.log('[Service Worker] Caching app shell');
			return cache.addAll(filesToCache);
		})
	);
});

self.addEventListener('activate', function(e) {
	console.log('[Service Worker] Activate');
	e.waitUntil(
		caches.keys().then(function(keyList) {
			return Promise.all(keyList.map(function(key) {
				if (key !== cacheName && key !== dataCacheName) {
					console.log('[Service Worker] Removing old cache', key);
					return caches.delete(key);
				}
			}));
		})
	);
	return self.clients.claim();
});

self.addEventListener('fetch', function(e) {
	console.log('[Service Worker] Fetch', e.request.url);
	var dataUrl = '/wp-json/wp/v2';
	if (e.request.url.indexOf(dataUrl) >- 1) {
		e.respondWith(
			caches.open(dataCacheName).then(function(cache) {
				return fetch(e.request).then(function(response) {
					cache.put(e.request.url, response.clone());
					return response;
				});
			})
		);
	} else {
		e.respondWith(
			caches.match(e.request).then(function(response) {
				return response || fetch(e.request);
			})
		);
	}
});
