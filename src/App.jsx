import React from 'react';
import ReactDOM from 'react-dom';
import './App.less';


// create a component that returnds a div
// containing an h1 and a paragraph.
// this component takes two args: heading, and text.
// invoke it the funny way to get an element
// and attach said element to the DOM

ReactDOM.render(
  someElement, // react element would go here
  document.querySelector('#target'),
);
