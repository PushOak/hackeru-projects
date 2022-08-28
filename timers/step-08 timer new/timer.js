// timer.js
export default function Timer(initialTime) {
    let time = initialTime;

    this.createTimer = function () {
        console.log('create timer', time);

        const timerElement = document.createElement('div');
        timerElement.innerText = time;

        document.querySelector('#timers-container').appendChild(timerElement);
    };
};

