import { useEffect } from 'react';

import trainingServices from '../../../services/training';
import asyncTime from '../../../services/asyncTime';
import './timedisplay.scss';

const GlobalChrono = ({time, text, isCounting, setTime, resetTraining, timelineIndex}) => {

  useEffect(() => {
    
    if (timelineIndex > 1) {
      (async() => {
    
        await asyncTime.wait(100);
        if (isCounting ) setTime(time + .1)
      })()
    }    
  }, [time, isCounting, setTime, resetTraining, timelineIndex])
  
  return(
  <div className="readtraining__timedisplay --small">
    <div className={`readtraining__timedisplay__spiner ${isCounting && timelineIndex > 1 && "--spin"}`}/>
  
    <div className="readtraining__timedisplay__container">
      {text !== "" && <div className="readtraining__timedisplay__text --small">
        {text}
      </div>}
      
      <div className="readtraining__timedisplay__time --small">
        {trainingServices.formatChrono(time)}
      </div>
    
      <button 
        className="readtraining__timedisplay__button --small"
        onClick={() => resetTraining()}
      >
        Reïnitialiser
      </button>
    </div>
  </div>
)}

export default GlobalChrono;