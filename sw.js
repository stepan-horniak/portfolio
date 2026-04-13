self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open("app-cache").then((cache) => {
      return cache.addAll([
        "/portfolio/",
        "/portfolio/index.html",
        "/portfolio/css/style.css",
        "/portfolio/js/script.js",
      ])
    }),
  )
})
