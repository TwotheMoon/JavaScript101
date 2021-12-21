const horizontal = document.querySelector(".horizontal");
const vertical = document.querySelector(".vertical");
const target = document.querySelector(".target");
const tag = document.querySelector(".tag");

addEventListener("load", () => { // window.onLoad
    const targetRect = target.getBoundingClientRect();
    const targetHalfWidth = targetRect.width / 2;
    const targetHalfHeight = targetRect.height / 2;


    document.addEventListener("mousemove", (event) => {
        const mouseX = event.clientX;
        const mouseY = event.clientY;

        vertical.style.transform = `translateX(${mouseX}px)`;
        horizontal.style.transform = `translateY(${mouseY}px)`;
        target.style.transform = `translate(${mouseX - targetHalfWidth}px, ${mouseY - targetHalfHeight}px)`;
        tag.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
        tag.innerText = `${mouseX}px, ${mouseY}px`;
    });
});