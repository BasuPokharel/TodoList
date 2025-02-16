let submit = document.getElementById("submit");
let add_box = document.querySelector("#list-box");

const accept_Add = () => {
  let input = document.querySelector(".input-box input").value;
  if (input == "") alert("Cannot add Empty Task");
  else {
    let a = document.createElement("div");
    a.setAttribute("id", "lists");
    let b = document.createElement("p");
    b.innerText = input;
    let c = document.createElement("button");
    c.innerText = "Remove";
    b.setAttribute("class", "list-text");
    c.setAttribute("class", "button");
    c.setAttribute("id", "remove-button");
    c.addEventListener("click", remove);
    b.addEventListener("click", done);

    a.appendChild(b);
    a.appendChild(c);

    add_box.appendChild(a);
    document.querySelector(".input-box input").value = "";
  }
};

const remove = (evt) => {
  let parent = evt.target.parentElement.parentElement;
  parent.removeChild(evt.target.parentElement);
};
const done = (evt) => {
  console.log(evt.target.innerText);
  let a = evt.target;
  a.classList.toggle("on-complete");
};
submit.addEventListener("click", accept_Add);
