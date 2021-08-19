/* eslint-disable import/no-anonymous-default-export */
import axios from 'axios';

import { URL } from '../settings';

import { 
  GET_TRAININGS, 
  getTrainingsSuccess,
  GET_CURRENT_TRAINING,
  getCurrentTrainingSuccess,
  GET_GIRLS,
  getGirlsSuccess,
  GET_ONE_GIRL,
} from '../actions/trainingAjaxActions';
import { setReadTraining } from '../actions/readTrainingActions';

export default (store) => (next) => (action) => {
  
  switch (action.type) {
    case GET_TRAININGS:
      next(action);
      axios.get(`${URL}/trainings`)
        .then(res => store.dispatch(getTrainingsSuccess(res.data)))
        .catch(err => console.error(err))
    break
    
    case GET_GIRLS:
      next(action);
      axios.get(`${URL}/girls`)
        .then(res => store.dispatch(getGirlsSuccess(res.data)))
        .catch(err => console.error(err))
    break
    
        
    case GET_ONE_GIRL:
      next(action);
      console.log(action)
      axios.get(`${URL}/girl/${action.value}`)
      .then(res => {
        store.dispatch(getCurrentTrainingSuccess(res.data));
        store.dispatch(setReadTraining("girl"));
      })
      .catch(err => console.error(err))
    break
    
    case GET_CURRENT_TRAINING:
      next(action);
      if (action.value === '') return store.dispatch(getCurrentTrainingSuccess({}))
      
      axios.get(`${URL}/training/${action.value}`)
        .then(res => store.dispatch(getCurrentTrainingSuccess(res.data)))
        .catch(err => console.error(err))
    break

    default :
      next(action)
  }
}