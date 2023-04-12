class Car{

    constructor(model, year, color){
        this.model = model;
        this.year = year;
        this.color = color;
    }

    drive(){
        console.log(`you are driving the ${this.model}`)
    }
}


const car1 = new Car("car1",2022,"red")
const car2 = new Car("car2",2034,"green")
const car3 = new Car("car3",2044,"blue")

changeColor(car1, "gold")
displayInfo(car1);

function displayInfo(car){

    console.log(car.model)
    console.log(car.year)
    console.log(car.color)

}

function changeColor(car, color){
    car.color = color
}

const cars = [car1, car2, car3];

console.log(cars[0].model)

startRace(cars)


function startRace(cars){
    for (let index = 0; index < cars.length; index++) {
        const car = cars[index];
        car.drive()
        
    }
}