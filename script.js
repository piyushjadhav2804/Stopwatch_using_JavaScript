// Stopwatch project by PIYUSH JADHAV

var startBtn = document.getElementById('start');
var stopBtn = document.getElementById('stop');
var resetBtn = document.getElementById("reset");
var timeBtn = document.getElementById("time");

startBtn.addEventListener('click', Start);
stopBtn.addEventListener("click", Stop);
resetBtn.addEventListener("click", Reset);

var milliseconds=0, seconds=0, minutes=0, hours=0;
var isStarted = false;
let time;
let ms, s , m , h;

function Start() {

    if(isStarted) {
        return;
    }

    isStarted = true;

    time = setInterval(function() {
        milliseconds += 5;
        
        if (milliseconds === 1000) {
          milliseconds = 0;
          seconds++;
        }
        if (seconds === 60) {
          seconds = 0;
          minutes++;
        }
        if (minutes === 60) {
          minutes = 0;
          hours++;
        }
        if (hours === 24) {
          Reset();
        }

        if(milliseconds < 10) {
            ms = "00" + milliseconds;
        } else if(milliseconds < 100) {
            ms = "0" + milliseconds;
        } else {
            ms = milliseconds
        }

        if(seconds < 10) {
            s = "0" + seconds;
        } else {
            s = seconds;
        }

        if(minutes < 10) {
            m = "0" + minutes;
        } else {
            m = minutes;
        }

        if(hours < 10) {
            h = "0" + hours;
        } else {
            h = hours;
        }

        timeBtn.innerHTML = h + " : " + m + " : " + s + " : " + ms;

    }, 5);
}

function Stop() {
    if(!isStarted) {
        return;
    }

    clearInterval(time);
    startBtn.innerHTML = "RESUME";
    isStarted = false;
}

function Reset() {
    isStarted = false;
    milliseconds=0;
    seconds=0;
    minutes=0;
    hours=0;
    timeBtn.innerHTML = "00 : 00 : 00 : 000";
    clearInterval(time);
    startBtn.innerHTML = "START";
}
