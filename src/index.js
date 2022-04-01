import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

var localFile = []
var localFileEdge = ["start"]

window.localStorage.setItem("optionFeedback", JSON.stringify(localFile))
window.localStorage.setItem("optionSelected", JSON.stringify(localFileEdge))

console.log("reached index")

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

