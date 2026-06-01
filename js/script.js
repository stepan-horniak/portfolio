"usestrict"
function windowLoaded() {
  //===================================
  function actions(e) {
    const el = e.target
  }
  addEventListener("click", actions)

  //====================hero text print=========
  const heroText = document.querySelector(".info-hero__text")
  if (heroText) {
    const printText = heroText.textContent
    const heightText = heroText.offsetHeight
    heroText.style.height = `${heightText}px`
    heroText.textContent = ""

    for (let i = 0; i < printText.length; i++) {
      setTimeout(() => {
        heroText.textContent += printText[i]
      }, i * 25)
    }
  }

  //=================header background color =========

  function handleScroll(e) {
    const headerWrapper = document.querySelector(".header__wrapper")
    headerWrapper.style.backgroundColor = "#3f3d3d"

    window.removeEventListener("scroll", handleScroll)
  }

  window.addEventListener("scroll", handleScroll)

  //====================

   const TELEGRAM_TOKEN = "8473647684:AAHBh_JE0fYrfH_-8K0rn9VQErluwnwkroY"
   const CHAT_ID = "1134377929,"

   fetch(`https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendMessage`, {
     method: "POST",
     headers: { "Content-Type": "application/json" },
     body: JSON.stringify({
       chat_id: CHAT_ID,
       text: `Хтось відкрив сайт ${new Date().toLocaleString()}`,
     }),
   })
  //===========================================================
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("/sw.js")
  }
  let deferredPrompt
  const installBtn = document.getElementById("installBtn")

  window.addEventListener("beforeinstallprompt", (e) => {
    console.log("🔥 PWA READY")
    e.preventDefault()
    deferredPrompt = e
  })
  installBtn.addEventListener("click", async () => {
    console.log("CLICK", deferredPrompt)

    if (!deferredPrompt) {
      alert("PWA не готовий до встановлення")
      return
    }

    deferredPrompt.prompt()
  })
  installBtn.addEventListener("click", async () => {
    if (!deferredPrompt) return

    deferredPrompt.prompt()

    const { outcome } = await deferredPrompt.userChoice
    console.log("User choice:", outcome)

    deferredPrompt = null
    installBtn.style.display = "none"
  })
}
addEventListener("load", windowLoaded)
