// use classes to reuse code (multiple instances)
// setup constructor to take name and age (default to 0)
// setup brand new method getDescription = Bill Vasilopoulos is 43 years old
class Person {
constructor(name = 'Anonymous', age = 0) { // es6 default function
		this.name = name;
		this.age = age;

	} // no comma
	getGreeting() {
		return `Hi. I am ${this.name}!`;
	}
	getDescription() {
		return `${this.name} is ${this.age} year(s) old.`
	}
}

class Student extends Person {
	constructor(name, age, major) {
		super(name, age); // refers to parent class (same as calling Person constructor function)
		this.major = major;
	}
	hasMajor() {
		return !!this.major; // used to flip it twice from true to false or false to true
	}
	getDescription() { // overrides parent getDescription method
		let description = super.getDescription(); // accesses parent getDescription method

		if (this.hasMajor()) {
			description += ` Their major is ${this.major}.`;
		}

		return description;
	}
}

class Traveler extends Person {
	constructor(name, age, homeLocation) {
		super(name, age);
		this.homeLocation = homeLocation;
	}
	getGreeting() { //override getGreeting
		let greeting = super.getGreeting();
			if(this.homeLocation) {
				greeting += ` I am visiting from ${this.homeLocation}.`;
			}

		return greeting;
	}
}

// const me = new Student('Bill', 43, 'Computer Science');
const me = new Traveler('Bill', 43, 'Seattle')
console.log(me.getGreeting()); // Traveler {name: "Bill", age: 43, homeLocation: "Seattle"}
//console.log(me.hasMajor()); // true
//console.log(me.getDescription());
//console.log(me);

const other = new Traveler(undefined, undefined, 'Nowhere');
console.log(other.getGreeting()); // Traveler {name: "Anonymous", age: 0, homeLocation: undefined}
//const other = new Student();
//console.log(other.hasMajor());
//console.log(other.getDescription());
//console.log(other);

// create new subclass of Person (Traveller). Traveller is going to extend the Person class. Add support for homeLocation
// override getGreeting