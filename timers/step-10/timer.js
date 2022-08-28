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
        if(isTimerRunning == true) {
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

    function createStartButton() {
        const startButton = document.createElement('button');
        startButton.innerText = 'Start';
        startButton.addEventListener('click', startTimer);

        timerElement.appendChild(startButton);
    }

    function createTimerTimeView() {
        timeView = document.createElement('span');
        timerElement.appendChild(timeView);
    }

    function createDeleteButton() {
        const deleteButton = document.createElement('button');
        deleteButton.innerText = 'Delete';
        deleteButton.addEventListener('click', deleteTimer)

        timerElement.appendChild(deleteButton);
    }

    function createPauseButton() {
        const pauseButton = document.createElement('button');
        pauseButton.innerText = 'Pause';
        pauseButton.addEventListener('click', stopTimer);
        timerElement.appendChild(pauseButton);
    }



    this.createTimer = function () {

        timerElement = document.createElement('div');

        createTimerTimeView();
        timeView.innerText = time;
        createStartButton();
        createPauseButton();
        createDeleteButton();

        document.querySelector('#timers-container').appendChild(timerElement);
    };
}

