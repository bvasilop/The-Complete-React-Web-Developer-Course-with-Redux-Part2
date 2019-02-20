const obj = {
	name: 'Vikram',
	getName() {
		return this.name;
	}
};
/*const func = function () {
	console.log(this);
}
func(); // Regular functions have undefined for this by default
*/
const getName = obj.getName.bind(obj); // when we call using bind we get our function and this context back
console.log(getName());									// use first argument in bind() to set the this context. Can set it to anything you want
/**************
 *
 */
	handleRemoveAll() {
		console.log(this.props.options);
		// alert('handleRemoveAll');
	}
	render() {
		return (
			<div>
			<button onClick={this.handleRemoveAll.bind(this)}>Remove All</button> {/* handleRemoveAll has the exact same this binding as render */}
				{
					// this.props.options.map((option) => <p key={option}>{option}</p>) // iterate through and create p for each option
					this.props.options.map((option) => <Option key={option} optionText={option}/>) // key is a reserved word that can't be use as an expression later. That's why we use optionText
				}
				<Option />
			</div>
		);