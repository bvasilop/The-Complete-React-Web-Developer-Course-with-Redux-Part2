import React from 'react';

const Notes = ({ note, removeNote }) => {
	return (
		<div>
				<h2 className="item">{note.title}</h2>
		<ul>
			<li>
				<p>{note.body}</p>
			</li>
		</ul>
		<button className="ui button" onClick={() => removeNote(note.title)}>remove</button>
	</div>
	)
}
export default Notes;
