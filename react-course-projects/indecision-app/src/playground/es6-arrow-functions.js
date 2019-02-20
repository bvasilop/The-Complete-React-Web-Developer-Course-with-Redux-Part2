const square = function (x) { // es5
    return x * x;
};

const squareArrow = (x) => x * x; // es6 // arrow function expression syntax
console.log(squareArrow(8));


// getFirstName function
// create regular arrow function
// create second arrow function using expression syntax

const getFirstName = (fullName) => {
    return fullName.split(' ')[0];
}
console.log(getFirstName('Bill Vasilopoulos'));

const getFirstName2 = (fullName) => fullName.split(' ')[0]; // regular arrow function
console.log(getFirstName2('Bill Vasilopoulos')); // expression syntax



