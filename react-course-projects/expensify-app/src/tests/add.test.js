const add = (a, b) => a + b;

const generateGreeting = (name = 'Anonymous') => `Hello ${name}!`;

test('should add two numbers', () => {
	const result = add(3, 4);
	expect(result).toBe(7);
});

test (`Should generate greeting from name`, () => {
	const resultName = generateGreeting('Bill');
	expect(resultName).toBe('Hello Bill!');
});

test('should generate greeting for no name', () => {
	const resultName = generateGreeting();
	expect(resultName).toBe('Hello Anonymous!');
});
