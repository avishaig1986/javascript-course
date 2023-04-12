let counter = 0

document.getElementById("decrementButton").onclick = () => {
    if (counter>0){
 document.getElementById("counterLabel").innerHTML = counter--
    }
}

document.getElementById("resetButton").onclick = () => {
    counter = 0
    document.getElementById("counterLabel").innerHTML = counter
}

document.getElementById("incrementButton").onclick = () => {
    document.getElementById("counterLabel").innerHTML = counter++

}
