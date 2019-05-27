import React from 'react';
import ReactDOM from 'react-dom';
import './App.less';


// create a component that returns a div
// containing an h1 and a paragraph.
// this component takes two args: heading, and text.
// invoke it the funny way to get an element
// and attach said element to the DOM
function MySection({ heading, text, color }) {
  return (
    <div style={{ backgroundColor: color }}>
      <h3>{heading}</h3>
      <p>{text}</p>
    </div>
  );
}

// a Container component that renders a couple of sections,
// use it to create a container element and attach it to the DOM
// Can you build me that???
function Container({ color }) {
  return (
    <div>
      <h3 id="containerHeading">This is the Container</h3>
      <MySection heading="cats" text="miau" color={color} />
      <MySection heading="dogs" text="bark" color={color} />
    </div>
  );
}

// build me a ParagraphMaker
// build me a ParagraphsContainer that uses ParagraphMaker internally
// attach the ParagraphsContainer to the DOM

const myContainerNotCapitalized = <Container heading="cats" text="foo" color="grey" />;

ReactDOM.render(
  myContainerNotCapitalized, // react element would go here
  document.querySelector('#target'),
);
