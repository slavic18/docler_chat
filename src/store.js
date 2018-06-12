import React from 'react';
import {createStore, applyMiddleware, compose} from 'redux';

// import combined reducers object
import {reducers} from './reducers/index';

const middlewares = [];

let middleware = applyMiddleware(...middlewares);

// add the redux dev tools
if (process.env.NODE_ENV !== 'production' && window.devToolsExtension) {
  middleware = compose(window.devToolsExtension());
}

const reduxStore = createStore(reducers, middleware);

export default reduxStore;

