export const startTimer = () => {
  let countDownDate = new Date("Jan 5, 2022 15:37:25").getTime()
  interval = setInterval(() => {
    let now = new Date().getTime()
    let distance = countDownDate - now
    let days = Math.floor(distance / (1000 * 60 * 60 * 24))
    let hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    )
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
    let seconds = Math.floor((distance % (1000 * 60)) / 1000)
    if (distance < 0) {
      clearInterval()
    } else {
      if (days < 10) {
        setTimerDays(`0 + ${days}`)
      } else {
        setTimerDays(days)
      }
      if (hours < 10) {
        setTimerHours(`0${hours}`)
      } else {
        setTimerHours(hours)
      }
      if (minutes < 10) {
        setTimerMinutes(`0${minutes}`)
      } else {
        setTimerMinutes(minutes)
      }
      if (seconds < 10) {
        setTimerSeconds(`0${seconds}`)
      } else {
        setTimerSeconds(seconds)
      }
    }
  }, 1000)
}
