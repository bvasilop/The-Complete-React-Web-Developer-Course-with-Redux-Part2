console.log('utils.js is running');


export const square = (x) => x * x; // must export a variable declaration inline

export const add = (a,b) => a + b;

// export{ square, add }; // must individually export variables and functions to avoid polluting the global space // same as above

// exports - default export - named export

// const square = (x) => x * x;
// const add = (a,b) => a + b;
 const subtract = (a, b) => a - b;

// export{ square, add, subtract as default}; // default exports // can only use a single default export
export default subtract;
// export default (a, b) => a - b; //export default subtract: // inline export // default export can use a statement just a single expression
