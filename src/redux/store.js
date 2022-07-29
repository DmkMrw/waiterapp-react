import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import initialState from './initialState';
import tablesReducer from './tablesReducer';
import statusesReducer from './statusesReducer';

const subreducers = {
     tables: tablesReducer,
     statuses: statusesReducer
}

const reducer = combineReducers(subreducers);

fetch(`http://localhost:3131/tables`)
          .then(res => res.json())
          .then(data => {
          console.log(data);
          });

const store = createStore(
     reducer,
     initialState,

     compose(
     applyMiddleware(thunk),
          window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
     )
);

export default store;