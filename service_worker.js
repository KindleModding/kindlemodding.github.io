/**
 * This service worker exists to avoid FOUC/FOUT on subsequent page loads
 */


const addResourcesToCache = async (resources) => {
    const cache = await caches.open("v1");
    await cache.addAll(resources);
};

self.addEventListener("install", (event) => {
    event.waitUntil(
        addResourcesToCache([
            "/assets/fonts/libre-baskerville-latin-normal.woff2",
            "/assets/fonts/libre-baskerville-latin-italics.woff2",
            "/assets/fonts/libre-baskerville-latin-bold.woff2",
            "/assets/css/fonts.css"
        ]),
    );
});

const cacheHandler = async (request) => {
    const responseFromCache = await (await caches.open("v1")).match(request);
    if (responseFromCache) {
        return responseFromCache;
    }
    return fetch(request);
}

self.addEventListener("fetch", (event) => {
    event.respondWith(cacheHandler(event.request));
});