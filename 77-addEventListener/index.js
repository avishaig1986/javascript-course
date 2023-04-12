/*
const innverDiv = document.getElementById("innerDiv");

innverDiv.addEventListener("mouseover", changeRed)
innverDiv.addEventListener("mouseout", changeGreen)

function changeRed(){
    innerDiv.style.backgroundColor = "red"
}

function changeGreen(){
    innverDiv.style.backgroundColor = "lightgreen"
}
*/


const innverDiv = document.getElementById("innerDiv");
const outerDiv = document.getElementById("outerDiv");

innverDiv.addEventListener("click", changeBlue)
outerDiv.addEventListener("click", changeBlue, true)

function changeBlue(){
    alert(`you selected ${this.id}`)
    this.style.backgroundColor = "lightblue"
}
