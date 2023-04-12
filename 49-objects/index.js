const car = {
    model: "Mustang",
    color: "red",
    year: 2023,

    drive: function(){
        console.log("You drive the car");

    },

    break: function(){
        console.log("You stepped on the breaks")
    }
}

console.log(car.model)
car.drive()
car.break()