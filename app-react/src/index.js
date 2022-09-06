import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Hello from './Hello';
import Clock from './Clock';
import Clock2 from './Clock2';
import Props from './Props';
import State from './State';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Props attr="p"  attr2="VALUE2" attr3="VALUE3"/> */}
    <Clock2/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
