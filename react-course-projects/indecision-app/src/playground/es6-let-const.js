var nameVar = 'Bill';
nameVar = 'BillyVas'
console.log('nameVar', nameVar);
let nameLet = 'John';
nameLet = 'Joey';
console.log('nameLet', nameLet);

const nameConst = 'Frank';
console.log('nameConst', nameConst);

// Block Scoping
// parsing words from array
const fullName = 'Bill Theo Vasilopoulos';
if (fullName) {
    const firstName = fullName.split(' ')[0]; // grabbing first name from new array
    const middleName = fullName.split(' ')[1];
    const lastName = fullName.split(' ')[2];
    console.log(firstName);
    console.log(middleName);
    console.log(lastName);
}

