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

## React Hooks Counter Example using `useState`

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

## Using Complex State with useState using array data

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

## `useEffect` Hooks

- This function is similar to a combination of `componentDidMount` and `componentDidUpdate` lifecycle methods.
- `useState` allows us to do something inside of functional components that we were not able to do before.
- Managing component's state `useEffect` is similar because it allows us to do something in functional components that we previously were not able to do.
- This is kind of like a replacement for lifecycle methods in our class based components.
- So think about methods like `componentDidMount` `componentDidUpdate` or `componentDidUnbound`.

### Using `useEffect` with `localStorage`

```jsx
import React, { useState, useEffect } from 'react';
import './App.css';

const NoteApp = () => {
  const notesData = JSON.parse(localStorage.getItem('notes')); // using localStorage to save data

  const [notes, setNotes] = useState(notesData || []);
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  });

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

### Using `useEffect` to conditionally fire an effect

```jsx
useEffect(() => {
  // this is similar to component did mount and component did update it's going to run once right away
  console.log('useEffect ran');
  document.title = count;
}, [count]); // will run as many times as the count is updated

useEffect(() => {
  console.log('this should only run once!');
}, []); // will only run once because the second arg is an empty array
```

- Using `useEffect` in this way is an exact mirror of `componentDidMount`
- By specifying that array as the second argument we can create effects that only run when they need to
- We can use the use effect hook as many times as we'd like to in a functional component.
- In traditional class based components, we had a single place to setup `componentDidMount`. We defined that method and everything that needed to happen when your component mounted needed to go
  inside of there.
- We can call `useEffect` multiple times for each specific feature. Each can have their own set of dependencies keeping your app easy to maintain and really quick.
- Working with `useEffect` allows us to run some code and now we know how to use its dependencies argument to conditionally run an effect.

```jsx
import React, { useState, useEffect } from 'react';
import './App.css';

const NoteApp = () => {
  const [notes, setNotes] = useState([]);
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  useEffect(() => {
    const notesData = JSON.parse(localStorage.getItem('notes'));

    if (notesData) {
      setNotes(notesData);
    }
  }, []);

  useEffect(() => {
    // used in place of lifecycle methods
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

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

### Using `useEffect` in place of `componentDidUnmount`

```jsx
import React, { useState, useEffect } from 'react';
import './App.css';

const NoteApp = () => {
  const notesData = JSON.parse(localStorage.getItem('notes')); // using localStorage to save data

  const [notes, setNotes] = useState(notesData || []);
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  useEffect(() => {
    // used in place of lifecycle methods
    localStorage.setItem('notes', JSON.stringify(notes));
  });

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
