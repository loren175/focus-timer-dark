export default function () {
  const forest = new Audio("./assets/forest.wav")
  const fire = new Audio("./assets/fire.wav")
  const coffee = new Audio("./assets/coffee.wav")
  const rain = new Audio("./assets/rain.wav")

  forest.loop = true
  fire.loop = true
  coffee.loop = true
  rain.loop = true

  function pressForest() {
    forest.play()
  }
  function pressFire() {
    fire.play()
  }
  function pressCoffee() {
    coffee.play()
  }
  function pressRain() {
    rain.play()
  }

  function stopForest() {
    forest.pause()
  }
  function stopFire() {
    fire.pause()
  }
  function stopCoffee() {
    coffee.pause()
  }
  function stopRain() {
    rain.pause()
  }

  return {
    pressForest,
    pressFire,
    pressCoffee,
    pressRain,
    stopForest,
    stopFire,
    stopCoffee,
    stopRain
  }
}
