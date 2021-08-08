import React from 'react';
import ReactDOM from 'react-dom';
// Initialize redux
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';

import App from './App.js';

// Setting up redux
// Creating our global store
const store = createStore(reducers, compose(applyMiddleware(thunk)))

ReactDOM.render(
    // Provider keeps track of the global store
    // Also enables us to access that store from anywhere in the application
    <Provider store={ store }>
        <App />
    </Provider>, 
    document.getElementById('root')
);


