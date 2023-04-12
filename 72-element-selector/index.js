let element = document.getElementById("myTitle")
element.style.backgroundColor = "lightpink"

let fruits = document.getElementsByName("fruits");
fruits.forEach(fruit => console.log(fruit))

fruits.forEach(fruit => {
    if (fruit.checked){
        console.log(fruit.value)
    }
})

let vegetables = document.getElementsByTagName("li");
vegetables[0].style.backgroundColor = "lightgreen"

let desserts = document.getElementsByClassName("desserts")
desserts[0].style.backgroundColor = "lightBlue"


let elementTitle = document.querySelector("#myTitle")
elementTitle.style.backgroundColor = "rose"


let elementAll = document.querySelectorAll("li")
elementAll.forEach(elem => elem.style.backgroundColor = "yellow")