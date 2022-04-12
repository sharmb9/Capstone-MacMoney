import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

//created empty localstorage for graph
var localFile = []
var localFileEdge = ["start"]

window.localStorage.setItem("optionFeedback", JSON.stringify(localFile))
window.localStorage.setItem("optionSelected", JSON.stringify(localFileEdge))

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

