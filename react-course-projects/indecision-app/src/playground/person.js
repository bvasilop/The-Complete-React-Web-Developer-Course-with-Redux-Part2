/* Practice for import export*/


// // import './utils.js'; // current files directory which is source (lives inside).
// import subtract, { square, add } from './utils.js'; // named exports with default export
// // import anything, { square, add } from './utils.js'; // can call default anything as long as you reference it later with the same name
// // import subtract from './utils.js'; is also valid if importing a single default statement

// import isSenior, { isAdult, canDrink } from './person.js';

// console.log('app.js is running!');
// console.log(square(4));
// console.log(add(100, 23));
// console.log(subtract(100, 81));

// console.log(isAdult(20));
// console.log(canDrink(21));

// console.log(isSenior(65));

// import validator from 'validator';

// console.log(validator.isEmail('bvasilop@gmail.com'));


console.log ('person.js is running!');

const isAdult = (age) => age >=18;


const  canDrink = (age) => age >= 21;

const isSenior = (age) => age >= 65;

export{ isAdult, canDrink, isSenior as default };

// export default isSenior;