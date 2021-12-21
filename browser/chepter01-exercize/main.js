const horizontal = document.querySelector(".horizontal");
const vertical = document.querySelector(".vertical");
const target = document.querySelector(".target");
const tag = document.querySelector(".tag");

document.addEventListener("mousemove", (event) => {
    const mouseX = event.clientX;
    const mouseY = event.clientY;
    target.style.left = `${mouseX}px`;
    target.style.top = `${mouseY}px`;
    horizontal.style.top = `${mouseY}px`;
    vertical.style.left = `${mouseX}px`;
    tag.style.left = `${mouseX}px`;
    tag.style.top = `${mouseY}px`;
    tag.innerText = `${mouseX}px, ${mouseY}px`;
});