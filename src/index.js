import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const [mostImportantItem] = ["boots", "tent", "headlamp"];
console.log(mostImportantItem);

ReactDOM.render(
    <App authorized={false}/>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
