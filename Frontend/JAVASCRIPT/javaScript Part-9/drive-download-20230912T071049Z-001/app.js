let button = document.createElement("button");
let input  = document.createElement("input");
button.innerText = "Click ME";

document.querySelector("body").append(input);
document.querySelector('body').append(button);

button.setAttribute("id","btn");
input.setAttribute("placeholder","Yes");

let btn = document.querySelector("#btn");
btn.classList.add("blueBg");

let head = document.createElement("h1");
head.innerHTML = "<u> Yes </u>"
document.querySelector("body").prepend(head)
head.classList.add("blueBg")

let ap = document.createElement("p");
ap.innerHTML = "Apna College <b>Delta</b> Practice";
document.querySelector("body").append(ap);