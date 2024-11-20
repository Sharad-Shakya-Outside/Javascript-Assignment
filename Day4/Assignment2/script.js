/*
Apply the debouncing technique on resize event. After the end of resize throw a console message saying, “Window is resized”.
*/

function debounce(func) {
    var timer;
    return function(event) {
        if(timer) clearTimeout(timer);
        timer = setTimeout(func, 400, event);
    }
}

window.addEventListener("resize", debounce(function(e) {
    console.log('Window is resized');
}))