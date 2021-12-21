// Element.getBoundingClientsRect()  - 좌표 가져오기 
const special = document.querySelector(".special");


special.addEventListener("click", (event) => {
    const rect = special.getBoundingClientRect();
    console.log(rect);
    console.log(`client: ${event.clientX}, ${event.clientY}`); // 현재 보이는 창 기준
    console.log(`page: ${event.pageX}, ${event.pageY}`);  // 브라우저 페이지 전체 기준
});


const scrollBy = document.querySelector(".scroll-by");
const scrollTo = document.querySelector(".scroll-to");
const scrollSpecial = document.querySelector(".scroll-special");

scrollBy.addEventListener("click", () => {
    //window.scrollBy(0, 100);
    window.scrollBy({ top: 100, left: 0, behavior: "smooth" });
})
scrollTo.addEventListener("click", () => {
    window.scrollTo(0, 100);
})
scrollSpecial.addEventListener("click", () => {
    special.scrollIntoView();
})