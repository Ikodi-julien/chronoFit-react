/* eslint-disable import/no-anonymous-default-export */
import trainingServices from '../../../services/training';
import { NavLink } from 'react-router-dom';

export default ({training, setTrainingType, setReadTraining}) => {
  
  const timeInSec = trainingServices.getTrainingDuration(training);
  const formatedTrainingTime = trainingServices.formatSeconds(timeInSec);
  
  return (
    <div className="trainingmanager__options">
    
      <NavLink to="read_training">
        <button 
          className="training__button"
          onClick={() => setReadTraining()}>
          GO
        </button>
      </NavLink>
      
      <span className="trainingmanager__options__duration">
        Durée planifiée: {
          isNaN(timeInSec)  ? "il manque une valeur" : formatedTrainingTime
          }
      </span>

    </div>
  )
}