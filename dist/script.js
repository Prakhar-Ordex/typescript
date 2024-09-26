"use strict";
// let b = 10;
let value = {
    name: "Earth",
    population: 7979593000,
    cities: 63,
};
console.log("first");
let a = 0;
let b = "Earth";
let names = "John Doe";
let humans = {
    name: "John Doe",
    age: 30,
    email: "john.doe@example.com"
};
let arr = [{
        name: "John Doe",
        age: 30,
        email: "john.doe@example.com"
    }, {
        name: "Jane Doe",
        age: 25,
        email: "jane.doe@example.com"
    }];
console.log(arr);
let newName;
newName = "John Doe";
newName = 30;
console.log(newName);
function getType(user) {
    user.name;
}
// classes in typescirpt
class Phone {
    constructor() {
        this.price = 25000;
        this.image = "http:// renders";
        this.color = "blue";
    }
    playGame() {
        console.log("Playing game");
    }
    switchMode(mode) {
        console.log(mode);
    }
}
class Ac {
    constructor() {
        this.color = "white";
        this.tones = "1";
        this.company = "voltas";
        this.temp = 22;
    }
    turnOn() {
        console.log("turn on ");
    }
    turnOff() {
        console.log("turn off");
    }
    raiseTemp() {
        console.log("raise temp");
        this.temp++;
        console.log(this.temp);
    }
    lowerTemp() {
        console.log("lower temp");
    }
}
let ac = new Ac();
ac.turnOff();
class Food {
    constructor() {
        this.price = 1200;
    }
    eat() {
        console.log("eating");
    }
}
class fastFood extends Food {
    constructor() {
        super(...arguments);
        this.name = "fastfood";
    }
}
let fast = new fastFood();
fast.eat();
// constructer 
class Car {
    constructor(color, brand, year) {
        this.color = color;
        this.brand = brand;
        this.year = year;
    }
    details() {
        console.log(`Car color: ${this.color}, Brand: ${this.brand}, Year: ${this.year}`);
    }
    startEngine() {
        console.log("Engine started");
    }
    stopEngine() {
        console.log("Engine stopped");
    }
}
let car = new Car("red", "Toyota", 2020);
// access modifiers
class Animal {
    constructor(sound) {
        this.sound = sound;
    }
    makeSound() {
        console.log(this.sound);
    }
}
let animal = new Animal("Meow");
animal.makeSound();
