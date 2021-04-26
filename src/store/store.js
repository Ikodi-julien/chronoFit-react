import {
  createStore, 
  // compose, 
  // applyMiddleware
} from 'redux';
import rootReducer from '../reducers/rootReducer';

// A prévoir avec la création de mon premier middleware
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer);

export default store;