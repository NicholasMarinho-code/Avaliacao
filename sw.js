const CACHE_NAME = 'jojo-cache-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/style.css',
  '/app.js',
  '/manifest.json',
  'web-app-manifest-192x192.png',
  'web-app-manifest-512x512.png',
  'https://upload.wikimedia.org/wikipedia/commons/6/6e/JoJo%27s_Bizarre_Adventure_logo.png',
  'https://upload.wikimedia.org/wikipedia/it/thumb/7/72/Jonathan_Joestar.png/1200px-Jonathan_Joestar.png',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPRMJQaq4lD0Lc2K3yLfYi7_5ujw2rMlYYXg&s',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4oRjLr13_DlH2NUP4h9xzXxby5Km4lpsyPQ&s',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGdjjIfoDh7x0gJZfUELPDl75aK3zsAXAhqw&s',
  'https://i.pinimg.com/736x/8b/3f/9f/8b3f9fa8ce7c1d31fc6be39d04ea4194.jpg',
  'https://upload.wikimedia.org/wikipedia/it/thumb/4/4e/Jolyne_Kujo.jpg/1200px-Jolyne_Kujo.jpg',
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.filter(name => name !== CACHE_NAME)
          .map(name => caches.delete(name))
      );
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        return response || fetch(event.request);
      })
  );
});