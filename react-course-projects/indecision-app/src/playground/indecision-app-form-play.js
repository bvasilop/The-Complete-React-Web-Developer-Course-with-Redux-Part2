// contains our jsx content for the app
console.log('app.js is running!');

const app = {
  title: 'Indecision App',
	subtitle: 'Put your life in the hands of a computer',
	options: []
};

const onFormSubmit = (e) => { // e is event object
	e.preventDefault(); // stops full page refresh and runs code for event
		// console.log('Form submitted');
	const option = e.target.elements.option.value;

	if(option) {
		app.options.push(option); // push on new array
		e.target.elements.option.value = ''; // set value to an empty string
		// add function for rendering data
		renderFormApp(); // called after options array has been changed
	}
};
const onRemoveAll = () => {
	app.options = []; // set to new empty array (clears out all items)
	renderFormApp();
};

const onMakeDecision = () => {
	const randomNum = Math.floor(Math.random() * app.options.length); // multiplying by index and rounding down
	const option = app.options[randomNum];
	alert(option);
}

const appRoot = document.getElementById('app');
// create remove all button
// onCLick handler which will wipe app.options setting it equal to an empty array(re-render the app)
// count goes back to zero

// const numbers = [55, 101, 1000];
const renderFormApp = () => {
const template = (
  <div>
    <h1>{app.title}</h1>
      {app.subtitle && <p>{app.subtitle}</p>}
			<p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>

			<button disabled={app.options.length === 0} onClick={onMakeDecision}>What should I do?</button>
			<button onClick={onRemoveAll}>Remove all</button>
			{
				/*numbers.map((number) => {
					return <p key={number}>Number: {number}</p>;
				})*/
			//	[<p key="1">A</p>,<p key="2">B</p>, <p key="3">C</p>] // adding key allows jsx to optimize rendering process
			}
        <ol>
				{/* map over app.options getting back an array of list items (set key and text) */}

				{
					app.options.map((option) => <li key={option}>{option}</li>)

				}
        </ol>
				<form onSubmit={onFormSubmit}>
					<input type="text" name="option" />
					<button>Add option</button>
				</form>
	</div>
);

ReactDOM.render(template, appRoot);
};

// initialize function
renderFormApp();
