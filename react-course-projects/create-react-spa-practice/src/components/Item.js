import React from 'react';
import '../styles/index.scss';

const Item = (props) => {
	console.log(props);
	return (
		<div className="content-container">
			<h1>A project I've created</h1>
				<p>This page is for item with id of {props.match.params.id}</p>
		</div>
	);
};

export default Item;
