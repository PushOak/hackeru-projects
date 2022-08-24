//Constructor function
function Timer(initialTime) {
    let timerElement;

    this.initialTime = initialTime;

    this.deleteTimer = function () {
        console.log('you want to delete something', timerElement);
        timerElement.remove();
    };

    this.createTimer = function () {
        const timersContainer = document.querySelector('#timers-container');

        timerElement = document.createElement('div');

        //Start button
        const startButton = document.createElement('button');
        startButton.innerText = 'Start';

        // Delete Button
        const deleteButton = document.createElement('button');
        deleteButton.innerText = 'Delete';
        deleteButton.addEventListener('click', this.deleteTimer);

        // add pause button - homework

        timerElement.innerText = this.initialTime;
        timerElement.appendChild(startButton);
        timerElement.appendChild(deleteButton);

        timersContainer.appendChild(timerElement);
    };
}

export default Timer;
