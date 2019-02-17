/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "fbc7108e9923da9095c616738c357258"
  },
  {
    "url": "assets/css/0.styles.0ff18cbf.css",
    "revision": "a59ff7cfd558866709448371f2f18b44"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.d0efa1fd.js",
    "revision": "053b7e08fe41bf46be0d20cd22a68f17"
  },
  {
    "url": "assets/js/11.d3017caf.js",
    "revision": "a5b13f92d1145ad037fc4670c5aaedab"
  },
  {
    "url": "assets/js/2.4e395efe.js",
    "revision": "ac3c07dd1687b332f8d66d63c115fd6c"
  },
  {
    "url": "assets/js/3.c79f67dd.js",
    "revision": "dc1a34bd9291158e3e096a33e8d960b0"
  },
  {
    "url": "assets/js/4.24509fb1.js",
    "revision": "34d2ff674ddc721fab9dd0ba3dce5e5b"
  },
  {
    "url": "assets/js/5.501c89d7.js",
    "revision": "b3beb866e56c71c1f6b651e5d80dbc8c"
  },
  {
    "url": "assets/js/6.fce787f1.js",
    "revision": "719bdb2f2c244b4442581c0f528cf165"
  },
  {
    "url": "assets/js/7.83f41fd4.js",
    "revision": "2a09ae04d5d28031af01908c51f92176"
  },
  {
    "url": "assets/js/8.11daea5b.js",
    "revision": "07efb0ceb73f8cf8a6e4b288886a92be"
  },
  {
    "url": "assets/js/9.d6b1b01a.js",
    "revision": "d3523ccd8476ed45864a15d74dd19d0d"
  },
  {
    "url": "assets/js/app.e881f8a6.js",
    "revision": "82b4d81baa919cba2ec5ec8e16412068"
  },
  {
    "url": "guide/get-device-id.html",
    "revision": "18d3abb6b38dfe34a66294b097e4ec38"
  },
  {
    "url": "guide/install.html",
    "revision": "1b4138513f67a3a5abd73beab64e5f11"
  },
  {
    "url": "guide/quick-start.html",
    "revision": "9c211af9d53c010d2f084ba63808be97"
  },
  {
    "url": "index.html",
    "revision": "52a30df542e921883ef51f40fc2a2053"
  },
  {
    "url": "zh/guide/get-device-id.html",
    "revision": "2fcc5cd7e424ee47c763b6d9c6108e0d"
  },
  {
    "url": "zh/guide/install.html",
    "revision": "ff1a288bd1e44312282535596e969ca7"
  },
  {
    "url": "zh/guide/quick-start.html",
    "revision": "c9230cf5a16a70f73e7f3572fc6df879"
  },
  {
    "url": "zh/index.html",
    "revision": "f1415796c187a420bb387c452050912f"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
