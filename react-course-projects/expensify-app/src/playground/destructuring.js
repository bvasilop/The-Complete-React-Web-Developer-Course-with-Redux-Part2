const person = {
	name: 'Bill',
	age: 43,
	location: {
		city: 'Chicago',
		temp: 45
	}
};

// const name = person.name;
// const age = person.age;

const { name: firstName = 'Anonymous', age } = person; // destructured version of above example

console.log(`${firstName} is ${age}.`);

const { city, temp: temperature} = person.location;

if (city && temperature) {
console.log(`It's ${temperature} in ${city}`);
}

const book = {
  title: 'Ego is the Enemy',
  author: 'Ryan Holiday',
  publisher: {
    name: 'Penguin'
  }
};


const { name: publisherName = 'Self-Published' } = book.publisher;

console.log(publisherName); // Penguin, Self-Published
