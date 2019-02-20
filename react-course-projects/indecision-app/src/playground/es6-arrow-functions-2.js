// arguments object - no longer bound
// this keyword - no longer bound

const add = function (a, b) {
	console.log(arguments); // access to arguments object
  return a + b;
};
console.log(add(55, 1001 , 99)); // third argument is still accessible when console.log above
		// we have access to argument objects in es5 but not in es6 arrow functions

const add2 = (a, b) => {

  return a + b;
};
console.log(add2(5, 1 , 9));

const user = {
	name: 'Bill',
	cities: ['Seattle', 'Chicago', 'Bloomington'],
	// printPlacesLived: function () { // don't use arrow function in methods because you lose access to this.cities unless using es6 methods syntax
		printPlacesLived() { // es 6 method syntax
		return this.cities.map((city) => `${this.name} has lived in ${city}!`);
	}
};
console.log(user.printPlacesLived());
// make an object
// use a method

const multiplier = {
	// numbers - array of numbers
	// multiply by - single number
	// multiply method that returns new array where numbers have been multiply
	numbers: [2, 4, 6],
	multiplyBy: 3,
	multiply() {
		return this.numbers.map((number => number * this.multiplyBy));
	}
};

console.log(multiplier.multiply());
