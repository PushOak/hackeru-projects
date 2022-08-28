// timer.js
export default function Timer(initialTime) {
    let time = initialTime;
    let timerElement;

    function startTimer() {
        console.log('timer is running');
    }

    function deleteTimer() {
        console.log('delete timer function');
    }

    function createStartButton() {
        const startButton = document.createElement('button');
        startButton.innerText = 'Start';
        startButton.addEventListener('click', startTimer);

        timerElement.appendChild(startButton);
    }

    function createDeleteButton() {
        const deleteButton = document.createElement('button');
        deleteButton.innerText = 'Delete';
        deleteButton.addEventListener('click', deleteTimer)

        timerElement.appendChild(deleteButton);
    }

    this.createTimer = function () {
        console.log('create timer', time);

        timerElement = document.createElement('div');
        timerElement.innerText = time;

        createStartButton();
        createDeleteButton();

        document.querySelector('#timers-container').appendChild(timerElement);
    };
}

