// Constructor function
function Timer(initialTime) {
    this.initialTime = initialTime;

    this.createTimer = function () {
        const timersContainer = document.querySelector('#timers-container');

        const timerElement = document.createElement('div')
        timerElement.innerText = 'new timer with created element';

}

export default Timer;