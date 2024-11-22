/*
Create a real Digital Clock
*/

//Variables defined for selecting the time elements
let hours = document.querySelector('#hours');
let minutes = document.querySelector('#minutes');
let seconds = document.querySelector('#seconds');
let secondsDigit = document.querySelector('#seconds-digit');
let minutesDigit = document.querySelector('#minutes-digit');
let hoursDigit = document.querySelector('#hours-digit');

let startTime = document.querySelector('#alternate');
let resetTime = document.querySelector('#reset');

var interval;

//Function to make all one digit numbers to two digit numbers by adding a 0 before the time element
const convertToTwoDigits = (time, tenthDigit) => {
    time < 9 || time === 60 ? tenthDigit.innerText = 0 : tenthDigit.innerText = "";
}

//Function called early to convert any existing time to two digits
convertToTwoDigits(seconds.innerText, secondsDigit);
convertToTwoDigits(minutes.innerText, minutesDigit);
convertToTwoDigits(hours.innerText, hoursDigit);

function startTimer() {
    if (interval) {
        clearInterval(interval);
    }
    interval = setInterval(() => {
        if (seconds.innerText < 59) {
            convertToTwoDigits(seconds.innerText, secondsDigit);
            seconds.innerText++; //increments seconds

        } else {
            seconds.innerText = 0; //resets seconds
            convertToTwoDigits(seconds.innerText, secondsDigit);

            if (minutes.innerText < 59) {
                convertToTwoDigits(minutes.innerText, minutesDigit);
                minutes.innerText++; //increments minutes if 60 seconds pass

            } else {
                minutes.innerText = 0; //resets minutes on 60 minutes
                convertToTwoDigits(minutes.innerText, minutesDigit);

                if (hours.innerText < 23) {
                    convertToTwoDigits(hours.innerText, hoursDigit);
                    hours.innerText++; //increments minutes if 60 minutes pass

                } else {
                    hours.innerText = 0; //resets minutes on 24 hours
                    convertToTwoDigits(hours.innerText, hoursDigit);
                }
            }
        }
    }, 1000);
}

function stopTimer() {
    clearInterval(interval);
    interval = null;
}

startTime.addEventListener('click', () => {
    if(interval) {
        stopTimer();
    } else {
        startTimer();
    }
});

resetTime.addEventListener('click', () => {
    if(interval) {
        clearInterval(interval);
    }
    seconds.innerText = 0;
    minutes.innerText = 0;
    hours.innerText = 0;
});