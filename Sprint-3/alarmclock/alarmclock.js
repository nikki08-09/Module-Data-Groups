let countdown;
function setAlarm() {
  clearInterval(countdown);
  let timeInput = document.getElementById("alarmSet").value;
  let timeRemaining = document.getElementById("timeRemaining");
  let time = parseInt(timeInput);

  if (isNaN(time) || time < 0) {
    timeRemaining.textContent = "Please enter a valid number of seconds.";
    return;
  }
  let minutes = Math.floor(time / 60);
  let seconds = time % 60;
  timeRemaining.textContent = `Time Remaining: ${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;

  countdown = setInterval(() => {
    time--;
    if (time < 0) {
      clearInterval(countdown);
      playAlarm();
      return;
    }
    minutes = Math.floor(time / 60);
    seconds = time % 60;
    timeRemaining.textContent = `Time Remaining: ${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
  }, 1000);
}
window.setAlarm = setAlarm;

// DO NOT EDIT BELOW HERE

var audio = new Audio("alarmsound.mp3");

function setup() {
  document.getElementById("set").addEventListener("click", () => {
    setAlarm();
  });

  document.getElementById("stop").addEventListener("click", () => {
    pauseAlarm();
  });
}

function playAlarm() {
  audio.play();
}

function pauseAlarm() {
  audio.pause();
}

window.onload = setup;
