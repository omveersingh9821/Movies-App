import React from 'react';
import ReactDOM from 'react-dom/client';
import { createStore, applyMiddleware } from 'redux';
import  thunk  from 'redux-thunk';

import './index.css';
import App from './components/App';
// import movies from './reducers';

import rootReducer from './reducers';

//curried form of a function
//
// const logger = function ({dispatch,getState}) {
//   return function (next) {
//     return function (action) {
//       // middleware code
//       console.log('ACTION_TYPE = ', action.type);
//       next(action);
//     }
//   }
// }

// different form to write above function

const logger = ({ dispatch, getState }) => (next) => (action) => {
  if (typeof action !== 'function') {
    console.log('ACTION_TYPE = ', action.type);
  }
  next(action);
}

// const thunk = ({ dispatch, getState }) => (next) => (action) => {
//   if (typeof action === 'function') { 
//     action(dispatch);
//     return;
//   }
  
//   next(action);
// }


const store = createStore(rootReducer,applyMiddleware(logger,thunk));
console.log('store', store);
console.log('before state', store.getState());

// store.dispatch({
//   type: 'ADD_MOVIES',
//   movies: [{ name: 'Superman' }]
// });

// console.log('after state', store.getState());


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App store={store} />
  </React.StrictMode>
);

