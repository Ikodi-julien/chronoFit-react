/* eslint-disable import/no-anonymous-default-export */
import trainingServices from '../../../services/training';
import { NavLink } from 'react-router-dom';

export default ({training, setTrainingType}) => {
  
  const totalTime = trainingServices.getTotalTime(training);
  
  return (
    <div className="trainingmanager__options">
    
      <NavLink to="read_training">
        <button className="training__button">
          GO
        </button>
      </NavLink>
      
      <span className="trainingmanager__options__duration">
        Durée totale: {totalTime}
      </span>
      
      <select
        name="trainingtype"
        className="trainingmanager__options__type"
        value={training.type}
        onChange={(evt) => setTrainingType(evt.target.value)}
      >
        <option value="emom">EMOM</option>
        <option value="fortime">RFT</option>
        <option value="amrap">AMRAP</option>
        <option value="chipper">CHIPPER</option>
        <option value="chipper">LADDER</option>
        <option value="tabata">TABATA</option>
      </select>
    </div>
  )
}