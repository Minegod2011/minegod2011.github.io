var timer = document.getElementById("timer");
var totalTime = 90 * 60; // 1 hour 15 minutes in seconds
var startTime = Date.now();

function updateTimer() {
  var currentTime = Date.now() - startTime;
  var remainingTime = totalTime - currentTime;

  timer.innerHTML = remainingTime / 60 + "m " + remainingTime % 60 + "s";
}

setInterval(updateTimer, 1000); // Update the timer every second
