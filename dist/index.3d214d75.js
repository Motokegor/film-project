// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"kWjbx":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "0a8ecb283d214d75";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets, assetsToDispose, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets); // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                } // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
             // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle, id) {
    // Execute the module.
    bundle(id); // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            }); // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"bB7Pu":[function(require,module,exports) {
var _scriptPicture = require("./scriptPicture");
const ratings = document.querySelectorAll(".rating");
if (ratings.length > 0) initRatings();
//основная функция
function initRatings() {
    let ratingActive, ratingValue;
    //"Бегаем" по всем рейтингам на странице
    for(let index = 0; index < ratings.length; index++){
        const rating = ratings[index];
        initRating(rating);
    }
    //инициациализируем конкретный рейтинг
    function initRating(rating) {
        initRatingVars(rating);
        setRatingActiveWidth();
        if (rating.classList.contains("rating_set")) setRating(rating);
    }
    //инициализация переменных
    function initRatingVars(rating) {
        ratingActive = rating.querySelector(".rating__active");
        ratingValue = rating.querySelector(".rating__value");
    }
    //изменяем ширину активных звёзд
    function setRatingActiveWidth(index = ratingValue.innerHTML) {
        const ratingActiveWidth = index / 0.05;
        ratingActive.style.width = `${ratingActiveWidth}%`;
    }
    //возможность указать оценку
    function setRating(rating) {
        const ratingItems = rating.querySelectorAll(".rating__item");
        for(let index = 0; index < ratingItems.length; index++){
            const ratingItem = ratingItems[index];
            ratingItem.addEventListener("mouseenter", function(e) {
                //обновление переменных
                initRatingVars(rating);
                // обновление активных звёзд
                setRatingActiveWidth(ratingItem.value);
            });
            ratingItem.addEventListener("mouseleave", function(e) {
                //обновление активных звёзд
                setRatingActiveWidth();
            });
            ratingItem.addEventListener("click", function(e) {
                //обновление переменных
                initRatingVars(rating);
                if (rating.dataset.ajax) // "отправить" на сервер
                setRatingValue(ratingItem.value, rating);
                else {
                    // отобразить указанную оценку
                    ratingValue.innerHTML = index + 1;
                    setRatingActiveWidth();
                }
            });
        }
    }
// async function setRatingValue(value, rating) {
//   if (!rating.classList.contains("rating_sending")) {
//     rating.classList.add("rating_sending");
//     //отправка данных(value) на сервер
//     let response = await fetch("rating.json", {
//       method: "GET",
//       // body: JSON.stringify({
//       //   userRating: value,
//       // }),
//       // headers: {
//       //   "content-type": "application/json",
//       // },
//     });
//     if (response.ok) {
//       const result = await response.json();
//       //получаем новый рейтинг
//       const newRating = result.newRating;
//       //вывод нового среднего результата
//       ratingValue.innerHTML = newRating;
//       //обновление активных звёзд
//       setRatingActiveWidth();
//       rating.classList.remove("rating_sending");
//     } else {
//       alert("Ошибка");
//       rating.classList.remove("rating_sending");
//     }
//   }
// }
}
window.addEventListener("DOMContentLoaded", function() {
    const video = document.querySelector(".video");
    video.addEventListener("click", function() {
        if (video.classList.contains("ready")) return;
        video.classList.add("ready");
        const src = video.dataset.src;
        video.insertAdjacentHTML("afterbegin", '<iframe src="https://www.youtube.com/embed/6DR1SqPYWCo?autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>');
    });
});
const btn = document.querySelector(".form__btn");
const modal = document.querySelector(".wrapper-modal");
const btnCloseModal = document.querySelector(".btn_close-modal");
const btnYes = document.querySelector(".btn_da");
const WrapperContent = document.querySelector(".wrapper-content");
function openModal() {
    if (modal.classList.contains("none")) modal.classList.remove("none");
}
btn.addEventListener("click", openModal);
function closeModal() {
    modal.classList.add("none");
}
modal.addEventListener("click", closeModal);
function sendForm() {
    WrapperContent.innerHTML = `<h1 class = 'title_up'> Спасибо за отзыв! </h1> `;
}
modal.addEventListener("click", sendForm);
const trigger = document.querySelector(".trigger");
const nav = document.querySelector(".full-screen");
const backdrop = document.querySelector(".backdrop");
const h2 = document.querySelector("h2");
const video = document.querySelector(".video");
const content = document.querySelector(".content");
const body = document.querySelector("body");
const cross = document.querySelector(".cross");
const contentCross = document.querySelector(".content_cross");
trigger.addEventListener("click", openNav);
cross.addEventListener("click", closeNav);
function openNav() {
    h2.style.zIndex = -1;
    video.style.zIndex = -1;
    trigger.style.zIndex = -1;
    content.style.zIndex = -1;
    cross.style.display = "block";
    body.style.overflow = "hidden";
    nav.classList.add("open");
}
function closeNav() {
    h2.style.zIndex = 1;
    video.style.zIndex = 1;
    trigger.style.zIndex = 1;
    content.style.zIndex = 1;
    cross.style.display = "none";
    body.style.overflow = "visible";
    nav.classList.remove("open");
}
////////////////////////////////////////////////
const firstGroup = document.querySelector(".first_group_movies");
const secondGroup = document.querySelector(".second_group_movies");
const thirdGroup = document.querySelector(".third_group_movies");
const fourthGroup = document.querySelector(".fourth_group_movies");
const fifthGroup = document.querySelector(".fifth_group_movies");
const sixthGroup = document.querySelector(".sixth_group_movies");
const sevenGroup = document.querySelector(".seven_group_movies");
const eighthGroup = document.querySelector(".eighth_group_movies");
const ninthGroup = document.querySelector(".ninth_group_movies");
const tenGroup = document.querySelector(".ten_group_movies");
const eleventhGroup = document.querySelector(".eleventh_group_movies");
const twelfthGroup = document.querySelector(".Twelfth_group_movies");
const thriftyGroup = document.querySelector(".Thrifty_group_movies");
//
function createUser({ ticket , text , btn , id , img  }) {
    const div = document.createElement("div");
    div.classList.add("movie");
    div.id = id;
    const template = `
  <div class="poster-movie">
  <img src="${img}" alt="" class="poster"/>
</div>
<div class="ticket-container">
    <div class="ticket-content">
      <div class="movie_information">
        <h4 class="ticket-title">${ticket}</h4>
        <p class="ticket-slogan"> ${text}</p>
      </div>
      <button class="ticket-buy">${btn}</button>
    </div>
  </div>
`;
    div.innerHTML = template;
    firstGroup.append(div);
}
function createlistUser(arr) {
    firstGroup.innerHTML = "";
    arr.forEach((item)=>{
        createUser(item);
    });
}
async function getUsers() {
    const responce = await fetch("http://localhost:3003/first_group_movies");
    const data = await responce.json();
    const newData = data.map((item, index)=>{
        item.img = (0, _scriptPicture.arrImg)[index];
        return item;
    });
    createlistUser(newData);
}
getUsers();

},{"./scriptPicture":"hIChA"}],"hIChA":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "arrImg", ()=>arrImg);
var _img1Jpg = require("../film project/images/img_1.jpg");
var _img1JpgDefault = parcelHelpers.interopDefault(_img1Jpg);
var _img2Jpg = require("../film project/images/img_2.jpg");
var _img2JpgDefault = parcelHelpers.interopDefault(_img2Jpg);
var _img3Jpg = require("../film project/images/img_3.jpg");
var _img3JpgDefault = parcelHelpers.interopDefault(_img3Jpg);
var _img4Jpg = require("../film project/images/img_4.jpg");
var _img4JpgDefault = parcelHelpers.interopDefault(_img4Jpg);
var _img5Jpg = require("../film project/images/img_5.jpg");
var _img5JpgDefault = parcelHelpers.interopDefault(_img5Jpg);
var _img6Jpg = require("../film project/images/img_6.jpg");
var _img6JpgDefault = parcelHelpers.interopDefault(_img6Jpg);
var _img7Jpg = require("../film project/images/img_7.jpg");
var _img7JpgDefault = parcelHelpers.interopDefault(_img7Jpg);
var _img8Png = require("../film project/images/img_8.png");
var _img8PngDefault = parcelHelpers.interopDefault(_img8Png);
var _img9Png = require("../film project/images/img_9.png");
var _img9PngDefault = parcelHelpers.interopDefault(_img9Png);
var _img11Png = require("../film project/images/img_11.png");
var _img11PngDefault = parcelHelpers.interopDefault(_img11Png);
var _img12Png = require("../film project/images/img_12.png");
var _img12PngDefault = parcelHelpers.interopDefault(_img12Png);
var _img13Jpg = require("../film project/images/img_13.jpg");
var _img13JpgDefault = parcelHelpers.interopDefault(_img13Jpg);
var _img14Png = require("../film project/images/img_14.png");
var _img14PngDefault = parcelHelpers.interopDefault(_img14Png);
var _img16Jpg = require("../film project/images/img_16.jpg");
var _img16JpgDefault = parcelHelpers.interopDefault(_img16Jpg);
var _img17Jpg = require("../film project/images/img_17.jpg");
var _img17JpgDefault = parcelHelpers.interopDefault(_img17Jpg);
var _img18Jpg = require("../film project/images/img_18.jpg");
var _img18JpgDefault = parcelHelpers.interopDefault(_img18Jpg);
var _img19Jpg = require("../film project/images/img_19.jpg");
var _img19JpgDefault = parcelHelpers.interopDefault(_img19Jpg);
var _img21Jpg = require("../film project/images/img_21.jpg");
var _img21JpgDefault = parcelHelpers.interopDefault(_img21Jpg);
var _img22Jpg = require("../film project/images/img_22.jpg");
var _img22JpgDefault = parcelHelpers.interopDefault(_img22Jpg);
var _img23Png = require("../film project/images/img_23.png");
var _img23PngDefault = parcelHelpers.interopDefault(_img23Png);
var _img24Jpg = require("../film project/images/img_24.jpg");
var _img24JpgDefault = parcelHelpers.interopDefault(_img24Jpg);
const arrImg = [
    (0, _img1JpgDefault.default),
    (0, _img2JpgDefault.default),
    (0, _img3JpgDefault.default),
    (0, _img4JpgDefault.default),
    (0, _img5JpgDefault.default),
    (0, _img6JpgDefault.default),
    (0, _img7JpgDefault.default),
    (0, _img8PngDefault.default),
    (0, _img9PngDefault.default),
    (0, _img5JpgDefault.default),
    (0, _img11PngDefault.default),
    (0, _img12PngDefault.default),
    (0, _img13JpgDefault.default),
    (0, _img14PngDefault.default),
    (0, _img5JpgDefault.default),
    (0, _img16JpgDefault.default),
    (0, _img17JpgDefault.default),
    (0, _img18JpgDefault.default),
    (0, _img19JpgDefault.default),
    (0, _img5JpgDefault.default),
    (0, _img21JpgDefault.default),
    (0, _img22JpgDefault.default),
    (0, _img23PngDefault.default),
    (0, _img24JpgDefault.default),
    (0, _img5JpgDefault.default),
    (0, _img21JpgDefault.default),
    (0, _img22JpgDefault.default),
    (0, _img23PngDefault.default),
    (0, _img24JpgDefault.default),
    (0, _img5JpgDefault.default),
    (0, _img16JpgDefault.default),
    (0, _img17JpgDefault.default),
    (0, _img18JpgDefault.default),
    (0, _img19JpgDefault.default),
    (0, _img5JpgDefault.default)
];

},{"../film project/images/img_1.jpg":"juKDN","../film project/images/img_2.jpg":"6cvMv","../film project/images/img_3.jpg":"cCtkQ","../film project/images/img_4.jpg":"cJFJB","../film project/images/img_5.jpg":"eHsOQ","../film project/images/img_6.jpg":"c0dfZ","../film project/images/img_7.jpg":"3z30n","../film project/images/img_8.png":"irw1S","../film project/images/img_9.png":"jlTBq","../film project/images/img_11.png":"lg5s0","../film project/images/img_12.png":"9yP59","../film project/images/img_13.jpg":"h9uBK","../film project/images/img_14.png":"eUsbm","../film project/images/img_16.jpg":"d66Tb","../film project/images/img_17.jpg":"iHsvE","../film project/images/img_18.jpg":"ksj1j","../film project/images/img_19.jpg":"ft9G3","../film project/images/img_21.jpg":"cQOkk","../film project/images/img_22.jpg":"6iKap","../film project/images/img_23.png":"hZfmY","../film project/images/img_24.jpg":"8he0c","@parcel/transformer-js/src/esmodule-helpers.js":"7azdr"}],"juKDN":[function(require,module,exports) {
module.exports = require("9cd34b8f962c8e4").getBundleURL("UckoE") + "img_1.f8a682c5.jpg" + "?" + Date.now();

},{"9cd34b8f962c8e4":"2bzSg"}],"2bzSg":[function(require,module,exports) {
"use strict";
var bundleURL = {};
function getBundleURLCached(id) {
    var value = bundleURL[id];
    if (!value) {
        value = getBundleURL();
        bundleURL[id] = value;
    }
    return value;
}
function getBundleURL() {
    try {
        throw new Error();
    } catch (err) {
        var matches = ("" + err.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);
        if (matches) // The first two stack frames will be this function and getBundleURLCached.
        // Use the 3rd one, which will be a runtime in the original bundle.
        return getBaseURL(matches[2]);
    }
    return "/";
}
function getBaseURL(url) {
    return ("" + url).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/, "$1") + "/";
} // TODO: Replace uses with `new URL(url).origin` when ie11 is no longer supported.
function getOrigin(url) {
    var matches = ("" + url).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^/]+/);
    if (!matches) throw new Error("Origin not found");
    return matches[0];
}
exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
exports.getOrigin = getOrigin;

},{}],"6cvMv":[function(require,module,exports) {
module.exports = require("f281e0382c1b79c7").getBundleURL("UckoE") + "img_2.52fbe752.jpg" + "?" + Date.now();

},{"f281e0382c1b79c7":"2bzSg"}],"cCtkQ":[function(require,module,exports) {
module.exports = require("eb3ce839a8aa4e6d").getBundleURL("UckoE") + "img_3.b5b58940.jpg" + "?" + Date.now();

},{"eb3ce839a8aa4e6d":"2bzSg"}],"cJFJB":[function(require,module,exports) {
module.exports = require("69f846dd4b47956").getBundleURL("UckoE") + "img_4.c2a43fbe.jpg" + "?" + Date.now();

},{"69f846dd4b47956":"2bzSg"}],"eHsOQ":[function(require,module,exports) {
module.exports = require("cd327e365114bd19").getBundleURL("UckoE") + "img_5.8b951a4d.jpg" + "?" + Date.now();

},{"cd327e365114bd19":"2bzSg"}],"c0dfZ":[function(require,module,exports) {
module.exports = require("af22f230281bfb15").getBundleURL("UckoE") + "img_6.58ac459e.jpg" + "?" + Date.now();

},{"af22f230281bfb15":"2bzSg"}],"3z30n":[function(require,module,exports) {
module.exports = require("50ef037fedd0208a").getBundleURL("UckoE") + "img_7.bf9dfcbf.jpg" + "?" + Date.now();

},{"50ef037fedd0208a":"2bzSg"}],"irw1S":[function(require,module,exports) {
module.exports = require("c6ebccd3366b1dcc").getBundleURL("UckoE") + "img_8.e61c7c5f.png" + "?" + Date.now();

},{"c6ebccd3366b1dcc":"2bzSg"}],"jlTBq":[function(require,module,exports) {
module.exports = require("2875f2b225f3bb6e").getBundleURL("UckoE") + "img_9.d07949f4.png" + "?" + Date.now();

},{"2875f2b225f3bb6e":"2bzSg"}],"lg5s0":[function(require,module,exports) {
module.exports = require("ef51b9a4f8eec466").getBundleURL("UckoE") + "img_11.34f6d3a2.png" + "?" + Date.now();

},{"ef51b9a4f8eec466":"2bzSg"}],"9yP59":[function(require,module,exports) {
module.exports = require("66a4840ea10b1cdc").getBundleURL("UckoE") + "img_12.a7053a3a.png" + "?" + Date.now();

},{"66a4840ea10b1cdc":"2bzSg"}],"h9uBK":[function(require,module,exports) {
module.exports = require("950196a5e0e88ef").getBundleURL("UckoE") + "img_13.8a075b8b.jpg" + "?" + Date.now();

},{"950196a5e0e88ef":"2bzSg"}],"eUsbm":[function(require,module,exports) {
module.exports = require("a3db8903f3aab5").getBundleURL("UckoE") + "img_14.589b031f.png" + "?" + Date.now();

},{"a3db8903f3aab5":"2bzSg"}],"d66Tb":[function(require,module,exports) {
module.exports = require("9aa51565e6ba0fa8").getBundleURL("UckoE") + "img_16.0d59bde8.jpg" + "?" + Date.now();

},{"9aa51565e6ba0fa8":"2bzSg"}],"iHsvE":[function(require,module,exports) {
module.exports = require("9f0b031de99f4125").getBundleURL("UckoE") + "img_17.8ef60ffc.jpg" + "?" + Date.now();

},{"9f0b031de99f4125":"2bzSg"}],"ksj1j":[function(require,module,exports) {
module.exports = require("160f9bc8c4dae79d").getBundleURL("UckoE") + "img_18.1b0e5747.jpg" + "?" + Date.now();

},{"160f9bc8c4dae79d":"2bzSg"}],"ft9G3":[function(require,module,exports) {
module.exports = require("8328ef7170eb4f2").getBundleURL("UckoE") + "img_19.de0c5461.jpg" + "?" + Date.now();

},{"8328ef7170eb4f2":"2bzSg"}],"cQOkk":[function(require,module,exports) {
module.exports = require("4789121b2baee73d").getBundleURL("UckoE") + "img_21.b4c41899.jpg" + "?" + Date.now();

},{"4789121b2baee73d":"2bzSg"}],"6iKap":[function(require,module,exports) {
module.exports = require("31debcb53812939e").getBundleURL("UckoE") + "img_22.8861b53e.jpg" + "?" + Date.now();

},{"31debcb53812939e":"2bzSg"}],"hZfmY":[function(require,module,exports) {
module.exports = require("7d0cb457e4a0a3e0").getBundleURL("UckoE") + "img_23.468ae10b.png" + "?" + Date.now();

},{"7d0cb457e4a0a3e0":"2bzSg"}],"8he0c":[function(require,module,exports) {
module.exports = require("da7b7b1c45f5a9da").getBundleURL("UckoE") + "img_24.faf09dbc.jpg" + "?" + Date.now();

},{"da7b7b1c45f5a9da":"2bzSg"}],"7azdr":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}]},["kWjbx","bB7Pu"], "bB7Pu", "parcelRequirebbb8")

//# sourceMappingURL=index.3d214d75.js.map
