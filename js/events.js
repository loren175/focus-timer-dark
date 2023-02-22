import {
  btnLess,
  btnPlus,
  btnPlay,
  btnStop,
  btnForest,
  btnCoffee,
  btnCampFire,
  btnRainy,
  btnDark,
  btnLight,
  theme
} from "./elements.js"


export default function ({ timer, sound }) {
  btnPlus.addEventListener("click", function () {
    timer.addTime()
  })
  btnLess.addEventListener("click", function () {
    timer.lessTime()
  })
  btnPlay.addEventListener("click", function () {
    timer.countdown()
  })
  btnStop.addEventListener("click", function () {
    timer.reset()
    sound.stopRain()
    sound.stopForest()
    sound.stopCoffee()
    sound.stopFire()
  })

  btnForest.addEventListener("click", function () {
    sound.pressForest()
    sound.stopRain()
    sound.stopFire()
    sound.stopCoffee()
  })

  btnCoffee.addEventListener("click", function () {
    sound.pressCoffee()
    sound.stopRain()
    sound.stopFire()
    sound.stopForest()
  })

  btnCampFire.addEventListener("click", function () {
    sound.pressFire()
    sound.stopRain()
    sound.stopForest()
    sound.stopCoffee()
  })

  btnRainy.addEventListener("click", function () {
    sound.pressRain()
    sound.stopForest()
    sound.stopFire()
    sound.stopCoffee()
  })


  btnLight.addEventListener("click", function () {
    btnLight.classList.add("hide")
    btnDark.classList.remove("hide")
    theme.classList.remove("theme-light")
    theme.classList.add("theme-dark")
  })

  btnDark.addEventListener("click", function () {
    btnDark.classList.add("hide")
    btnLight.classList.remove("hide")
    theme.classList.add("theme-light")
    theme.classList.remove("theme-dark")
  })
}
