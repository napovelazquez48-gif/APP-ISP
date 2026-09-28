const CACHE_NAME = 'preceptoria-isp-v11';

// ---------- Notificaciones push (Firebase Cloud Messaging) ----------
// Tiene que vivir en este mismo service worker (no en uno aparte) para que
// funcione sobre el mismo scope que ya usa la PWA.
importScripts('https://www.gstatic.com/firebasejs/10.13.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.13.0/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyCJXbMkHj9BHtXI2IqHf6YkMx_2YipMXbc",
  authDomain: "app-isp-f601c.firebaseapp.com",
  projectId: "app-isp-f601c",
  storageBucket: "app-isp-f601c.firebasestorage.app",
  messagingSenderId: "1052109436240",
  appId: "1:1052109436240:web:f5e6a49100db6fb85d6855"
});
const messaging = firebase.messaging();

// Notificación recibida con la app cerrada o en segundo plano.
messaging.onBackgroundMessage((payload) => {
  const titulo = (payload.notification && payload.notification.title) || (payload.data && payload.data.titulo) || 'Instituto Superior Porteño';
  const cuerpo = (payload.notification && payload.notification.body) || (payload.data && payload.data.cuerpo) || '';
  self.registration.showNotification(titulo, {
    body: cuerpo,
    icon: './icon-192.png',
    badge: './icon-192.png',
    data: payload.data || {}
  });
});

self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  event.waitUntil(
    clients.matchAll({ type: 'window', includeUncontrolled: true }).then((clientList) => {
      for (const c of clientList) { if ('focus' in c) return c.focus(); }
      if (clients.openWindow) return clients.openWindow('./');
    })
  );
});
const LOCAL_ASSETS = [
  './',
  './index.html',
  './styles.css',
  './app.js',
  './manifest.json',
  './icon-192.png',
  './icon-512.png'
];
const CDN_ASSETS = [
  'https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js',
  'https://www.gstatic.com/firebasejs/10.13.0/firebase-firestore.js',
  'https://www.gstatic.com/firebasejs/10.13.0/firebase-auth.js',
  'https://accounts.google.com/gsi/client',
  'https://apis.google.com/js/api.js',
  'https://cdnjs.cloudflare.com/ajax/libs/xlsx/0.18.5/xlsx.full.min.js',
  'https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js',
  'https://www.gstatic.com/firebasejs/10.13.0/firebase-messaging.js',
  'https://www.gstatic.com/firebasejs/10.13.0/firebase-app-compat.js',
  'https://www.gstatic.com/firebasejs/10.13.0/firebase-messaging-compat.js'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(async (cache) => {
      await cache.addAll(LOCAL_ASSETS);
      await Promise.all(CDN_ASSETS.map((url) => cache.add(url).catch(() => {})));
    })
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

// Network-first para nuestros propios archivos (así siempre se ve la versión más nueva
// apenas hay internet); si falla la red, se usa lo guardado para que funcione offline.
self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);
  const isOwnAsset = url.origin === self.location.origin;

  if (isOwnAsset) {
    event.respondWith(
      fetch(event.request)
        .then((response) => {
          const copy = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(event.request, copy));
          return response;
        })
        .catch(() => caches.match(event.request))
    );
    return;
  }

  // CDN de Firebase: cache-first (no cambia seguido, y así funciona offline)
  event.respondWith(
    caches.match(event.request).then((cached) => {
      if (cached) return cached;
      return fetch(event.request).then((response) => {
        const copy = response.clone();
        caches.open(CACHE_NAME).then((cache) => cache.put(event.request, copy));
        return response;
      });
    })
  );
});

