let s = document.querySelector("#sub")
let t = document.querySelector("#text")
let u = document.querySelector("ul")
let li = document.querySelectorAll('li')
let delBtn = document.querySelectorAll(".deldel")
s.addEventListener("click",yess)
u.addEventListener("click",ded)
function yess(event){
    let node = document.createElement('li');
    node.innerText = t.value;
    u.appendChild(node);
    t.value=''
    let del  = document.createElement("button")
    del.innerText = "Delete"
    node.classList.add("deldel");
    node.appendChild(del)
    console.dir(node)
}

function ded(event){
    if(event.target.nodeName =='BUTTON'){ // here we noticing if its clicked on button or text
        event.target.parentElement.remove(); //here we are targetting parent of button which is li
    }
}