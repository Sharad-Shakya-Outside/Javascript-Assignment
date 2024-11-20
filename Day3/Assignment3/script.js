const wrapper = document.querySelector('.wrapper');
const box = document.querySelector('.box');

const boxWidth = "60px";
const boxHeight = "60px";

wrapper.style.minWidth = "100vw";
wrapper.style.minHeight = "100vh";
wrapper.style.backgroundColor = "black";
wrapper.style.display = "flex";
wrapper.style.alignItems = "center";
wrapper.style.justifyContent = "center";

box.style.width = boxWidth;
box.style.height = boxHeight;
box.style.backgroundColor = "red";
box.style.color = "white";
box.style.display = "grid";
box.style.placeItems = "center";

