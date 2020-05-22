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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "79611827352930e123afe874224e096c"
  },
  {
    "url": "assets/css/0.styles.a5f2c058.css",
    "revision": "4226263de76d391e29db50988c389f1c"
  },
  {
    "url": "assets/img/breakPoint.fa4839c0.png",
    "revision": "fa4839c07932f2182f2e43f8120eafa3"
  },
  {
    "url": "assets/img/guanwei-qrcode.960c0c89.jpg",
    "revision": "960c0c8989cf2524836e1a8075f18f4a"
  },
  {
    "url": "assets/img/installCertificate.ef5317a5.png",
    "revision": "ef5317a578152ecb6eef1601688ba506"
  },
  {
    "url": "assets/img/optimusApp.dd21a797.png",
    "revision": "dd21a7977b8efaa5fa7030a56c25f4b9"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/service-qrcode.a04fabf0.jpg",
    "revision": "a04fabf00b1e4dbc37ec7489daf0a6e6"
  },
  {
    "url": "assets/img/showIP.c37e5c43.png",
    "revision": "c37e5c43f6bf0585cb2a476ee1c7b70c"
  },
  {
    "url": "assets/img/step1.465ab55a.png",
    "revision": "465ab55ad6f24af8e2ec12604ac4390d"
  },
  {
    "url": "assets/img/step2.bda252b6.png",
    "revision": "bda252b6a6fbb96e3eac9df07aa040a7"
  },
  {
    "url": "assets/img/step3.6e679794.png",
    "revision": "6e679794ba753aa5a09afd082a47e510"
  },
  {
    "url": "assets/img/step4.2866e226.png",
    "revision": "2866e22689ba94ec26c0a76d53070981"
  },
  {
    "url": "assets/img/synchronizeAll.7b8ed257.png",
    "revision": "7b8ed25713811efe424acd7a51a8e647"
  },
  {
    "url": "assets/img/yuyan-qrcode.d61b1408.jpg",
    "revision": "d61b14084c93df3f529293c947a528bf"
  },
  {
    "url": "assets/js/10.476b6137.js",
    "revision": "f2618c90cde3e66bc8ffc161e223af81"
  },
  {
    "url": "assets/js/11.6143cfb2.js",
    "revision": "39e86fa62f479ceaf8e32f52849a9354"
  },
  {
    "url": "assets/js/12.070a4863.js",
    "revision": "e0c9cf2fc816caf8ea9ef87b8e17f794"
  },
  {
    "url": "assets/js/13.9c377e2d.js",
    "revision": "fcadc702d16ab2831a908362d1a6b00c"
  },
  {
    "url": "assets/js/14.21249571.js",
    "revision": "9a27388a46b9e50b73d9167121212848"
  },
  {
    "url": "assets/js/15.103ab9ce.js",
    "revision": "72edfb8e690968c6e60f116969a30c09"
  },
  {
    "url": "assets/js/16.35f7ecb7.js",
    "revision": "fe955e994b721ff37fe6276bfbb7e357"
  },
  {
    "url": "assets/js/17.1b9cdc88.js",
    "revision": "868d926dce23da264a0c9b50d65c0bb8"
  },
  {
    "url": "assets/js/18.1f46d1b3.js",
    "revision": "8df713490d4a851b393e3b4101ea370c"
  },
  {
    "url": "assets/js/19.521393fb.js",
    "revision": "28eb25a6403694ee564b9e65174b9543"
  },
  {
    "url": "assets/js/2.af35f747.js",
    "revision": "d39bf4f6818c9c803b2a1e1c6cfb4b92"
  },
  {
    "url": "assets/js/20.74fb61a0.js",
    "revision": "682eed716ec246d189543a891e47ac95"
  },
  {
    "url": "assets/js/21.075d4bfb.js",
    "revision": "0e300a92337a6253ea2161050097ab46"
  },
  {
    "url": "assets/js/22.d19ca00d.js",
    "revision": "dd3ff80a460ed35d1c8efbbc167f67d2"
  },
  {
    "url": "assets/js/23.df1091e8.js",
    "revision": "f8484c328aceb324abf3e0e81c1309e5"
  },
  {
    "url": "assets/js/24.89ea7701.js",
    "revision": "10390ec643c28c263aacb46ab434f4da"
  },
  {
    "url": "assets/js/25.585d43e5.js",
    "revision": "4f88c6c2b295f626f0daab604085e921"
  },
  {
    "url": "assets/js/26.7851fd8a.js",
    "revision": "f82a56ea0aa49c23b8dc02b14bd0d690"
  },
  {
    "url": "assets/js/27.3d5b1057.js",
    "revision": "4a0939484c909f17924953eb4b725db3"
  },
  {
    "url": "assets/js/28.5d00aa69.js",
    "revision": "bab6c7487cecee7ee6af776dfb67d15a"
  },
  {
    "url": "assets/js/29.14bde966.js",
    "revision": "13fc20ceac4862ee5ac28d1e74d84bfb"
  },
  {
    "url": "assets/js/3.63975b12.js",
    "revision": "cc947dcd8c94636b7c4cad3c589ab6f6"
  },
  {
    "url": "assets/js/30.005adbc8.js",
    "revision": "aea3df82601171e7a2b1f0ec6f9478d0"
  },
  {
    "url": "assets/js/31.3b19646b.js",
    "revision": "d5beafe1a483a107baff6874d033eccc"
  },
  {
    "url": "assets/js/32.2a523a02.js",
    "revision": "cfe2852777a3873e873055532577c5ef"
  },
  {
    "url": "assets/js/33.a62da792.js",
    "revision": "a48c04fdb04e9423c366eed42209f9a0"
  },
  {
    "url": "assets/js/4.f6ad61d6.js",
    "revision": "bd1e22f2deba0a9aab6111257d31f6e9"
  },
  {
    "url": "assets/js/5.91fe8318.js",
    "revision": "4afd4bdb03b6b6b06847be33ed304e8e"
  },
  {
    "url": "assets/js/6.36b971a8.js",
    "revision": "a7fa50c8f06976a985eff3e534a51983"
  },
  {
    "url": "assets/js/7.f5c41aec.js",
    "revision": "7c1f84f726cc1065d290df35437555e5"
  },
  {
    "url": "assets/js/8.9ec36b7a.js",
    "revision": "312c2ef42ef62d56598b0a665221f8c4"
  },
  {
    "url": "assets/js/9.184c847a.js",
    "revision": "4311d69a122a41ba9afa4a392a8594bc"
  },
  {
    "url": "assets/js/app.bbe4938c.js",
    "revision": "a345d0dba1d729ddbb83512a5b92a9b1"
  },
  {
    "url": "bit-wide.png",
    "revision": "9638a3f44bf471876effb80ea0659f73"
  },
  {
    "url": "en/index.html",
    "revision": "0270c3721ae164b41a4e57c4525313bc"
  },
  {
    "url": "favicon.png",
    "revision": "ff77a8d422570aaa362831229e8fc88e"
  },
  {
    "url": "guide/index.html",
    "revision": "ef95f7907aa71520ef4a7d0e765779ea"
  },
  {
    "url": "guide/newcomers.html",
    "revision": "7738d6dcea590ee85e30443eb8d8c388"
  },
  {
    "url": "guide/vuePress.html",
    "revision": "ea8ac657820110a2cc3a61c006d57799"
  },
  {
    "url": "icons/android-chrome-192x192.png",
    "revision": "f130a0b70e386170cf6f011c0ca8c4f4"
  },
  {
    "url": "icons/android-chrome-512x512.png",
    "revision": "0ff1bc4d14e5c9abcacba7c600d97814"
  },
  {
    "url": "icons/apple-touch-icon-120x120.png",
    "revision": "936d6e411cabd71f0e627011c3f18fe2"
  },
  {
    "url": "icons/apple-touch-icon-152x152.png",
    "revision": "1a034e64d80905128113e5272a5ab95e"
  },
  {
    "url": "icons/apple-touch-icon-180x180.png",
    "revision": "c43cd371a49ee4ca17ab3a60e72bdd51"
  },
  {
    "url": "icons/apple-touch-icon-60x60.png",
    "revision": "9a2b5c0f19de617685b7b5b42464e7db"
  },
  {
    "url": "icons/apple-touch-icon-76x76.png",
    "revision": "af28d69d59284dd202aa55e57227b11b"
  },
  {
    "url": "icons/apple-touch-icon.png",
    "revision": "66830ea6be8e7e94fb55df9f7b778f2e"
  },
  {
    "url": "icons/favicon-16x16.png",
    "revision": "2a39ec2cf0beaf4465938e01eb449d96"
  },
  {
    "url": "icons/favicon-32x32.png",
    "revision": "7549fa8c0faaf2f5edb00aa6b397f926"
  },
  {
    "url": "icons/msapplication-icon-144x144.png",
    "revision": "b89032a4a5a1879f30ba05a13947f26f"
  },
  {
    "url": "icons/mstile-150x150.png",
    "revision": "058a3335d15a3eb84e7ae3707ba09620"
  },
  {
    "url": "icons/safari-pinned-tab.svg",
    "revision": "f78c0251d6ddd56ee219a1830ded71b4"
  },
  {
    "url": "index.html",
    "revision": "d45d040ff665278f5ab48c8b2af4cf64"
  },
  {
    "url": "knowledge/bestCss.html",
    "revision": "10e8d546a76baa1936a8ce95849aedf6"
  },
  {
    "url": "knowledge/bestHtml.html",
    "revision": "5aa7ee38566c597f65f2756fce99d5a8"
  },
  {
    "url": "knowledge/bestJavaScript.html",
    "revision": "f9254507d2c9f741ddefb0a8a1510d9f"
  },
  {
    "url": "knowledge/bestRegexe.html",
    "revision": "a0cb1ae18c71b2a4c8a716396301d781"
  },
  {
    "url": "knowledge/bestVue.html",
    "revision": "46f4b617d171f2a7cd9bd3a7968a2b2b"
  },
  {
    "url": "knowledge/bugs.html",
    "revision": "8294f017c26d7058e3c32c73d5ca90f9"
  },
  {
    "url": "knowledge/optimusSDK.html",
    "revision": "970e5d303cf3a0634baad2573c929775"
  },
  {
    "url": "knowledge/utils.html",
    "revision": "037b79d6e9bbf7f70c0a9edc02cf9da5"
  },
  {
    "url": "standard/communicate.html",
    "revision": "986997a76ad08e1976496f52b609cc61"
  },
  {
    "url": "standard/convention.html",
    "revision": "4c94e3edd557bd215796c9d11c185c0a"
  },
  {
    "url": "standard/css.html",
    "revision": "737346f8ec98c4c5d65bad4be89b9c20"
  },
  {
    "url": "standard/git.html",
    "revision": "568030943661ea7e5c0ca3ef2f070c99"
  },
  {
    "url": "standard/html.html",
    "revision": "4cd3ae5fd048495fcaf367f700aec148"
  },
  {
    "url": "standard/testCase.html",
    "revision": "85e100acac0d859b21608b503b5672ef"
  },
  {
    "url": "standard/vue.html",
    "revision": "8677b22d9e3f7d29ec13044b3c14b563"
  },
  {
    "url": "standard/workFlow.html",
    "revision": "8f4230d4d0a8062a9f715096d50a86b7"
  },
  {
    "url": "tools/command.html",
    "revision": "f42458ee872307aa0f799c0aac65a323"
  },
  {
    "url": "tools/fiddler.html",
    "revision": "c1c121e1e026bf32b8daba7a969ff4ad"
  },
  {
    "url": "tools/vscode.html",
    "revision": "5602f6e5bba1e55efef51a5fe4b00fde"
  },
  {
    "url": "tools/webStorm.html",
    "revision": "b530dad9aa1d0604361b43d3664854c0"
  }
].concat(self.__precacheManifest || []);
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
