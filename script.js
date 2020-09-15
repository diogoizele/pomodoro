let timer = document.getElementById("timer");
let timerValue = 25;

function selectedMode() {
  const pomodoro = document.getElementById("pomodoro");
  const shortb = document.getElementById("shortBreak");
  const longb = document.getElementById("longBreak");

  if (pomodoro.checked) {
    timer.textContent = 25;
    timerValue = 25;
  } else if (shortb.checked) {
    timer.textContent = 5;
    timerValue = 5;
  } else {
    timer.textContent = 10;
    timerValue = 10;
  }
}

function showTimerValue() {
  const intervalo = setInterval(() => {
    if (timerValue >= 0) {
      timer.textContent = timerValue--;

    } else {
      clearInterval(intervalo);
    }

  }, 1000);
}

selectedMode();
