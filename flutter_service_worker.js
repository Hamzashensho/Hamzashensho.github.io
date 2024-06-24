'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"firebase-messaging-sw.js": "b5a46f39c48c701bc95c452a849c8431",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"assets/FontManifest.json": "ffb52d681d2e5b05332cdea4e87a65f3",
"assets/AssetManifest.bin": "c2b683a314d7a1fff2ecaac97f438c38",
"assets/assets/fonts/Changa-Bold.ttf": "759829f5318e2dbcddff9ddc7bd1143b",
"assets/assets/fonts/ProximaNova-Regular.otf": "410504d49238e955ba7dc23a7f963021",
"assets/assets/fonts/ProximaNova-Bold.otf": "62d4d7d369292a9bf23762465ec6d704",
"assets/assets/fonts/Changa-Regular.ttf": "da1e017d2a26efb3e6f77a1837f913eb",
"assets/assets/gifs/repeat.gif": "eefb479365bbd7ea9471a6c21fd7a3b1",
"assets/assets/gifs/dumbell.gif": "39126759ca40345d7c3458b502c8d8d5",
"assets/assets/gifs/diet-plan.gif": "c950b3c40b150205c23581fcde3d89f2",
"assets/assets/gifs/chess-exercise.gif": "41026de0e7bb0235cfa727720b681190",
"assets/assets/gifs/fitness-app-3.gif": "908e138c2af6ee32f79069957e709083",
"assets/assets/gifs/repeat-exercise-10726994-8617740.gif": "08671d110e5bfddac205fb8d46ea1a5a",
"assets/assets/gifs/threadmill-10653250-8598578.gif": "3e9ca0a7f6c9d7f6df7282daf4d6a294",
"assets/assets/gifs/online-fitness-9934920-8103398.gif": "697fc380906d15a6e7ae23c48957740b",
"assets/assets/gifs/man-doing-barbell-curl-5284758-4411828.gif": "df5add4fe602aee270ee9ee13ff1ff6c",
"assets/assets/gifs/young-man-doing-barbell-lunges-6876360-5625157.gif": "9ce58dbc971a5b411252068f1b5a41ae",
"assets/assets/gifs/dumbbell.gif": "32849d4850cb3758f96ca5cc9900d366",
"assets/assets/gifs/hand-dumbbell-10670313-8563233.gif": "a9748b49b43ccd41fc6a420b939e09bc",
"assets/assets/gifs/hoop-workout-9184984-7482185.gif": "71d5c66e6834d5d3666734c09be0a4a1",
"assets/assets/gifs/fitness-and-gym.gif": "035b0e58c1ef84602fd6a9f2f080444e",
"assets/assets/gifs/gym-app.gif": "86dbefb78aa42151c5aa6b0997cc56f0",
"assets/assets/gifs/fitness-app.gif": "f4856d897bca5b28b229378298d0b609",
"assets/assets/gifs/man-with-dumbbell-10653244-8598572.gif": "2c68a21ca7cc34c6230b02fab698bf7b",
"assets/assets/gifs/gym-app-9184976-7482177.gif": "774474e80208206460d24bcd8215bb73",
"assets/assets/gifs/apple-juice.gif": "1986d384864e176fd06ba6e8d44f13ed",
"assets/assets/images/dumbbell.jpg": "c7791ce0ddb18a845d93bd249b1a5ffe",
"assets/assets/images/img_1.png": "6674f12bf4a80c28593c5d20a5cbe332",
"assets/assets/images/login.png": "21c7a5b4a9c86170fb606836c93e4b3a",
"assets/assets/images/meal_image.jpg": "0ca65743659012d3509d133265c90068",
"assets/assets/images/image1.jpg": "5795d2e84533b0b7937391adef10009f",
"assets/assets/images/others-aboutus.png": "97a9a2aa92e3e05e2eebb9b7ab4887a3",
"assets/assets/images/image2.jpg": "92207f85af68c00e5c0702c98c6690d5",
"assets/assets/images/others-inventory.png": "5355e5c0b74d179c98c3a733634f4951",
"assets/assets/images/membership.png": "52a2baca5ba34b2b91f4b28e9a06fa4a",
"assets/assets/images/Rectangle.png": "356a22d937e70d0f9b5a7054fa69fb62",
"assets/assets/images/dumbbell.png": "3db389c3b498e071aa9716a9d8c7d7ea",
"assets/assets/images/feed2.png": "0f52911a11b1f157b66baf207a4c7861",
"assets/assets/images/person.svg": "318bf3f30abf8190112922979c6d191b",
"assets/assets/images/branch.jfif": "2c81838631ce226775e664aa3309b191",
"assets/assets/images/session.jpg": "63a9a24482ea81e9c5d18ec565992c70",
"assets/assets/images/others-supplements.png": "59b38a42ae0aac58987ba1d17c85c748",
"assets/assets/images/others-schedule.png": "2cc146191fdfc688ecfd050317815521",
"assets/assets/images/nutritionist.svg": "9364088ba3f2ddda2042e9a94d012dfa",
"assets/assets/images/ic_launcher.png": "e1391c94721f7672a0a93fd6e9460a3d",
"assets/assets/images/equipment1.jpg": "66952ae49b184d462d861b6cb1a2c660",
"assets/assets/images/feed4.jpg": "f75a6786ddd667d2223de122b7ebdde9",
"assets/assets/images/image6.jpg": "3e991b474f9c8a8adaa8e51a093d3348",
"assets/assets/images/coach.svg": "afaaee59847d0ff6b0b4f288380c3d33",
"assets/assets/images/app_logo.png": "24a87d04e836948251eeb39442702924",
"assets/assets/images/home.jpg": "ad36ff7ee7eb25a7c8ffd46e05612f1f",
"assets/assets/images/web-background.jpg": "f36cef464b8c132f8bfc080fe4df3563",
"assets/assets/images/OIP.jfif": "230edf62e3710ded1f8a411fad4dcd97",
"assets/assets/images/level.png": "105b58cd01c25913d25ab1f2ee5cebb1",
"assets/assets/images/others-announcements.png": "9b21fdc9dce1e80d7cb38ae2340c8f18",
"assets/assets/images/logo3.png": "5004eb5398f41fa65a54c980b99c1f59",
"assets/assets/images/others-questions.png": "b83b76a70f03ef499bfe75e1b4dcc06e",
"assets/assets/images/background.png": "4e77c84a791d3cc5ab8f8b78311006fe",
"assets/assets/images/feed3.png": "ff334cca63ed1563486bd278caba69e1",
"assets/assets/images/supp.jpg": "1cfcb22de6245436378f9e1ef5cf5727",
"assets/assets/images/image7.webp": "dbd900daf05f2909f032e53fe051fa3a",
"assets/assets/images/event.jpeg": "2293826df73a2221d556a6a0c641d166",
"assets/assets/images/others-create.png": "fefceac8fe424efbe1171e503e3d7a55",
"assets/assets/images/as.png": "b4656379b41c2338453bee7fc35dc063",
"assets/assets/images/Boxing.jfif": "bf22d21ec3b423a20a198afa22cf4b71",
"assets/assets/images/membership-others.jpg": "e074b8a5a79afca2f94adc2139ee6e27",
"assets/assets/images/feed1.png": "1482a9d0f5ad96d32aefe9ddd679f612",
"assets/assets/images/user_icon.png": "8e4dc286569e2fa86b37dff112686f5e",
"assets/assets/images/equipment2.jpg": "1e0edc6394428bb6dbb4f1d32ec609d9",
"assets/assets/images/membership.jfif": "697ed08acaf4cc3f7eda5015c77b4a00",
"assets/assets/images/treadmill.png": "edc4e3df0ea831aeb5c36736b357f1ae",
"assets/assets/images/img.png": "e87ad692d4830a390562e384b207507f",
"assets/assets/images/circle.png": "8dcd159f577f79f92df5f9aab9bb6ec9",
"assets/assets/images/image4.jpg": "e9540690d7d79a30ac5be24b6e0e3ac5",
"assets/assets/images/img_2.png": "6674f12bf4a80c28593c5d20a5cbe332",
"assets/assets/images/image3.jpg": "655c70991d345f48c37a9810a4ad3057",
"assets/assets/images/branch2.jpg": "853735de53e9e6c8591259567ec226cb",
"assets/assets/images/istockphoto-947948404-612x612.jpg": "8b1690e52b2ab120b06dbb0295289d5b",
"assets/assets/images/logo.png": "7ea6e659a9bc72109340f63efba94831",
"assets/assets/images/image5.jpg": "cf3e26131151bff481c5422ff8c1171d",
"assets/assets/images/others-invite.jpg": "912c5330321e642ce6225fb4de20bce6",
"assets/assets/images/others-plans.jpg": "3630c50a3e655ddf8e70462119f20702",
"assets/assets/images/logo-no.png": "f94157cff9ab5cd503385f89c358e6ad",
"assets/assets/images/blank.png": "2d815ccfb9dbf66adf5fed7887b10715",
"assets/assets/images/details.png": "be1e9f284a6fc851f0496b1aac8763ec",
"assets/assets/images/logo1.png": "7c868fec164db8588e0897f5ebc746f4",
"assets/assets/images/others-crowdmeter.png": "fd34a847c34f9060a4dc231145bbc5c6",
"assets/assets/images/logo2.png": "b7b7ce7c98b0d9dfe74ce14e5c59c6fe",
"assets/assets/images/ht.png": "a7e6be286a1d9b0b26a079ed28419cbd",
"assets/assets/images/others-branches.png": "3039c15e11335611ef5c7e74ceb14334",
"assets/assets/images/branch.png": "543f0378a692dbee438c02c60d57a3c9",
"assets/assets/images/invite.png": "d54e551c8bb0e8d33169975f8a787b91",
"assets/assets/dialog_flow_auth.json": "18a70b36ba00e96abce719044d8cdf38",
"assets/NOTICES": "090d40cf086e9028c44d8ae74d6b1f88",
"assets/fonts/MaterialIcons-Regular.otf": "e6ecbce9d76915dbe6959f2bda754c73",
"assets/AssetManifest.json": "411f6a8b6261720fd36108f5bed9a9ac",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin.json": "f4aa301030af883cc200e849aa6ec6d5",
"manifest.json": "343068babcec1d397cc28609661d76a2",
"icons/Icon-maskable-512.png": "06b96765047a5358bd0560a633009034",
"icons/Icon-512.png": "06b96765047a5358bd0560a633009034",
"icons/Icon-192.png": "56099f44ca310655b4abbf6e6d9f71ec",
"icons/Icon-maskable-192.png": "56099f44ca310655b4abbf6e6d9f71ec",
"main.dart.js": "3cf30fd1da4b7ac379e11d4714bdfd97",
"version.json": "c98bc2f0f87192f734c034ac76707a1a",
"favicon.png": "af6d5b939ab9a8c03d946b66b40edfc0",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"splash/img/light-3x.png": "5c0286f98e60edb4bb8166eeab03af3e",
"splash/img/dark-3x.png": "5c0286f98e60edb4bb8166eeab03af3e",
"splash/img/light-1x.png": "d24983d2d067dad33c1de4943dd86ae6",
"splash/img/light-2x.png": "864356a921e6d000b6db1e1f94dc9f07",
"splash/img/light-4x.png": "b612e771067eb395cb730ee1ee3e46ce",
"splash/img/dark-2x.png": "864356a921e6d000b6db1e1f94dc9f07",
"splash/img/dark-1x.png": "d24983d2d067dad33c1de4943dd86ae6",
"splash/img/dark-4x.png": "b612e771067eb395cb730ee1ee3e46ce",
"index.html": "9a0ca91504efef19192653923b005cf4",
"/": "9a0ca91504efef19192653923b005cf4"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
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
