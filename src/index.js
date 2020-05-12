import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import RecipesList from './components/recipesList.js'
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import reducer from './reducers/index'
import { BrowserRouter as Router, Route } from 'react-router-dom'

// Importing the Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)))

console.log("store: ", store.getState())

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Route exact path="/" component={App} />
      <Route exact path="/manage-recipes" component={RecipesList} />
    </Router>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
