'use strict';
/*
const Person = function (firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
}

const jonas = new Person('Poonam', 1999);
const steve = new Person('Snowy', 2020);

console.log(jonas instanceof Person);

Person.prototype.calAge = function () { console.log(2024 - this.birthYear); }

console.log(jonas, steve);

jonas.calAge();

console.log(jonas.__proto__);
console.log(jonas.__proto__ === Person.prototype);
console.log(Person.prototype.isPrototypeOf(jonas));
// console.log(Person.prototype.isPrototypeOf(Person));

Person.prototype.species = "Homo Sapiens";
Person.prototype.hobby = "Driving";

console.log(jonas.species);
console.log(jonas.hobby);

console.log(jonas.hasOwnProperty('hobby'));
console.log(jonas.hasOwnProperty('species'));

console.log(jonas.__proto__);
//Object.prototype (top of prototype chain)
console.log(jonas.__proto__.__proto__);
console.log(jonas.__proto__.__proto__.__proto__);

console.dir(jonas.__proto__.constructor);

const arr = [3, 6, 6, 5, 9, 9];
console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype);

console.log(arr.__proto__.__proto__);

Array.prototype.unique = function () {
    return [...new Set(this)];
};

console.log(arr.unique());

const h1 = document.querySelector('h1');
console.dir(x => x + 1);
*/

// Coding Challenge #1

/* 
1. Use a constructor function to implement a Car. A car has a make and a speed property. The speed property is the current speed of the car in km/h;
2. Implement an 'accelerate' method that will increase the car's speed by 10, and log the new speed to the console;
3. Implement a 'brake' method that will decrease the car's speed by 5, and log the new speed to the console;
4. Create 2 car objects and experiment with calling 'accelerate' and 'brake' multiple times on each of them.

DATA CAR 1: 'BMW' going at 120 km/h
DATA CAR 2: 'Mercedes' going at 95 km/h

*/

// const Car = function (make, speed) {
//     this.make = make;
//     this.speed = speed;
//     console.log(`${make} going at ${speed} km/h`)
// }

// const car1 = new Car('BMW', 120);
// const car2 = new Car('Mercedes', 95);

// car1; car2;

// Car.prototype.accelerator = function () {
//     this.speed = this.speed + 10
//     console.log(`Accelerated: ${this.make} speed is ${this.speed} km/h`)
// };

// Car.prototype.break = function () {
//     this.speed = this.speed - 5;
//     console.log(`Break:  ${this.make} speed is ${this.speed} km/h`);
// }

// car1.accelerator();
// car1.break();
// car1.accelerator();
// car1.break();
// car2.accelerator();
// car2.break();
// car2.accelerator();
// car2.break();


//ES6 Classes
class PersonCl {
    constructor(firstName, birthYear) {
        this.firstName = firstName;
        this.birthYear = birthYear;
    }

    calAge() {
        console.log(2024 - this.birthYear);
    }
}

const jonas = new PersonCl('Poonam', 1999);
// jonas.calAge();

//Getter & setter
const obj = {
    _fullName: 'John Doe',

    get getName() {
        return this._fullName;
    },

    set setName(newName) {
        this._fullName = newName;
    }
};

// console.log(obj.getName);
obj.setName = 'Poonam Chougule';
// console.log(obj._fullName);

//static classes
// class Person {
//     constructor(firstName, birthYear) {
//         this.firstName = firstName;
//         this.birthYear = birthYear;
//     }

//     age() {
//         return 2024 - this.birthYear;
//     }

//     static greet() {
//         console.log(`Hi ${this.firstName}`);
//         console.log(this);
//     }
// }

// Person.greet();

// const jordan = new Person('Poonam', 1999);

//object.create
// const PersonProto = {
//     calcAge() {
//         console.log(2037 - this.birthYear);
//     },

//     init(firstName, birthYear) {
//         this.firstName = firstName;
//         this.birthYear = birthYear;
//     },
// };

// const steven = Object.create(PersonProto);
// console.log(steven);
// steven.name = 'Steven';
// steven.birthYear = 2002;
// steven.calcAge();

// console.log(steven.__proto__ === PersonProto);

// const sarah = Object.create(PersonProto);
// sarah.init('Sarah', 1979);
// sarah.calcAge();


// Coding Challenge #2

/* 
1. Re-create challenge 1, but this time using an ES6 class;
2. Add a getter called 'speedUS' which returns the current speed in mi/h (divide by 1.6);
3. Add a setter called 'speedUS' which sets the current speed in mi/h (but converts it to km/h before storing the value, by multiplying the input by 1.6);
4. Create a new car and experiment with the accelerate and brake methods, and with the getter and setter.

DATA CAR 1: 'Ford' going at 120 km/h

GOOD LUCK 😀
*/

/*class NewCar {
    constructor(make, speed) {
        this.make = make;
        this.speed = speed;
    }

    accelerator() {
        console.log(this.speed = this.speed + 10);
    }

    applybreak() {
        console.log(this.speed = this.speed - 5);
    }

    get speedUS() {
        console.log(this.speed /= 1.6);
    }

    set speedUS(speed) {
        this.speed = speed* 1.6;
        console.log(this.speed);
    }
}

const ford = new NewCar('Ford', 120);
ford.accelerator();
ford.accelerator();
ford.applybreak();
ford.speedUS;
ford.speedUS = 100;
*/

/*
const Person2 = function (firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
}

Person2.prototype.calAge=function(){
    return 2024-this.birthYear;
}

const student = function(firstName,birthYear,course){
    Person2.call(this, firstName,birthYear);
    this.course=course;
}

//linking prototypes
student.prototype=Object.create(Person2.prototype);

student.prototype.introduce=function(){
    console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const mike = new student('Mike', 2020, 'Computer Science');
mike.introduce();
mike.calAge();

console.log(mike.__proto__);
console.log(mike.__proto__.__proto__);

console.log(mike instanceof student);
console.log(mike instanceof Person2);

console.dir(student.prototype.constructor);
*/


// Coding Challenge #3

/* 
1. Use a constructor function to implement an Electric Car (called EV) as a CHILD "class" of Car. Besides a make and current speed, the EV also has the current battery charge in % ('charge' property);
2. Implement a 'chargeBattery' method which takes an argument 'chargeTo' and sets the battery charge to 'chargeTo';
3. Implement an 'accelerate' method that will increase the car's speed by 20, and decrease the charge by 1%. Then log a message like this: 'Tesla going at 140 km/h, with a charge of 22%';
4. Create an electric car object and experiment with calling 'accelerate', 'brake' and 'chargeBattery' (charge to 90%). Notice what happens when you 'accelerate'! HINT: Review the definiton of polymorphism 😉

DATA CAR 1: 'Tesla' going at 120 km/h, with a charge of 23%

GOOD LUCK 😀
*/

const Car2 = function (make, speed) {
    this.make = make;
    this.speed = speed;
}

const EV = function (make, speed,batteryCharge) {
    Car2.call(this, make, speed);
    this.batteryCharge = batteryCharge;
}

EV.prototype = Object.create(Car2.prototype);

EV.prototype.chargeBattery = function (chargeTo) {
    return this.batteryCharge = chargeTo;
}

EV.prototype.accelerator = function () {
    this.speed += 20;
    this.batteryCharge -= 1;
    console.log("Tesla going at "+this.speed+", with a charge of "+this.batteryCharge);
}

EV.prototype.break = function () {
    return this.speed = this.speed - 5;
}

const tesla = new EV('Tesla', 140, 23);

tesla.chargeBattery=23;
tesla.chargeBattery;
tesla.break();
tesla.break();
tesla.break();
tesla.break();
console.log(tesla.accelerator());