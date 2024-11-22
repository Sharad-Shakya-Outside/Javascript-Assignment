/*
Apply the debouncing technique on resize event. After the end of resize throw a console message saying, “Window is resized”.
*/

const body = document.body;

function debounce(func) {
    var timer;
    return function(event) {
        if(timer) clearTimeout(timer);
        timer = setTimeout(func, 400, event);
    }
}

window.addEventListener("resize", debounce(function(e) {
    console.log('Window is resized');
    const resize = document.createElement('p');
    resize.innerText = "Window is resized";
    body.appendChild(resize);
}))