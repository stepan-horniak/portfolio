"usestrict"
function windowLoaded() {
  //===================================
  function actions(e) {
    const el = e.target
  }
  addEventListener("click", actions)

  const heroText = document.querySelector(".info-hero__text")
  const printText = heroText.textContent
  heroText.textContent = ""

  for (let i = 0; i < printText.length; i++) {
    setTimeout(() => {
      heroText.textContent += printText[i]
    }, i * 30)
  }
}
addEventListener("load", windowLoaded)
