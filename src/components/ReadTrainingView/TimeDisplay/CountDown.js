import { useEffect } from 'react';

import trainingServices from '../../../services/training';
import { asyncTime } from '../../../services/asyncTime';
import './timedisplay.scss';

const CountDown = ({text, time, isCounting, setCountdownTime, timelineIndex, setExo}) => {
  
  useEffect(() => {
    
    if (isCounting ){
      if (time > 0.1) {
    
        (async() => {
        
          await asyncTime.wait100ms();
          
          if (isCounting ){
            setCountdownTime(time - .1)
          }
        })()
        return
      } 
              
      (async() => {
      
        await asyncTime.wait100ms();
        setExo(timelineIndex + 1)
        
      })()
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