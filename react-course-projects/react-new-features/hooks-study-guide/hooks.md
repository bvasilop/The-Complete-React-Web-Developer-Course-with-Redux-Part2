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
