import React from 'react';
import ReactDom from 'react-dom';
// Initialize redux
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';

import App from './App.js';

// Setting up redux
const store = createStore(reducers, compose(applyMiddleware(thunk)))

ReactDom.render(
    <Provider store={ store }>
        <App />
    </Provider>, 
    document.getElementById('root')
);


