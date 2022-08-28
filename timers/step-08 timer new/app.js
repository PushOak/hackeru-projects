const timerInput = document.querySelector('#time-input');

function Timer() {
    
}

function addTimer() {
    const initialTime = timerInput.value;
    console.log('add timer', initialTime);
}

// add click event listener to the add timer button
document.querySelector('#create-timer').addEventListener('click', addTimer);