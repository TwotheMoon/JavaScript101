// const styled = (aElement) => {
//     const el = document.createElement(aElement);
//     return args => {
//         const styles = args[0];
//         el.style = styles;
//         return el;
//     }
// };

// const title = styled("h1")`
//     border-radius: 10px;
//     color: blue;
// `;

// const subtitle = styled("span")`
//     color: red;
// `;

// title.innerText = "We just cloned";
// subtitle.innerText = "styled";

// document.body.append(title, subtitle);


// includes
// const isEmail = (email) => email.includes("@");
// console.log(isEmail("dlaguddh@naver.com"));


// reoeat
// const CC_NUMBER = "6060";

// const displayName = `${"*".repeat(10)}${CC_NUMBER}`;

// console.log(displayName);


// startsWith()
// const name = "Mr. Nicolas";
// console.log(name.startsWith("Nicolas"));


// array Method
// Array.of()
const friends = Array.of("nico", "lynn", "dal", "mark");

console.log(friends);


// Array.from()

const buttons = document.querySelectorAll("button");

Array.from(buttons).forEach(button => {
    button.addEventListener("click", () => console.log("yap!"));
})
console.log(buttons);