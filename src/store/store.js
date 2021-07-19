import {
  createStore, 
  compose, 
  applyMiddleware
} from 'redux';
import rootReducer from '../reducers/rootReducer';
import ajaxMW from '../MW/ajaxMW';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(
  applyMiddleware(ajaxMW),
);

const store = createStore(rootReducer, enhancers);

export default store;