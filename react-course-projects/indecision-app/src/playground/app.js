// React components are just ES6 classes that extend something React gives us.
// Classes must have capitalized first letter (Class based Components)
// Has to define a render method
// component state allows our components to manage data.
// just think about an object with various key value pairs and when that data changes the component will automatically render to reflect those changes.
// taking a method, passing it down into a child component and having it called down there.
// That allows us to reverse the data flow. (allows child to communicate wit parent)

// stateless - functional - component (presentational components)(function based components)
// life cycle methods only available through class based components

// using localstorage and life cycle methods (keyvalue pair store) ---only works with string data
	// localStorage.setItem('name', 'Bill');
	// localStorage.getItem('name'); // name Bill
	// localStorage.removeItem('name');

// const json = JSON.stringify({ age:43 }); // "{"age":43}" --- take a regular javascript object and get the string representation. // stores data in json var
// JSON.parse(json) // Object { age: 43 } --- take the string representation and return a true javascript object.
// JSON.parse(json).age // 43
// are used to save arrays and fetch it back
// localStorage.clear() // clears all key value pairs in localStorage
class IndecisionApp extends React.Component {
	constructor(props) {
		super(props);
		this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
		this.handlePick = this.handlePick.bind(this);
		this.handleAddOption = this.handleAddOption.bind(this);
		this.handleDeleteOption = this.handleDeleteOption.bind(this);
		this.state = {
			options: []
			// options: props.options // since we're reading from local storage, we don't need user to pass in a prop anymore because we're going to read the saved data
		};
	}

	componentDidMount() { // only accessed through class based components
		try {
			const json = localStorage.getItem('options');
			const options = JSON.parse(json);

			if (options) { // if there are options then call below
				// this.setState(() => ({ options: options }))
				this.setState(() => ({ options })); // only use if it is valid
			}
			} catch (e) {
				// Do nothing at all if invalid
		}
	}


	componentDidUpdate(prevProps, prevState) {
		if (prevState.options.length !== this.state.options.length) { // !== has a different length than the current one .// to check if options array length has changed
			const json = JSON.stringify(this.state.options);
			localStorage.setItem('options', json);
			console.log('saving data');
		}

	}

	componentWillUnmount () {
		console.log('component will unmount');
	}


	// handleDeleteOptions() { // wipes the state // long version
	// 	this.setState(() => {
	// 		return {
	// 			options: []
	// 		};
	// 	});
	// }

	handleDeleteOptions() {
		this.setState(() => ({ options: [] })); // one liner version
}

handleDeleteOption(optionToRemove) {
	this.setState((prevState) => ({
		options: prevState.options.filter((option) => optionToRemove !== option)
		// if they're not equal, than it is not an item we want to remove // return true -- stays in array

	}));
}

	handlePick() {
		const	randomNum = Math.floor(Math.random() * this.state.options.length); // multiplying by index and rounding down
		const option = this.state.options[randomNum];
		alert(option);
			}
	handleAddOption(option) {
		if (!option) { // will only run if there is an empty string
			return 'Enter valid value to add item';
		} else if (this.state.options.indexOf(option) > -1) {
			return 'This option already exists'
		}
		this.setState((prevState) => ({ options: prevState.options.concat(option)}));
	}

// create new method handlePick - pass down to Action and Setup onClick- bind here
	render() {
		const subtitle = 'Put your life in the hands of a computer';
		return (
			<div>
				<Header subtitle={subtitle} />
				<Action
					hasOptions={this.state.options.length > 0}
					handlePick={this.handlePick}
				/>
				<Options
					options={this.state.options}
					handleDeleteOptions = {this.handleDeleteOptions}
					handleDeleteOption = {this.handleDeleteOption}
				/>
				<AddOption
					handleAddOption={this.handleAddOption}
				/>
			</div>
		);
	}
}

// IndecisionApp.defaultProps = { // using default props // don't need default props because we're using local storage to retrieve data
// 	options: []
// };


const Header = (props) => { // stateless functional component
	return (
		<div>
			<h1>{props.title}</h1>
			{props.subtitle && <h2>{props.subtitle}</h2>}
		</div>
	);
};

Header.defaultProps = { // using default props
	title: 'Indecision'
};
// class Header extends React.Component { // state component
// 	render() { // must define in React
// 		return (
// 			<div>
// 				<h1>{this.props.title}</h1>
// 				<h2>{this.props.subtitle}</h2>
// 			</div>
// 		);
// 	}
// }

const Action = (props) => { // since we pass props as arg we don't need this. anymore // stateless functional component
		return (
			<div>
				<button
				onClick={props.handlePick}
				disabled={!props.hasOptions} // flip ! to disable
				>
				What Should I do?
				</button>
			</div>
		);
	};

// class Action extends React.Component {
// 	render() {
// 		return (
// 			<div>
// 				<button
// 				onClick={this.props.handlePick}
// 				disabled={!this.props.hasOptions} // flip ! to disable
// 				>
// 				What Should I do?
// 				</button>
// 			</div>
// 		);
// 	}
// }

const Options = (props) => { // stateless functional component
	return (
		<div>
		<button onClick={props.handleDeleteOptions}>Remove All</button>
		{props.options.length === 0 && <p>Please add an option to get started!</p>}  {/*add a message when there is no data*/}
			{
				props.options.map((option) => (
					<Option
					key={option}
					optionText={option}
					handleDeleteOption={props.handleDeleteOption}
					/>
				))
			}
		</div>
	);
};



// class Options extends React.Component { // state component
// 	render() {
// 		return (
// 			<div>
// 			<button onClick={this.props.handleDeleteOptions}>Remove All</button> {/* handleRemoveAll has the exact same this binding as render */}
// 				{
// 					this.props.options.map((option) => <Option key={option} optionText={option}/>) // key is a reserved word that can't be use as an expression later. That's why we use optionText
// 				}
// 				<Option />
// 			</div>
// 		);
// 	}
// }


const Option = (props) => { // stateless component // faster because it doesn't have the baggage of extends React.Component
	return (
		<div>
			{props.optionText}
			<button
			onClick={(e) => {			{/*define inline arrow function -- called with (e) arg when button is clicked*/}
			props.handleDeleteOption(props.optionText);
			}}
			>
			remove
			</button>
		</div>
	);
};


// class Option extends React.Component { // state component
// 	render() {
// 		return (
// 			<div>
// 				<p>{this.props.optionText}</p>
// 			</div>
// 		);
// 	}
// }

class AddOption extends React.Component {
	constructor(props) {
		super(props);
		this.handleAddOption = this.handleAddOption.bind(this);
		this.state = {
			error: undefined
		};
	}
	handleAddOption(e) { // e is event object
			e.preventDefault();

			const option = e.target.elements.option.value.trim(); // trim() removes all leading and trailing spaces
			const error = this.props.handleAddOption(option);

			this.setState(() => ({ error })); // shorthand for error: error

			if (!error) { // clear input if there wasn't an error
				e.target.elements.option.value = '';
			}
		}
		render() {
		return (
			<div>
				{this.state.error && <p>{this.state.error}</p>}
				<form onSubmit={this.handleAddOption}>
					<input type="text" name="option" />
					<button>Add option</button>
				</form>
				</div>
		);
	}
}

// const User = (props) => { //stateless - functional - component (presentation al  components) // props get passed as this.props as first arg
// 	return (
// 		<div>
// 			<p>Name: {props.name} </p>
// 			<p>Age: {props.age} </p>
// 		</div>
// 	);
// };

// ReactDOM.render(<IndecisionApp options={['Option1', 'Option2']}/>, document.getElementById('app')); // using default props

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));