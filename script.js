const workTime = 25;
let breakTime = 5;
const seconds = "00";

const start = document.getElementById("start");
const stop = document.getElementById("stop");
const reset = document.getElementById("reset");

const wm = document.getElementById("wm-timer");
const ws = document.getElementById("ws-timer");

const bm = document.getElementById("bm-timer");
const bs = document.getElementById("bs-timer");

wm.innerText = workTime;
ws.innerText = seconds;
bm.innerText = breakTime;
bs.innerText = seconds;

document.title = `(${workTime}:${seconds}) Pomodoro`


let startTimer;

start.addEventListener("click", function () {
  if (startTimer === undefined) {
    startTimer = setInterval(timer, 1000);
  } else {
    alert("O tempo já iniciou!");
  }
});

stop.addEventListener("click", function () {
  clearInterval(startTimer);
  startTimer = undefined;
});

reset.addEventListener("click", function () {
  if (wm.innerText != 0 || ws.innerText != 0) {
    wm.innerText = workTime;
    ws.innerText = seconds;
  } else if (bm.innerText != 0 || bs.innerText != 0) {
    bm.innerText = breakTime;
    bs.innerText = seconds;
  }
  startTimer = undefined;
});

let count = 0;

function timer() {
  if (ws.innerText != 0) {
    document.title = `(${wm.innerText}:${ws.innerText}) Pomodoro`
    ws.innerText--;
  } else if (wm.innerText != 0 && ws.innerText == 0) {
    ws.innerText = 59;
    wm.innerText--;
  }

  if (wm.innerText == 0 && ws.innerText == 0) {
    if (bs.innerText != 0) {
      bs.innerText--;
      if (count == 2) {
        breakTime = 10; // sum 5 minutes in last break
      }
    } else if (bm.innerText != 0 && bs.innerText == 0) {
      bs.innerText = 59;
      bm.innerText--;
      document.title = `(${bm.innerText}:${bs.innerText}) Pomodoro`

    } else {
      wm.innerText = workTime;
      ws.innerText = seconds;
    }
  }

  if (
    wm.innerText == 0 &&
    ws.innerText == 0 &&
    bm.innerText == 0 &&
    bs.innerText == 0
  ) {
    count++;
    wm.innerText = workTime;
    ws.innerText = seconds;
    bm.innerText = breakTime;
    bs.innerText = seconds;
  }

  switch (count) {
    case 1:
      document.querySelector("[prog1]").style.visibility = "visible";
      document.querySelector("[prog2]").style.visibility = "visible";
      break;
    case 2:
      document.querySelector("[prog3]").style.visibility = "visible";
      document.querySelector("[prog4]").style.visibility = "visible";
      break;
    case 3:
      document.querySelector("[prog5]").style.visibility = "visible";
      document.querySelector("[prog6]").style.visibility = "visible";
      break;
    case 4:
      document.querySelector("[prog7]").style.visibility = "visible";
      document.querySelector("[prog8]").style.visibility = "visible";
      count = 0;
      clearInterval(startTimer);
      break;
  }
}
