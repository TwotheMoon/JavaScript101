const listForm = document.querySelector(".listForm");
const listInput = document.querySelector(".listInput");
const lists = document.querySelector(".lists");

function handleForm(e) {
    e.preventDefault();
    const newList = listInput.value;

    const newListObj = {
        text: newList,
        id: Date.now()
    };

    paintList(newListObj);
    listInput.value = "";
}

function paintList(newListObj) {
    const li = document.createElement("li");
    li.id = newListObj.id;
    const span = document.createElement("span");
    span.innerText = `${newListObj.text}`;

    const btn = document.createElement("button");
    btn.innerText = "❌";

    btn.addEventListener("click", deleteList);
    li.appendChild(span);
    li.appendChild(btn);
    lists.appendChild(li);

}

function deleteList(event) {
    const li = event.target.parentElement;
    li.remove();
}

listForm.addEventListener("submit", handleForm);

let result = 0;

for (let i = 1; i <= 10; i++) {
    result += i;
}
console.log(result);

const n = 5;

for (let i = 1; i <= n; i++) {
    console.log(i);
}