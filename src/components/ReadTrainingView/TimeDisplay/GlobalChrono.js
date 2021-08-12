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
  }, [time, isCounting, setTime, resetTraining])
  
  return(
  <div className="readtraining__timedisplay__small">
    <div class="readtraining__timedisplay__halfzone">
      {text !== "" && <div className="readtraining__timedisplay__text">
        {text}
      </div>}
      
      <div className="readtraining__timedisplay__time">
        {trainingServices.formatChrono(time)}
      </div>
    </div>
    
    <div class="readtraining__timedisplay__halfzone">
      <button 
        className="training_button"
        onClick={() => resetTraining()}
      >
        Reïnitialiser
      </button>
    </div>
  </div>
)}

export default GlobalChrono;