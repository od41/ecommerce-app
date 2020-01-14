import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router } from 'react-router-dom';


import {Provider} from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import {createLogger} from 'redux-logger';
import thunkMiddleware from 'redux-thunk'

import {rootReducer} from './reducers';

// import provider from react-redux
// import applymiddleware and createstore from redux
// import createlogger from redux-logger
// import thunkMiddleware from redux-thunk

// create logger
// create store
// wrap App in a provider component and pass store to it

const logger = createLogger();

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware, logger));


ReactDOM.render(<Provider store={store}>
                    
                    <Router>
                        <App />
                    </Router>
                    
                </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

