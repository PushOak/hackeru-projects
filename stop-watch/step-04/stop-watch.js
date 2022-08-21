const stopWatchView = document.querySelector('#stop-watch-view');
const toggleButton = document.getElementById('toggle-stop-watch');

toggleButton.addEventListener('click', toggleStopWatch);

let hundredth = 0;
let seconds = 0;
let minutes = 0;

function displayTime() {
    // seconds double digits
    let secondsString = seconds;
    if (seconds < 10) {
        secondsString = '0' + seconds;
    }

    // minutes double digits
    let minuteString = minutes
    if (minutes < 99) {
        minuteString = '0' + minutes;
    }

    stopWatchView.innerHTML = `${minuteString}:${secondsString}:${hundredth}`;
}

function handleTimeChange() {
    hundredth++;
    if (hundredth > 99) {
        hundredth = 0;
        seconds++;
        if (seconds > 59) {
            seconds = 0;
            minutes++;
        }
    }
    displayTime();
};

let intervalId = null;

function toggleStopWatch() {
    if (intervalId == null) {
        // start the stopwatch
        intervalId = setInterval(handleTimeChange, 10);
        toggleButton.innerHTML = 'Stop';
    } else {
        // stop the stopwatch
        clearInterval(intervalId);
        intervalId = null;
        toggleButton.innerHTML = 'Start';
    }
}



