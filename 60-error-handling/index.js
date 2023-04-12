try{
    let userInput = window.prompt("Enter a number")
    userInputNumber = Number(userInput);

    console.log(`${userInputNumber} is a number`)

    if (isNaN(userInputNumber)) throw "that wasnt a number!"
    if (userInputNumber == "") throw "that was empty"
}
catch(error){
    console.log(error)
}

finally{
    console.log("this always executes")
}