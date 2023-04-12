

const nameTag = document.createElement("h1")
//nameTag.innerHTML = window.prompt("enter name");

//document.body.append(nameTag)


const myList = document.querySelector("#fruit")
const listItem = document.createElement("li");

listItem.textContent = "mango"
myList.append(listItem)
listItem.textContent = "pear"
myList.prepend(listItem)