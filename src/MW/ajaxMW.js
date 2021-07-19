/* eslint-disable import/no-anonymous-default-export */
import axios from 'axios';
import { URL } from '../settings';

import { 
  GET_TRAININGS, 
  getTrainingsSuccess,
  GET_CURRENT_TRAINING,
  getCurrentTrainingSuccess,
} from '../actions/trainingAjaxActions';

export default (store) => (next) => (action) => {
  switch (action.type) {
    case GET_TRAININGS:
      next(action);
      axios.get(`${URL}/trainings`)
        .then(res => store.dispatch(getTrainingsSuccess(res.data)))
        .catch(err => console.error(err))
    break
    
    case GET_CURRENT_TRAINING:
      next(action);
      axios.get(`${URL}/training/${action.value}`)
        .then(res => store.dispatch(getCurrentTrainingSuccess(res.data)))
        .catch(err => console.error(err))
    break

    default :
      next(action)
  }
}