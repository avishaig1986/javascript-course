const car1 = {
    model: "Mustang",
    color: "red",
    year: 2023,

    drive: function(){
        console.log(`You drive the ${this.model}`);

    },

    break: function(){
        console.log("You stepped on the breaks")
    }
}

const car2 = {
    model: "Corvette",
    color: "blue",
    year: 2024,

    drive: function(){
        console.log(`You drive the ${this.model}`);

    },

    break: function(){
        console.log("You stepped on the breaks")
    }
}


console.log(car1.model)
car1.drive()
car2.drive()
car1.break()

// reffers to the window context
console.log(this)

this.name = "my window!"
console.log(this)