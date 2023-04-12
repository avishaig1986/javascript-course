class Car{

    static numberOfCars = 0;
    constructor(model){

        this.model = model;
        //this.numberOfCars += 1;
        Car.numberOfCars += 1;
    }

    startRace(){
        console.log(`3...2...1...GO!`)
    }
}

const car1 = new Car("Mustang")
const car2 = new Car("Corvette")
const car3 = new Car("BMW")

car1.startRace()

console.log(Car.numberOfCars)