const stopWatchView = document.querySelector('#stop-watch-view');

let hundredth = 0;
let seconds = 0;
let minutes = 0;

function displayTime() {
    // seconds double digits
    let secondsString = seconds;
    if(seconds < 10) {
        secondsString = '0' + seconds;
    }

    // minutes double digits
    let minuteString = minutes
    if(minutes < 99) {
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

setInterval(handleTimeChange, 10);