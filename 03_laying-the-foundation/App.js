import React from 'react';
import ReactDOM from 'react-dom/client';

// Part 3 ep 04

// jsx => React.createElement =>ReactElement -> JS Object => HTMLElement(render)
// class => className
// tab-index => tabIndex

const heading = (
  <h1 className="head" style={{ color: 'white' }}>
    Namaste using jsx
  </h1>
);

// React components
//a. Class Based components - old way
//b. Functional Based components - new way

// Functional Based components
const HeadingComponent = () => {
  return (
    <h1 className="white" style={{ color: 'white' }}>
      {' '}
      Namaste React Functional Component
    </h1>
  );
};
//  OR
const fn = () => {
  return true;
};

// OR
const HeadingCompo = () => (
  <h1 style={{ color: 'white' }}>Namaste from one line</h1>
);

//////////////////////////////////////////////////////////////

const Title = () => {
  <h1 style={{ color: 'white' }}>Namaste using jsx title</h1>;
};

const HeadingTitle = () => {
  <div>
    <Title />
    <h2 style={{ color: 'white' }}>below title text</h2>
  </div>;
};

// This is also known as component compostion/ component inside another component.

//////////////////////////////////////////////////////////////

const jsxHeading = <h1 style={{ color: 'white' }}>Nameste React</h1>;

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<HeadingTitle />);
