/*
let element = document.querySelector("#fruits")
let child = element.firstElementChild
child.style.backgroundColor = "pink"
*/

let element = document.querySelector("#desserts");
let children = Array.from(element.children);

console.log(children)
children.forEach(child => 
    child.style.backgroundColor = "lightBlue")


// .firstElementChild
// .lastElementChild
// .parentElement
// .nextElementSibiling
// .previousElementSibiling
// .children[]
// Array.from(.children)