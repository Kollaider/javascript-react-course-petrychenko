import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Header } from './App';
const root = ReactDOM.createRoot(document.getElementById('root'));


const elem = (

  <div>
    <App/>
  </div>
)

root.render(
  elem,
);

// компоненты всегда с большой буквы