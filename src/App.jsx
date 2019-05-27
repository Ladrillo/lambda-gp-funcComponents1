import React from 'react';
import ReactDOM from 'react-dom';
import './App.less';


// create a component that returns a div
// containing an h1 and a paragraph.
// this component takes two args: heading, and text.
// invoke it the funny way to get an element
// and attach said element to the DOM
function MySection({ heading, text }) {
  return (
    <div>
      <h3>{heading}</h3>
      <p>{text}</p>
    </div>
  );
}

// a Container component that renders a couple of sections,
// use it to create a container element and attach it to the DOM
// Can you build me that???
function Container({ }) {
  return (
    <div>
      <MySection heading="cats" text="miau" />
      <MySection heading="dogs" text="bark" />
    </div>
  );
}

const myContainerNotCapitalized = <Container heading="cats" text="foo" />;

ReactDOM.render(
  myContainerNotCapitalized, // react element would go here
  document.querySelector('#target'),
);
