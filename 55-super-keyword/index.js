class Animal{
    constructor(name, age){
        this.name = name
        this.age = age



    }
}


class Rabbit extends Animal{
    constructor(name, age, runSpeed){
        super(name, age)
        this.runSpeed = runSpeed;
    }
}

class Fish extends Animal{
    constructor(name, age, swimSpeed){
        super(name, age)
        this.swimSpeed = swimSpeed;
    }
}

const rabbit = new Rabbit("rabbit", 1, 40);
const fish = new Fish("fish", 2, 80);

console.log(rabbit.runSpeed)
console.log(fish.swimSpeed)

