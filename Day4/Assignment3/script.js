/*
Apply the throttling technique in a button. The button should be pressed only once every 1 second.
*/

let shootBtn = document.querySelector('.shoot');

//Throttle function implementation
function throttle(func, delay) {
    let shouldWait = false;

    return (...args) => {
        if (shouldWait) return;

        func(...args);
        shouldWait = true;

        setTimeout(() => {
            shouldWait = false;
            shootBtn.disabled = false;
            shootBtn.style.backgroundColor = 'blue';
        }, delay)
    }
}


//Button shoot action
shootBtn.addEventListener("click", throttle(() => {
    console.log('Button is pressed');
    shootBtn.disabled = false;
    shootBtn.style.backgroundColor = 'red';
}, 2000));