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

  // window.addEventListener("scroll", (e) => {
  //   const headerWrapper = document.querySelector(".header__wrapper")
  //   headerWrapper.style.backgroundColor = "#3f3d3d"
  //   console.log(e.target)
  // })
  function handleScroll(e) {
    const headerWrapper = document.querySelector(".header__wrapper")
    headerWrapper.style.backgroundColor = "#3f3d3d"

    window.removeEventListener("scroll", handleScroll)
  }

  window.addEventListener("scroll", handleScroll)

  //====================

  const TELEGRAM_TOKEN = "8473647684:AAHBh_JE0fYrfH_-8K0rn9VQErluwnwkroY"
  const CHAT_ID = "YOUR_CHAT_ID"

  function sendTelegramMessage(message) {
    const url = `https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendMessage`
    fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: CHAT_ID,
        text: message,
      }),
    })
      .then((res) => res.json())
      .then((data) => console.log("Telegram response:", data))
      .catch((err) => console.error("Error sending message:", err))
  }

  // Викликаємо при завантаженні сторінки
  window.addEventListener("load", () => {
    const message = `Хтось зайшов на сайт!`
    sendTelegramMessage(message)
  })
  //===========================================================
}
addEventListener("load", windowLoaded)
