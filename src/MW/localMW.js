/* eslint-disable import/no-anonymous-default-export */
import {
  GET_LOCAL_TRAININGS,
  getLocalTrainings,
  getLocalTrainingsSuccess,
  setLocalTraining,
  setLocalTrainingName,

  CREATE_LOCAL_TRAINING,
  DELETE_LOCAL_TRAINING,
} from '../actions/trainingLocalActions';
/*---------------------------------------*/
import localstorage from '../services/localstorage';
/*---------------------------------------*/

export default (store) => (next) => (action) => {
  
  const {
    localTraining,
    localTrainingName,
  } = store.getState().training;
  
  switch (action.type) {
    case CREATE_LOCAL_TRAINING:
      next(action);
      // console.log(currentTraining);
      const newTraining = {...localTraining};
      newTraining.name = localTrainingName;
      localstorage.createTraining(newTraining);
      
      store.dispatch(getLocalTrainings());
      store.dispatch(setLocalTraining(newTraining.name));
      store.dispatch(setLocalTrainingName(''));
    break;
    
    case GET_LOCAL_TRAININGS:
      next(action);
      const localTrainings = localstorage.getTrainings();
      // console.log(localTrainings);
      store.dispatch(getLocalTrainingsSuccess(localTrainings))
      store.dispatch(setLocalTrainingName(''));
      
    break;
    
    case DELETE_LOCAL_TRAINING:
      next(action);
      console.log(localTraining.name)
      localstorage.deleteTraining(localTraining.name);
      store.dispatch(getLocalTrainings());
      store.dispatch(setLocalTraining('default'));
      store.dispatch(setLocalTrainingName(''));
      
    break
    default:
      next(action);
  }
}