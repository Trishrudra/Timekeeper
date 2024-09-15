//Time

let myDateInterval = setInterval(time, 100);
function time() {
  const datetime = new Date();
  document.getElementById("time").innerHTML = datetime.toLocaleTimeString();
}

//declaration and stuff
const stopwatch_time = document.querySelector("#stopwatch time");
const stopwatchDiv = document.querySelector("#stopwatch");
const start = document.querySelector("#start_stopwatch");
const stop = document.querySelector("#stop_stopwatch");
const reset = document.querySelector("#reset_stopwatch");
const lap = document.querySelector("#lap_stopwatch");
const lap_para = document.querySelector("#laps");

//STOPWATCH
let seconds = 0;
function intervals() {
  start.textContent = "Start";
  stop.classList.remove("disabled");

  output = String(seconds).padStart(4, "0");
  d = output.slice(-2);
  c = String(Math.trunc(parseInt(output) / 100));

  //String formatting that helps with display seconds and minutes

  if (c >= 60) {
    b = Math.trunc(parseInt(c) / 60);
    c = c - 60 * b;

    b = String(b).padStart(2, "0");
    c = String(c).padStart(2, "0");

    output = b + ":" + c + "." + d;
  } else {
    c = c.padStart(2, "0");
    output = c + "." + d;
  }

  document.getElementById("stopwatch time").innerHTML = output;
  seconds++;
}

//Interval function, runs when start button is clicked
let stopwatchIntervalsVar = undefined;

function stopwatch() {
  stopwatchIntervalsVar = setInterval(intervals, 10);
  reset.classList.add("disabled");
  start.classList.add("disabled");
  lap.classList.remove("disabled");
}

//Stop stopwatch runs when
function stop_stopwatch() {
  clearInterval(stopwatchIntervalsVar);
  reset.classList.remove("disabled");
  stop.classList.add("disabled");
  start.classList.remove("disabled");
  lap.classList.add("disabled");
}

//Resets stopwatch for better functionality
function reset_stopwatch() {
  location.reload();
}

//The lap tracking function runs when lap is clicked

function lap_stopwatch() {
  let time = document.getElementById("stopwatch time").innerHTML;
  let other_laps = document.getElementById("laps").innerHTML;
  document.getElementById("laps").innerHTML =
    String(other_laps) +
    "&nbsp;&nbsp;&nbsp;||" +
    String(time) +
    "||&nbsp;&nbsp;&nbsp;";
}
