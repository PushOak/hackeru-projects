// timer.js
export default function Timer(initialTime) {
    let time = initialTime;
    let timerElement;
    let timeView;
    let intervalId;

    function displayTime() {
        time--;
        timeView.innerText = `${time}: ${initialTime}`;
        if (time == 0) {
            stopTimer();
            return;
        }
    }

    function startTimer() {
        console.log('timer is running');
        intervalId = setInterval(displayTime, 1000);
    }

    function stopTimer() {
        clearInterval(intervalId);
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

