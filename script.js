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

const workMsg = document.getElementById("msg-work");
const breakMsg = document.getElementById("msg-break");

wm.innerText = workTime;
ws.innerText = seconds;
bm.innerText = breakTime;
bs.innerText = seconds;

let startTimer;

start.addEventListener("click", function () {
  if (startTimer == undefined) {
    startTimer = setInterval(timer, 1000);
  } else {
    alert("O tempo já iniciou!");
  }
});

stop.addEventListener("click", function () {
  clearInterval(startTimer);
  startTimer = null;
});

reset.addEventListener("click", function () {
  if (wm.innerText != 0 || ws.innerText != 0) {
    wm.innerText = workTime;
    ws.innerText = seconds;
  } else if (bm.innerText != 0 || bs.innerText != 0) {
    bm.innerText = breakTime;
    bs.innerText = seconds;
  }
});

let count = 0;

function timer() {
  if (ws.innerText != 0) {
    document.title = `(${wm.innerText}:${ws.innerText}) Pomodoro`;
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
      document.title = `(${bm.innerText}:${bs.innerText}) Pomodoro`;
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
      document.querySelector("[prog1]").style.backgroundColor = "#71d5e4";
      document.querySelector("[prog2]").style.backgroundColor = "#d9ced6";
      break;
    case 2:
      document.querySelector("[prog3]").style.backgroundColor = "#71d5e4";
      document.querySelector("[prog4]").style.backgroundColor = "#d9ced6";
      break;
    case 3:
      document.querySelector("[prog5]").style.backgroundColor = "#71d5e4";
      document.querySelector("[prog6]").style.backgroundColor = "#d9ced6";
      break;
    case 4:
      document.querySelector("[prog7]").style.backgroundColor = "#71d5e4";
      document.querySelector("[prog8]").style.backgroundColor = "#d9ced6";
      count = 0;
      clearInterval(startTimer);
      break;
  }
}

function createRandomPhrase() {
  const getRandomNumber = (min, max) =>
    Math.floor(Math.random() * (max - min) + min);

  switch (getRandomNumber(1, 5)) {
    case 1:
      workMsg.innerText = "Let's Code! :)";
      breakMsg.innerText = "Have a Break! =]";
      break;
    case 2:
      workMsg.innerText = "Let's Study ;)";
      breakMsg.innerText = "Rest a Little :D";
      break;
    case 3:
      workMsg.innerText = "Coding Time! =)";
      breakMsg.innerText = "Take a Relax! =P";
      break;
    case 4:
      workMsg.innerText = "Do Your Work! :)";
      breakMsg.innerText = "Take Your Break B)";
      break;
  }
}
createRandomPhrase()

