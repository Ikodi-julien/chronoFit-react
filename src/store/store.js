import {
  createStore, 
  compose, 
  // applyMiddleware
} from 'redux';
import rootReducer from '../reducers/rootReducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// A prévoir avec la création de mon premier middleware
// const enhancers = composeEnhancers(
//   applyMiddleware(authMW, ajaxMiddleware),
// );

const store = createStore(rootReducer, composeEnhancers());

export default store;