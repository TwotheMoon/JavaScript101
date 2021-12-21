"use strict";

const box1 = document.querySelector(".box1");
const box2 = document.querySelector(".box2");
const box3 = document.querySelector(".box3");
const box4 = document.querySelector(".box4");


function onChange() {
    box1.innerText = `window.screen: ${window.screen.width}, ${window.screen.height}`;
    box2.innerText = `window.outer: ${window.outerWidth}, ${window.outerHeight}`;
    box3.innerText = `window.inner: ${window.innerWidth}, ${window.innerHeight}`;
    box4.innerText = `documnetElement.clientWidth: ${document.documentElement.clientWidth}, ${document.documentElement.clientWidth}`;
}
onChange();

window.addEventListener("resize", onChange);
