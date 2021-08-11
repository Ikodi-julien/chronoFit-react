import { useEffect } from 'react';

import trainingServices from '../../../services/training';
import { asyncTime } from '../../../services/asyncTime';
import './timedisplay.scss';

const GlobalChrono = ({time, text, isCounting, setTime, resetTraining}) => {
  
  useEffect(() => {
    
    (async() => {
    
      await asyncTime.wait100ms();
      
      if (isCounting ){
        setTime(time + .1)
      }
    })()
  }, [time, isCounting, setTime])
  
  return(
  <div className="readtraining__timedisplay">
    {text !== "" && <div className="readtraining__timedisplay__text">
      {text}
    </div>}
    
    <div className="readtraining__timedisplay__time">
      {trainingServices.formatChrono(time)}
    </div>
    
    <button 
      className="training_button"
      onClick={() => resetTraining()}
    >
      Reïnitialiser
    </button>
  </div>
)}

export default GlobalChrono;