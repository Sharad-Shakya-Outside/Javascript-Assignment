/*
Create two square boxes that rotates by 90 deg when comes in a viewport.
    a. One will rotate only once
    b. Second will rotate in every appearance.
*/

let options = {
    root: null,
    rootMargin: "-100px",
    threshold: 0
};

let observer = new IntersectionObserver(rotate, options);

let boxOnce = document.querySelector("#box-once");
let boxEvery = document.querySelector("#box-every");

observer.observe(boxOnce);
observer.observe(boxEvery);

function rotate(entries, observer) {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("rotate");

            if (entry.target.classList.contains("boxes__rotate--once")) {
                observer.unobserve(boxOnce);
            }
        } else {
            if (entry.target.classList.contains("boxes__rotate--every")) {
                entry.target.classList.remove("rotate");
            }
        }
    })
}