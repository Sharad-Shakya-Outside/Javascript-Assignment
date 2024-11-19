let hours = document.querySelector('#hours');
let minutes = document.querySelector('#minutes');
let seconds = document.querySelector('#seconds');
let secondsDigit = document.querySelector('#seconds-digit');
let minutesDigit = document.querySelector('#minutes-digit');
let hoursDigit = document.querySelector('#hours-digit');

const convertToTwoDigits = (time, tenthDigit) => {
    time < 9 || time === 60 ? tenthDigit.innerText = 0 : tenthDigit.innerText = "";
}

convertToTwoDigits(seconds.innerText, secondsDigit);
convertToTwoDigits(minutes.innerText, minutesDigit);
convertToTwoDigits(hours.innerText, hoursDigit);

const digitalClockTime = setInterval(() => {
    if (seconds.innerText < 59) {
        convertToTwoDigits(seconds.innerText, secondsDigit);
        seconds.innerText++;

    } else {
        seconds.innerText = 0;
        convertToTwoDigits(seconds.innerText, secondsDigit);

        if (minutes.innerText < 59) {
            convertToTwoDigits(minutes.innerText, minutesDigit);
            minutes.innerText++;

        } else {
            minutes.innerText = 0;
            convertToTwoDigits(minutes.innerText, minutesDigit);

            if (hours.innerText < 23) {
                convertToTwoDigits(hours.innerText, hoursDigit);
                hours.innerText++;

            } else {
                hours.innerText = 0;
                convertToTwoDigits(hours.innerText, hoursDigit);
            }
        }
    }
}, 1000);