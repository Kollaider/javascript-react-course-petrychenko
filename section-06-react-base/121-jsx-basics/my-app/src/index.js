import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

// const elem = <h2>Hello world!</h2> // через jsx создаем React element

// const elem = React.createElement('h2', {className: 'greetings'}, 'Hello world'); // через js 

const text = 'Hello world'

const elem = (

  // атрибуты всегдв в camelCase
  // className и htmlFor зарезирвированы, вместо class и for
  <div>
    <h2 className='text'>Текст: {text} {2 + 2}</h2>
    {/* <h3>{new Date()}</h3> // Objects are not valid as a React child  объекты не допускаются */}
    {/* <h3>{['a','b','c']}</h3> // массивы конкатенируются */}
    <input type="text" />
    <label htmlFor=""></label>
    <button tabIndex={"0"}>click</button>
  </div>
)

root.render(
  elem,
);
