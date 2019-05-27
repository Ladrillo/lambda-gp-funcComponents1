import React from 'react';
import ReactDOM from 'react-dom';
import Car from './Car';
import './App.less';

const someElement = (
  <span
    // className="large {Car}" NOOOOO
    className={`large ${Car}`}
    id="mainHello"
  >
    Hello World! {Car}
  </span>
);

ReactDOM.render(
  someElement, // react element would go here
  document.querySelector('#target'),
);
