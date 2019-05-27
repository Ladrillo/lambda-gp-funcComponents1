import React from 'react';
import ReactDOM from 'react-dom';
import Car from './Car'; // not being used anymore
import './App.less';

// INVOCATION the funky invokation allows to nest components comfortably
const someElement = <SomeElement id='main' className='nice' text='whatever' />;

// DECLARATION (what's usually called a "component")
function SomeElement({ className, id, text }) {
  return (
    <span id={id} className={className}>
      {text}
    </span>
  );
}

ReactDOM.render(
  someElement, // react element would go here
  document.querySelector('#target'),
);
