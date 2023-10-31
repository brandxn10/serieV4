const CACHE_NAME = 'my-cache';
const IMAGE_CACHE_NAME = 'image-cache';

const urlsToCache = [
  '/',
  'bootstrap.css',
  'style.css',
  'app.js',
  'index.html',
  'personajes.html',
  'descripcion.html'
];

const imageUrlsToCache = [
  '/apple-icon-57x57.png',
  '/icon/apple-icon-60x60.png',
  '/icon/apple-icon-72x72.png',
  '/icon/apple-icon-76x76.png',
  '/icon/apple-icon-114x114.png',
  '/icon/apple-icon-120x120.png',
  '/icon/apple-icon-144x144.png',
  '/icon/apple-icon-152x152.png',
  '/icon/apple-icon-180x180.png',
  '/icon/android-icon-192x192.png',
  '/icon/favicon-32x32.png',
  '/icon/favicon-96x96.png',
  '/icon/favicon-16x16.png',
  'img/eric.png',
  'img/ericHitler.png',
  'img/ericPolicia.png',
  'img/ericMago.png',
  'img/fondo.png',
  'img/ike.png',
  'img/ikeMayor.png',
  'img/ikeV2.png',
  'img/jimmy.png',
  'img/jimmyV2.png',
  'img/timmy.png',
  'img/kenny.png',
  'img/kennyFlecha.png',
  'img/kennyQuemado.png',
  'img/kennyRobot.png',
  'img/kyle.png',
  'img/kyleIke.png',
  'img/kyleLoco.png',
  'img/kyleMago.png',
  'img/kyleSonriendo.png',
  'img/randy.png',
  'img/randyV2.png',
  'img/randyV3.png',
  'img/stan.png',
  'img/stanDisfraz.png',
  'img/stanV2.png',
  'img/stanVillano.png',
  'img/toallin.png',
  'img/toallinFumando.png',
  'img/toallinMusculoso.png',
  'img/token.png',
  'img/tokenNick.png',
  'img/tokenWhite.png',
  'img/butters.png',
  'img/buttersMago.png',
  'img/buttersNovio.png',
  'img/buttersV2.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    Promise.all([
      caches.open(CACHE_NAME).then((cache) => {
        console.log('Cache abierto');
        return cache.addAll(urlsToCache);
      }),
      caches.open(IMAGE_CACHE_NAME).then((cache) => {
        console.log('Image Cache abierto');
        return cache.addAll(imageUrlsToCache);
      })
    ])
  );
});


self.addEventListener('fetch', (event) => {
  if (event.request.url.includes('/img/') || event.request.url.includes('/icon/')) {
    event.respondWith(
      caches.open(IMAGE_CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          return response || fetch(event.request);
        });
      })
    );
  } else {
    event.respondWith(
      caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          return response || fetch(event.request);
        });
      })
    );
  }
});