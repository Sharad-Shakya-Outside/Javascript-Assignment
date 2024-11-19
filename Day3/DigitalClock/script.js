let hours = document.querySelector('#hours');
let minutes = document.querySelector('#minutes');
let seconds = document.querySelector('#seconds');
let beforeDigit = document.querySelectorAll('#two-digit')

const convertToTwoDigits = (time) => {
    if (time < 10) {
        beforeDigit.forEach((tenthDigit) => {
            tenthDigit.innerText = 0;
        })
    }
}

const digitalClockTime = setInterval(() => {
    if (seconds.innerText < 59) {
        convertToTwoDigits(seconds.innerText);
        seconds.innerText++;
    } else {
        seconds.innerText = 0;

        if (minutes.innerText < 59) {
            convertToTwoDigits(minutes.innerText);
            minutes.innerText++;
        } else {
            minutes.innerText = 0;
            
            if (hours.innerText < 23) {
                convertToTwoDigits(hours.innerText);
                hours.innerText++;
            } else {
                hours.innerText = 0;
            }
        }
    }
}, 1000);