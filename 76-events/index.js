/*
const element = document.getElementById("myBtn")
element.onclick = doSomething
*/

/*
const element = document.body
element.onload = doSomething
*/

/*
const element = document.getElementById("myTxt");
element.onchange = doSomething
*/

const element = document.getElementById("myDiv")

/*
element.onmousemove = doSomething
element.onmouseout = doSomethingElse
*/

element.onmousedown = doSomething
element.onmouseup = doSomethingElse


function doSomething(){
    //alert("you did something")
    element.style.backgroundColor = "pink"
}

function doSomethingElse(){
    //alert("you did something")
    element.style.backgroundColor = "yellow"
}
