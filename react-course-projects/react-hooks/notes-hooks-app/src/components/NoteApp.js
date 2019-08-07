import React, { useState, useEffect } from 'react';
import Notes from './Notes';

const NoteApp = () => {

  const notesData = JSON.parse(localStorage.getItem('notes')); // using localStorage to save data

  const [notes, setNotes] = useState( notesData || []);
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

    useEffect(() => { // used in place of lifecycle methods
      localStorage.setItem('notes', JSON.stringify(notes))
  })

  const addNote = (e) => {
    e.preventDefault()
    setNotes([
      ...notes,
      { title, body }
    ])
    setTitle('')
    setBody('')
  };

    const removeNote = (title) => {
    setNotes(notes.filter((note) => note.title !== title))
  };

  return (
    <div className="ui raised very padded text container segment">
      <span className="ui center aligned icon header">
				<i className="pencil alternate icon"></i>
				<p>React Note App</p>
			</span>
			<h1 className="ui center aligned header">
				Notes
			</h1>
			<div className="ui segment">
			<strong>Add some notes!</strong>
      {notes.map((note) =>(
				<Notes key={note.title} note={note} removeNote={removeNote}/>
      ))}
			</div>
			<div className="ui segment">
      <h2 className="ui center aligned header">Add note</h2>
      <form className="ui form" onSubmit={addNote}>
				<label>
					Title
						<input className="ui input focus" value={title} placeholder="enter title of note" onChange={(e) => setTitle(e.target.value)} />
				</label>
				<label>
					Body
					<textarea className="ui fluid action input" value={body} placeholder="enter contents of note" onChange={(e) => setBody(e.target.value)} />
				</label>
        <button className="ui button">add note</button>
      </form>
			</div>
    </div>
  )
}

export default NoteApp;
