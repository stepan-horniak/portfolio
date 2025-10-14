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
  //===========================================================
}
addEventListener("load", windowLoaded)
