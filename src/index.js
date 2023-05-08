// index.js is the entry point
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

// Represents our web page. Uses the getElementById() method of 'document' to get the Element object 
// representing the HTML element with the passed in id (root). 
const root = ReactDOM.createRoot(document.getElementById('root')); // createRoot() from the react-dom/client library. 
root.render(
  <App />
);

