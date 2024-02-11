import React from 'react';
import ReactDOM from 'react-dom/client';
const heading = React.createElement(
  'h1',
  { id: 'hello', style: { color: 'red' } }, // now this {} is used to pass attribute to the element.
  'Hello from React'
);

// so what is heading?
// heading is an object of react which is creating element.
// and the hello from react is children part

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(heading);

// so the render is method which basically takes the object convert to html element and put ir on the DOM.
