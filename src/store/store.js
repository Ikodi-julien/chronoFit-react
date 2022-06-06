import { createStore, compose, applyMiddleware } from "redux";
import rootReducer from "../reducers/rootReducer";
import ajaxMW from "../MW/ajaxMW";
import localMW from "../MW/localMW";
import readTrainingMW from "../MW/readTrainingMW";
import authMW from "../MW/authMW";
import exoFormMW from "../MW/exoFormMW";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(
  applyMiddleware(ajaxMW, authMW, exoFormMW, localMW, readTrainingMW)
);

const store = createStore(rootReducer, enhancers);

export default store;
