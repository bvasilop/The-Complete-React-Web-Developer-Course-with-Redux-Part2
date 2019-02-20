// count - setup prop value to 0
	//const num = '12';
		// parseInt(num, 10) + 1 takes a string of numbers and converts to numbers -- base 10 // 13
		// parseInt('abc', 10) // NAN for alpha numeric chars
			// isNAN("a" * 33) // true
			// isNAN(2 * 33) // false
class Counter extends React.Component {
	constructor(props) {
		super(props);
		this.handleAddOne = this.handleAddOne.bind(this);
		this.handleMinusOne = this.handleMinusOne.bind(this);
		this.handleReset = this.handleReset.bind(this);
		this.state = {
			count: 0
			// count: props.count // set props // don't need anymore because of local storage
		};
	}

	componentDidMount() { // only accessed through class based components
		const stringCount = localStorage.getItem('count');
		const count = parseInt(stringCount, 10);

		if (!isNaN(count)) { // will only return true if it is a number
			this.setState(() => ({ count }));
		}
	}



	componentDidUpdate(prevProps, prevState) {
		if (prevState.count !== this.state.count) { // !== has a different length than the current one .// to check if options array length has changed

			localStorage.setItem('count', this.state.count);
			console.log('saving data');
		}

	}

	// componentWillUnmount () {
	// 	console.log('component will unmount');
	// }



	handleAddOne() {
		this.setState((prevState) => { // access previous state as arg
			return {
				count: prevState.count + 1 // access prev state count
			};
		});
	}
	handleMinusOne() {
		this.setState((prevState) => {
			return {
				count: prevState.count - 1
			};
		});
	}
	handleReset() {
		this.setState(() => {
			return {
				count: 0
			};
		});
	}
	render() {
		return (
			<div>
				<h1>Count: {this.state.count}</h1>
				<button onClick={this.handleAddOne}>+1</button>
				<button onClick={this.handleMinusOne}>-1</button>
				<button onClick={this.handleReset}>reset</button>
			</div>
		);
	}
}



// Counter.defaultProps = { // set default props // Don't need anymore because we're reading from local storage
// 	count: 0 // can setup default here as well
// };

// create three methods: handleAddOne, handleMinusOne, handleReset
// Use console.log to print method name
// wire up onClick & bind in the constructor

ReactDOM.render(<Counter count={0}/>, document.getElementById('app')); // has default setup







/*
let count = 0;

const addOne = () => {
	count++;
renderCounterApp();
};

const minusOne = () => {
	count--;
	renderCounterApp();
};

const reset = () => {
	count = 0;
	renderCounterApp();
};



const renderCounterApp = () => {
	const templateTwo = (
		<div>
			<h1>Count: {count}</h1>
			<button onClick={addOne}>+1</button>
			<button onClick={minusOne}>-1</button>
			<button onClick={reset}>reset</button>
		</div>
	);
	ReactDOM.render(templateTwo, appRoot);
};

renderCounterApp();
*/


