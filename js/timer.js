export function Timer({ secondsDisplay, minutesDisplay }) {
  let fixedTime = 25
  let timerTimeout
  let minutes = Number(minutesDisplay.textContent)
  let seconds = Number(secondsDisplay.textContent)

  function updateDisplay() {
    minutes = minutes === undefined ? 0 : minutes
    seconds = seconds == undefined ? 0 : seconds
    minutesDisplay.textContent = String(minutes).padStart(2, "0")
    secondsDisplay.textContent = String(seconds).padStart(2, "0")
  }
  
    function addTime() {
      fixedTime += 5
      minutesDisplay.innerHTML = String(fixedTime).padStart(2, "0")
    }
  
    function lessTime() {
      if (fixedTime == 0) {
        return
      }
  
      fixedTime -= 5
      minutesDisplay.innerHTML = String(fixedTime).padStart(2, "0")
    }
  
  function countdown() {
    timerTimeout = setTimeout(function () {
      let seconds = Number(secondsDisplay.textContent)
      let minutes = Number(minutesDisplay.textContent)

      secondsDisplay.textContent = String(seconds - 1).padStart(2, "0")

      let isFinished = minutes <= 0 && seconds <= 0

      if (isFinished) {
        reset()
        updateDisplay()
        return
      }

      if (seconds <= 0) {
        seconds = 60

        minutesDisplay.textContent = String(minutes - 1).padStart(2, "0")
      }

      secondsDisplay.textContent = String(seconds - 1).padStart(2, "0")

      countdown()
    }, 1000)
  }

  function reset() {
    updateDisplay(minutes, 0)
    clearTimeout(timerTimeout)
    fixedTime = 25
  }

  return {
    addTime,
    lessTime,
    countdown,
    reset,
  }
}
