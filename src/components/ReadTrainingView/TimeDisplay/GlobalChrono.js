import { useEffect, useRef } from 'react';

import trainingServices from '../../../services/training';
import { asyncTime } from '../../../services/asyncTime';
import './timedisplay.scss';

const GlobalChrono = ({time, text, isCounting, setTime, resetTraining, timelineIndex}) => {
  let spinnerAngle = useRef(time);
  
  useEffect(() => {
    
    if (timelineIndex > 1) {
      (async() => {
    
        await asyncTime.wait100ms();
        
        if (isCounting ){
          setTime(time + .1)
          spinnerAngle.current = time * 72;
          
        }
      })()
    }
  }, [time, isCounting, setTime, resetTraining, timelineIndex])
  
  return(
  <div className="readtraining__timedisplay --small">
  
    <div className="readtraining__timedisplay__spiner"
        style={
        {
          transform: `rotate(${spinnerAngle.current}deg`,
          transition: `transform 100ms linear`
        }
        }
      />
  
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