import { useEffect } from 'react';

import trainingServices from '../../../services/training';
import './timedisplay.scss';

const CountDown = ({text, time, isCounting, setCountdownTime, timelineIndex, setExo}) => {
  
  useEffect(() => {
    
    if (isCounting ){
      if (time > 0.1) {
        setTimeout(() => {setCountdownTime(time - .1)}, 100 )
      } else {
        setTimeout(() =>{setExo(timelineIndex + 1)}, 100 ); 
      }
    } 
    
  }, [time, isCounting, setCountdownTime, timelineIndex, setExo])
  
  return(
  <div className="readtraining__timedisplay">
    {
      text !== "" && <div className="readtraining__timedisplay__text">
      {text}
    </div>
    }
    
    <div className="readtraining__timedisplay__time">
      {trainingServices.formatChrono(time)}
    </div>
    
  </div>
)}

export default CountDown;