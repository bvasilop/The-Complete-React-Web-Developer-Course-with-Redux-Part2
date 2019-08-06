# React Hooks

- A hook is nothing more than a function.
- A react hook is a function that lets you tap into a react feature like state or life cycle methods.
- React ships with its own set of hooks we can use as building blocks and we can also create our own hooks i.e. our own functions.
- Must add named `useState` from `React`
  - `import React, { useState } from 'react';`
  - It is nothing more than a function that we can choose to call to allow us to use `state` inside of a component.
- When tracking what comes back from `useState` what comes back is an array
  of two items.
  - The first is the current state value that's going to change over time.
  - The second is a function we can call in order to update the state.
  - `const array = useState(props.count)` destructured is `const [count, setCount] = useState(props.count)` which is the preferred method.
- One big difference between `state` and our class based components and `state` in our functional components is in our functional components `state` does not need to be an object.
- What if I want to track more than one thing. Do I need to convert this into an object? The answer is No.
  - `React` wants you to call your `state` multiple times for the multiple things you are tracking.
  - State doesn't need to be an object with `useState`.
  - When you are using `useState` and you update the `state`, it completely replaces what was there before as opposed to how state worked in the past with objects where the data was merged.

## React Hooks Counter Example

```jsx
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './App.css';

const App = props => {
  const [count, setCount] = useState(props.count);

  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };
  const reset = () => {
    setCount(props.count);
  };

  return (
    <div>
      <p>The current count is {count}</p>
      <button onClick={increment}>+1</button>
      <button onClick={decrement}>-1</button>
      <button onClick={reset}>reset</button>
    </div>
  );
};

App.defaultProps = {
  count: 0,
};

export default App;
```

## React Hooks Counter Shorthand Syntax

```jsx
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './App.css';

const App = props => {
  const [count, setCount] = useState(props.count);
  const [text, setText] = useState('');

  return (
    <div>
      <p>
        The current {text || 'count'} is {count}
      </p>
      <button onClick={() => setCount(count + 1)}>+1</button>
      <button onClick={() => setCount(count - 1)}>-1</button>
      <button onClick={() => setCount(props.count)}>reset</button>
      <input value={text} onChange={e => setText(e.target.value)} />
    </div>
  );
};

App.defaultProps = {
  count: 0,
};

export default App;
```

## React Hooks Counter Class Based State Example (old way)

```jsx
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './App.css';

const App = props => {
  const [state, setState] = useState({
    count: props.count,
    text: '',
  });

  return (
    <div>
      <p>
        The current {state.text || 'count'} is {state.count}
      </p>
      <button onClick={() => setState({ ...state, count: state.count + 1 })}>
        +1
      </button> // ...state will work but is not recommended. Separate state calls
      for each instance is recommended.
      <button onClick={() => setState({ count: state.count - 1 })}>-1</button>
      <button onClick={() => setState({ count: props.count })}>reset</button>
      <input
        value={state.text}
        onChange={e => setState({ text: e.target.value })}
      />
    </div>
  );
};

App.defaultProps = {
  count: 0,
};

export default App;
```

## Using Complex State with useState for forms

```jsx
import React, { useState } from 'react';
import './App.css';

const NoteApp = () => {
  const [notes, setNotes] = useState([]);
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const addNote = e => {
    e.preventDefault();
    setNotes([...notes, { title, body }]);
    setTitle('');
    setBody('');
  };

  const removeNote = title => {
    setNotes(notes.filter(note => note.title !== title));
  };

  return (
    <div>
      <h1>Notes</h1>
      {notes.map(note => (
        <div key={note.title}>
          <h3>{note.title}</h3>
          <p>{note.body}</p>
          <button onClick={() => removeNote(note.title)}>remove</button>
        </div>
      ))}
      <p>Add note</p>
      <form onSubmit={addNote}>
        <input
          value={title}
          placeholder="title"
          onChange={e => setTitle(e.target.value)}
        />
        <br />
        <br />
        <textarea
          value={body}
          placeholder="body"
          onChange={e => setBody(e.target.value)}
        />
        <button>add note</button>
      </form>
    </div>
  );
};

export default NoteApp;
```
