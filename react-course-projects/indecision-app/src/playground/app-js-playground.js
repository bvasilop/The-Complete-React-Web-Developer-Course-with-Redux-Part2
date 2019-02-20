// contains our jsx content for the app
console.log('app.js is running!');

/*** auto generated file that will contain our babel transformations */

// JSX = JavaScript XML (JavaScript syntax extension)

// only render the subtitle (and p tag) if subtitle exists - logical and operator
// render new p tag - if options.length is > 0 then "Here are your options" else  "No options"
const app = {
    title: 'Star Wars',
		subtitle: 'Return of the Jedi',
		options: ['One, Two']
};

const template = (
    <div>
      <h1>Title : {app.title}</h1>
      {app.subtitle && <p>Subtitle : {app.subtitle}</p>}
			<p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
        <ol>
            <li>Item one</li>
            <li>Item two</li>
        </ol>
	</div>
);

const appRoot1 = document.getElementById('app1');
ReactDOM.render(templateOne, appRoot1);


const templateTwo = (
    <div>
		<h1 id='someId'>Indecision App!</h1>
		<p>This is some text</p>
			<ol>
				<li>Item one</li>
				<li>Item two</li>
				<li>Item three</li>
      </ol>
    </div>
);

const appRoot2 = document.getElementById('app2');
ReactDOM.render(templateTwo, appRoot2); // we use react render  to render this template in this element in the browser.

// Create a templateTwo var JSX expression
    // root div
        // h1 -> your name
        // p -> Age: 43
        // p -> Location: Seattle
        // Render templateTwo instead of template
const user = {
    name: 'Bill Vasilopoulos',
    age: 43,
    location: 'Seattle'
};

function getLocation(location) {
	if (location) {
		return <p>Location: {location} </p>;
	}
}


const templateThree = (
    <div>
      <h1>Name: {user.name ? user.name : 'Anonymous'}</h1>
      {(user.age && user.age >= 18) && <p>Age : {user.age}</p>}
			{getLocation(user.location)}
    </div>
);
const appRoot3 = document.getElementById('app3');
ReactDOM.render(templateThree, appRoot3);



// if statements
// ternary operator
// logical && operator


