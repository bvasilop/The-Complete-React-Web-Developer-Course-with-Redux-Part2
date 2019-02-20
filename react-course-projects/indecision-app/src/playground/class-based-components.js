class OldSyntax {
	constructor() {
		this.name = 'Bill';
		this.getGreeting = this.getGreeting.bind(this);
	}
	getGreeting() {
		return `Hi my name is ${this.name}.`;
	}
}
const oldSyntax = new OldSyntax();
const getGreeting = oldSyntax.getGreeting;
console.log(getGreeting());
/* new syntax with babel-plugin-transform-class-properties plugin*/
class NewSyntax {
	name = 'Theo';
	getGreeting = () => {
		return `Hi my name is ${this.name}.`;
	}
}


const newSyntax = new NewSyntax();
const newGetGreeting = newSyntax.getGreeting;
console.log(newGetGreeting());
