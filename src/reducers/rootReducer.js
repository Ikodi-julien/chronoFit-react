import {combineReducers} from 'redux';

import trainingReducer from './trainingReducer';
import appReducer from './appReducer';

const rootReducer = combineReducers({
  app: appReducer,
  training: trainingReducer
})

export default rootReducer;