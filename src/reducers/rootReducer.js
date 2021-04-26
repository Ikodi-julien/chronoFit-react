import {combineReducers} from 'redux';

import timelineReducer from './trainingReducer';

const rootReducer = combineReducers({
  timeline: timelineReducer
})

export default rootReducer;