// let b = 10;

// function runInfinite():never {
//     while (true) {
//         console.log("hello world");
//     }
// }

// runInfinite();
// console.log("first")
// let a = 12;

// let varible: string | null | number;

// varible = "Hello";
// varible = 100;

// enum Human {
//   name = "harsh",
//   age = 25,
// }

// enum MyResponseType {
//   active = 0,
//   num = 10,
// }

// console.log(Human.name);

// console.log(Human.name);


type city = {
    name: string,
    population: number,
}

type planet = {
    name: string,
    cities:number
}

type citiesPlanet = city & planet;

let value: citiesPlanet = {
    name: "Earth",
    population: 7_979_593_000,
    cities: 63,

};

console.log("first")

let a: number = 0;
let b: string = "Earth"

type Name = string;

let names: Name = "John Doe";

type Human = {
    name: string,
    age: number,
    email: string
}

let humans = {
    name: "John Doe",
    age: 30,
    email: "john.doe@example.com"
}

let arr: [Human,Human] = [{
    name: "John Doe",
    age: 30,
    email: "john.doe@example.com"
}, {
    name: "Jane Doe",
    age: 25,
    email: "jane.doe@example.com"
}]
console.log(arr)


let newName: string | number;

newName = "John Doe";

newName = 30;

console.log(newName)

// type d = string;
// type d = number;

interface D{
    name: string,
    age: number,
}
interface D{
    email: string,
}

interface H extends D {
    address: string,
}

function getType(user:H) {
    user.name
}

// classes in typescirpt

class Phone {
    price = 25000;
    image = "http:// renders"
    color = "blue"

    playGame() {
        console.log("Playing game")
    }

    switchMode(mode:string) {
        console.log(mode)
    }
}


class Ac{
    color = "white";
    tones = "1";
    company = "voltas";
    temp = 22;

    turnOn(){
        console.log("turn on ")
    }
    turnOff(){
        console.log("turn off")
    }
    raiseTemp(){
        console.log("raise temp")
        this.temp++;
        console.log(this.temp)
    }
    lowerTemp(){
        console.log("lower temp")
    }
}

let ac = new Ac()
ac.turnOff()



class Food{
    price = 1200;

    eat() {
        console.log("eating")
    }
}

class fastFood extends Food{
    name="fastfood"
}

let fast = new fastFood()
fast.eat()

// constructer 



class Car {
    constructor(color: string, brand: string, year: number) {
        this.color = color;
        this.brand = brand;
        this.year = year;
    }

    color: string;
    brand: string;
    year: number;

    details() {
        console.log(`Car color: ${this.color}, Brand: ${this.brand}, Year: ${this.year}`)
    }

    startEngine() {
        console.log("Engine started")
    }

    stopEngine() {
        console.log("Engine stopped")
    }
}

let car = new Car("red", "Toyota", 2020)

// access modifiers

class Animal {
    private sound: string;

    constructor(sound: string) {
        this.sound = sound;
    }

    makeSound() {
        console.log(this.sound)
    }
}

let animal = new Animal("Meow")
animal.makeSound()

