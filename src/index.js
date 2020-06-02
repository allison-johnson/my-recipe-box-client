//This is where the action starts!

import React from 'react';  //A library for putting components together
import ReactDOM from 'react-dom'; //A library for communicating with the DOM
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import reducer from './reducers/index'
import { BrowserRouter as Router } from 'react-router-dom'


// Importing the Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css'

// Configure Redux with Thunk, as well as Chrome dev tools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)))

// Happens once, renders the ENTIRE React app into the div with the id of 'root'
// We pass the store into the provider, which will allow us access to the store when
// we connect our components
ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
