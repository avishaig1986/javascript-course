class Animal{
    alive = true;
    eat(){
        console.log(`This ${this.name} is eating`)
    }

    sleep(){
        console.log(`This ${this.name} is sleeping`)
    }
}


class Rabbit extends Animal{
    name = "rabbit"

    run (){
        console.log(`This ${this.name} is running`)
    }
}

class Fish extends Animal{
    name = "fish"

    swim(){
        console.log(`This ${this.name} is swimming`)
    }
}

const rabbit = new Rabbit();
rabbit.eat();
rabbit.sleep();
rabbit.run();

const fish = new Fish();
fish.eat();
fish.sleep();
fish.swim();