'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"about.txt": "83e9d41847e9725f8e6e3d9263dbd197",
"android-chrome-192x192.png": "95286a0ff1e2b7342186f4acdbfd80c5",
"android-chrome-512x512.png": "bc4463cfef1bbcce1f62351ff04a2183",
"apple-touch-icon.png": "9a0e6cfcee6ed1a0af9bb4ef84d9a820",
"assets/AssetManifest.bin": "fb81068d540778613151e1c424653039",
"assets/AssetManifest.bin.json": "0efd1b9532a3ff6d1fc5d4a92ce04d5e",
"assets/AssetManifest.json": "0cd13df95d1163e748d9bd7ebac2a7c3",
"assets/assets/bloc.svg": "61c05bdac9cc880dd2d5da94ce89f2fc",
"assets/assets/covid.jpeg": "f70df5732b8acfb4befe3714d76ee465",
"assets/assets/covid.jpg": "b9d2f083b06a2b5cfd97c6ae221ec686",
"assets/assets/dart.svg": "77736b70355db3b992d712891749acd5",
"assets/assets/figma.svg": "14fb8d901c3ba51a1ef00450e797cb9a",
"assets/assets/firebase.svg": "7f1bf2795e067daf4ac3b42a2a140496",
"assets/assets/flutter.svg": "9a6e81be6ff5b09956f4f85fe1f0a89f",
"assets/assets/getx.svg": "c526f114122f6f73398e08e9562ddf55",
"assets/assets/git.svg": "395d8c6917b47ac4dcde3600673f6519",
"assets/assets/github.svg": "c23a95fcb4b1d25765107e4e73b06438",
"assets/assets/gmail.svg": "01fa57e5f675bf7020de0d9ad9d619f1",
"assets/assets/hive.svg": "3288f8bda756cf75a17a03d1593a8529",
"assets/assets/linkedin.svg": "8a211719155308491eda974f78de7762",
"assets/assets/my_pic_crop.PNG": "cf78b6caf7995efe2d7ac17567ceb607",
"assets/assets/my_pic_mobile.png": "5847e06e4f1ded09edaab31289b1290c",
"assets/assets/news.jpg": "35c832f53f13dd64a573343f2b7d7ede",
"assets/assets/node.svg": "15bd776709874b6bec0699c2c908da9d",
"assets/assets/nodejs.svg": "bf75f8511058ebb1b513d0141fd744de",
"assets/assets/node_js_authentication.jpg": "ad40b92a8a51e46cd9d2f4bb0e037dcf",
"assets/assets/notes_hive.jpg": "db49a390bc2bdf724445c6a7f10c1848",
"assets/assets/phone.svg": "7624747b93dc62725f6a37e692f74207",
"assets/assets/postman-icon.svg": "fbfb57a181ce251926d686d12e6cee5a",
"assets/assets/project.svg": "e2966ec0f6920af2df69d0b0e8347220",
"assets/assets/provider.svg": "e86c6f690bfaa74707d2e7d6497159e7",
"assets/assets/sqlite.svg": "266cdf99ee33451f17ded1414a10254f",
"assets/assets/testing.svg": "f936cb71602833e77f38d9bde50001a1",
"assets/assets/todo_hive.jpg": "8d3098c0f9878ff0f4d4e4960d3a70e4",
"assets/assets/weather.jpg": "e2ca0559d724861fd59715bf698309da",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "8c8499fbcffb84f95ccc27fee40c8170",
"assets/NOTICES": "819780f4bda7e2c5c952622b81a9200e",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "825e75415ebd366b740bb49659d7a5c6",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "4008601a7665102dfa765629812092de",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "3ca5dc7621921b901d513cc1ce23788c",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "86b36cedc72428a9577e5327aa30508a",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.js.symbols": "27361387bc24144b46a745f1afe92b50",
"canvaskit/canvaskit.wasm": "a37f2b0af4995714de856e21e882325c",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.js.symbols": "f7c5e5502d577306fb6d530b1864ff86",
"canvaskit/chromium/canvaskit.wasm": "c054c2c892172308ca5a0bd1d7a7754b",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "9fe690d47b904d72c7d020bd303adf16",
"canvaskit/skwasm.wasm": "1c93738510f202d9ff44d36a4760126b",
"favicon-16x16.png": "c2af9f560be4a774d52e6aabc6e7b4dc",
"favicon-32x32.png": "e24ad2c23954fca81825973e16fa3825",
"favicon.ico": "5af117e667bf175af3f9cccdaf085ff6",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"flutter_bootstrap.js": "160282aa0e195bedec77d2e47e4c1dac",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "784008adae163f9019515ce51e118239",
"/": "784008adae163f9019515ce51e118239",
"main.dart.js": "ee2b307973083378f17926f1a9fb94b1",
"manifest.json": "d8fe34f7ae4c072a77b924e01dac8a50",
"site.webmanifest": "053100cb84a50d2ae7f5492f7dd7f25e",
"version.json": "9b818ca9511483c901bed1545384376c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
