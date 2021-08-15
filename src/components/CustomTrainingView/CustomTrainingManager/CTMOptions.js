/* eslint-disable import/no-anonymous-default-export */
import Field from '../../Field/Field';
import trainingServices from '../../../services/training';
import { NavLink } from 'react-router-dom';

export default ({training, setTimecap, timecapValue, setReadTraining}) => {
  
  const timeInSec = trainingServices.getTrainingDuration(training);
  const formatedTrainingTime = trainingServices.formatSeconds(timeInSec);
  
  return (
    <div className="trainingmanager__options">
    
      <div className="trainingmanager__options__row --right">
      <label>Time cap en minutes (optionnel) :</label> 
        <Field
          name="timecap"
          type="number"
          className="trainingmanager__options__input"
          placeholder="Durée maxi"
          value={timecapValue}
          onChange={(evt) => setTimecap(evt.value) }
          />
      </div>
      
      <div className="trainingmanager__options__row">
      
        <div className="trainingmanager__options__duration">
          {
            timeInSec > 0 ?
              `Durée planifiée: ${isNaN(timeInSec)  ? 
                "il manque une valeur"
                :
                formatedTrainingTime}`
            : null
          }
        </div>
      
        <NavLink to="read_training">
          <button
            className="training__button"
            onClick={() => setReadTraining()}>
            <i className="fas fa-stopwatch --padded --xl"></i>
          </button>
        </NavLink>

      </div>

    </div>
  )
}