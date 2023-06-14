// Stopwatch project by PIYUSH JADHAV

// variables to access & manipulate DOM using document object
var startBtn = document.getElementById('start');
var stopBtn = document.getElementById('stop');
var resetBtn = document.getElementById("reset");
var timeBtn = document.getElementById("time");

//adding event listeners 
startBtn.addEventListener('click', Start);
stopBtn.addEventListener("click", Stop);
resetBtn.addEventListener("click", Reset);

//to display the timer
var milliseconds=0, seconds=0, minutes=0, hours=0;

//to check if stopwatch is running or paused
var isStarted = false;

let time;
let ms, s , m , h;

//Start(): starts the stopwatch 
function Start() {

    //check if stopwatch is running. If already running then return, as no need to start the watch again.
    if(isStarted) {
        return;
    }

    isStarted = true;

    //setInterval() used execute Start() repeatedly with fixed interval
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

        //converting into string to display
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

        //displaying the timer
        timeBtn.innerHTML = h + " : " + m + " : " + s + " : " + ms;

    }, 5);
}

//Stop(): pauses the time
function Stop() {

    //check if stopwatch is running. If not running then return as we can't stop the watch which is not running
    if(!isStarted) {
        return;
    }

    //stop execution of Start()
    clearInterval(time);

    //changing text of Start button
    startBtn.innerHTML = "RESUME";

    //watch stopped
    isStarted = false;
}

//Reset(): resets the timer
function Reset() {
    isStarted = false;
    milliseconds=0;
    seconds=0;
    minutes=0;
    hours=0;
    //resets to default state
    timeBtn.innerHTML = "00 : 00 : 00 : 000";
    //stops execution of Start()
    clearInterval(time);
    startBtn.innerHTML = "START";
}
