// timer.js
export default function Timer(initialTime) {
    let time = initialTime;
    let timerElement;
    let timeView;
    let intervalId;
    let isTimerRunning = false;

    function displayTime() {
        time--;
        timeView.innerText = `${time}`;
        if (time == 0) {
            stopTimer();
            return;
        }
    }

    function startTimer() {
        if (isTimerRunning) {
            return;
        }
        console.log('timer is running');
        intervalId = setInterval(displayTime, 1000);
        isTimerRunning = true;
    }

    function stopTimer() {
        console.log('Timer is paused');
        clearInterval(intervalId);
        isTimerRunning = false;
    }

    function deleteTimer() {
        timerElement.remove();
    }

    function createButton(buttonText, eventFunction) {
        const button = document.createElement('button');
        button.innerText = buttonText;
        button.addEventListener('click', eventFunction);
        timerElement.appendChild(button);
    }

    function createTimerTimeView() {
        timeView = document.createElement('span');
        timerElement.appendChild(timeView);
    }

    this.createTimer = function () {

        timerElement = document.createElement('div');

        createTimerTimeView();
        timeView.innerText = time;
        createButton('Start', startTimer);
        createButton('Pause', stopTimer);
        createButton('Delete', deleteTimer);

        document.querySelector('#timers-container').appendChild(timerElement);
    };
}

