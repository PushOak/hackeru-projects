// Constructor function
function Timer(initialTime) {
    this.initialTime = initialTime;

        this.createTimer = function() {
            const timersContainer = document.querySelector('#timers-container');
            console.log('timersContainer' , timersContainer);
            timersContainer.innerHTML += '<div>new timer</div>';
        }
    this.createTimer = function () {
        console.log('create timer');
    }

}

export default Timer;